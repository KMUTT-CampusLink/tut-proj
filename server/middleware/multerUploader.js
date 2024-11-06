import multerStorageEngine from "./multerStorageEngine.js";
import multer from "multer";

/**
 * allowed file types
 * 1. images
 * 2. videos
 * 3. pdf
 * 4. power point slides
 * 5. excel sheets
 * 6. zip files
 * 7. doc files
 */

const ALLOWED_EXTENSIONS =
  /\.(jpe?g|png|gif|webp|avif|mp4|ogg|webm|pdf|pptx?|xlsx?|docx?|zip)$/i;
const IMAGE_MIME = /^image\/(?:jpe?g|png|gif|webp|avif)$/i;
const VIDEO_MIME = /^video\/(?:mp4|webm|ogg)$/i;
const APPLICATION_MIME =
  /^application\/(?:pdf|vnd\.ms-(?:powerpoint|excel)|msword|vnd\.openxmlformats-officedocument\.(?:wordprocessingml\.document|presentationml\.presentation|spreadsheetml\.sheet)|zip|x-zip-compressed)$/i;

const MAX_FILE_SIZE = 1_073_741_824;

export default file_uploader;
