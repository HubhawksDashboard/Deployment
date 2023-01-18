import React from 'react';
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import { Typography }  from '@mui/material'
import Image from 'mui-image';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import {Box} from '@mui/material';
import Card from '@mui/material/Card';
import ResponsiveAppBar from './menu';
import Footer from '../footer';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import LinearProgress from "@mui/material/LinearProgress";
function About()
{
	return (<>
		<ResponsiveAppBar />
		<Grid container md={12}  >
			<Grid container md={6}>
			<Typography variant='h1' sx={{textAlign:'initial',fontWeight:800,fontSize:'60px',lineHeight: '72px',fontStyle: 'normal',marginLeft:"148px",marginTop:'90px'}}>One-stop literary marketplace for <Typography variant='h1' sx={{color:'red',fontWeight:800,fontSize:'60px',lineHeight: '72px',fontStyle: 'normal'}}>every book-related service</Typography></Typography>
					<Typography variant='h1' sx={{width: '659px',height: '131px',fontSize: '18px',lineHeight: '28px',color: '#333335',textAlign:'initial',marginLeft:"150px",marginTop:'26px',alignSelf:'stretch'}}>Hubhawks is your go-to platform, that has all the book-related service providers<br/> and people seeking the same. The centralized solution to the literary problems a person can face. It is convenient, user-friendly, and a blessing in disguise for<br/> budding authors and the ones who are seeking to add more to their lists.</Typography>
					
					
			</Grid>
			<Grid container md={1}  sx={{marginTop:'112px',marginLeft:"25px"}}>
			<CardMedia
					component="img"
					height="194"
					image="https://drive.google.com/uc?export=view&id=18bbHzcnVPOggF3pC9x7DJP5DCDKkLReF"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width: '416px', height: '371px', position: 'absolute',
						marginLeft:'128px',marginTop:'-66px'
					}}
      />
      <CardContent>
	  <CardMedia
					component="img"
					
					image="https://drive.google.com/uc?export=view&id=1C2MwRR31WJdraHSncktA4XzJXVpExaPf"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width: '448px', height: '296px', position:'absolute'
					}}
      />
      </CardContent>
			
			</Grid>
		</Grid>
		<Grid container md={12}>
		<Grid item md={12} sx={{marginTop:'150px'}}>
		<Typography variant='h2' sx={{

fontWeight: '600',
fontSize: '36px',
lineHeight: '48px',
textAlign: 'center',color: '#000000'
				}}> Hubhawks’ Journey </Typography>	
				</Grid>
			<Grid item md={8} sx={{marginTop:'16px',marginLeft:'304px'}} >
		<Typography variant='h2' sx={{

fontWeight: '400',
fontSize: '18px',
lineHeight: '28px',
textAlign: 'center',width: '832px',
height: '84px',

					color: '#333335'
				}}> The idea of this platform began with the realization that in almost every step of writing and publishing
				a book an organized system doesn’t exist. Things that can be done in a few days are taking months and the only thing which lacks is the system and guidance. </Typography>	
				
			</Grid>

		</Grid>
		<Box sx={{margin:"81px",marginTop:'125px'}}> 
		<Box sx={{marginLeft:"100px"}}> 
		{/* icon with button */}
		
			<Grid container md={12} >
					<Grid container md={4} sx={{ ml:'32px'}} >
				
			  <Grid item md={1}>
	<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px',width:'10px',height:'10px'
			  }}>
			</Image>
		
			  </Grid>
			  <Grid item md={3}>
			  <Typography sx={{  fontWeight: '600', fontSize: '18px', color: '#3A81F3', fontStyle: 'normal' }}>Sept 2020</Typography>  
				</Grid>
			</Grid> 
			</Grid>
			<Box sx={{marginLeft:"50px"}}>
			<Grid container md={12} >
			<Divider orientation="vertical" flexItem sx={{ bgcolor: "#3A81F3"}}></Divider>
			<Grid container md={6}>
					<Grid item md={12}>
				  <Typography sx={{fontWeight: 600,fontSize: '18px',textAlign:'initial',marginLeft:"20px"}}>In times gone by</Typography>
					</Grid>
					<Grid item md={12}>
				  <Typography sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
					<Grid item md={12}>
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Initial Kickstarter point</Typography>
					</Grid>
					<Grid item md={12}>
				  <Typography  sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Within a few months, we got our angel investment of 15 Lacs by Veteran of the publishing industry: Mr. Anuj Bahri - Founder of Bahrisons Booksellers.
                 </Typography>
							</Grid>
							
				
				</Grid>
				<Grid container md={4}>
					<Grid item md={6} sx={{margin:'auto'}}>
					<Image src="https://drive.google.com/uc?export=view&id=1X3vlqyrfXkSXYCeZ2ky8TUDBuQqTiBvn" style={{
justifyContent:'space-around',borderRadius:'20px',width: '250px',
height: '250px'
			  }}></Image>
				  </Grid>
					</Grid>
			</Grid>
			</Box>
		</Box>
		<Box sx={{marginLeft:"100px"}}> 
		{/* icon with button */}
			<Grid container md={12} >
			
		  <Grid container md={4} sx={{ ml:'32px'}}>
			  <Grid item md={1}>
	<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px',width:'10px',height:'10px'
			  }}>
				  </Image>
			  </Grid>
			  <Grid item md={3}>
			  <Typography sx={{  fontWeight: '600', fontSize: '18px', color: '#3A81F3', fontStyle: 'normal' }}>2021-2022</Typography>  
				</Grid>
			</Grid> 
			</Grid>
			<Box sx={{marginLeft:"50px"}}>
			<Grid container  >
			<Divider orientation="vertical" flexItem sx={{ bgcolor: "#3A81F3"}}></Divider>
			<Grid container md={6}>
					
			<Grid item md={12} >
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}> Dream of removing the geographical barrier</Typography>
					</Grid>
					<Grid item md={12} >
				  <Typography sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>In the year 2021, we got our first International client and over the months it kept increasing now we have a good number of international clients from UAE, Australia, USA, Canada, Pakistan, Kuwait, Indonesia, etc.</Typography>
				</Grid>
				<Grid item md={12}>
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Spike in author count</Typography>
					</Grid>
					<Grid item md={12} >
				  <Typography  sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>In just the past two years we have worked with over 100 authors, out of which more than 10 are bestselling authors.</Typography>
							</Grid>
							<Grid container ></Grid>
					
					
				</Grid>
				<Grid container md={4}>
					<Grid item md={6} sx={{margin:'auto'}}>
					<Image src="https://drive.google.com/uc?export=view&id=1wkcDJdKLdBaKojvlbJCwu07zB1B0-DbJ" style={{
justifyContent:'space-around',borderRadius:'20px',width: '250px',
height: '250px'
			  }}></Image>
					</Grid>
				</Grid>

					</Grid>
					<Grid container  >
			<Divider orientation="vertical" flexItem sx={{ bgcolor: "#3A81F3"}}></Divider>
			<Grid container md={6}>
					
			<Grid item md={12} >
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}> Rocketing the literary space with technology</Typography>
					</Grid>
					<Grid item md={12} >
				  <Typography sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>One of a kind platform for budding authors and freelancers, wherein the authors can avail any literary services pre or post writing and the freelancers can easily get their desired projects of their niche.</Typography>
				</Grid>
				<Grid item md={12}>
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Influential partnerships</Typography>
					</Grid>
					<Grid item md={12} >
				  <Typography  sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Hubhawks has partnered with the biggest bookstores in India: Sapna, WH Smith, Crossword, Wilco, etc.
