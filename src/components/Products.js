import React, { Component } from 'react';
import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart} from '../actions/cartActions';
 class Products extends Component {

    componentDidMount () {
        this.props.fetchProducts()
    }
 
  render() {

    const productItems = this.props.products.map(product=>(
        <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={this.props.handleCart}>
                  <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                  <p>
                    {product.title}
                  </p>
                </a>
                <div>
                    <strong>{util.formatCurrency(product.price)}</strong>
                    <button className="btn btn-primary" onClick={()=>this.props.addToCart(this.props.cartItems, product)}>Add to cart</button>
                </div>
            </div>
        </div>
     )
    )
    return (
      <div className="row">
         {productItems}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        products: state.products.filteredItems,
        cartItems: state.cart.items
    }
}


export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
