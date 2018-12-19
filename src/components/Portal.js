import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//to use first add #portal div to index.html
const portalRoot = document.getElementById('portal');

//Import Portal and use to wrap component to be taken out of normal flow
 export default class Portal extends Component {
el = document.createElement('div');

componentDidMount = () =>{
  portalRoot.appendChild(this.el);
}
componentWillUnmount = () => {
  portalRoot.removeChild(this.el);
}
  render(){
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.el)
  }
 }