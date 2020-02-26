import React, { useState } from 'react'

import Sidebar from '../Sidebar'
import ShopList from './ShopList'
import HeadingTitle from '../HeadingTitle'

const Shop = () => {
  const [items] = useState([
    {
      headingText: 'Runinc shop',
      contentText: 'Gratis fragt ved over kr. 500,-'
    },
    { headingText: '', contentText: 'Nike' },
    { headingText: '', contentText: 'Adidas' },
    { headingText: '', contentText: 'Puma' },
    { headingText: '', contentText: 'Asics' },
    { headingText: '', contentText: 'Hummel' }
  ])

  return (
    <section className="shop">
      <Sidebar title="Shop" items={items} className="shop__sidebar" />
      <HeadingTitle text="Shop" />
      <ShopList />
    </section>
  )
}

export default Shop
