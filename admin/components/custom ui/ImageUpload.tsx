import { CldUploadWidget } from "next-cloudinary";
import { Plus } from "lucide-react";

import { Button } from "../ui/button";

import Image from "next/image";
interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <div>
        <div className="mb-4 flex flex-wrap items-center gap-4">
            {value.map((url)=>(
                <Image src={url} key={""} alt="collections" width={100} height={50} className="object-cover rounded-lg" />
            ))}

        </div>
      <CldUploadWidget uploadPreset="c6ghr1wf" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
