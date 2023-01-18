import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
function Appl() {
  return (
    <div style={{ margin: 20 }}>
      <Stepper orientation='vertical'>
        <Step>
				  <StepLabel>Register your name</StepLabel>
				  <Typography>gal parsoa i numbero kal aundi hindrances</Typography>
				 
        </Step>
        <Step>
          <StepLabel>Register your email</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click on Finish</StepLabel>
        </Step>
		  </Stepper>
		  
    </div>
  );
}

export default Appl;