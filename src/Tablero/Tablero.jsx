import {Grid,Paper,Box, Button, TextareaAutosize, TextField, MenuItem, Select, InputLabel} from '@mui/material';
import {Coronavirus,CleaningServices} from  '@mui/icons-material'
import { ItemTablero } from './Components/ItemTablero';

import { useCleaner } from './hooks/useCleaner';
import { useEffect, useState } from 'react';

/**
 * Este es el tablero inicial! 
 * Cada 1 representa una casilla con mugre. 0 es entonces una casilla limpia.
 * TODO: HACER QUE EL ARRAY TENGA VALORES 0 Y 1 DE FORMA ALEATORIA.
 */
const tableroInicial = Array.from({length: 4}, () => Math.floor(Math.random() * 2));
console.log(tableroInicial)

/**
 * Posición inicial del limpiador.
 * TODO: HACER QUE LA POSCICIÓN INICIAL SEA ALEATORIA.
 */
const posicionIncialLimpiador = 2;

/**
 * Cantidad de pasos iniciales. 
 * TODO: SE SUPONE QUE SE INCIAN CON 1000 PASOS, PERO SON MUCHOS. 
 */
const inicialpasos = 6;

export const Tablero = () => {

    const  [celdaInicial, setceldaInicial] = useState(0);
    const {tablero,limpiador,pasos,movimientos,start,setlimpiador, reiniciar,iniciar} = useCleaner({tableroInicial, celdaInicial, inicialpasos});

    useEffect(() => {
      setlimpiador(celdaInicial);
    
      
    }, [celdaInicial])
    

    const handelceldaInicial = (event)=>{
        setceldaInicial(event.target.value);
    }
    
    
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
        <Box  >
            <InputLabel id="casilla-label">Casilla inicio</InputLabel>
            <Select
                labelId="casilla-label"
                id="casilla-inicio"
                value={celdaInicial}
                label="Casilla"
                onChange={handelceldaInicial}
                disabled={start}
                sx={{width: 100}}
            >
                {
                    tablero.map((celda, index)=>(<MenuItem key={`${index}`} value={index}>{index.toString()}</MenuItem>))
                }
            
            </Select>
        </Box>
        <TextareaAutosize
            
            maxRows={4}
            aria-label="maximum height"
            placeholder="Pasos del limpiador"
            value={movimientos}
           
            readOnly 
            style={{ width: 400, 
                    height: 200,
                    margin: 20,
                    overflow: 'auto'  
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
