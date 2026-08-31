import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
       <div className="container">
         <div class="row row-cols-1 row-cols-md-3 g-4">
            <Card />
            <Card />
            <Card />
           
        </div>
       </div>
    )
}

export default Cards
