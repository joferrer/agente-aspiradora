

import { useEffect, useState } from 'react';

/**
 * 1. APENAS CARGA se ejecuta el useEffect().
 * 2. Limpia con base al número de pasos. 
 * @param {*} param0 
 * @returns 
 */
export const useCleaner = ({tableroInicial=[1,1],inicialpasos= 4, posicionIncialLimpiador=0}) => {

    const [tablero, setTablero] = useState(tableroInicial);
    const [limpiador, setlimpiador] = useState(posicionIncialLimpiador);
    const [pasos, setpasos] = useState(inicialpasos);
    const [start, setStart] = useState(false);
    const [puntuacion, setPuntuacion] = useState(0);
    const [derecha, setDireccion] = useState(true);

    /**
     * useEffect dispara el renderizado de la app. 
     */
    useEffect(() => {
        if(start && pasos >0){
            setTimeout(() =>{
                limpiar2();  
                
            }, 1000);
        }
        //console.log(pasos);
      }, [start,pasos, puntuacion])
    
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

        const hayMugre = tablero[limpiador] == 1;

        // Si hay mugre. El agente es premidado con 1 paso más por limpiar.
         hayMugre ? setPuntuacion(pasos + 1 ): setPuntuacion(pasos - 1 );
   
        // Movimiento derecha.
        if(limpiador < tablero.length-1)
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador + 1 );
        //Movimiento izquierda. NO FUNCIONA :(
        else if (limpiador > 0){
            tablero[limpiador] == 1 ? cambiarValorCelda(limpiador) : setlimpiador( limpiador - 1 );
            
        }
       
         
    }
     /**
         * Si hay mugre -> Limpia.
         * Si no hay mugre -> SE MUEVE. 
         * MOVIMIENTO
         * 1. Limpiador en el borde izquierdo => limpiador = 0 -> Derecha
         * 2. Limpiador en el borde derecho   => limpiador = tablero.length -1 -> Iquierda
         * 3. Limpiador en medio -> Depende:  derecha ? -> derecha SINO izquierda. 
         */
    const limpiar2 =()=>{

        if( tablero[limpiador] == 1 ){
            setPuntuacion(puntuacion + 1 );
            cambiarValorCelda(limpiador);
        }
        else{
            setpasos(pasos - 1 );
            // 
            if(limpiador == 0) {
                setlimpiador(limpiador + 1);
                setDireccion(true);
            }   
            else if(limpiador == tablero.length -1){
                setlimpiador(limpiador -1 );
                //IZQUIERDA
                setDireccion(false);
            }
            else{
                derecha ? setlimpiador(limpiador + 1) : setlimpiador(limpiador - 1);
            }
                 
        }
         
    }

    const iniciar =()=>{
        if(pasos > 0)setStart(true);       
    }
    const detener = ()=>{
        setStart(false);
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
    iniciar,
    detener,

    
  }
}
