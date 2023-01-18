import React from 'react';
import  { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography } from '@mui/material';
import Image from "mui-image";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDevice } from './responsive/devices';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Dashboard_menu from '../Dashboard_author/Dashboard_menu'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ResponsiveAppBar from './menu';
const theme = createTheme();
function Copyright(props) {
	
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		  Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
const styles = {
    paperContainer: {
		
    }
};

function Signin() {
	const devices = useDevice();
	const google = () => {
		window.open("https://localhost:8080/auth/google", "_self");
		console.log('lol')
	};
	// const [profile, setProfile] = useState([]);
	const [show, setShow] = useState(false);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
	});
	const [data, setData] = useState({
		
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit1 = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/r";
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	
    const onSuccess = (res) => {
		// setProfile(res.profileObj);
		// console.log(res);
		// console.log(res.profileObj);
    };

    const onFailure = (err) => {
        // console.log('failed', err);
    };

    const logOut = () => {
		// setProfile(null);
		
		
		sessionStorage.clear();
		localStorage.clear();
    };
	
	// const r = () => { <>
	// 	{/* <h1>Rajiv</h1>
    //                 <img src={profile.imageUrl}  referrerPolicy='no-referrer' alt="user image" />
    //                 <h3>User Logged in</h3>
    //                 <p>Name: {profile.name}</p>
    //                 <p>Email Address: {profile.email}</p>
    //                 <br />
	// 				<br /></> */}
	// }
	
	return (<>
		<>
			<ResponsiveAppBar/>
				<Grid container md={12}>		
			<Paper style={{backgroundImage: devices.desktop?`url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`:`url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`,
		width: '608px',
		height:'750px'}}>
					<Grid Container md={6} xs={12} sx={{marginLeft:devices.desktop?'55px':'0px'}}>
				<Grid overlay={styles.overlay}>
			{/* <Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" duration={0} style={{
    width: '98px',
    height: '111px',marginTop:'12px'
					}}></Image> */}
						</Grid>
						</Grid>	
				</Paper>			
			<Grid container md={6}>			
			<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
							>
		<Grid container md={12} xs={12} sx={{marginLeft:'185px'}}>
          <Typography component="h1" variant="h3"sx={{fontfamily: 'Roboto', fontstyle: 'normal',fontsize: '36px',textAlign:'center',fontWeight:'600',lineheight: '48px'}}>
            Sign in
										</Typography>
										
			</Grid>
		<Box component="form" noValidate onSubmit={handleSubmit1} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container md={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item md={1} xs={6}>
			<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item md={12} >
                <TextField
                  autoComplete="given-name"
                  required
														fullWidth
											name="email"
				  onChange={handleChange}
				  value={data.email}
                  label="Enter your email"
                  size='small'
                />
              </Grid>
              </Grid>
			
				<Grid container md={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={1} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Password</Typography>
				</Grid>
              <Grid item md={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
				  id="password"
				  onChange={handleChange}
				 value={data.password}
													autoComplete="new-password"
													size='small'
                />
				</Grid>
											</Grid>
			{error && <div className={styles.error_msg}>{error}</div>}
              <Grid item md={12} >
			  <Grid container justifyContent="flex-end" md={12}>
              <Grid item>
                <Link href="#" variant="body2" style={{textDecoration:"none",backgroundColor: 'transparent'}}>
                  forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px',textTransform:"none"}}
			>
			Sign In
			</Button>	
									
								
					  
                   
                    
													
			<Grid container md={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={12} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>OR</Typography>
				</Grid>
				<Grid item md={12} >
				<Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: 3, mb: 2, background: 'White',
				borderRadius: '8px',color:'black',
				fontStyle: 'normal',
				fontWeight: '500',
				fontSize: '16px',marginRight:'20px',textTransform:"none"}}
				onClick={google}>
		
			<Image duration={0} src='https://drive.google.com/uc?export=view&id=1k5vItsQ0FbrmLPMHYxMb88X3BNK0e9uH' width='26px' height='26px'sx={{marginRight:'50px'}} ></Image>
			Login with Google
			</Button>
					
				</Grid>
				</Grid>
				
									
          </Box>
        </Box>
		
		</Container>
		</ThemeProvider>
		</Grid>
		</Grid>
               
													
					</>								
            
			
		</>
        )
    }
export default Signin;