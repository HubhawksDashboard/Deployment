import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from "mui-image";
import { Link } from 'react-router-dom';
const pages = [ 'Home','Services','About','Contact','Blog','Sign in'];

function ResponsiveAppBar() {
  return (
	  <AppBar position='static' sx={{ color: '#000000', backgroundColor: '#FFFFFF', flexDirection: 'row-reverse' }}>	
  <Box sx={{ color:'#FFFFFF', display: { xs: 'flex', md: 'flex'}, marginleft:"20px",margin:'auto',marginRight:"80px"}}>
  
            {pages.map((page) => (
              <Button
					key={page}
                sx={{  color: 'black', display: 'block',mx:2,fontSize:"16px",textAlign:'center',textTransform: 'none',minHeight: 0, minWidth: 0, padding: 0 }}
              >			
					<Link to={`/${page}`} style={{textDecoration:'none',color:'#333335',fontSize:'16px',fontWeight:550}}>{page}</Link>
              </Button>
			))}
			   <Link to='/SignUp' style={{textDecoration:'none',fontWeight:550}}><Button variant='contained' sx={{ margin: "25px",textTransform: 'none'}} >Sign Up </Button> </Link>

		  
		  </Box>
		  <Box sx={{ml:"139px"}}>
			 <Link to='/'> <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '98px',
    height: '105px'
			  }}></Image></Link>
		  
          </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;