import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/system';
import Dashboard_au from './Dashboard_author';
import { Paper,Grid } from '@mui/material';

function Faq() {
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isTextViible, setIsTextViible] = useState(false);
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
	};
	const toggleTxt = () => {
		setIsTextViible(!isTextViible);
	};
  return (
	  <>
		  <Dashboard_au />
		  <Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'130px'}}>
		  <Paper width="1152px" height='1148px' sx={{
			  width: '1152px',
			  height: '100px',
			  left: '32px', marginLeft: '240px',
			  marginTop: '115px', background: '#FFFFFF',
			  borderRadius: '12px'
		  }}>
			 <Typography>FAQ</Typography> 
			  </Paper>
			  </Box>
	  
           	
			  {isTextVisible ? (<>
				<Box sx={{ background:'#F3F5F9',display:"flex",width:'1500px',height:'100px'}}>
					<Paper sx={{width: '763px',height: '157px',left: '32px',marginLeft:'240px',marginTop: '115px',background:'#FFFFFF',
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
						  <Grid item md={10}>
						  <Typography>How can a professional editor help?</Typography>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  </Grid>
						  <Grid item md={2}>
						  <Button onClick={toggleText}>	  
				  <KeyboardArrowDownOutlinedIcon/>
					  </Button>  
						  </Grid>
					
					 
					  </Grid> 
				  </Paper>
						  </Box>
			  </>
			    ) : (
				  <>
					  <Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'100px'}}>
					<Paper  width="1152px" height='1148px' sx={{
width: '763px',
height: '54px',
left: '32px',marginLeft:'240px',
marginTop: '115px',background:'#FFFFFF',
					  borderRadius: '12px'
						  }}>
							  <Grid container md={12}>
							  <Grid item md={10}>
						  <Typography>How can a professional editor help?</Typography>
					   
						  </Grid>
						  <Grid item md={2}>
						  <Button onClick={toggleText}>	  
				  <KeyboardArrowDownOutlinedIcon/>
					  </Button>  
						  </Grid>  
							  </Grid>
					
						  </Paper>
						  </Box>
						  </>
				  
				  )}
		  {isTextViible ? (
			  <>
				<Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'100px'}}>
					<Paper  width="1152px" height='1148px' sx={{
width: '1152px',
height: '157px',
left: '32px',marginLeft:'240px',
marginTop: '115px',background:'#FFFFFF',
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
						  <Grid item md={12}>
						  <Typography>How can a professional editor help?</Typography>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  </Grid>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
					  </Button>
					 
					  </Grid> 
				  </Paper>
						  </Box>
			  </>
			    ) : (
				  <>
					  <Box sx={{ background:'#F3F5F9',display:"flex",width:'1600px',height:'100px'}}>
					<Paper  width="1152px" height='1148px' sx={{
width: '1152px',
height: '157px',
left: '32px',marginLeft:'240px',
marginTop: '115px',background:'#FFFFFF',
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
						  <Grid item md={12}>
						  <Typography>How can a professional editor help?</Typography>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  </Grid>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
					  </Button>
					 
					  </Grid> 
				  </Paper>
					  </Box>
				  </>
				  
				  )}
	
	
	  </>
  )
}
export default Faq;