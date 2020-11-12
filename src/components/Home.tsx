import React from 'react'
import ItemDetailComponent from './listitem/ItemDetailComponent'

export default function Home() {
  // TODO: itemID should be get from retrieved from REST url or selected from item list
  return (
    <ItemDetailComponent itemID={1}/>
  )
}
