import React, { FormEvent, ReactElement, useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { MockItemClassicTee } from '../../mockdata/MockItemClassicTee';
import { ItemDetailModel } from '../../models/itemmodels/ItemDetailModel'
import { ItemSelectedModel } from '../../models/itemmodels/ItemSelectedModel';
import { CartContext } from '../../App'
import { MockItemSelected } from '../../mockdata/MockItemSelected';

import './ItemDetailComponent.scss'

interface Iprops {
  itemID:number
}

export default function ItemDetailComponent(props:Iprops) {
  const [itemDetail, setItemDetail] = useState<ItemDetailModel>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizeButtons, setSizeButtons] = useState<ReactElement>(<></>);
  const {itemsInCart, setItemsInCart} = useContext(CartContext)

  useEffect(
    () => {
      // init item details for current page
      getItemData(props.itemID);
      // init items in cart for current user
      getItemsInCart();
    },[]
  )

  const updateSizeButtons = (AvailableSize:string[]) => {
    const buttons = AvailableSize.map( size => 
      <>
        <Input key={"size_"+size} type="radio" name="SelectedSize" id={"size_"+size} value={size} onChange={(event:FormEvent)=>{setSelectedSize((event.target as HTMLInputElement).value)}}/>
        <Label for={"size_"+size}>{size}</Label>
      </>
    );
    setSizeButtons(<>{buttons}</>);
  }

  // get item detail from server
  const getItemData = (itemID:number) => {
    // TODO: currently use mock data only
    const itemInfo = MockItemClassicTee;
    console.log(itemInfo);
    setItemDetail(itemInfo);
    updateSizeButtons(itemInfo.AvailableSize);
  }

  // get selected items for current user from server
  const getItemsInCart = () => {
    // TODO: currently use mock data only
    setItemsInCart(MockItemSelected);
  }

  const addItemToCart = (size:string) => {
    const ItemsSelected = itemsInCart;
    let found = false;
    // if item is already in cart
    ItemsSelected.forEach( i => {
      if(i.ItemID === itemDetail!.ItemID && i.Size === size) {
        i.Amount += 1;
        found=true;
      }
    })
    // if item is not in cart
    if(!found){
      const newItem:ItemSelectedModel = {
        ItemID: itemDetail!.ItemID,
        ItemName: itemDetail!.ItemName,
        Price: itemDetail!.Price[size],
        Size: size,
        Image: itemDetail!.Image,
        Amount: 1
      }
      ItemsSelected.push(newItem);
    }
    setItemsInCart(ItemsSelected);
  }

  const AddItemToCartFormOnSubmit = (event:FormEvent) => {
    event.preventDefault();
    if(selectedSize != ''){
      addItemToCart(selectedSize);
    }
    //TODO: send add item request to backend
  }

  return (
      <Container>
        <Row>
          <Col lg={{size:5, offset:1}} xs="12">
            <img src={itemDetail?.Image} className="img-fluid"/>
          </Col>
          <Col lg={{size:5, offset:1}} xs="12">
            <p className="ItemDetailName">{itemDetail?.ItemName}</p>
            <p className="ItemDetailPrice">${itemDetail?.Price[itemDetail?.AvailableSize[0]].toFixed(2)}</p>
            <p className="ItemDetailDescription">{itemDetail?.Description}</p>
            <p className="ItemDetailSize">SIZE<span className="RequiredStar">* </span><span className="SelectedSize">{selectedSize}</span></p>
            <Form id="AddItemToCartForm" className="AddItemToCartForm" onSubmit={AddItemToCartFormOnSubmit}>
              <FormGroup>
                {sizeButtons}
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs={5}>
                    <Input type="submit" value="ADD TO CART" disabled={selectedSize === ''} className="AddToCartButton shadow-none"/>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
  )
}
