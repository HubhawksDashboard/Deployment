import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Avatar, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from "mui-image";
import { useState } from 'react';
function SwipeableTextMobileStepper() {
	const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
	const [index, setState] = useState(0);
	// const handleChangeIndex = (index)=> {
	// 	setState({index});
	//onChangeIndex={handleChangeIndex}
	//   };
  return (
	  <>
		  <Box sx={{backgroundColor:'white'}}> 
		  <AutoPlaySwipeableViews sx={{width: '1120px',height: '262px'}}>
		  <Card sx={{ display: 'flex',backgroundColor: '#bb00000a',width:'1120px',height:'262px',margin:'auto',borderRadius: '20px' }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1_IukUsNVyk1Vw1hd-blJfZA0weyEyPj4" 
        alt="Live from space album cover"
     sx={{width:'150px',height:'150px',margin:'auto'}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column',margin:'auto' }}>
			<CardContent sx={{textAlign:'initial'}}>
			<Typography component="div" variant="h5" color= '#333335' sx={{width: '630px',fontSize:"16px"
,height: '72px'}}>
			It was a pleasure collaborating with HubHawks. The animated videos are well designed and conceptualised, videos are engaging, highly professional, very gripping, theme oriented and the best part is that they are well edited. 
			</Typography>
			<Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600'}}>
			Manuraj Dubey
          </Typography>
		  </CardContent>
			  </Box>  
		  </Card>
		  
			  <Card sx={{ display: 'flex',backgroundColor: '#bb00000a',width:'1120px',height:'262px',margin:'auto',borderRadius: '20px'   }}>
			  <Avatar
        src="https://drive.google.com/uc?export=view&id=1sboSwbsVonwhA_B57ON-DEkUkDJQz-Eo" 
        alt="Live from space album cover"
     sx={{width:'150px',height:"150px",margin:'auto'}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column',margin:'auto' }}>
						<CardContent sx={{textAlign:'initial'}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '630px',fontSize:"16px"
,height: '72px'}}>
						The team at HubHawks is like a breath of fresh air. They don't just copy-paste your ideas, these young individuals own your creative expression. Their brilliant additions take the work a notch higher. Glad to be working with them.	</Typography>
							<Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600',margin:"auto"}}>
							Saba Karim Khan
          </Typography>
				  </CardContent>
				  </Box>
		  </Card>
		  
		   <Card sx={{ display: 'flex',backgroundColor: '#bb00000a',width:'1120px',height:'262px',margin:'auto',borderRadius: '20px'   }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1TA1u04H2sjWcjT_KOTTjlTuPbt0zHSzg" 
        alt="Live from space album cover"
						  sx={{ width: '150px', height: "150px",margin:'auto' }} />
					  <Box sx={{ display: 'flex', flexDirection: 'column',margin:'auto' }}>
					  <CardContent sx={{textAlign:'initial'}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '630px',fontSize:"16px"
,height: '72px'}}>
						I was amazed by the way the team was able to bring the descriptions and characters I shared with them to life. The attention to detail is simply impeccable.	</Typography>
							<Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600'}}>
							Krishna Udayasankar
          </Typography>
						</CardContent></Box>
			  
		  </Card> 
			  
			  </AutoPlaySwipeableViews>
			  </Box>
	  </>
  );
}

export default SwipeableTextMobileStepper;