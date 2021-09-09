import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


//Functional Component
export const GifExpertApp = () => {

    // const categories = ['Deadpool', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([''])

    // const handleAdd = () => {
    //     //Forma #1
    //     setCategories(['HunterXHunter', ...categories] );

    //     //Forma #2
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <p>By: Derek</p>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )

}

