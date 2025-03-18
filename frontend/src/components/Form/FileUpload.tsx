import React, { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FileUploadProps {
  accept: Accept;
}

const FileUpload: React.FC<FileUploadProps> = ({ accept }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    if (uploadedFile.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(uploadedFile));
    } else {
      setPreview(null);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center gap-3">
      {!file ? (
        <div
          {...getRootProps()}
          className="w-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-primary transition"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500 text-sm">Click to upload or drag & drop</p>
        </div>
      ) : (
        <div className="relative flex flex-col items-center gap-2">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-[100px] h-[100px] object-cover rounded-md border border-gray-300"
            />
          )}
          <p className="text-sm text-gray-600">{file.name}</p>
          <Button variant="destructive" size="sm" onClick={removeFile}>
            <X className="w-4 h-4 mr-1" /> Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
