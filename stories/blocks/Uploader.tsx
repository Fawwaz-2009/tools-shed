import { useState } from "react";
import { type UploadCareFile } from "@/components/ui/uploader/types";
import Uploader from "@/components/ui/uploader/uploadCare";
import UploadCareImage from "@/components/ui/uploader/uploadCareImage";
import Image from "next/image";
import PlaceHolder from "@/../public/placeholder.png";
import { Label } from "@/components/ui/label";

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ avatar, setAvatar }) => {
  return (
    <div>
      <Label htmlFor="photo" className="">
        Photo
      </Label>
      <div className="mt-2 flex items-center gap-x-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          {avatar ? (
            <UploadCareImage src={avatar.cdnUrl} className="h-full w-full object-cover" fill alt="User avatar" />
          ) : (
            <Image src={PlaceHolder} alt="Vercel Logo" className="h-full w-full object-cover" fill priority />
          )}
        </div>
        <div className="flex items-center gap-5">
          <Uploader configsOverrides={{ imgOnly: 1, multiple: 0 }} setFiles={(files) => setAvatar(files[0] || null)} />
        </div>
      </div>
    </div>
  );
};

export const ContainerAvatar = () => {
  const [avatar, setAvatar] = useState<{ cdnUrl: string } | null>(null);
  console.log({ avatar });
  return <AvatarUploader avatar={avatar} setAvatar={setAvatar} />;
};

interface AvatarUploaderProps {
  avatar: { cdnUrl: string } | null;
  setAvatar: (uploadCareFile: UploadCareFile | null) => void;
}

export default AvatarUploader;
