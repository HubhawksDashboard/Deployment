import React from 'react'
//import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm , Controller, FormProvider } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
import { useState } from 'react';
import { borderColor } from '@mui/system';
import axios from 'axios';


import { green, blue, grey, red } from "@mui/material/colors";
import Dashboard_au from './Dashboard_author';


// const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
// const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
// const drawerWidth = 240;



function BookReviews(props, status, r, profile) {
	const { register, watch,control,handleSubmit,setValue, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [adventurous, setAdventurous] = useState("");
	const [Autobiographical, setAutobiographical] = useState("");
	const [Biography, setBiography] = useState("");
	const [Candid, setCandid] = useState("");
	const [Classic, setClassic] = useState("");
	const [Coming, setComing] = useState("");
	const [Dark, setDark] = useState("");
	const [Deep, setDeep] = useState("");
	const [Diverse, setDiverse] = useState("");
	const [Educational, setEducational] = useState("");
	const [Empowering, setEmpowering] = useState("");
	const [Fictional, setFictional] = useState("");
	const [Futuristic, setFuturistic] = useState("");
	const [Funny, setFunny] = useState("");
	const [Emotional,setEmotional] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [textInput, setTextInput] = useState("");
	const [user, setUser] = useState({
		to: "rajeevkhanduja@gmail.com",
		subject: "",
		description: "",
		
	  });
// 	const [color, setColor] = useState("");
	const [write, setWrite] = useState("");
	const [msg,setMsg] = useState('');
//   const handleColor = () => {
//     setColor("#3A81F3");
//     setTextColor("white");
//   };

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
		const response = await fetch("http://localhost:5000/BookReviews", {
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
	function colorForStatus(status) {
		switch (status) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
			return blue;
		  
		  default:
			return grey;
		}
	}
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

//   const drawer = (
//     <div>
// 		  <Toolbar />
// 		  <Box sx={{m:"auto"}}>
// 			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
//     width: '98px',
//     height: '105px'
// 			  }}></Image>
		  
//           </Box>
// 	  <Divider />
//       <List>
//         {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
// 			<>
				
// 		  <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
// 			</ListItem>
// 				<Divider />
				
// 				</>
// 		))}
			  
// 			  <button onClick={handleLogout}>
// 				<Link to ='/'>Logout</Link>	
// 				</button>
//       </List>
//     </div>
//   );

  const container = window !== undefined ? () => window().document.body : undefined;

	return (<>
		<Dashboard_au />
		<Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'1300px'}}>
		<Paper component='form' width="1152px" height='1148px' sx={{position: 'absolute',
width: '1152px',
height: '1148px',
left: '32px',marginLeft:'240px',
top: '115px',
background: '#FFFFFF',
borderRadius: '12px'}}>
            <Box component='nav'  sx={{
				marginLeft:'58px',borderRadius: '12px',marginTop:'25px',display:"flex",
width: '1044px',
height: '45px'}}>
	  <Link to="/Editing" style={{textDecoration:'none',color:'#000000',fontSize:'16px',fontWeight:400,width:"52px",height:"27px",marginLeft:'26px',letterSpacing: '0.02em'}}>
              Editing
            </Link>
            <Link to="/CoverDesigning"style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '124px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}} >
              Cover Designing
            </Link>
            <Link to="/Translation"style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '83px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}} >
              Translation
            </Link>
            <Link to="/GhostWriting" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '95px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}}>
              Ghostwriting
		  </Link>
		  <Link to="/AmazonAds" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '94px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}}>
              Amazon Ads
            </Link>
			<Link to="/BookReviews" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '104px',letterSpacing: '0.01em',height: '27px',marginLeft:'36px'}}>
			Book Reviews
            </Link>
			<Link to="/BookTrailer" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '90px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}}>
              Book Trailer
            </Link>
			<Link to="/Bookstore" style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:400,width: '76px',letterSpacing: '0.02em',height: '27px',marginLeft:'36px'}}>
			Bookstore
            </Link>
		  
		  </Box>
    <Box component='form' encType="multipart/form-data"
      method="post"  onSubmit={handleSubmit} >
		
			<Grid container md={12}>
					<Grid item md={12}  sx={{textAlign:'initial'}}>
					<Typography sx={{marginTop:'56px',marginLeft:'84px',fontSize:"18px"}}>Choose the preferred platform </Typography>			
		</Grid>
					<Grid item md={6} sx={{textAlign:'initial',marginLeft:'84px',marginTop:'16px'}}>
					<label htmlFor="field-rain" style={{marginLeft:'2px',fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}>
                    <input
                        {...register("platform")}
                        type="radio"
                        value="Instagram"
								id="field-rain"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    Instagram
                </label><br/>
                <label htmlFor="field-wind" style={{marginLeft:'2px',fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}>
                    <input
                        {...register("platform")}
                        type="radio"
                        value="Goodreads"
								id="field-wind"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    Goodreads
			</label><br/>
			<label htmlFor="field-wind" style={{marginLeft:'2px',fontSize:'18px',lineHeight:"28px",marginTop:'8px'}}>
                    <input
                        {...register("platform")}
                        type="radio"
                        value="Amazon"
								id="field-wind"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    Amazon
			</label>	
		</Grid>
				  </Grid>
				  
				<Grid container md={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					<Typography  sx={{marginTop:'56px',marginLeft:'84px',fontSize:"18px"}}>How many reviews would you like to have?</Typography>
					</Grid>
					<Grid item md={6}  sx={{textAlign:'initial',marginLeft:'84px',marginTop:'16px'}}>
					<label htmlFor="looking">
                    <input
                        {...register("reviews")}
                        type="radio"
                        value="50"
								id="looking"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    50
					  </label><br/>
					  <label htmlFor="looking">
                    <input
                        {...register("reviews")}
                        type="radio"
                        value="100"
								id="looking"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    100
					  </label><br/>
					  <label htmlFor="looking">
                    <input
                        {...register("reviews")}
                        type="radio"
                        value="150"
								id="looking"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    150
			</label><br/>
			<label htmlFor="looking">
                    <input
                        {...register("reviews")}
                        type="radio"
                        value="200"
								id="looking"
								style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    200
			</label>
					</Grid>
				  </Grid>
		
				
                
				<Grid container md={12}>
				<Grid item md={12} sx={{textAlign:'initial'}}>
				<Typography  sx={{marginTop:'56px',marginLeft:'84px',fontSize:"18px"}} >Drop your amazon book link </Typography>
					</Grid>
					<Grid item md={6}sx={{textAlign:'initial',marginLeft:'84px',marginTop:'32px'}}>
						  <TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
							 fullWidth
							margin="dense"
						size="small"
							 {...register('link')}
							 error={errors.Comments ? true : false}
        />
				</Grid>	
			</Grid>
			
				
				
				  <Grid container md={12}>
					 
				<Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginTop:'56px',marginLeft:'84px',fontSize:"18px"}}>Additional comments (Optional)</Typography>
					</Grid>
					<Grid item md={6} sx={{marginLeft:"84px",marginTop:"32px"}}>
						<TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
							 fullWidth
							 margin="dense"
							{...register('Comments')}
							rows={4}
							multiline
							 error={errors.Comments ? true : false}
        />
				</Grid>
				
					  </Grid>
					 
					
					  
					  <Grid container md={12}>
					  <Button
              variant="contained"
              color="primary"
				onClick={handleSubmit(onSubmit)}
				sx={{marginTop:'56px',marginLeft:'82px',textTransform: 'none',fontWeight:'500',fontSize:'16px',borderRadius:'8px',width: '91px',
				height: '48px'}}
            >
              Submit
            </Button>
			</Grid>
			
			</Box>
			</Paper>
			</Box>
		</>
  );
}
export default BookReviews;