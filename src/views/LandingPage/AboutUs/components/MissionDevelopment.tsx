import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2'
import { CONTENT_MISSION, CONTENT_SERVICE } from "@/constants/contentAbout";
import CommonImage from "@/components/Image/index";
import { IServices } from "@/types/settings";
import { getServices } from "@/services/settings-service";
import { getPathImage } from "@/utils/url";
import image_slide_12 from '@/assets/images/users/12.png';
import image_slide_10 from '@/assets/images/users/10.png';


interface ServicesData extends IServices{
    order: number | string,
    isReverse: boolean
}

const MissionDevelopment: React.FC = () => {
    const page = 0;
    const rowsPerPage = 10
    const [services, setServices] = useState<IServices[]>([]);

    useEffect(() => {
        const fetchServices = async() => {
            const res = await getServices({ page: page, size: rowsPerPage});
            const data = res.data?.services as any as IServices[];
            const newData: ServicesData[] = data?.map(
                (service, index) => {
                    const numericId = Number(service.id);
                    return {
                        id: service.id,
                        content: service.content,
                        title: service.title,
                        image_url: !isNaN(numericId) && numericId % 2 !== 0 ? getPathImage(service.image_url) || image_slide_12 : getPathImage(service.image_url) || image_slide_10,
                        createdAt: service.createdAt,
                        updatedAt: service.updatedAt,
                        order: String(index + 1).padStart(2, '0'),
                        isReverse: !isNaN(numericId) && numericId % 2 !== 0 //true nếu là số lẻ
                    }
                }
            )
            setServices(newData);
        }
        fetchServices()
    }, [page, rowsPerPage])
    return (
        <>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                px:10
            }}
        >
            <Typography variant="h5" fontWeight={600}>Sứ mệnh phát triển</Typography>
            <Typography textAlign='center' sx={{ whiteSpace: 'normal', wordBreak: 'break-word', mt: 3, fontSize: {xs: '12px', md: '16px'}}}>
                Mintz Funi luôn tự hào là đơn vị uy tín hàng đầu trong lĩnh vực thiết kế nội thất khách sạn và resort, với thế mạnh lên ý tưởng sáng tạo, tư vấn tận tâm và đồng hành cùng khách hàng để mang đến những giải pháp thiết kế tối ưu, phù hợp từng mục tiêu kinh doanh.Khởi đầu xây dựng là những con người có đam mê và tâm huyết, sau nhiều năm hoạt động thì chúng tôi dần đã trờ thành đơn vị nhà thầu có độ tin cậy tuyệt đối với những khách hàng có nhu cầu về thiết kế nội thất hiện nay.
            </Typography>
            <Grid container spacing={2}>
                {CONTENT_MISSION.map((content, index) => {
                    return(
                        <Grid size={{ xs: 12, sm: 6, md: 3}}>
                            <Box
                                display='flex'
                                flexDirection='column'
                                key={index}
                                alignItems='center'
                                gap={1}
                                mt={3}
                            >
                                <CommonImage
                                    src={content.image}
                                    sx={{
                                        bgcolor: '#fff',
                                        width: { xs: 200, md: 450},
                                        height: { xs: 200, md: 250},
                                        borderRadius: 3
                                    }}
                                />
                                <Typography mt={2} textAlign='center' sx={{ whiteSpace: 'normal', wordBreak: 'break-word', fontSize: {xs: '13px', md: '16px'}}}>
                                    {content.label}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
        <Box px={{ xs: 0, md: 5, lg: 10}}>
            <Typography width={{ xs: '100%', md: '35%', lg: '15%'}} sx={{ borderTop: '2px solid white', py: 1, mt: 4}} variant="h5" fontWeight={600}>Dịch vụ của chúng tôi</Typography>
            {CONTENT_SERVICE?.slice(0,5).map((content, index) => {
                return(
                    <Grid key={index} sx={{ mt: 3}} container spacing={4} direction={ content.isReverse === true ? 'row-reverse' : 'row'}>
                        <Grid size={{ xs: 12, md: 6}}>
                            <CommonImage
                                src={content.image_url}
                                sx={{
                                    width: { xs: '100%', md: 750 },
                                    height: { xs: 200, md: 300 },
                                    borderRadius: 2
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6}}>
                            <Box sx={{ height: { xs: 200, md: 300, position: 'relative' }}}>
                                <Box 
                                    sx={{ 
                                        position: 'absolute', 
                                        top: "50%", // 👈 đẩy xuống giữa
                                        left: 0,
                                        right: 0,
                                        transform: "translateY(-50%)", // 👈 kéo ngược lên 1/2 chiều cao
                                    }} 
                                >
                                    <Box display='flex' flexDirection='row' gap={1}>
                                        <Typography variant="h4" sx={{ fontWeight: 700}}>
                                            {content.order}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 400, whiteSpace: 'normal', wordBreak: 'break-word', mt: { xs: 0, md: 0.5} }}>
                                            {content.title}
                                        </Typography>
                                    </Box>
                                    <Stack direction='column' display='flex' justifyContent={ content.isReverse === true ? 'start' : 'end'}>
                                        {content.content.split('\n').map((line, index) => {
                                            const newLine = line.replace('/^\n\s*[-*~>]/', '•');
                                            return (
                                                // <Typography key={index} sx={{ whiteSpace: 'normal', wordBreak: 'break-word',fontSize: {xs: '13px', md: '15px'} }}>{`• ${newLine.trim()}`}</Typography>   
                                                <Typography key={index} sx={{ whiteSpace: 'normal', wordBreak: 'break-word',fontSize: {xs: '13px', md: '15px'} }}>{`• ${line.trim()}`}</Typography>   
                                            )
                                        })}
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                )
            })}
        </Box>
        </>
    )
}
export default MissionDevelopment;