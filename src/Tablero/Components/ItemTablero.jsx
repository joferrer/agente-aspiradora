{/**<CleaningServices sx={{height: 140,
                    width: 140,}} color='primary'/> */}

import {Grid,Paper,Box} from '@mui/material';
export const ItemTablero = ({children}) => {
  return (
    <Grid item  
            >   
                <Paper 
                    sx={
                        {
                            height: 140,
                            width: 140,
                            backgroundColor: '#1A2027'
                        }}
                  >{children}</Paper>
            </Grid>
  )
}
