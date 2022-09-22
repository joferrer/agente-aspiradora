

import { useEffect, useState } from 'react';

/**
 * 1. APENAS CARGA se ejecuta el useEffect().
 * 2. Limpia con base al número de pasos. 
 * @param {*} param0 
 * @returns 
 */
export const useCleaner = ({tableroInicial=[1,1],inicialpasos= 4, celdaInicial=0}) => {

    const [tablero, setTablero]               = useState(tableroInicial);
    const [limpiador, setlimpiador]           = useState(celdaInicial);
    const [pasos, setpasos]                   = useState(inicialpasos);
    const [start, setStart]                   = useState(false);
    const [puntuacion, setPuntuacion]         = useState(0);
    const [derecha, setDireccion]             = useState(true);
    const [movimientos, setMovimientos]       = useState('');

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
        console.log(" sdsds"+tableroInicial);
        tablero [index] = !tablero[index];
        setTablero([...tablero]);
        console.log(tablero);
        
    }
    
     /**
         * Si hay mugre -> Limpia y premia
         * Si no hay mugre -> SE MUEVE. 
         * MOVIMIENTO
         * 1. Limpiador en el borde izquierdo => limpiador = 0 -> Derecha
         * 2. Limpiador en el borde derecho   => limpiador = tablero.length -1 -> Iquierda
         * 3. Limpiador en medio -> Depende:  derecha ? -> derecha SINO izquierda. 
         */
    const limpiar2 =()=>{
        const hayMugre = tablero[limpiador] == 1 ; 

        if( hayMugre ){
            setPuntuacion(puntuacion + 1 ); //Se premia
            cambiarValorCelda(limpiador); //Limpia
            setMovimientos(movimientos + 'LIMPIA \n');
        }
        else{
            setpasos(pasos - 1 );
            // 
            if(limpiador == 0) {
                setlimpiador(limpiador + 1);
                setDireccion(true);
                setMovimientos(movimientos + 'DERECHA \n');
            }   
            else if(limpiador == tablero.length -1){
                setlimpiador(limpiador -1 );
                //IZQUIERDA
                setDireccion(false);
                setMovimientos(movimientos + 'IZQUIERDA \n');
            }
            else{
                derecha ? setlimpiador(limpiador + 1) : setlimpiador(limpiador - 1);
                derecha ? setMovimientos(movimientos + 'DERECHA \n'): setMovimientos(movimientos + 'IZQUIERDA \n');
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
        console.log("tb: "+tableroInicial)
        
        setlimpiador(celdaInicial);
        setpasos(inicialpasos);
        setStart(false);
        setTablero([...tableroInicial]);
    }

  return {
    tablero,
    limpiador,
    pasos,
    movimientos,
    start,
    setlimpiador,
    cambiarValorCelda,
    getPasos,
    reiniciar,
    iniciar,
    detener,

    
  }
}
