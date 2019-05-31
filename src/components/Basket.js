import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions/cartActions';
import util from '../util';
class Basket extends Component {
  render() {
      const {cartItems} = this.props;
    return (
      <div className="alert alert-info">
        {
            cartItems.length === 0 ? "Basket is Empty" : <div>You have {cartItems.length} products in cart</div>
        }
        {
            cartItems.length > 0 && 
                <div>
                    <ul>
                       {cartItems.map(item=>
                        <li key={item.id}>
                           {item.count} = {item.price * item.count} &nbsp;
                          <strong>{item.title}</strong>  &nbsp;
                          <button className="bt btn-danger" onClick={(e)=>this.props.removeFromCart(this.props.cartItems, item)}>&times;</button>
                        </li>
                        )}
                    </ul>
                    Total: {
                        util.formatCurrency(cartItems.reduce((a,c)=>a + c.price*c.count,0))
                    }
                 <button className="btn btn-primary" onClick={()=>alert("Checkout")}>Checkout</button>
                </div>
        }

        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items
})

export default connect(mapStateToProps, {removeFromCart})(Basket)