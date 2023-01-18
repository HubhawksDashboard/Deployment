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
function Partnerslider() {
	const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
	const [index, setState] = useState(0);
	// const handleChangeIndex = (index)=> {
	// 	setState({index});
	//onChangeIndex={handleChangeIndex}
	//   };
  return (
	  <>
		  
		  <AutoPlaySwipeableViews sx={{width: '480px',height: '300px'}}>
		  <Card sx={{ display: 'flex',background: '#FFFFFF',width: '480px',
					  height: '300px'
				  }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1OOpEegl4vK-NFIIog1CToTuIw_Sydie6" 
        alt="Live from space album cover"
     sx={{width:'60px',height:'60px',marginLeft:"36px",marginTop:"26px"}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CardContent sx={{ textAlign: 'initial' }}>
						  <Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '16px',textAlign: 'initial',fontWeight: '600',marginTop:'19px'}}>
							  Navya Singh<br />
							  (Editor and Literary Agent)
						  </Typography>
					  </CardContent>
					  <CardContent sx={{marginLeft:"-56px"}}>
						  <Typography component="div" variant="h5" color='#333335' sx={{
							  width: '398px', fontSize: "16px", width: '398px', height: '96px',lineHeight:'24px',textAlign:'initial'
}}>
			There hasn’t been a single day since I joined when I haven’t learned something new at Hubhawks. It is a company full of talented people who push me to break new ground and evolve each day professionally.
		  </Typography>
					  </CardContent>
			  </Box>  
		  </Card>
		  
			  <Card sx={{ display: 'flex',background: '#FFFFFF',width: '480px',
					  height: '300px'}}>
			  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1HeDuwyGeZYaYgQ3Xb8sV1vRDBvEDH06A" 
        alt="Live from space album cover"
     sx={{width:'60px',height:"60px",marginLeft:"36px",marginTop:"26px"}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
					  <CardContent sx={{ textAlign: 'initial' }}>
					  <Typography  variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600',marginTop:'19px'}}>
							  Vitika Gupta<br />
							 (Video Producer)	
						  </Typography>
						  </CardContent>
					  <CardContent sx={{marginLeft:"-56px"}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px",lineHeight:'24px'
,height: '120px',textAlign:'initial'}}>
					Being a creative person I always thrive in variety. Through Hubhawks have worked with a range of clients like fiction/ fantasy authors, companies from the education sector, NGOs and many more. I have learnt how to be positive with tough clients and deliver the best. After completing the project I can sit back in peace knowing that all the payments are done on time.
						  </Typography>
							
				  </CardContent>
				  </Box>
		  </Card>
		  
			  



		   <Card sx={{ display: 'flex',background: '#FFFFFF',width: '480px',
					  height: '300px' }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1CxuoSDLsq_xXtE2MDOEXsl3Kcp-feN9B" 
        alt="Live from space album cover"
     sx={{width:'60px',height:"60px",marginLeft:"36px",marginTop:"26px"}} />
				  <CardContent sx={{ textAlign: 'initial' }}>
				  <Typography variant="h4" color= '#000000' component="div" sx={{fontSize: '18px',fontWeight: '600',marginTop:'19px',width:"300px",height:'50px'}}>
						  Tarun Negi<br />
							 (Graphic Designer)	
					  </Typography>
					  </CardContent>
					  <CardContent sx={{marginLeft:"-206px"}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px",lineHeight:'24px',marginTop:"100px",marginLeft:"-196px",textAlign:'initial'
,height: '120px'}}>
	It is my very first job and I am glad to be an employee at Hubhawks. Everyone treats me here like a family and supports me with my queries. I really enjoy working with them				  </Typography>
						
						</CardContent>
			  
			  </Card> 
			  
			  <Card sx={{ display: 'flex',background: '#FFFFFF',width: '480px',
					  height: '300px'
				  }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1E7TMk0K9pIOM4AYkhr-LEMdgK--c7DHJ" 
        alt="Live from space album cover"
     sx={{width:'60px',height:'60px',marginLeft:"36px",marginTop:"26px"}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CardContent sx={{ textAlign: 'initial' }}>
						  <Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600',marginTop:'19px'}}>
							  Kashish Choudhary<br />
							  (CopyWriter)
						  </Typography>
						  </CardContent>
					  <CardContent sx={{marginLeft:"-56px"}}>
			<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px",lineHeight:'24px',marginTop:"27px",textAlign:'initial'
,height: '120px'}}>
			There are endless opportunities to explore and advance your career at Hubhawks. They treat you like family, not just an employee. The work environment is very fun. Everyone puts in great effort. I feel it's a fantastic place to work and experience exponential growth.  </Typography>
					  </CardContent>
			  </Box>  
		  </Card>



			  
			  </AutoPlaySwipeableViews>
			
	  </>
  );
}

export default Partnerslider;