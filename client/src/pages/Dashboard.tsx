import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Upload, File, Trash2, Download, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files, isLoading, refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = (e.target?.result as string).split(',')[1];
        
        await uploadMutation.mutateAsync({
          fileName: file.name,
          fileData: base64Data,
          mimeType: file.type,
          description: `Uploaded on ${new Date().toLocaleDateString()}`,
        });

        toast.success("File uploaded successfully!");
        refetch();
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error("Failed to upload file");
      console.error(error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async (fileId: number) => {
    try {
      await deleteMutation.mutateAsync({ fileId });
      toast.success("File deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to delete file");
      console.error(error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-2">File Manager</h1>
          <p className="text-gray-600">Welcome, {user?.name}! Manage your documents and files securely.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Upload Section */}
          <Card className="md:col-span-1 p-6 bg-white border border-gray-200">
            <h2 className="text-xl font-bold text-[#001F3F] mb-4">Upload File</h2>
            <div
              className="border-2 border-dashed border-[#2ECC71] rounded-lg p-8 text-center cursor-pointer hover:bg-green-50 transition"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto mb-4 text-[#2ECC71]" size={32} />
              <p className="text-gray-700 font-semibold mb-2">Click to upload</p>
              <p className="text-sm text-gray-500">or drag and drop</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              disabled={uploading}
              className="hidden"
            />
            {uploading && (
              <div className="mt-4 flex items-center justify-center gap-2 text-[#2ECC71]">
                <Loader2 className="animate-spin" size={20} />
                <span>Uploading...</span>
              </div>
            )}
          </Card>

          {/* Files List Section */}
          <div className="md:col-span-2">
            <Card className="p-6 bg-white border border-gray-200">
              <h2 className="text-xl font-bold text-[#001F3F] mb-4">Your Files</h2>
              
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="animate-spin text-[#2ECC71]" size={32} />
                </div>
              ) : files && files.length > 0 ? (
                <div className="space-y-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <File className="text-[#2ECC71]" size={24} />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{file.fileName}</p>
                          <p className="text-sm text-gray-500">
                            {formatFileSize(file.fileSize)} • {formatDate(file.uploadedAt)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(file.fileUrl, '_blank')}
                          className="text-[#2ECC71] border-[#2ECC71] hover:bg-[#2ECC71] hover:text-white"
                        >
                          <Download size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(file.id)}
                          className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <File className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-600">No files uploaded yet</p>
                  <p className="text-sm text-gray-500">Upload your first file to get started</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
