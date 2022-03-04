import React from 'react';
import '../index.css';
import { Destinos } from './Destinos';
import { Entretenimiento } from './Entretenimiento';
import { Libros } from './Libros';



export const RecomendacionesRV = () => {
  return (
    <div>
        <h3 className='font-Metropolis text-black text-[1.2rem] md:text-[1.5rem] my-3 p-3 text-center xl:text-left xl:text-[3rem] xl:px-6'>RENDEZ-VOUS te recomienda</h3>
        <Entretenimiento/>
        <Libros/>
        <Destinos/>
    </div>
  )
}