</Typography>
							</Grid>
							<Grid container ></Grid>
					
					
				</Grid>
				<Grid container md={4} sx={{marginTop:'50px'}}>
					<Grid item md={6} sx={{marginTop:'20px',marginBottom:"20px",margin:'auto'}}>
					<Image src="https://drive.google.com/uc?export=view&id=1HuQPY58Jm_i5-ql2D5K_-2bB2Bpmw87h" style={{
justifyContent:'space-around',borderRadius:'116px',width: '250px',
height: '250px'
			  }}></Image>
					</Grid>
				</Grid>

					</Grid>


					<Grid container  >
			<Divider orientation="vertical" flexItem sx={{ bgcolor: "#3A81F3"}}></Divider>
			<Grid container md={6} >
					
			<Grid item md={12} sx={{margin:'auto'}} >
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}> Remarkable Work
</Typography>
					</Grid>
					<Grid item md={12} sx={{marginTop:'20px',marginBottom:"20px"}}>
				  <Typography sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Hubhawks has had the opportunity to work with the biggest publishing houses like Penguin Random House India, Harper Collins India, Bloomsbury India, Simon and Schuster India, Audible India, leadstart, RedInk and etc.</Typography>
				</Grid>
				<Grid item md={12} sx={{margin:'auto'}}>
				  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:600,color:"#333335",textAlign:'initial',marginLeft:"20px"}}>Rocketing the literary space with technology
