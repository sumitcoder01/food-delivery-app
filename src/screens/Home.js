import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Item from '../components/Item';

export default function Home() {
  const [filter ,setFilter] = useState('');
  return (
    <div>
      <Carousel filter={filter} setFilter={setFilter}/>
      <Item filter={filter}/>
    </div>
  )
}
