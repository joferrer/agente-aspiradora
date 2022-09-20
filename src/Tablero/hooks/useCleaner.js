

import { useEffect, useState } from 'react';

export const useCleaner = (tableroInicial=[1,1]) => {

    const [tablero, setTablero] = useState(tableroInicial);
    const [limpiador, setlimpiador] = useState(0);

    

    const cambiarValorCelda = (index = 0)=>{
        tablero [index] = !tablero[index];
        setTablero([...tablero]);
        console.log(tablero)
    }
    
    const limpiar =()=>{
        if(limpiador < tablero.length-1)
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador + 1 );
        else if (limpiador > 0){
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador - 1 );
        }

        

         
    } 

  return {
    tablero,
    limpiador,
    cambiarValorCelda,
    limpiar
  }
}
