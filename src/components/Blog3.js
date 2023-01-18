import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import ResponsiveAppBar from './menu'
function Blog3 () {
	return (
		<>
			<ResponsiveAppBar/>
	  <Box>
		  <Grid container md={12}>
			  <Grid item md={12} sx={{textAlign: 'center'}}>
				  <Typography variant='h2' sx={{fontSize:'36px',width:"800px",height:"48px",marginTop:'64px',fontWeight:'600',lineHeight:"48px",textAlign: 'center',marginBottom:'64px',marginLeft:'351px'}}>
				  Tricks to Writing a Non-Fiction Bestseller
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container md={12}>
			  <Grid item md={12}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SdaDciOlxeYWXUAKPzjfvEapAkZqH4OF"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:"752px",height:'392px',borderRadius:"12px"}}
            />
			  </Grid>
		  </Grid>
		  <Grid container md={12}>
			  <Grid item md={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"56px"}}>
				  If you're a novice non-fiction writer, you'll need a clear writing strategy in addition to stellar literary abilities.</Typography>
			  </Grid>
			  <Grid item md={12}>	  
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
							As a newbie, you may lack the perspective that comes with experience. Uncertainty about the correct course of action can be one of your biggest obstacles along the way. But, the right approach can take you a long way!
					</Typography>
					</Grid>
					<Grid item md={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
				  Here are some tricks of the trade that will come in handy if you’re beginning your career in writing non-fiction:</Typography>
			  </Grid>
			  
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3'sx={{textAlign:"initial",width:'300px',height:"40px",fontSize:"24px",marginLeft:'378px',fontWeight:'600',marginTop:'32px'}}>Engaging Writing Style</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"780px",height:"168px",fontSize:"18px",marginLeft:'378px',textAlign:'initial',marginTop:"8px",lineHeight:'28px'}}>It is true that a lot of excellent novels fail to make the bestsellers list. It's also true that most novels on the list, especially those that remain there for a while, are well-written and engaging. If you are writing a self-help book, engaging writing pertains to being more interactive in your voice and style. While for academic books, the focus should be on the right terminology. Refrain from drowning your page with tedious descriptions and information overload. Instead, present the facts in an interesting manner.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{lineHeight:'40px',textAlign:"initial",width:'804px',height:"80px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Accurate Facts and information is the heart and soul of writing non-fiction</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px",lineHeight:"28px"}}>While writing non-fiction, there is no room for creative licence especially when you are dealing with facts, data and technical information. Examine everything meticulously by engaging in rigorous fact-checking to ensure authenticity.</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'800px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Write to Connect, not to Impress</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"140px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>Connecting with your target audience is the main goal of your book. Your word choice and writing style must take into account their needs. You should express yourself in a clear and refined language. By the same principle, you shouldn't write to impress others by using bombastic words" or possibly complicated terms when there are simpler ones that can convey the same ideas.</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'300px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Intensive Research</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>Read as many informative, best-selling books about your field as possible. Become well-versed with the main ideas that have been expressed in your area of research.</Typography>
			  </Grid> 
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>Survey and speak with a variety of people. Expand your pool by turning towards documentaries and films. You might just get some nuggets of wisdom which can give your book a distinct angle that can differentiate it from the crowd.</Typography>
			  </Grid>
			  
				</Grid>
				<Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'300px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>One Last Thing</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>It is good to strive for the top but don’t forget to enjoy the journey. Appreciate the fact that you have made a significant contribution with your writing in your field that will still be useful and inspire a large number of people.</Typography>
			  </Grid> 
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>No matter what, it's a worthwhile achievement!</Typography>
			  </Grid>
			  
			  </Grid>
			</Box>
			</>
  )
}

export default Blog3