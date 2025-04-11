import React, { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: number | null;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, result }) => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      // Call the predict function when the modal is opened
      const fetchPrediction = async () => {
        setLoading(true);
        try {
          const response = await fetch("http://localhost:8000/predict");
          const data = await response.json();
          if (response.ok) {
            setPrediction(data.prediction);
            setConfidence(data.confidence);
          } else {
            setPrediction(data.error || "Prediction failed");
          }
        } catch (error) {
          console.error("Error fetching prediction:", error);
          setPrediction("An error occurred while fetching the prediction.");
        } finally {
          setLoading(false);
        }
      };

      fetchPrediction();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-background border-1 p-6 rounded-lg shadow-lg w-80 text-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <Spinner />
            <p className="text-gray-700 mt-2">Fetching prediction...</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Prediction Result</h2>
            {prediction ? (
              <p className="text-gray-700 mt-2">
                Prediction: <span className="font-semibold">{prediction}</span>
              </p>
            ) : null}
            {confidence ? (
              <p className="text-gray-700 mt-2">
                Confidence: <span className="font-semibold">{confidence}</span>
              </p>
            ) : null}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-500 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
