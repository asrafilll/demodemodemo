import React from "react";
import { Image } from "./Image";
import { Video } from "./Video";

export const Content = ({ content }) => {
  return content.is_image ? (
    <Image url={content.full_file_path} placeholder={content.position_name} />
  ) : (
    <Video url={content.full_file_path} mimeType={content.file_mime_type} />
  );
};
