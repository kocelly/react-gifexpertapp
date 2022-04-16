import React, { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    // setCategories( [...categories, 'Boku No Hero'] );
    setCategories( categories => [ ...categories, 'Boku No Hero' ] );
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {
          categories.map( category => { 
            return <li key={ category } > { category } </li>;
          } )
        }
      </ol>
    </>
  );
}
