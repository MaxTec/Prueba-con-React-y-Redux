import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
// import store from '../store'
import {removeFromCart} from '../actionCreators'
import {connect} from 'react-redux'
const styles = {
  footer: {
    fontWeight: 'bold'
  }
}
class ShoppingCart extends Component {
  // constructor() {
  //   super();
  //   this.removeFromCart = this.removeFromCart.bind(this);
  //   // this.state = {
  //   //   cart: []
  //   // }
  //   // //metodo subscribe
  //   // store.subscribe(()=>{
  //   //   this.setState({
  //   //     cart:store.getState().cart
  //   //   })
  //   // })
  // }
  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }

  // removeFromCart(product) {
  //   store.dispatch(removeFromCart(product))
  // }
}
// connect recibe dos funciones, la primera es mapStateToProps
// crea un objeto y se encarga de pasarlo como props
//para estados
const mapStateToProps  = function(state){
  return{
    cart:state.cart
  }
}
//para funciones
const mapDistpatchToProps = distpatch =>{
  return{
    removeFromCart(product){
      distpatch(removeFromCart(product));
    }
  }
}
export default connect(mapStateToProps, mapDistpatchToProps)(ShoppingCart);
