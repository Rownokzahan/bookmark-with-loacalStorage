import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Product from './Product/Product';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header></Header>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
        {products.map(product=><Product key={product.id} product={product}></Product>)}
      </div>

    </div>
  );
};

export default App;