</Typography>
					</Grid>
					<Grid item md={12} sx={{marginTop:'20px',marginBottom:"20px"}} >
				  <Typography  sx={{fontSize:'18px',color:"#333335",textAlign:'initial',marginLeft:"20px"}}>One of a kind platform for budding authors and freelancers, wherein the authors can avail any literary services pre or post writing and the freelancers can easily get their desired projects of their niche.
								</Typography>
								
							</Grid>
								
							
					
				</Grid>
				<Grid container md={4}>
					
				</Grid>

					</Grid>










					
					
					

					

					

			</Box>
			
			
		  
				  
				 
				  
				  
				
					
						  
			
  
				  
  
				  
			





		</Box>
		</Box>
			
		
		<Grid container md={12} spacing={2}>
			<Grid item md={12} >
				<Typography sx={{
fontStyle: 'normal',
fontWeight: '600',textAlign: 'center',
fontSize: '36px',
lineHeight: '48px'}}>Hubhawks's Cultural Benefits</Typography>
</Grid>
			</Grid>
			<Grid container md={12} spacing={2} >
			<Grid container  spacing={2} sx={{marginTop:'50px',marginLeft:'150px',marginBottom:'50px'}} >
				
						<Card sx={{
							display: "flex",background: '#BB00000A',width:"365px",height:'104px',margin:'auto',borderRadius:'12px',marginRight:'19px'
}}>
       <CardMedia
          component="img"
          sx={{ width: 60,height:60,marginTop:'25px',marginLeft:"20px"}}
          image="https://drive.google.com/uc?export=view&id=1GM3Nab1kIVdArfdKhcgQwehQ9Epfi78k"
						alt="Live from space album cover"
						
        />
        <CardContent sx={{ flex: "1 0 auto" ,margin:"auto"}}>
          <Typography component="div" variant="h4"  sx={{textAlign:'initial',fontSize:"18px",fontWeight:'600',color:'#333335',width:'189px',height:'48px'}}>
            Author-friendly and centric
          </Typography>
          
        </CardContent>
     
						</Card>
						
					
				<Card sx={{ display: "flex",background: '#BB00000A',width:"365px",height:'104px',marginRight:'19px',borderRadius:'12px' }}>
       <CardMedia
          component="img"
          sx={{ width: 60,height:60,marginTop:'25px',marginLeft:"20px"}}
          image="https://drive.google.com/uc?export=view&id=1w2Qj6ovduVGtvlqefNDMmPqtnHU19qQW"
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: "1 0 auto",margin:'auto' }}>
          <Typography component="div" variant="h4" sx={{textAlign:'initial',fontSize:"18px",fontWeight:'600',color:'#333335'}}>
		  Desirable workplace 
          </Typography>
          <Typography component="div" variant="h4" sx={{textAlign:'initial',fontSize:"18px",fontWeight:'600',color:'#333335'}}>
		  for creators
          </Typography>
        </CardContent>
     
						</Card>
					
					
				
					<Card sx={{ display: "flex",background: '#BB00000A',width:"365px",height:'104px',marginRight:'150px',borderRadius:'12px' }}>
       <CardMedia
          component="img"
          sx={{ width: 60 ,height:60,margin:'auto' }}
          image="https://drive.google.com/uc?export=view&id=1KZWFBbg-TPHOlSoAfOdbf0envmNPSxZi"
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: "1 0 auto",margin:'auto' }}>
          <Typography component="div" variant="h4"  sx={{textAlign:'initial',fontSize:"18px",fontWeight:'600',color:'#333335'}}>
		  Efforts for perfection, 
          </Typography>
          <Typography component="div" variant="h4"  sx={{textAlign:'initial',fontSize:"18px",fontWeight:'600',color:'#333335'}}>
		  quality, and supremacy
          </Typography>
        </CardContent>
     
						</Card>
					
					</Grid>
				</Grid>
				
			
			<Footer/>
		  </>
  )
}
export default About;