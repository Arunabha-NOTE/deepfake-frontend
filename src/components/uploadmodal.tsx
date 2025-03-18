import React from "react";
import {Spinner} from "@heroui/spinner";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: number | null;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        {result === null ? (
          <div className="flex flex-col items-center">
            <Spinner />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Upload Complete</h2>
            <p className="text-gray-700 mt-2">Result: <span className="font-semibold">{result}</span></p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
