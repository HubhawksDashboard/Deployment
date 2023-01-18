import React from 'react';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography } from '@mui/material';
import Image from "mui-image";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ResponsiveAppBar from './menu';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
		backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`,
		width: '608px',
		height:'750px'
    }
};


function Home(){
	const [data, setData] = useState({
		Name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/Editing");
			console.log(res.message);
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
	const google = () => {
		window.open("http://localhost:8080/auth/google", "_self");
		console.log('lol')
	};
	return (<>
			<ResponsiveAppBar/>
			<Grid container md={12}>		
			<Paper style={styles.paperContainer}>
			<Grid Container md={6} sx={{marginLeft:'55px'}}>
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
		<Grid container md={12}>
          <Typography component="h1" variant="h3"sx={{fontfamily: 'Roboto', fontstyle: 'normal',fontsize: '36px',textAlign:'center',fontWeight:'600',lineheight: '48px'}}>
            Create Account 
          </Typography>
			</Grid>
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container md={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item md={1}>
			<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item md={12} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
				  id="Name"
				  onChange={handleChange}
				  value={data.Name}
                  label="Enter your name"
                  size='small'
                />
              </Grid>
              </Grid>
			<Grid container md={12} sx={{mt:'10px',mb:'20px'}} >
				<Grid item md={1} spacing={2}>
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email</Typography>
				</Grid>
				<Grid item md={12} >
				<TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter Your email"
				 name="email"
				 onChange={handleChange}
				  value={data.email}
				autoComplete="email"
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
                <Link href="#" variant="body2" style={{textDecoration:'none'}}>
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
				borderRadius: '8px'}}
			>
			Sign Up
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
			Sign up with Google
			</Button>
				</Grid>
				</Grid>
				<Grid container justifyContent="flex-end" md={12}>
              <Grid item md={12}>
                <Typography href="#" variant="body2" >
                  Already have an account?<Link to="/Sign in" variant="body2"style={{textDecoration:'none'}}>Sign in</Link> 
                </Typography>
              </Grid>
			</Grid>
									
          </Box>
        </Box>
		
		</Container>
		</ThemeProvider>
		</Grid>
		</Grid>
		</>
        )
    }
export default Home;