import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default class Layout extends Component {
  static displayName: string = Layout.name;

  render(){
    return (
      <>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </>
    );
  }

}
