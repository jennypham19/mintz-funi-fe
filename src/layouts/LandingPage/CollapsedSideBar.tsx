import { AccountCircle, Close, Elevator, ExpandLess, ExpandMore, Home, Newspaper } from "@mui/icons-material";
import { Avatar, Box, Collapse, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mintz_logo from "@/assets/images/users/mintzdg-logo.png";
import { COLORS } from "@/constants/colors";
import { ELEVATOR_SUBMENU } from "./constants";


export const CollapseContext = createContext<boolean | null>(null);
export const SidebarContext = createContext<boolean | null>(null);

interface CollapsedSideBarProps{
  collapsed: boolean;
  onToggleCollapsed: () => void;
}

const CollapsedSideBar = (props: CollapsedSideBarProps) => {
    const { collapsed, onToggleCollapsed} = props;
    const location = useLocation();
    const navigate = useNavigate();

    const isElevatorActive = location.pathname.startsWith('/thang-may');
    const [elevatorExpanded, setElevatorExpanded] = useState<boolean>(isElevatorActive);

    const menuItems = [
        { label: 'Trang chủ', icon: <Home/>, path: '/home' },
        { label: 'Funi', icon: <AccountCircle/>, path: '/about-us' },
        { label: 'Tin tức', icon: <Newspaper/>, path: '/news' },
    ];

    const goTo = (path: string) => {
        navigate(path);
        onToggleCollapsed();
    };

    return (
        <Drawer anchor="left" open={collapsed} onClose={onToggleCollapsed}>
            <Box
                sx={{
                width: '75vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        px: 2,
                        py: 1.5,
                        borderBottom: '1px solid #eee',
                    }}
                >
                <IconButton onClick={onToggleCollapsed}>
                    <Close />
                </IconButton>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        px: 2,
                        py: 1.5,
                    }} 
                >
                    <Avatar src={mintz_logo} alt="Logo" sx={{ height: 150, width: 150, bgcolor: 'grey.300', borderRadius: '50%' }} />

                {/* Menu Items */}
                <List sx={{ width: '100%', px: 1 }}>
                {menuItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                        <ListItemButton
                            key={item.path}
                            onClick={() => goTo(item.path)}
                            sx={{
                                borderRadius: 1.5,
                                mb: 0.5,
                                color: active ? '#fff' : 'inherit',
                                bgcolor: active ? COLORS.PRIMARY : 'transparent',
                                '&:hover': { bgcolor: active ? COLORS.PRIMARY : '#F2F1E7' },
                            }}
                        >
                            <IconButton sx={{ p: 0.5, mr: 1, color: 'inherit' }}>{item.icon}</IconButton>
                            <ListItemText primary={item.label} slotProps={{ primary: { fontWeight: active ? 600 : 400 } }} />
                        </ListItemButton>
                    );
                })}

                {/* Thang máy - menu cha có menu con */}
                <ListItemButton
                    onClick={() => setElevatorExpanded((v) => !v)}
                    sx={{
                        borderRadius: 1.5,
                        mb: 0.5,
                        fontWeight: isElevatorActive ? 600 : 400,
                        bgcolor: isElevatorActive ? 'rgba(3,21,18,0.06)' : 'transparent',
                    }}
                >
                    <IconButton sx={{ p: 0.5, mr: 1, color: 'inherit' }}><Elevator /></IconButton>
                    <ListItemText primary="Thang máy" slotProps={{ primary: { fontWeight: isElevatorActive ? 600 : 400 } }} />
                    {elevatorExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={elevatorExpanded} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {ELEVATOR_SUBMENU.map((child) => {
                            const active = location.pathname === child.path;
                            return (
                                <ListItemButton
                                    key={child.path}
                                    onClick={() => goTo(child.path)}
                                    sx={{
                                        pl: 6,
                                        borderRadius: 1.5,
                                        mb: 0.5,
                                        color: active ? '#fff' : 'inherit',
                                        bgcolor: active ? COLORS.PRIMARY : 'transparent',
                                        '&:hover': { bgcolor: active ? COLORS.PRIMARY : '#F2F1E7' },
                                    }}
                                >
                                    <ListItemText primary={child.label} slotProps={{ primary: { fontSize: 14, fontWeight: active ? 600 : 400 } }} />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Collapse>
                </List>
                </Box>
            </Box>
        </Drawer>
    )
}

export default CollapsedSideBar;