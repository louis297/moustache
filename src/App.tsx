import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ItemDetailComponent from './components/listitem/ItemDetailComponent';
import { ItemSelectedModel } from './models/itemmodels/ItemSelectedModel';

export interface ICartContext {
  itemsInCart:ItemSelectedModel[]
  setItemsInCart: ( newItemInCart:ItemSelectedModel[] ) => void
}

export const CartContext = React.createContext<ICartContext>({} as ICartContext)

function App() {
  const [itemsInCart, setItemsInCart] = useState<ItemSelectedModel[]>([])
  return (
    <CartContext.Provider value={{itemsInCart, setItemsInCart}}>
      <Layout>
        {/* TODO: currently path / (or component Home) is just using ListItemComponent */}
        <Route exact path='/' component={Home}/>
        <Route path='/listitem' component={ItemDetailComponent}/>
      </Layout>
    </CartContext.Provider>
  );
}

export default App;
