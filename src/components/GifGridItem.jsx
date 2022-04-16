import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

  // console.log( props );

  return (
    <div>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}