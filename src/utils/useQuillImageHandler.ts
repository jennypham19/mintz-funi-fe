import { uploadPostImage } from "@/services/post-service";
import { useRef } from "react";
import ReactQuill from "react-quill";

export const useQuillImageHandler = (api: string) => {
      const quillRef = useRef<ReactQuill>(null);
  
  //Xử lý khi bấm nút chèn ảnh
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
  
    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      const image = await uploadPostImage(file);
      console.log("image",image);
      const imageUrl = `${api}${image.data?.imageUrl}`;
    
      //Chèn ảnh vào editor
      const quill = quillRef.current?.getEditor();
      const range = quill?.getSelection();
      if(range){
        quill?.insertEmbed(range.index, 'image', imageUrl)
      }
    }
  };

  return { quillRef, imageHandler };
}