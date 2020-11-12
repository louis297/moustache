import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import { CartContext, ICartContext } from '../../App'
import { ItemSelectedModel } from '../../models/itemmodels/ItemSelectedModel';
import NavCartList from './NavCartList';
import './NavCartComponent.scss';


interface Iprops {
  itemsInCart: ItemSelectedModel[]
  setItemsInCart: ( newItemInCart:ItemSelectedModel[] ) => void
}

export default function NavCartComponent(props:Iprops) {
  // const {itemsInCart, setItemsInCart} = useContext(CartContext);
  // const [cartContent, setCartContent] = useState<ReactElement>(<></>);

  // useEffect( () => {
  //   updateCartContent();
  // }, [itemsInCart]);

  // const updateCartContent = () => {
  //   const newContent = itemsInCart.map( item => {
  //     return (
  //       <DropdownItem>
  //         <Row>
  //           <Col xs={{size:3}}>
  //             Image here
  //           </Col>
  //           <Col xs={{size:6, offset:1}}>
  //             Detail
  //           </Col>
  //         </Row>
  //       </DropdownItem>
  //     )
  //   });
  //   setCartContent(<>{newContent}</>);
  // }
  console.log('NavCartComponent');
  return (
    // <CartContext.Consumer>
    //   {({itemsInCart, setItemsInCart}) => 
        <>
        <DropdownToggle nav caret className="MyCartTitle">
          My Cart ({props.itemsInCart.length})
        </DropdownToggle>
        <DropdownMenu className="CartDropDownMenu" right>
          <NavCartList itemsInCart={props.itemsInCart} />
        </DropdownMenu>
        </>
    //   }
    // </CartContext.Consumer>
  )
}
