import React, { useState } from 'react'

import ShopItem from './ShopItem'

import ShoeImgOne from '../../assets/images/shoe_01.jpg'
import ShoeImgTwo from '../../assets/images/shoe_02.jpg'
import ShoeImgThree from '../../assets/images/shoe_03.jpg'
import ShoeImgFour from '../../assets/images/shoe_04.jpg'

const ShopList = () => {
  const [shoes] = useState([
    {
      imgUrl: ShoeImgOne,
      description: 'Puma Highland 3000 - brown'
    },
    {
      imgUrl: ShoeImgTwo,
      description: 'Asics Free Street'
    },
    {
      imgUrl: ShoeImgThree,
      description: 'New Balance Runner Bounce'
    },
    {
      imgUrl: ShoeImgFour,
      description: 'New Balance New York 2018'
    },
    {
      imgUrl: ShoeImgOne,
      description: 'Puma Highland 3000 - brown'
    },
    {
      imgUrl: ShoeImgFour,
      description: 'New Balance New York 2018'
    }
  ])

  return (
    <div className="shop__list">
      {shoes.map((shoe, index) => (
        <ShopItem
          imgUrl={shoe.imgUrl}
          description={shoe.description}
          key={index}
        />
      ))}
    </div>
  )
}

export default ShopList
