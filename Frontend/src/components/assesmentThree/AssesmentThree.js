import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';

import { MdOutlineDashboard } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { SiOpenbadges } from "react-icons/si";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import { TfiSettings } from "react-icons/tfi";

import CardsSection from './CardsSection';
import Logo from '../../assets/Logo.png';

const drawerWidth = 230;

const settings = ['Profile', 'Logout'];

const drawerModules = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <MdOutlineDashboard size={21} />,
    },
    {
        id: 2,
        title: 'Alerts',
        icon: <RiMessage2Line size={20} />,
    },
    {
        id: 3,
        title: 'Badges',
        icon: <SiOpenbadges size={20} />,
    },
    {
        id: 4,
        title: 'Buttons',
        icon: <BsMenuButtonWideFill size={18} />,
    },
    {
        id: 5,
        title: 'Cards',
        icon: <BsCreditCard2Front size={20} />,
    },
    {
        id: 6,
        title: 'Layout',
        icon: <RiLayoutGrid2Fill size={20} />,
    },
    {
        id: 7,
        title: 'Pagination',
        icon: <BiShuffle size={20} />,
    },
    {
        id: 8,
        title: 'Popover',
        icon: <AdbIcon size={20} />,
    },
    {
        id: 9,
        title: 'Tooltips',
        icon: <TfiSettings size={20} />,
    },
];

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

const ResponsiveAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
        flexDirection: 'column',
    },
}));

function AssesmentThree() {
    const [selectedItemId, setSelectedItemId] = useState(5);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <ResponsiveAppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: "space-between", paddingLeft: 1 }}>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                    <img
                                        src={Logo}
                                        className='h-6 mr-2.5'
                                        alt='logo'
                                    />
                                    <h1 className='font-bold text-[25px]'>
                                        MATERIAL
                                    </h1>
                                    <span className='font-extralight text-[25px]'>
                                        PRO
                                    </span>
                                </div>
                                <div className='lg:ml-16 md:ml-9 sm:hidden md:block below-650:hidden lg:block'>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                </div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <button type='button' className='py-2 px-3 bg-red-600 text-white text-[14px] font-medium transition-all hover:bg-gray-600'>
                                    Upgrade to Pro
                                </button>
                                <Container maxWidth="xl">
                                    <Toolbar disableGutters>
                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: '3px solid white' }}>
                                                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1721288731~exp=1721292331~hmac=2e6372797876ec9fb595e3f1e4fb49c8f71283d57589432006603d734a440d16&w=996" />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: '45px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                            >
                                                {settings.map((setting) => (
                                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                        <Typography textAlign="center">{setting}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    </Toolbar>
                                </Container>
                            </div>
                        </Typography>
                    </Toolbar>
                </ResponsiveAppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: { xs: '35%', sm: drawerWidth },
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: { xs: '35%', sm: drawerWidth }, boxSizing: 'border-box' },
                        backgroundColor: "#fff"
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {drawerModules.map((text, index) => (
                                <ListItem
                                    key={text.id}
                                    disablePadding
                                    className={`mt-2 ${text.id === selectedItemId ? '' : ''}`}
                                    onClick={() => setSelectedItemId(text.id)}
                                >
                                    <ListItemButton>
                                        <ListItemIcon className={`-mr-6 ml-7 ${text.id === selectedItemId ? 'scale-[1.1] text-black' : ''}`}>
                                            {text.icon}
                                        </ListItemIcon>
                                        <h1 className={`font-medium ${text.id === selectedItemId ? 'scale-[1.1] text-black font-semibold transition-all ' : 'text-gray-500'}`}>
                                            {text.title}
                                        </h1>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#faf5f5", height: "100vh" }}>
                    <Toolbar />
                    <Typography>
                        <CardsSection />
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default AssesmentThree;