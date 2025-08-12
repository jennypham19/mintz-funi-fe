import parse from 'html-react-parser';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import DialogComponent from "@/components/DialogComponent";
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CommonImage from '@/components/Image/index';
interface NewsDetailProps {
    content: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ content }) => {
    const [images, setImages] = useState<{ src: string, title?: string}[]>([]);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpenLightbox, setIsOpenLightbox] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        const container = document.querySelector(".news-detail-container");
        if(!container) return;
        
        //Lấy danh sách ảnh từ content
        const imgs = Array.from(container.querySelectorAll("img")).map((img, index) => ({
            src: img.src,
            title: img.alt || `image_${index}`,
        }));
        setImages(imgs);
        
        // Gắn sự kiện click ảnh
        const handleImageClick = (e: Event) => {
            const target = e.target as HTMLImageElement;
            if(target.tagName === "IMG") {
                if(imgs.length > 1) {
                    //Mở lightbox
                    const index = imgs.findIndex((i) => i.src === target.src);
                    if(index !== -1) {
                        setPhotoIndex(index);
                        setIsOpenLightbox(true);
                    }
                }else {
                    // Mở dialog nếu chỉ có 1 ảnh
                    setSelectedImage(target.src);
                    setIsOpenDialog(true);
                }
            }
        };

        container.addEventListener("click", handleImageClick);
        return () => {
            container.removeEventListener("click", handleImageClick)
        };
    }, [content])
    return (
        <>
            <Box
                className="news-detail-container"
                sx={{
                    '& img': {
                    display: 'block',
                    margin: '16px auto', // căn giữa ngang
                    maxWidth: '100%',
                    height: 'auto',
                    },
                    '& p': {
                    textAlign: 'justify', // tuỳ bạn
                    marginBottom: '12px',
                    },
                    '& ul, & ol': { pl: 3 },
                }}
            >
                <Typography sx={{ whiteSpace: 'normal', wordBreak: 'break-word', mt:1, fontSize: {xs: '14px', md: '16px'} }}>    
                    {parse(content)}
                </Typography>
            </Box>

            {/* Dialog khi chỉ có 1 ảnh */}
            <DialogComponent dialogKey={isOpenDialog} handleClose={() => setIsOpenDialog(false)} maxWidth="lg" isActiveFooter={false} isCenter={false}>
                <CommonImage
                    src={selectedImage}
                    alt="Zoom"
                    sx={{ height: "auto" }}
                />
            </DialogComponent>

            {/* Lightbox khi có nhiều ảnh */}
            {isOpenLightbox && (
                <Lightbox
                    open={isOpenLightbox}
                    close={() => setIsOpenLightbox(false)}
                    slides={images}
                    index={photoIndex}
                    plugins={[Captions, Zoom]}
                    captions={{ descriptionTextAlign: 'center'}}
                />
            )}
            
        </>
    );
};

export default NewsDetail;