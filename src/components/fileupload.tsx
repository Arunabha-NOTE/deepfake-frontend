import React, { useState, useRef } from "react";
import { Card, CardBody } from "@heroui/card";
import UploadModal from "./../components/uploadmodal.tsx";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [uploadResult, setUploadResult] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Add a ref for the file input

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Check if the file is an MP4
      if (file.type !== "video/mp4") {
        alert("Please upload an MP4 file.");
        return;
      }
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const uploadVideo = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setUploadResult(result.filename); // Save the filename for further use
        setIsModalOpen(true); // Open the modal
      } else {
        alert(`Upload failed: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    } finally {
      setUploading(false);
      setSelectedFile(null); // Clear the selected file
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset the file input value
      }
    }
  };

  return (
    <>
      <Card className="w-72">
        <CardBody>
          <div className="p-4">
            <label className="block text-center cursor-pointer">
              {selectedFile ? (
                <span className="text-gray-700">{selectedFile.name}</span>
              ) : (
                <span className="text-gray-500">Click to upload an MP4 file</span>
              )}
              <input
                type="file"
                accept="video/mp4"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef} // Attach the ref to the input
              />
            </label>
          </div>
        </CardBody>
      </Card>

      <div>
        <button
          onClick={uploadVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition"
          disabled={!selectedFile || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {isModalOpen && (
          <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} result={uploadResult} />
        )}
      </div>
    </>
  );
};

export default FileUpload;
