import React from 'react'
import { Col, DropdownItem, Row } from 'reactstrap';
import { ItemSelectedModel } from '../../models/itemmodels/ItemSelectedModel'
import './NavCartList.scss'

interface Iprops {
  itemsInCart: ItemSelectedModel[]
}

export default function NavCartList(props:Iprops) {
  const newContent = props.itemsInCart.map( item => {
    return (
      <div className="CartDropDownItem">
        <Row>
          <Col xs={{size:3}}>
            <img src={item.Image} className="img-fluid"/>
          </Col>
          <Col xs={{size:6, offset:1}}>
            <p>{item.ItemName}</p>
            <p>{item.Amount}x <span style={{fontWeight:'bold'}}>${item.Price.toFixed(2)}</span></p>
            <p>Size: {item.Size}</p>
          </Col>
        </Row>
      </div>
    )
  });
  return <>{newContent}</>;
}
