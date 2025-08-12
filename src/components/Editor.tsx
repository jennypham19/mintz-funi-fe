// src/components/Editor.tsx
import { FC, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import theme "snow"
import { Box, styled, useTheme } from '@mui/material';
import { createQuillModules } from '@/utils/quillConfig';
import { uploadPostImage } from '@/services/post-service';
import { resizeImage } from '@/utils/image';

// Custom styled component để tùy chỉnh giao diện của editor
const EditorContainer = styled(Box)(({ theme }) => ({
  '.ql-editor': {
    minHeight: '200px', // Đặt chiều cao tối thiểu cho vùng soạn thảo
    fontSize: '1rem',
  },
  '.ql-toolbar': {
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    border: `1px solid ${theme.palette.divider}`,
    borderBottom: 'none',
  },
  '.ql-container': {
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
    border: `1px solid ${theme.palette.divider}`,
  },
}));


interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const api = import.meta.env.VITE_API_BASE_URL;

const Editor: FC<EditorProps> = ({ value, onChange, placeholder }) => {
  const theme = useTheme();

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
      try {
        // Resize ảnh trước khi upload (ví dụ maxSize = 800px)
        const { blob } = await resizeImage(file, 800);
        // Gửi blob đã resize
        const resizedFile = new File([blob], file.name, { type: blob.type });
        const image = await uploadPostImage(resizedFile);
        console.log("image",image);
        const imageUrl = `${api}${image.data?.imageUrl}`;
    
        //Chèn ảnh vào editor
        const quill = quillRef.current?.getEditor();
        const range = quill?.getSelection();
        if(range){
          quill?.insertEmbed(range.index, 'image', imageUrl)
        }
      } catch (error: any) {
        console.error("Resize or upload failed", error);
      }
    }
  };

   // Dùng useMemo để giữ config ổn định
  const modules = useMemo(() => createQuillModules(imageHandler), []);

  return (
    <EditorContainer>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder || 'Bắt đầu viết nội dung ở đây...'}
      />
    </EditorContainer>
  );
};

export default Editor;