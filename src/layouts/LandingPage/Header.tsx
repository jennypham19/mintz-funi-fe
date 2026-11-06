import { MINI_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from '@/constants/layouts';
import { Box, ClickAwayListener, MenuItem, Paper, Select, Typography, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { CSSObject, Theme, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import mintz_logo from "@/assets/images/users/mintzdg-logo.png";
import CommonImage from '@/components/Image/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DensityMedium, KeyboardArrowDown } from '@mui/icons-material';
import CollapsedSideBar from '../LandingPage/CollapsedSideBar';
import { COLORS } from '@/constants/colors';
import { ELEVATOR_SUBMENU } from './constants';


interface Props {
  collapsed: boolean;
  onToggleSidebar: () => void;
  onToggleCollapsed: () => void;
}

const Header = (props: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  const handleToggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const isActive = (path: string) => location.pathname === path;
  const isElevatorActive = location.pathname.startsWith('/thang-may');

  const [elevatorOpen, setElevatorOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('home')

  const handleMenuClick = (key: string, path: string) => {
    setActiveMenu(key);
    navigate(path)
  }

  const styleMenu = (path: string) => ({
    fontWeight: 500,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    pb: 1,
    mt: 1,
    borderBottom: isActive(path)? '2px solid black' : '2px solid transparent',
    transition: 'border-bottom 0.3s',
    '&:hover':{
      borderBottom: '2px solid black',
    },
  });

  if(mdUp){
    return(
      <AppBar
            position='fixed'
            sx={{
              color: 'common.black',
              backgroundColor: '#fff',
              height: '64px',
              borderBottom: 'thin solid #E6E8F0',
              marginLeft: 'auto',
              zIndex: 9,
              width: '100%',
            }}
          >
            <Toolbar 
              disableGutters 
              sx={{ 
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: 64, px: 6, // padding ngang để giới hạn chiều rộng
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 15, }}>
                <CommonImage
                  src={mintz_logo}
                  alt="mintz logo"
                  sx={{ width: 100, height:100 }}
                  />                
                <Typography sx={styleMenu('/home')} onClick={() =>  handleMenuClick('home','/home')}>Trang chủ</Typography>
                <Typography sx={styleMenu('/about-us')} onClick={() =>  handleMenuClick('about-us','/about-us')}>Funi</Typography>
                <Typography sx={styleMenu('/news')} onClick={() =>  handleMenuClick('news','/news')}>Tin tức</Typography>
                <ClickAwayListener onClickAway={() => setElevatorOpen(false)}>
                  <Box sx={{ position: 'relative' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                    <Typography
                      sx={{
                        ...styleMenu('/thang-may'),
                        borderBottom: isElevatorActive ? '2px solid black' : '2px solid transparent',
                      }}
                      onClick={() => handleMenuClick('thang-may', '/thang-may')}
                    >
                      Thang máy
                    </Typography>
                    <KeyboardArrowDown
                      onClick={() => setElevatorOpen((v) => !v)}
                      sx={{
                        fontSize: 18,
                        mt: 0.5,
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        transform: elevatorOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </Box>

                  {elevatorOpen && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        mt: 0.5,
                        minWidth: 230,
                        borderRadius: 1.5,
                        py: 1,
                        zIndex: 30,
                        overflow: 'hidden',
                      }}
                    >
                      {ELEVATOR_SUBMENU.map((child) => {
                        const active = isActive(child.path);
                        return (
                          <Box
                            key={child.path}
                            onClick={() => {
                              navigate(child.path);
                              setElevatorOpen(false);
                            }}
                            sx={{
                              px: 2,
                              py: 1.25,
                              fontSize: 14,
                              fontWeight: active ? 600 : 400,
                              whiteSpace: 'nowrap',
                              cursor: 'pointer',
                              color: active ? '#fff' : 'common.black',
                              bgcolor: active ? COLORS.PRIMARY : 'transparent',
                              transition: 'background-color 0.2s',
                              '&:hover': {
                                bgcolor: active ? COLORS.PRIMARY : '#F2F1E7',
                              },
                            }}
                          >
                            {child.label}
                          </Box>
                        );
                      })}
                    </Paper>
                  )}
                  </Box>
                </ClickAwayListener>
                <Select
                  defaultValue="vi"
                  variant="standard"
                  disableUnderline
                  sx={{
                    fontWeight: 800,
                    cursor: 'pointer',
                    '& .MuiSelect-select': { padding: 0 },
                  }}
                >
                  <MenuItem value="vi">Ngôn ngữ</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              </Box>
            </Toolbar>
          </AppBar>
    )
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        color: 'common.black',
        backgroundColor: '#fff',
        height: '64px',
        borderBottom: 'thin solid #E6E8F0',
        marginLeft: 'auto',
        zIndex: 9,
        width: '100%',
        display:'flex',
        flexDirection:'row'
      }}
    >
      <IconButton
        onClick={handleToggleCollapsed}
        sx={{
          color: '#000',
          borderRadius: '4px',
          width: '36px',
          height: '36px',
          fontSize: '1rem',
          margin: 'auto 0px',
          // backgroundColor: '#f0f0f0',
        }}
      >
        <DensityMedium />
      </IconButton>
      <Toolbar 
        disableGutters 
        sx={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', height: 64, px: 6, // padding ngang để giới hạn chiều rộng
          margin: 'auto'
        }}>
        
          <CommonImage
            src={mintz_logo}
            alt="mintz logo"
            sx={{ width: 100, height:100 }}
          />
      </Toolbar>
      <CollapsedSideBar
        collapsed={collapsed}
        onToggleCollapsed={handleToggleCollapsed}
      />
    </AppBar>
  );
};

export default Header;
