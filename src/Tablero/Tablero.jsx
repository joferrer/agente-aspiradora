import {Grid,Paper,Box, Button, TextareaAutosize} from '@mui/material';
import {Coronavirus,CleaningServices} from  '@mui/icons-material'
import { ItemTablero } from './Components/ItemTablero';

import { useCleaner } from './hooks/useCleaner';
import { useEffect } from 'react';

/**
 * Este es el tablero inicial! 
 * Cada 1 representa una casilla con mugre. 0 es entonces una casilla limpia.
 * TODO: HACER QUE EL ARRAY TENGA VALORES 0 Y 1 DE FORMA ALEATORIA.
 */
const tableroInicial = [1,1,1];

/**
 * Posición inicial del limpiador.
 * TODO: HACER QUE LA POSCICIÓN INICIAL SEA ALEATORIA.
 */
const posicionIncialLimpiador = 2;

/**
 * Cantidad de pasos iniciales. 
 * TODO: SE SUPONE QUE SE INCIAN CON 1000 PASOS, PERO SON MUCHOS. 
 */
const inicialpasos = 3;

export const Tablero = () => {

    const {tablero,limpiador,pasos,cambiarValorCelda,limpiar,getPasos, reiniciar,iniciar, detener} = useCleaner({tableroInicial, posicionIncialLimpiador, inicialpasos});
    
    const reiniciarTablero = ()=>{
        reiniciar();
    }
   
   
    
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
    <>  
        <TextareaAutosize
            
            maxRows={4}
            aria-label="maximum height"
            placeholder="Pasos del limpiador"
            value={pasos}
            disabled

            style={{ width: 400, 
                    height: 200,
                    margin: 20 
                    }}
        />
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0.1 }}>

            {
                generarCeldas()
            }
            
           
            
        </Grid>

        <Button onClick={()=>iniciar()}>Limpiar</Button>
        <Button onClick={()=>reiniciarTablero()}>Reiniciar</Button>
    </Box>

    </>
    
    
  )
}
