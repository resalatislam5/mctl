import type { UploadFile } from 'antd/es/upload';

/**
 * Convert a single image URL or array of URLs to Ant Design UploadFile format
 * @param images - string URL or array of string URLs
 * @returns UploadFile[]
 */
export const toUploadFileList = (
  images: string | string[] | undefined,
): UploadFile[] => {
  if (!images) return [];

  const urls = Array.isArray(images) ? images : [images];

  return urls.map((url, index) => ({
    uid: `-upload-${index}`, // unique id
    name: url.split('/').pop() || `file-${index}`, // extract filename
    status: 'done', // mark as uploaded
    url,
  }));
};
