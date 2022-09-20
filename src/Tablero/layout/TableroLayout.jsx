import {Grid, Typography} from '@mui/material';

export const TableroLayout = ({children, title = 'Aspiradora megaPro'}) => {
  return (
    <Grid container
          spacing={0}
          direction      = "column"
          alignItems     = "center"
          justifyContent = "center"
          sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
          
          >

            <Grid item
                  className='box-shadow animate__animated animate__fadeIn animate__faster'
                  xs={3}
                  sx= {{backgroundColor: 'white' , padding: 3 ,borderRadius: 2}}
                  
                  >
                    

                    <Typography textAlign={'center'} variant='h5' sx={{mb:1}}>{title}</Typography>

                    {children}
            </Grid>

           

    </Grid>
  )
}
