import React from 'react';
import { useQuery } from 'react-query';
import { Itemlist } from './components/Item/Itemlist';

// Types
import { CartItemType } from './types/CartItemType';




const getProducts = async (): Promise<CartItemType[]> => 
await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log('Data: ', data);
  

  if(isLoading) {
    return <div>Sækja lista..</div>;
  }
  if( error ) {
    return <div>Einhver villa..</div>;
  }

  return (
    <div className="App">
      <Itemlist title="Vörulisti" items={data} />
    </div>
  );
}

export default App;
