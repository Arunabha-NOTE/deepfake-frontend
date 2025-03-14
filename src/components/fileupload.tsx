import React, { useState } from "react";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  return (
    <div className="p-4 ">
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
        />
      </label>
    </div>
  );
};

export default FileUpload;
