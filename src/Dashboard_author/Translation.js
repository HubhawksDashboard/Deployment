import React from 'react'
//import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Paper } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
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
import { EventRepeat } from '@mui/icons-material';


// const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
// const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
// const drawerWidth = 240;



function Translation(props, status, r, profile) {
	const { register, watch,control,handleSubmit,setValue, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	const [checkb, setcheckb] = useState([]);
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
	const [textInput, setTextInput] = useState([]);
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
		const value = event.target.value;
		const checked = event.target.checked;
		console.log(value, checked);
		if (checked)
		{
			setTextInput([...textInput,value]);
		}
		else {
			setTextInput(textInput.filter((event) => (event !== value)));
		}
    
	};
	const handlewrite = (event) => {
		setWrite(event.target.value);
	}

	const onSubmit = async (data,e) => {
		const formData = new FormData();
		console.log(data);
		e.preventDefault();
		const response = await fetch("http://localhost:5000/translation", {
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
		<Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'1850px'}}>
		<Paper component='form' width="1152px" height='1148px' sx={{position: 'absolute',
width: '1152px',
height: '1560px',
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
      method="post"  onSubmit={handleSubmit}  sx={{ m: "50px" }}>
		
				<Grid container xs={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					<Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}}>What language is  your content in? </Typography>
					</Grid>
					<Grid item md={6} sx={{textAlign:'initial',marginTop:'16px',marginLeft:'84px'}} >
					<label htmlFor="field-rain">
                    <input
                        {...register("content")}
                        type="radio"
                        value="English"
                        id="field-rain"
                    />
                    English
                </label><br/>
                <label htmlFor="field-wind">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Hindi"
                        id="field-wind"
                    />
                    Hindi
                </label><br/>
                <label htmlFor="field-sun">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Tamil"
                        id="field-sun"
                    />
                    Tamil
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Marathi"
                        id="field-sun"
                    />
                    Marathi
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Malayalam"
                        id="field-sun"
                    />
                    Malayalam
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Telugu"
                        id="field-sun"
                    />
                    Telugu
				</label><br/>
				<label htmlFor="field-sun">
                    <input
                        {...register("content")}
                        type="radio"
                        value="Others"
                        id="field-sun"
                    />
                    Others
					  </label>
					  </Grid>
		
				
				  </Grid>
				<Grid container xs={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					<Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}}>What is the genre of your book?</Typography>
					</Grid>
					<Grid item md={6} sx={{textAlign:'initial',marginTop:'16px',marginLeft:'84px'}} >
					<label htmlFor="field-rain">
                    <input
                        {...register("genre")}
                        type="checkbox"
                        value="Literary  fiction"
								id="field-rain"
								onChange={handleTextInputChange}
                    />
                    Literary  fiction
                </label><br/>
                <label htmlFor="field-wind">
                    <input
                        {...register("genre")}
                        type="checkbox"
                        value="Mystery"
								id="field-wind"
								onChange={handleTextInputChange}
                    />
                    Mystery
                </label><br/>
                <label htmlFor="field-sun">
                    <input
                       {...register("genre")}
                        type="checkbox"
                        value="Thriller"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Thriller
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                       {...register("genre")}
                        type="checkbox"
                        value=" Horror"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Horror
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                       {...register("GetLanguage1")}
                        type="checkbox"
                        value="Historical"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Historical
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                          {...register("genre")}
                        type="checkbox"
                        value="Romance"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Romance
						</label><br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value=" Western"
                        id="field-sun"
                    />
                    Western
						</label>
						<br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value="Bildungsroman"
                        id="field-sun"
                    />
                    Bildungsroman
						</label>
						<br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value="Speculative Fiction"
                        id="field-sun"
                    />
                    Speculative Fiction
					  </label>
					  <br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value="Science Fiction"
                        id="field-sun"
                    />
                    Science Fiction
					  </label>
					  <br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value=" Fantasy"
                        id="field-sun"
                    />
                    Fantasy
					  </label>
					  <br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value="  Dystopian"
                        id="field-sun"
                    />
                    Dystopian
					  </label>

					  <br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value=" Magical Realism"
                        id="field-sun"
                    />
                    Magical Realism
					  </label>
					  <br />
						
				<label htmlFor="field-sun">
                    <input
                         {...register("genre")}
                        type="checkbox"
                        value="Realist Literature"
                        id="field-sun"
                    />
                    Realist Literature
					  </label>
					  <br />
						
				

					 </Grid>
				 
				  </Grid>
				  <Grid container xs={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					<Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}}>What is the word count of your book?</Typography>
					</Grid>
					<Grid item md={6} sx={{textAlign:'initial',marginTop:'16px',marginLeft:'84px'}} >
						
					<TextField placeholder='writehere'
							  id="Wordsbook"
							  name="Wordsbook"
							  label="Wordsbook"
							  fullWidth
							  margin="dense"
							  {...register('count')}
							  error={errors.Comments ? true : false}
						     
							 />
						  
					  </Grid>
			</Grid>
				<Grid container xs={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					  <Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}} >What language do you want to get the translation in?</Typography>
					</Grid>
					<Grid item md={6} sx={{textAlign:'initial',marginTop:'16px',marginLeft:'84px'}} >
					<label htmlFor="field-rain">
                    <input
                        {...register("GetLanguage")}
                        type="checkbox"
                        value="English"
								id="field-rain"
								onChange={handleTextInputChange}
                    />
                    English
                </label><br/>
                <label htmlFor="field-wind">
                    <input
                        {...register("GetLanguage")}
                        type="checkbox"
                        value="Hindi"
								id="field-wind"
								onChange={handleTextInputChange}
                    />
                    Hindi
                </label><br/>
                <label htmlFor="field-sun">
                    <input
                       {...register("GetLanguage")}
                        type="checkbox"
                        value="Tamil"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Tamil
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                       {...register("GetLanguage")}
                        type="checkbox"
                        value="Marathi"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Marathi
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                       {...register("GetLanguage")}
                        type="checkbox"
                        value="Malayalam"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Malayalam
					  </label><br/>
					  <label htmlFor="field-sun">
                    <input
                          {...register("GetLanguage")}
                        type="checkbox"
                        value="Telugu"
								id="field-sun"
								onChange={handleTextInputChange}
                    />
                    Telugu
				</label><br/>
				<label htmlFor="field-sun">
                    <input
                         {...register("GetLanguage")}
                        type="checkbox"
                        value="Others"
                        id="field-sun"
                    /> 
                    Others
					  </label>
					</Grid>
				  </Grid>
				  <Grid container xs={12}>
					 
				<Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}}>Additional comments (Optional)</Typography>
					</Grid>
					<Grid item md={6} sx={{marginLeft:"84px",marginTop:'16px'}}>
						<TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
							 fullWidth
							 margin="dense"
							 {...register('Comments')}
							 error={errors.Comments ? true : false}
        />
					</Grid>
					</Grid>
				<Grid container xs={12}>
					<Grid item md={12} sx={{textAlign:'initial'}}>
					<Typography sx={{marginTop:'32px',marginLeft:"84px",fontSize: '18px'}} >What kind of translation do you want?  </Typography>
					</Grid> 
					<Grid item md={6} sx={{textAlign:'initial',marginLeft:"84px",marginTop:'16px'}}>
					<label htmlFor="field-rain">
                    <input
                        {...register("translation")}
                        type="radio"
                        value="Word-to-word translation"
                        id="field-rain"
                    />
                    Word-to-word translation
                </label><br/>
                <label htmlFor="field-wind">
                    <input
                        {...register("translation")}
                        type="radio"
                        value="Creative translation"
                        id="field-wind"
                    />
                    Creative translation
                </label>
                
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
export default Translation;