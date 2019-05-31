import React, {Component} from 'react';
import Products from './components/Products';
import Filter from './components/filter';
import Basket from './components/Basket';


class App extends Component {

  state = {
    products: [],
    filteredProducts: [],
    cartItems: [],
    size:'',
    sort:''
};

componentDidMount() {
    // fetch("http://localhost:8000/products")
    //      .then(res=>res.json())
    //      .then(data=>this.setState({
    //          products: data,
    //          filteredProducts: data
    //      }));
   if(localStorage.getItem('cartItems')) {
     this.setState({
       cartItems: JSON.parse(localStorage.getItem('cartItems'))
     });
   } 
}

// handleChangeSort = (e)=> {
//   this.setState({
//     sort: e.target.value
//   });
//   this.listProducts();
// }

// handleChangeSize = (e)=> {
//   this.setState({
//     size: e.target.value
//   });
//   this.listProducts();
// }

// listProducts = () => {
//    this.setState(state=>{
//      if(state.sort !== '') {
//        state.products.sort((a,b)=>(state.sort==='highest') ? (a.price < b.price?1:-1):(a.price > b.price?1:-1))
//      } else {
//        state.products.sort((a,b)=> (a.id<b.id?1:-1))
//      } 
//      if(state.size !== '') {
//        return {
//         filteredProducts: state.products.filter(a=>
//           a.availableSizes.indexOf(state.size.toUpperCase())>=0  
//         )
//        }
//      }
//      return {filteredProducts: state.products};
//    })
// }

// handleCart = (e, product) => {
//   this.setState(state=>{
//     const cartItems = state.cartItems;
//     let productInCart = false;
//     cartItems.forEach(item => {
//       if(item.id === product.id) {
//         productInCart = true;
//         item.count++;
//       }
//     });
//     if(!productInCart){
//       cartItems.push({...product, count:1});
//     }
//     localStorage.setItem("cartItems",JSON.stringify(cartItems));
//     return cartItems;
//   })
// }

// handleRemoveFromCart = (e, product) => {
//   this.setState(state => {
//     const cartItems = state.cartItems.filter(a => a.id !== product.id);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     return { cartItems: cartItems };
//   })
// }

render() {
  return (
    
      <div className="container">
      <h1>React-Redux Shopping Cart</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
        <Filter size={this.state.size} 
            sort={this.state.sort} 
            handleChangeSize={this.handleChangeSize} 
            handleChangeSort={this.handleChangeSort}
            count={this.state.filteredProducts.length}/>
            <hr/>
          <Products products={this.state.filteredProducts} handleCart={this.handleCart}/>
        </div>
        <div className="col-md-4">
          <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
        </div>
      </div>
    </div>
   

  );
}

}

export default App;
