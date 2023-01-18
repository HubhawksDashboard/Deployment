import React from 'react'
import { Button, Grid, Typography,Paper, Card} from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
import { Box } from '@mui/material';
import ResponsiveAppBar from './menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../footer';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
	
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	const [service, setServices] = React.useState('');
	const handleChange = (event) => {
		setServices(event.target.value);
	  };
	return (<>
	  <ResponsiveAppBar />
	  <Grid container md={12}>
		  
			<Grid container md={4} sx={{ alignItems: 'center' }}>
				<Box></Box>
				<Grid item md={8} sx={{ mt: 5, ml:'151px'}}>
				  <Typography variant='h2' sx={{
fontStyle: 'normal',
fontWeight: 600,
fontSize: '36px',textAlign:'initial',
lineHeight: '48px',
color: '#BB0000'}}>We would love to hear from you</Typography> 
				  </Grid>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: '42px', ml:'151px' }}>
            <Grid container >
			<Grid container md={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item md={6} sx={{textAlign:"initial"}}>
			<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item md={7} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Enter your full name"
									size='small'
									sx={{width:"363px",height:'20px'}}
                />
              </Grid>
              </Grid>
			
				<Grid container md={12} sx={{mt:'32px',mb:'10px'}}>
				<Grid item md={6} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Email</Typography>
				</Grid>
              <Grid item md={7} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Enter your email"
                  type="email"
                  id="email"
													autoComplete="new-password"
									size='small'
									sx={{width:"363px",height:'36px'}}
                />
				</Grid>
					  </Grid>
					  <Grid container md={12} sx={{mt:'32px',mb:'10px'}}>
				<Grid item md={6} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Phone Number</Typography>
				</Grid>
              <Grid item md={7} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
				  autoComplete="new-password"
									size='small'
									sx={{width:"363px",height:'36px'}}
                />
				</Grid>
					  </Grid>
					  <Grid container md={12} sx={{mt:'32px',mb:'10px'}}>
				<Grid item md={6} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>What help do you need</Typography>
				</Grid>
              <Grid item md={7} >
			  <Select
          labelId="demo-simple-select-label"
										id="demo-simple-select"
										displayEmpty
          value={service}
          sx={{width:'364px',height:"40px",textAlign:"initial"}}
										onChange={handleChange}
										
									>
										 <MenuItem value="">
            Please select
          </MenuItem>
          <MenuItem value="Editing">Editing</MenuItem>
          <MenuItem value={"Cover Designing"}>CoverDesigning</MenuItem>
		  <MenuItem value={"Ghost Writing"}>Ghost Writing</MenuItem>
		<MenuItem value={"BookStore"}>BookStore</MenuItem> 
		<MenuItem value={"BookReview"}>BookReview</MenuItem>							
		<MenuItem value={"BookTrailer"}>BookTrailer</MenuItem>
		<MenuItem value={"AmazonAds"}>AmazonAds</MenuItem>
        </Select>
				</Grid>
						</Grid>
						
				<Grid container md={12} sx={{mt:'32px',mb:'10px'}}>
				<Grid item md={6} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Additional Comments</Typography>
				</Grid>
              <Grid item md={7} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
				  autoComplete="new-password"
									size='small'
									sx={{width:"363px",height:'86px'}}
                />
				</Grid>
					  </Grid>
					  
              <Grid item md={6} >
			  <Grid container justifyContent="flex-end" md={12}>
              <Grid item>
			  <Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: 3, mb: 2, background: '#3A81F3',textTransform:"none",
				borderRadius: '8px'}}
			>
			Let's Connect
			</Button>
              </Grid>
            </Grid>
              </Grid>
				  </Grid>					
          </Box>
		  </Grid>
		  <Grid container md={7}>
			<Image src='https://drive.google.com/uc?export=view&id=1ePBp6D_KwJcCp5CuPwrV3Vmmv4jVb6G_' style={{position: 'absolute',
width: '530px',
height: '675px',marginLeft:'187px'
 }}></Image>
		  </Grid>
		</Grid>



		{/*contact us card */}

		<Box sx={{m:12}}>
		<Card sx={{
			display: 'flex', backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1qZQGUIyH_yaza2IsL4wFX4T1Wx3_qf1q)',backgroundRepeat:"no-repeat",backgroundSize:'564px',width: '564px', alignItems:'center',borderRadius: '20px',margin:'auto',
height: '327px'}}>
	  
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CardContent sx={{marginLeft:"195px"}}>
					<Typography component="div" sx={{
fontStyle: 'normal',
fontWeight: 600,
fontSize: '36px'}}>Contact us</Typography>
	
						
						<Button style={{color:"black",fontSize:"18px",fontWeight:'600'}} ><LocalPhoneIcon/>+91-7060495034</Button>
					
						<Button style={{color:"black",textTransform:'none',fontSize:"18px",fontWeight:'600'}} ><EmailIcon />sales@Hubhawks.com</Button>
					
					
				
				</CardContent>
				</Box>
			</Card>
			</Box>
		<Footer />
	  </>
  )
}
export default Contact;
