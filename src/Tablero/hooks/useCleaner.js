

import { useEffect, useState } from 'react';

/**
 * 1. APENAS CARGA se ejecuta el useEffect().
 * 2. Limpia con base al número de pasos. 
 * @param {*} param0 
 * @returns 
 */
export const useCleaner = ({tableroInicial=[1,1],inicialpasos= 1, posicionIncialLimpiador=0}) => {

    const [tablero, setTablero] = useState(tableroInicial);
    const [limpiador, setlimpiador] = useState(posicionIncialLimpiador);
    const [pasos, setpasos] = useState(inicialpasos);
    
    /**
     * useEffect dispara el renderizado de la app. 
     */
    useEffect(() => {
        if( pasos >0){
            setTimeout(() =>{
                limpiar();  
                
            }, 1000);
        }
        //console.log(pasos);
      }, [pasos])
    
      /**
       * Cambia el valor de una celda. 
       * @param {int} index  Posición de la celda que se quiere cambiar.
       */
    const cambiarValorCelda = (index = 0)=>{
       
        tablero [index] = !tablero[index];
        setTablero([...tablero]);
        console.log(tablero);
        
    }
    
    const limpiar =()=>{
        // Si hay mugre. El agente es premidado con 1 paso más por limpiar.
        tablero[limpiador] == 1 ? setpasos(pasos + 1 ): setpasos(pasos - 1 );
   
        // Movimiento derecha.
        if(limpiador < tablero.length-1)
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador + 1 );
        //Movimiento izquierda. NO FUNCIONA :(
        else if (limpiador > 0){
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador - 1 );
            
        }
        
         
    }
   

    /**
     * TODO: RETORNAR LOS PASOS EN FORMA DE STRING. EJ: DERECHA, LIMPIAR, IZQUIERDA, LIMPIAR.
     * @returns 
     */
    const getPasos=()=>{
        return 'Ala'

    }

    const reiniciar = ()=>{
        console.log(tableroInicial)
        setTablero([...tableroInicial]);
        setlimpiador(posicionIncialLimpiador);
        setpasos(inicialpasos);
    }

  return {
    tablero,
    limpiador,
    pasos,
    cambiarValorCelda,
    limpiar,
    getPasos,
    reiniciar,

    
  }
}
