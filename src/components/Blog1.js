import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import ResponsiveAppBar from './menu'
function Blog1 () {
	return (
		<>
			<ResponsiveAppBar/>
	  <Box>
		  <Grid container md={12}>
			  <Grid item md={12} sx={{textAlign: 'center'}}>
				  <Typography variant='h2' sx={{fontSize:'36px',width:"800px",height:"48px",marginTop:'64px',fontWeight:'600',lineHeight:"48px",textAlign: 'center',marginBottom:'64px',marginLeft:'351px'}}>
				  Secrets for Writing a Fiction Bestselling Novel
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container md={12}>
			  <Grid item md={12}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:"752px",height:'392px',borderRadius:"12px"}}
            />
			  </Grid>
		  </Grid>
		  <Grid container md={12}>
			  <Grid item md={12}>	  
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"56px"}}>
				  For aspiring authors who want to turn their ideas into stories, writing a bestselling novel is a dream come true. However, it is not a cakewalk. One simply cannot celebrate the peaks of success by escaping the valleys of struggles and failures.
				  </Typography>
			  </Grid>
			  <Grid item md={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
				  While there are no shortcuts to writing bestselling fiction, the following tips will help you sail in a smooth writing process with no major hiccups:</Typography>
			  </Grid>
			  
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3'sx={{textAlign:"initial",width:'300px',height:"40px",fontSize:"24px",marginLeft:'378px',fontWeight:'600',marginTop:'32px'}}>Craft a compelling story</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>This might seem like an obvious one, but a lot of people find themselves lost in a sea of descriptions without any idea where they are going with their tale. Make sure you have a comprehensive outline that can act as a solid foundation on which you build your narrative.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'500px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Write with the Reader's Perspective in Mind</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>The best way to write for your readers is to step into their shoes and think like them. Some questions you can ask yourself are - What makes them happy? Which turn of events can entice them so much that they would want to keep flipping the pages?</Typography>
			  </Grid> 
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>It is important to remember that the reader is not just a faceless entity. They are eventually going to be the ones who are going to enjoy your book. So, why not think from their perspective!</Typography>
				  </Grid>
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'800px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Make your Characters relatable by taking inspiration from real people</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"140px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>Characters are one of the most important elements of the story. While details about appearance such as their hair colour, skin complexion, and height matters, you should not forget that a character is an individual who has thoughts, feelings, and desires. They are complex beings with their own backstory and motivations. They are what makes the narrative come alive.</Typography>
			  </Grid> 
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>You can always take inspiration from colourful people you know. This will help give your literary work more depth and make it seem more realistic.</Typography>
				  </Grid>
		  </Grid>
		  <Grid container md={12}>
		  <Grid item md={12}>
				  <Typography variant='h3' sx={{textAlign:"initial",width:'300px',height:"40px",fontSize:"24px",marginLeft:'378px',marginTop:"26px",fontWeight:"600"}}>Pay Heed to the Setting</Typography>
			  </Grid>  
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>Setting is the time and place where a action takes place. It can be anything from a small town to an entire galaxy. Not only does it make the fictional worldview more clear, but it also helps in shaping the character’s perception.</Typography>
			  </Grid> 
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>You can use setting in fiction to establish mood, set the stage for conflict in the protagonist's life, or to convey aspects of their personality.</Typography>
			  </Grid>
			  <Grid item md={12}>
				  <Typography sx={{width:"754px",height:"84px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"8px"}}>Writing a popular book has much more to it than meets the eye. But it is a very gratifying journey. What’s stopping you from telling your story? Pick up your pen and begin!</Typography>
				  </Grid>
			  </Grid>
			</Box>
			</>
  )
}

export default Blog1