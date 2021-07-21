import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import CartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {NavLink,useHistory} from 'react-router-dom';
import mprotrade from '../images/mprotrade.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight:600,
    marginLeft:20
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar({user,setUser,product,setproduct,nb}) {
  const linkStyle = {marginRight : 30};
  const classes = useStyles();
  const id = localStorage.getItem("id")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const edit = () => {
    history.push('/profile');
  }

  const handleEdit = ()=> {
    handleMenuClose();
    edit();
  }

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("id")
    window.location.reload();
}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:"#000000"}}>
        <Typography className={classes.title} variant="h5" noWrap>
            <img src={mprotrade} alt="mprotrade" style={{width:'55%',borderRadius:10,marginTop:10}}/>
        </Typography>
        <Toolbar>
          <ul className="list-container">
                    <li >
                        <NavLink activeClassName="active" style={linkStyle} to="/home" >
                        Home
                        </NavLink>
                    </li>
                    <li style={{marginRight:15,paddingTop:1}}>
                    <select style={{fontSize:16,border:'none',color:'#fff',backgroundColor:'#000'}} >
                      <option onClick={(e)=>setproduct("all")} value="all" style={{fontSize:16}}>All Products</option>
                      <option onClick={(e)=>setproduct("soft")} value="soft" style={{fontSize:16}}>Software</option>
                      <option onClick={(e)=>setproduct("hard")} value="hard" style={{fontSize:16}}>Hardware</option>
                    </select>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/sell" >
                        Sell
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/contactus" >
                        Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/card" >
                        <IconButton aria-label="show 4 new mails" color="inherit">
                              <Badge badgeContent={nb} color="secondary">
                                <CartIcon />
                              </Badge>
                            </IconButton>
                        </NavLink>
                    </li>
                    { !id && !user ?
                        (
                          <ul style={{display:'flex',flexDirection:'row',alignItems:'center',listStyle:'none'}}>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} to="/signup" >
                                Register
                            </NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} to="/login" >
                                Login
                            </NavLink>
                            </li>
                          </ul>
                        )
                        : (
                          <ul style={{display:'flex',flexDirection:'row',alignItems:'center',listStyle:'none'}}>
                            {/* <li>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                              <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                              </Badge>
                            </IconButton>
                            </li>
                            <li>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                              <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                              </Badge>
                            </IconButton>
                            </li> */}
                            <li>
                            <IconButton
                              edge="end"
                              aria-label="account of current user"
                              aria-controls={menuId}
                              aria-haspopup="true"
                              onClick={handleProfileMenuOpen}
                              color="inherit"
                              style={{marginRight:10}}
                            >
                            <AccountCircle/>
                            </IconButton>
                            </li>
                          </ul>
                        )
                    }
                </ul>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
