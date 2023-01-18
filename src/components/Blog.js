import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Typography } from "@mui/material";
import Footer from "../footer";
import { Grid } from "@mui/material";
import Image from "mui-image";
import { Button } from "@mui/material";
import ResponsiveAppBar from "./menu";
import { Link } from "react-router-dom";
export default function Blog() {
	return (<>
	  <ResponsiveAppBar/>
    <Box sx={{ margin: "100px" }}>
      
		  <ImageListItem>
		  <Image
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width: 560,justifyContent:'left',
						height: 282
					}}
					onclick={<Link to ='/services'>Logout</Link> }
					
            />
			 <Typography ><Link to ='/blog1'style={{textDecoration:'none',color:"black"}}>Secrets for Writing a Fiction Bestselling Novel</Link></Typography>
			</ImageListItem>
      <ImageList
        sx={{ margin: "50px" }}
        cols={4}
        style={{ overflow: "hidden" }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
				<Typography><Link to={`/${item.rajiv}`}style={{textDecoration:'none',color:"black"}}>
				<ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
				
				</Link></Typography>
           
          </ImageListItem>
        ))}
		  </ImageList>
		  <Grid container md={12}>
				  <Grid item md={12}>
				<Button variant='contained'sx={{
					my:
						  '80px',borderRadius:'8px',width:'148px',height:'48px',backgroundColor:'#3A81F3',fontSize:'14px'
				  }}>See More</Button>
					  </Grid>
				  </Grid>
	  </Box>
	  <Footer />
	  </>
  );
}

const itemData = [
	{
		img: 'https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV',
		title: 'Secrets for Writing a Fiction Bestselling Novel',
		author: 'Learning',
		rajiv:'blog1'
	  },
	  {
		img: 'https://drive.google.com/uc?export=view&id=1R97Z__BFgDkWpVwb2TyXP6SLH5pBuHkJ',
		title: 'How to Write a Captivating Blurb?',
		  author: 'Learning is Part of Life',
		rajiv:'blog2'
	  },
	  {
		img: 'https://drive.google.com/uc?export=view&id=13fKbtAl71NOq_TLbnSCZRnTx3mu94Qs8',
		title: ' Types of Editing and How it Refines Your Manuscript ',
		  author: 'Learning is Part of Life',
		  rajiv:'blog3'
	  },
	  {
		img: 'https://drive.google.com/uc?export=view&id=1SuJ-eE-74BrNcg05LVfms7sXErth3usK',
		title: 'Tricks to Writing a Non-Fiction Bestseller',
		  author: 'kevin',
		  rajiv:'blog4'
	  }
	
	];
