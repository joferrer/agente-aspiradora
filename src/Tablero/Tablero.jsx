import {Grid,Paper,Box, Button} from '@mui/material';
import {Coronavirus,CleaningServices} from  '@mui/icons-material'
import { ItemTablero } from './Components/ItemTablero';

import { useCleaner } from './hooks/useCleaner';


const tableroInicial = [1,1,1,0];

export const Tablero = () => {

    const {tablero,limpiador,cambiarValorCelda,limpiar} = useCleaner(tableroInicial);

    const generarCeldas = ()=> tablero.map((celda,index)=>(
        <ItemTablero key={`celda${index}`}>
            
            {
                (index == limpiador) ? <CleaningServices  sx={{height: 140,
                    width: 140, position: 'absolute' }} color='primary'
                    /> : ''
            }
            {   
                (celda == 1) ? <Coronavirus display= {'fixed'} sx={{height: 140,
                    width: 140,}} color='success'/> : ''
                
            }
        
        </ItemTablero>
    ));
  return (

    <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0.1 }}>

            {
                generarCeldas()
            }
            
           
            
        </Grid>

        <Button onClick={()=>limpiar()}>Limpiar</Button>
    </Box>

    
  )
}
