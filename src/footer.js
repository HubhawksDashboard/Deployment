import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import Image from 'mui-image';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 3, sm: 2 }}
        bgcolor="#FAFBFC"
        color="black"
      >
        
				  <Grid container md={12}>
					  <Grid item md={3} >
				  <Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    justifyContent:'space-around',width:'98px',height:'111px',marginTop:"46px"
						  }}></Image>
						  </Grid>
						  <Grid item md={2} >
						  <Box sx={{marginTop:"53px",marginBottom:'27px',textAlign:'initial'}}>
							  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}>Why Hubhawks</Typography></Box>
           				
              <Box sx={{marginTop:"20px",marginBottom:'20px',textAlign:'initial'}}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}> SignUp </Typography>
                </Link>
              </Box>      
			</Grid>
					  
            <Grid item md={2}sx={{textAlign:'initial',marginLeft:"26px"}} >
					  <Box sx={{ marginTop: "53px",textAlign:'initial' }}>
						  <Typography sx={{ fontSize: '18px', fontWeight: "600" }}>Company</Typography>
					  </Box>
              <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>About us</Typography>
                </Link>
              </Box>
              <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Services</Typography>
                </Link>
						  </Box>
						  <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Blog</Typography>
                </Link>
              </Box>
            </Grid>
					  <Grid item md={3} sm={3} sx={{marginTop:"53px",textAlign:'initial'}}>
              <Typography sx={{fontSize:'18px',fontWeight:"600"}}>Support</Typography>
              <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
                <Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Contact us</Typography>
                </Link>
              </Box>
              <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Privacy Policy</Typography>
                </Link>
              </Box>
              <Box sx={{textAlign:'initial' }}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Terms and Conditions</Typography>
                </Link>
              </Box>
			 </Grid>
					  
			  </Grid>
			  {/*
				  Icons Bar for left side*/} 
				  <Box textAlign="center" pt={{ xs: 5, sm: 7 }} pb={{ xs: 5, sm: 0 }}>
					  <Grid container md={12} >
						  <Grid item sx={{m:"10px",marginLeft:'145px'}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1IKS5RQhbzWL7DkiDYTbjjlxYnoc3sSqF" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item sx={{m:"10px"}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1MyFr-3hwERNPf6SOSsUuFfR7ndN3V0rN" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item sx={{m:"10px"}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1RIPmuZQcSxdOalMQSGm4_zhg3MfatCMr" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
					  </Grid>
					  <Grid item md={6}><Typography sx={{marginTop:'9px',marginLeft:'385px'}}>&reg; All rights reserved to Hubhawks 2022 </Typography></Grid>
					  </Grid>
					  
          </Box>
        
      </Box>
    </footer>
  );
}