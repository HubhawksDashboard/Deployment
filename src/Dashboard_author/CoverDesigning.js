import React from 'react'
//import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm, Controller, FormProvider } from "react-hook-form";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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


import { green, blue, grey, red,common } from "@mui/material/colors";
import Dashboard_au from './Dashboard_author';


// const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
// const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
// const drawerWidth = 240;



function CoverDesigning(props, status, r, profile,dash) {
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
		const response = await fetch("http://localhost:5000/coverdesign", {
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
	function colorForStatus(dash) {
		switch (dash) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming-of-age":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
				return common;
			
		  
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



  const container = window !== undefined ? () => window().document.body : undefined;

	return (<>
		<Dashboard_au />
		<Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'1600px'}}>
		<Paper component='form' width="1152px" height='1300px' sx={{position: 'absolute',
width: '1152px',
height: '1500px',
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
		
				 
				  <Grid container md={12}>
				<Grid item md={12}sx={{textAlign:'initial'}}>
					  <Typography sx={{ml:'84px',marginTop:'21px',fontSize: '18px'}} >Which three words describe your book?</Typography>
				</Grid>
				
				<Grid item md={12} sx={{justifyContent:'initial'}}>
				<Button label="Adventurous" variant='outlined'
							 style={{
								backgroundColor: colorForStatus((status = adventurous))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = adventurous))[900], width: '134px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:"18px",textTransform:'none'
								  }} 
								  value={user.description}
							  onClick={(e) => {
								  setAdventurous("Adventurous");
								  
								  setValue("words1", "Adventurous");
								  
							  }} >Adventurous </Button>
						  <Button variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Autobiographical))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Autobiographical))[900], width: '168px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
							  }} 
							  label="Autobiographical"
							onClick={(e) => {
								
								
								   setAutobiographical("Autobiographical");
								   setValue("words2", "Autobiographical");
							  }} >Autobiographical </Button>
						 {/* //onDelete={ (e) => {
					// 		setAutobiographical("")
					//    }}  */}
						  <Button label="Biography" variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Biography))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Biography))[900], width: '113px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
							  }}
							  onClick={(e) => {
								  setBiography("Biography");
								  
								  setValue("words3", "Biography"); }} >Biography</Button>
						  <Button label="Candid" variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Candid))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Candid))[900], width: '89px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
								
							  }} onClick={(e) => {
								  setCandid("Candid");
							  setValue("word4","Candid")}} >Candid</Button>
						  
						  <Button  variant='outlined' label="Classic"
							  style={{
								backgroundColor: colorForStatus((status = Classic))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Classic))[900], width: '91px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
								
							  }} onClick={(e) => {
								setClassic("Classic");
								  setValue("word5","Classic")
							  }} >Classic</Button>
						  <Button variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Coming))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Coming))[900], width: '162px',
								  height: '40px', borderRadius: '20px', marginLeft: '16px', fontSize: '18px', textTransform: 'none',
								  padding: '6px 16px'
							  }}
							  onClick={(e) => {
								  setComing("Coming-of-age");
							  setValue("word6","Coming-of-age")}} >Coming-of-age</Button>

						  <Button label="Dark" variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Dark))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Dark))[900], width: '69px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
							  }}
							  onClick={(e) => {
								  setDark("Dark");
							  setValue("word7","Dark")}} >Dark</Button>
						  <Button label="Deep"  variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Deep))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Deep))[900], width: '74px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
							  }}
							  onClick={(e) => {
								  setDeep("Deep");
							setValue("word8", "Deep")
						}} >Deep</Button>
						<br />
						<Grid item md={12} sx={{ marginTop: '22px', display:'flex'}}>
						  <Button label="Diverse" variant='outlined'
							 style={{
								backgroundColor: colorForStatus((status = Diverse))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Diverse))[900], width: '92px',
								 height: '40px', borderRadius: '20px', marginLeft: '84px',fontSize:'18px',textTransform:'none'
							  }} onClick={(e) => {
								  setDiverse("Diverse");
							  setValue("word9","Diverse")}} >Diverse</Button>
						  <Button label="Educational" variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Educational))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Educational))[900], width: '127px',
								height: '40px',borderRadius:'20px',marginLeft:'16px',fontSize:'18px',textTransform:'none'
							  }} onClick={(e) => {
								  setEducational("Educational");
								  setValue("word10","Educational")}}>Educational</Button>
						  <Button label="Empowering"  variant='outlined'
							style={{
								backgroundColor: colorForStatus((status = Empowering))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Empowering))[900],width: '133px',
								height: '40px',borderRadius:'20px',fontSize:'18px',textTransform:'none',marginLeft:'16px'
								
							  }} onClick={(e) => {
								  setEmpowering("Empowering");
								  setValue("words11", "Empowering");
							  }} >Empowering</Button>
						<Button label="Emotional" variant='outlined'
							style={{
								backgroundColor: colorForStatus((status = Emotional))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Emotional))[900],width: '113px',
								height: '40px',borderRadius:'20px',fontSize:'18px',textTransform:'none',marginLeft:'16px'
							  }} onClick={(e) => {
								  setEmotional("Emotional");
								  setValue("word12", "Emotional");
							  }} >Emotional</Button>
						  <Button label="Fictional" variant='outlined'
							 style={{
								backgroundColor: colorForStatus((status = Fictional))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Fictional))[900],width: '101px',
								height: '40px',borderRadius:'20px',fontSize:'18px',textTransform:'none',marginLeft:'16px'
							  }} onClick={(e) => {
								  setFictional("Fictional");
								  setValue("words13", "Fictional");}} >Fictional</Button>
						  <Button label="Funny"  variant='outlined'
							  style={{
								backgroundColor: colorForStatus((status = Funny))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Funny))[900],width: '81px',
								height: '40px',borderRadius:'20px',fontSize:"18px",textTransform:'none',marginLeft:'16px'
							  }} onClick={(e) => {
								  setFunny("Funny");
							  setValue("words14","Funny")}}>Funny </Button>
						  <Button label="Futuristic" variant='outlined'
							  style={{backgroundColor: colorForStatus((status = Futuristic))[300],
								background:"#F3F5F9",
								color:colorForStatus((dash = Futuristic))[900],width: '107px',
								height: '40px',borderRadius:'20px',fontSize:'18px',textTransform:'none',marginLeft:'16px'
								 
							  }} onClick={(e) => {
								  setFuturistic("Futuristic");
									setValue("words15", "Futuristics")
								}}>Futuristic</Button>
							</Grid>
    </Grid>
				  </Grid>
					<Grid container xs={12}>
						<Grid item md={12} sx={{textAlign:'initial'}}>
						<Typography sx={{marginTop:"62px",marginLeft:"84px",fontSize:"18px"}}>What visual representation suits your story? (Choose any 3)</Typography>
						</Grid>

						<Grid item md={5} sx={{marginTop:"20px"}}>
							<Box sx={{ backgroundColor: "#F3F5F9", width: "471px", height: '388px' }}>
								<Grid container md={12}>
								<Grid item md={12}>
								<Typography sx={{ fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>Stock</Typography>
								</Grid>
									<ImageList
        sx={{ marginTop: "20px",marginLeft:"46px" }}
        cols={4} gap={25}
        style={{ overflow: "hidden" }}
								>
									<ImageListItem>
			<Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SdaDciOlxeYWXUAKPzjfvEapAkZqH4OF"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}
									/>
									 <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									 <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
									<ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px' }}
            />
            
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
			<Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
									<ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px' }}
            />
            
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
			<Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
	  </ImageList></Grid>
							</Box>
							
						</Grid>
						<Grid item md={1} sx={{textAlign:'center'}}>
							<Typography sx={{marginTop:"191px",fontWeight:"400",fontSize:"18px",marginLeft:"25px",fontStyle:"normal"}}>OR</Typography>
						</Grid>
						<Grid item md={6}>
						<Box sx={{ backgroundColor: "#F3F5F9", width: "471px", height: '388px' }}>
								<Grid container md={12}>
								<Grid item md={12}>
								<Typography sx={{ fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>Illustrations</Typography>
								</Grid>
									<ImageList
        sx={{ marginTop: "20px",marginLeft:"46px" }}
        cols={4} gap={25}
        style={{ overflow: "hidden" }}
								>
									<ImageListItem>
			<Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SdaDciOlxeYWXUAKPzjfvEapAkZqH4OF"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}
									/>
									 <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									 <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
									<ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px' }}
            />
            
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
			<Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
									<ImageListItem>
            <Image  Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px' }}
            />
            
            <Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
			<Image   Duration={0} src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{ m: "auto",transitionDuration:'0',animation:'0',width:'109px',height:'81px',borderRadius:'12px',marginBottom:'26px'}}/>
            
									</ImageListItem>
	  </ImageList></Grid>
							</Box>
						</Grid>
			</Grid>
				  <Grid container xs={12}>
					  <Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginTop:'56px',marginLeft:'84px',fontSize:'18px'}}>What is the “Title of the Story”?</Typography>
						 </Grid>
						  <Grid item md={6} sx={{marginLeft:'84px',marginTop:'16px'}}>
						  <TextField placeholder='writehere'
							  id="Wordsbook"
							  name="Title"
							  label="Wordsbook"
							  fullWidth
							  margin="dense"
							  {...register('title')}
							  error={errors.Comments ? true : false}
						     
							 />
					  </Grid>
				  </Grid>
				  <Grid container xs={12}>
					  <Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginLeft:"84px",MarginTop:"56px",fontSize:"18px"}}>What is the summary of the Story?</Typography>
						</Grid>
						<Grid item md={6}  sx={{marginLeft:"84px",marginTop:"16px"}}>
						  <TextField 
							 required
							 id="Summary"
							 name="Summary"
							 label="Summary"
							 fullWidth
							 margin="dense"
							 {...register('Summary')}
							 error={errors.Summary ? true : false}
        />
				</Grid>
				</Grid>
				<Grid container xs={12}>
				<Grid item md={12} sx={{textAlign:'initial'}}>
						 
				<Typography sx={{marginTop:"62px",marginLeft:'84px',fontSize:'18px'}}>What is the expected timeline? </Typography>		  
		</Grid>
		<Grid item md={6} sx={{textAlign:'initial',marginTop:'16px',marginLeft:'84px'}}>
		<label htmlFor="field-rain">
                    <input
                        {...register("timeline")}
                        type="radio"
                        value="1 week"
                        id="field-rain"
						style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    1 week
                </label><br/>
				
                <label htmlFor="field-wind">
                    <input
                        {...register("timeline")}
                        type="radio"
                        value="2-3 week"
                        id="field-wind"
						style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    2-3 week
                </label><br/>
                <label htmlFor="field-sun">
                    <input
                        {...register("timeline")}
                        type="radio"
                        value="3-4 week"
                        id="field-sun"
						style={{width:"16px",
							height:'16px',marginRight:'12px'}}
                    />
                    3-4 week
					  </label><br/>
					  </Grid>	
					  
				 </Grid>
				 
				  <Grid container md={12}>
					  <Grid item md={12} sx={{textAlign:'initial'}}>
						  <Typography sx={{marginTop:'62px',marginLeft:'84px'}}>Additional comments (Optional)</Typography>
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
export default CoverDesigning;