import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm , Controller, FormProvider } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from '../components/menu';
import Image from "mui-image";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, Navigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from 'react';
import { borderColor } from '@mui/system';
import axios from 'axios';
// import Editing from './Editing';

import { green, blue, grey, red } from "@mui/material/colors";

const pages = [ 'Home','Services','About','Contact','Blog','Signin'];
const drawerWidth = 240;



function Dashboard_menu(props, status, r, profile) {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const logout = () => {
		window.open("http://localhost:8080/auth/logout", "_self");
		localStorage.removeItem("token");
		setUser(null);
	  };
	useEffect(() => {
	  const getUser = () => {
		fetch("http://localhost:8080/auth/login/success", {
		  method: "GET",
		  credentials: "include",
		  headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": true,
		  },
		})
		  .then((response) => {
			  if (response.status === 200) {
				
				  return response.json();
			  }
			  
			throw new Error("authentication has been failed!");
		  })
		  .then((resObject) => {
			setUser(resObject.user);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  };
	  getUser();
	}, []);
	console.log(user, 'Dashboard_menu');
	const { register, watch,control,handleSubmit,setValue, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	
	
	const [Emotional,setEmotional] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [textInput, setTextInput] = useState("");

	const [write, setWrite] = useState("");
	


const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
	};
	const handlewrite = (event) => {
		setWrite(event.target.value);
	}

	const onSubmit = async (data,e) => {
		const formData = new FormData();
		console.log(data);
		e.preventDefault();
		const response = await fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => res.json()).then(async (res) => {
			const resData = await res;
			console.log(resData);
			if (resData.status === "success") {
				alert("Message Sent");
			} else if (resData.status === "fail") {
				alert("Message failed to send");
			}
		})
		console.log(JSON.stringify(data));
		console.log(FormData, 'hi');
	  };
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		
		
	};
	const onValueChange=(event)=> {
		setSelectedOption(event.target.value);
		console.log(event.target.value);	
	  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
	};
	const handleClick = () => {
		console.info('You clicked the Chip.');
	  };

  const drawer = (
	  <div>
		  {user ? (
			  <>
				 
				  
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
				  <p>{user.displayName}</p> 
				  
      </>
        
     
      ) : (
				  <Link className="link" to={logout}>
          Login
        </Link>
      )}
		  <Toolbar />
		  <Box sx={{m:"auto"}}>
			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '98px',
    height: '105px'
			  }}></Image>
		 {user?(<p>{user.displayName}</p>):(<p>sss</p>)} 
          </Box>
	  <Divider />
      <List>
        {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
			<>
				
		  <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
			</ListItem>
				<Divider />
				
				</>
		))}
			  
			  
			  <button onClick={logout}>
				<Link to ='/'>Logout</Link>	
				</button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
			ml: { sm: `${drawerWidth}px` },
			backgroundColor:'#FFFFFF'
        }}
      >
        <Toolbar sx={{background:'ffffff'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
           
	  <Link to="/Home" style={{textDecoration:'none',color:'#333335',fontSize:'16px',width:"52px",height:"27px",letterSpacing: '0.02em',fontWeight:'600'}}>
	  Home
            </Link>
            <Link to="/Services"style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:600,width: '124px',letterSpacing: '0.02em',height: '27px'}} >
			Services
            </Link>
            <Link to="/About"style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:600,width: '83px',letterSpacing: '0.02em',height: '27px'}} >
			About
            </Link>
            <Link to="/Contact" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:600,width: '95px',letterSpacing: '0.02em',height: '27px'}}>
			Contact
		  </Link>
		  <Link to="/Blog" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:600,width: '95px',letterSpacing: '0.02em',height: '27px'}}>
					  Blog
					  
		  </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
		  </Box>
		  
		 
	  </Box>
	  
	  </>
  );
}
export default Dashboard_menu;