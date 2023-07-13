import React from "react";
import Image, { type ImageProps } from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

interface UploadCareImageProps extends Omit<ImageProps, "loader"> {
  operations?: string;
}

const UploadCareImage: React.FC<UploadCareImageProps> = ({ src, alt, operations = "", ...props }) => {
  const finalSrc = `${src as string}${operations}-/preview/-/quality/smart/-/format/auto/`;

  return <Image src={finalSrc} loader={uploadcareLoader} alt={alt || ""} {...props} />;
};

export default UploadCareImage;
