import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Badge from '@mui/material/Badge';
import './style.css'

const pages = ['Home','Blog', 'Products', 'Contact','Testinomials'];

const Dashboard=({handleLogout})=>{

  const cartItems = useSelector((state)=>state.cart)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate=useNavigate()
    const LogoutPage=()=>{
        handleLogout()
        navigate('/login')
    }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    {/* navigation bar */}
    <AppBar position="sticky">
        <Toolbar disableGutters className='bg-slate-800 '>
          <Typography sx={{ display: { xs: 'none', md: 'flex',margin:'0px 150px' },border:'1px solid #fff'}}>
                <img src='Images/Logo.png' alt='logo' className='logoimg' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Typography component={Link} to={`/${page}`} >
                      {page}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h5" className='text-7xl text-center text-slate-300' component="a" href="/" sx={{mr: 2,display: { xs: 'flex', md: 'none' },flexGrow: 1}}>
              ORGANO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box className='cartlogout d-flex'>     
              <Badge  badgeContent={cartItems.length?cartItems.length:''} color="secondary"sx={{marginRight:'30px'}}>       
                <Typography  variant='h6' color='success' component={Link} to='/Cart' ><ShoppingCartCheckoutRoundedIcon/></Typography>
              </Badge>
                <Button  variant='contained' color='error' onClick={LogoutPage} sx={{marginRight:'10px'}}>Logout</Button>  
          </Box>
          <Box sx={{ flexGrow: 0,marginRight:'20px' }}>
            <Tooltip title="Open Profile">
              <IconButton  sx={{ p: 0 }}>
                <Avatar component={Link} to='/Profile' />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
    </AppBar>
</>
  );
}
export default Dashboard;