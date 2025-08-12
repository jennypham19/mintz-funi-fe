import { Quill } from 'react-quill';
import ImageResize from "quill-image-resize-module-react";

Quill.register('modules/imageResize', ImageResize);

// Cấu hình các module cho toolbar của editor
export const createQuillModules = (imageHandler: () => void) => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'], // Cho phép chèn link, ảnh, video
        ['clean'] // Nút xóa định dạng
      ],
      handlers:{
        image: imageHandler, // Ghi đè handler mặc địch
      }
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"]
    },
})

export default Quill;