import React from 'react'
import { Button, Grid, Typography,Paper} from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
import MenuItem from '@mui/material/MenuItem';
import ResponsiveAppBar from './menu';
import Select from '@mui/material/Select';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Footer from '../footer';
import Carousel from 'react-material-ui-carousel'
import Partnerslider from './slider';
import Editing from '../Dashboard_author/Editing';
import CoverDesigning from '../Dashboard_author/CoverDesigning';
function Partnerus() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	const [service, setServices] = React.useState('');
	const handleChange = (event) => {
		setServices(event.target.value);
	  };
	console.log(errors);
	return (<>
	  <ResponsiveAppBar />
	  <>
	  <Grid container md={12}>
		  <Grid container md={6}>
			<Box sx={{backgroundColor:' #BB00000A',width: '704px',height: '912px',marginTop:"20px",marginBottom:'74px'}}>
			
			<Grid container md={12} spacing={2} >
				  <Grid item md={12} spacing={2} sx={{}}>
				  <Typography variant='h2' sx={{
					  fontStyle: 'normal', fontWeight: '600', fontSize: '36px', lineHeight: '48px', textAlign: 'center',
					  color: '#BB0000',marginTop:'56px',marginLeft:"110px",marginRight:'40px'
				  }}>Why you should partner with us</Typography>   
							</Grid>
					<Box sx={{width:'500px',marginLeft:"110px",marginRight:'40px'}}>
					<Grid container spacing={2}>	
						<Grid item md={1} style={{marginTop:"37px"  }}>
					  <CheckCircleOutlineRoundedIcon sx={{color:'green',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item >
					  <Typography sx={{marginTop:"37px"}}>200+ authors actively working with us</Typography>
					  </Grid>
					  
					  </Grid>
					  
					 
					  <Grid container spacing={2}>
					<Grid item md={1} style={{marginTop:"21px"  }} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'green',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item >
					  <Typography sx={{marginTop:"21px"}} >100k+ content pieces delivered</Typography>
					  </Grid>

					  </Grid>


					  <Grid container spacing={2} >
						<Grid item md={1}  style={{marginTop:"21px"  }}>
					  <CheckCircleOutlineRoundedIcon sx={{color:'green',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item >
					  <Typography sx={{marginTop:"21px"}}>Hassle-free payments</Typography>
					  </Grid>

					  </Grid>
						<Grid container spacing={2} >
						<Grid item md={1}  style={{marginTop:"21px"  }}>
					  <CheckCircleOutlineRoundedIcon sx={{color:'green',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item >
					  <Typography sx={{marginTop:"21px"}}>Connect with like-minded clients</Typography>
					  </Grid>

					  </Grid>
					  <Grid container spacing={2} >
						<Grid item md={1}  style={{marginTop:"21px"  }}>
					  <CheckCircleOutlineRoundedIcon sx={{color:'green',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item >
					  <Typography sx={{marginTop:"21px"}}>Excel in your niche</Typography>
					  </Grid>

					  </Grid>
					  </Box>
						</Grid>

					 <Grid container md={12} sx={{marginLeft:"100px",marginTop:'56px'}}>
						  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}>Trusted By</Typography>
							</Grid>	
				  <Grid container md={12} sx={{marginTop:"16px"}}>		
					  <Grid item md={3} sx={{marginLeft:'70px'}} >
				<Image src="https://drive.google.com/uc?export=view&id=1oxOpbsvHPzmZz7El_wFTVxsp6t9U7gYL" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
							  height: '48px'
						  }}>
							  
	</Image>
					  </Grid>
					  <Grid item md={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1RFPo_Uqxz8lYvx0ZSR5rtn9jdTL3kx-h" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
					  </Grid>
					  <Grid item md={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
			  </Grid>




				  </Grid>
  						<Grid item md={12} sx={{marginTop:"60px",marginLeft:"90px"}}>
						<Partnerslider />
						</Grid>
			  </Box>		  
		  </Grid>
		  <Grid container md={6}>
				 
					<Box component="form" noValidate onSubmit={handleSubmit} >
					<Typography variant='h2' sx={{fontSize:"36px",fontWeight:600,marginTop:'67px',textAlign:'center'}}> Partner with Us </Typography> 
		
						<Grid container md={12} >
							
			<Grid container md={12} sx={{marginLeft:"125px"}}>
			<Grid item md={12} sx={{marginTop:'36px',textAlign:'initial'}}>
			<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item md={5} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Enter your full name"
										size='small'
										sx={{width:"363px",height:"40px"}}
                />
              </Grid>
              </Grid>
			
				<Grid container md={12} sx={{marginLeft:"125px"}}>
				<Grid item md={12}sx={{marginTop:'16px',textAlign:'initial'}} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email</Typography>
				</Grid>
              <Grid item md={5} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Enter your email"
                  type="email"
                  id="email"
													autoComplete="new-password"
										size='small'
										sx={{width:"363px",height:"40px"}}
                />
				</Grid>
							</Grid>
							<Grid container md={12} sx={{marginLeft:"125px"}}>
				<Grid item md={12} sx={{marginTop:'16px',textAlign:'initial'}}>
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Phone Number</Typography>
				</Grid>
              <Grid item md={5} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your Phone number"
                  type="password"
                  id="password"
				  autoComplete="new-password"
										size='small'
										sx={{width:"363px",height:"40px"}}
                />
				</Grid>
				</Grid>
					  <Grid container md={12} sx={{marginLeft:"125px"}}>
				<Grid item md={12}  sx={{marginTop:'16px',textAlign:'initial'}}>
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Services Offered</Typography>
				</Grid>
								<Grid item md={5} >
									
			  <Select
          labelId="demo-simple-select-label"
										id="demo-simple-select"
										displayEmpty
          value={service}
          sx={{width:'364px',height:"40px",textAlign:'initial'}}
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
					  
				<Grid container md={12} sx={{marginLeft:"125px"}}>
				<Grid item md={12} sx={{marginTop:'16px',textAlign:'initial'}} >
					<Typography variant='h4' sx={{ fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Portfolio/Work samples</Typography>
				</Grid>
              <Grid item md={5} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="work sample"
                  type="password"
                  id="password"
													autoComplete="new-password"
										size='small'
										sx={{width:"363px",height:"40px"}}
                />
				</Grid>
				</Grid>
				<Grid container md={12} sx={{marginLeft:"125px"}}>
				<Grid item md={12} sx={{marginTop:'16px',textAlign:'initial'}} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Additional Comments</Typography>
				</Grid>
              <Grid item md={5} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Write your comments "
                  type="password"
                  id="password"
										autoComplete="new-password"
										multiline
										rows={4}
										size='small'
										sx={{width:"363px",height:"86px"}}
                />
				</Grid>
					  </Grid>
					  <Grid container md={10} >
							<Grid item md={8}sx={{marginTop:'32px',
							width: "330px",height:"48px",marginLeft:"125px",textAlign:'initial'}}>
							<FormControlLabel control={<Checkbox defaultChecked />} label="By clicking this box, you agree to our T&C and Privacy Policy" />
							</Grid>
							</Grid>
              <Grid item md={6}  >
			  <Grid container justifyContent="flex-end" md={12}>
              <Grid item>
			  <Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: '24px', background: '#3A81F3',width:"160px",height:"48px",textTransform:"none",
				borderRadius: '8px'}}
			>
			Submit
			</Button>
              </Grid>
            </Grid>
								</Grid>
								
						</Grid>		
							
          </Box>
		  </Grid>
	  </Grid>	  
  </>
		<Footer />
	</>
  )
}
export default Partnerus;
