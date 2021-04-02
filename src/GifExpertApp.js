import {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {
    // const categories=['One punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])
    
    // const handleAdd=()=>{
    //     // codigo para agregar a un state, array o lo necesario
    //     // dos formas de hacer el add
    //     setCategories(['HunterXHunter',...categories])
    //     // setCategories(cats=>[...cats, 'HunterXHunter'])
    //     console.log(categories)
    // }


    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={ setCategories } />
          <hr/>
          
          <ol>
              {categories.map(category=>(
                <GifGrid
                key={category} 
                category={category} />
              ))}
          </ol>
        </>
    )
}

