import { useState } from "react";
import { type UploadCareFile } from "@/components/ui/uploader/types";
import Uploader from "@/components/ui/uploader/uploadCare";
import UploadCareImage from "@/components/ui/uploader/uploadCareImage";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const GalleryUploader: React.FC<AvatarUploaderProps> = ({ images, setImages, onDelete }) => {
  const [animationParent] = useAutoAnimate();

  const isTwoRows = images.length > 3;
  return (
    <div className="px-4">
      <Label htmlFor="photo" className="">
        Gallery{images.length > 0 && ` (${images.length})`}
      </Label>
      <div className="mt-2">
        {images.length > 0 ? (
          <ScrollArea className={cn("rounded-lg bg-slate-200", isTwoRows && "h-96")}>
            <div ref={animationParent} className="grid items-center justify-center justify-items-center gap-10 p-4 sm:grid-cols-3">
              {images.map((image, index) => {
                return (
                  <div key={image.cdnUrl} className="group relative">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onDelete(index)}
                      className="absolute right-0 top-0 m-1 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <UploadCareImage src={image.cdnUrl} className="h-auto w-56 rounded-md" width={500} height={500} alt="User avatar" />
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        ) : null}

        <div className="mb-4 mt-5">
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white">
                  <Uploader configsOverrides={{ imgOnly: 1, multiple: 1 }} setFiles={setImages} />
                </label>
              </div>
              {/* <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContainerAvatar = () => {
  const [images, setImages] = useState<{ cdnUrl: string }[]>([]);
  const onDelete = (index: number) => {
    const newImages = [...images.slice(0, index), ...images.slice(index + 1)];
    setImages(newImages);
  };
  return (
    <div className="mx-auto max-w-3xl">
      <GalleryUploader images={images} setImages={setImages} onDelete={onDelete} />
    </div>
  );
};

interface AvatarUploaderProps {
  images: { cdnUrl: string }[];
  setImages: (uploadCareFiles: UploadCareFile[]) => void;
  onDelete: (index: number) => void;
}

export default GalleryUploader;
