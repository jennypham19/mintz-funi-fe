import React from "react";
import { Box, Card, CardContent, Typography, Avatar, Button, Tooltip, Stack, CardHeader, CardActions } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { UserProfile } from "@/types/user-types";
import { getPathImage } from "@/utils/url";
import avatar from "@/assets/images/users/default-avatar.jpg";
import useAuth from "@/hooks/useAuth";
import { getRoleLabel } from "@/utils/labelEnToVi";
import { Attachment } from "@mui/icons-material";
import IconButton from "@/components/IconButton/IconButton";

interface UserCardProps {
    userProfile: UserProfile
    handleClick: (id: string | number) => void,
    handleUnactive: (id: string | number, userProfile: UserProfile) => void,
    handleEdit: (id: string | number) => void,
    handleReset: (id: string | number, userProfile: UserProfile) => void,
    handleActive: (id: string | number, userProfile: UserProfile) => void,
    handleDelete: (id: string | number, userProfile: UserProfile) => void,
    handleAttach: (userProfile: UserProfile) => void,
}

const UserCard: React.FC<UserCardProps> = ({ userProfile,  handleClick, handleUnactive, handleEdit, handleReset, handleActive, handleAttach, handleDelete }) => {
    const { profile } = useAuth()
    return (
        <Card onClick={() =>  userProfile.id && handleClick(userProfile.id)} sx={{ position: 'relative', borderRadius: '15px', cursor: 'pointer', p: 1}}>
            <CardHeader
                avatar={
                    <Avatar src={userProfile.avatar_url ? getPathImage(userProfile.avatar_url) : avatar} sx={{ width: 70, height: 70, borderRadius: '50%' }} />  
                }
                title={
                    <Typography variant="h6" fontWeight="bold">{userProfile.fullName}</Typography>
                }
                subheader={
                    <Stack direction="column" spacing={1}>
                        <Typography sx={{ wordBreak: 'break-all' }} variant="body2">Username: {userProfile.username || '-'}</Typography>
                        <Typography sx={{ wordBreak: 'break-all' }} variant="body2">Vai trò: {getRoleLabel(userProfile.role) || '-'}</Typography>
                        <Typography variant="body2">Số điện thoại: {userProfile.phone_number || '-'}</Typography>
                    </Stack>
                }
                action={
                    <Box>
                        {userProfile.is_actived === 0 ? (
                            <Tooltip title="Đang hoạt động">
                                <CircleIcon color="success" fontSize="small" />
                            </Tooltip>
                        ): (
                            <Tooltip title="Không hoạt động">
                                <CircleIcon color="error" fontSize="small" />
                            </Tooltip>
                        )}
                    </Box>                    
                }
            />

            <CardActions sx={{ display: 'flex', justifyContent:'center' }}>
                <Box sx={{ display: 'flex', gap: 1, justifyContent:'center' }}>
                    {userProfile.is_actived === 0 && userProfile.role !== profile?.role && (
                    <Button 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            userProfile && handleAttach(userProfile);
                        }} 
                        variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                    >
                        Gán
                    </Button>
                    )}
                    {userProfile.is_actived === 0 && (
                    <Button 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            userProfile.id && handleEdit(userProfile.id);
                        }} 
                        variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                    >
                        Sửa
                    </Button>
                    )}
                    {userProfile.is_actived === 0 && userProfile.role !== profile?.role && (
                    <Button 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            userProfile.id && handleReset(userProfile.id, userProfile);
                        }} 
                        variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                    >
                        Reset
                    </Button>
                    )}
                    {userProfile.is_actived === 0 && userProfile.role !== profile?.role && (
                    <Button 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            userProfile.id && handleUnactive(userProfile.id, userProfile)
                        }} 
                        variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                    >
                        Vô hiệu hóa
                    </Button>
                    )}
                    {userProfile.is_actived === 0 && userProfile.role !== profile?.role && (
                    <Button 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            userProfile.id && handleDelete(userProfile.id, userProfile)
                        }} 
                        variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                    >
                        Xóa
                    </Button>
                    )}
                    {userProfile.is_actived === 1 && (
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                userProfile.id && handleActive(userProfile.id, userProfile)
                            }}
                            variant="outlined" sx={{ color: '#1C1A1B', border: '1px solid #1C1A1B'}} size="small"
                        >
                            Khôi phục
                        </Button>
                    )}
                </Box>
            </CardActions>
        </Card>
    );
};

export default UserCard;