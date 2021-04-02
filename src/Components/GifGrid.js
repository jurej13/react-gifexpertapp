import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//El encodeURI lo que hace es sacar espacios y todo lo que me puyeda molestar a la hora de hacer la peticion

export const GifGrid = ({ category }) => {
    const { data:images,loading} = useFetchGifs( category );
    // const {data , loading} = useFetchGifs( category )
   
    return (
    <>
        <h3>{ category }</h3>
        {loading  && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>
            
            
                {images.map(img=>(
                    <GifGridItem 
                    key={img.id}
                    { ...img } />
                ))}
            
        </div>
        </>
    )
}
