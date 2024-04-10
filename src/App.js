import React from "react";
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from "./components/Cart"
//import data from "./data.json";
import store from "./store";
import {Provider} from "react-redux";

class App extends React.Component {

  /* constructor(){
    super();
    this.state = {
      //products:data.products,
      
      cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      :[],
      
      //size:"",
      //sort:"",
    }
  }; */

  /* createOrder = (order) =>{
    alert("Push the data to server"+ order.name)
  } */


  /* sortProducts = (event) =>{
    console.log(event.target.value)
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a,b) =>
        sort ==="lowest"
        ? a.price > b.price
          ? 1
          : -1
        : sort === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a._id < b._id
          ? 1  
          : -1
    ),
    }));
  }; */

  /* filterProducts = (event) => {
    console.log(event.target.value)
  if(event.target.value === ""){
    this.setState({size:event.target.value,products:data.products})
  }else {
    //console.log(event.target.value)
    this.setState({
      size : event.target.value,
      products:data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >=0
      ),
    });
  }
  } */

  /* addToCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if(item._id === product._id){
        item.count++
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
      this.setState({cartItems});
      localStorage.setItem("cartItems",JSON.stringify(cartItems))
  } ; */

  /* removeFromCart = (product) =>{
    console.log("I am Working")
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
      );
  } */

  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">Pranika Shopping Mart</a>
        </header>
        <main>
        <div className="content">
          <div className="main">
            <Filter
            /* count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts} */
            >
            </Filter>
          <Products 
          /* products={this.state.products} */
          // addToCart = {this.addToCart}
          > 
          
          </Products>
          </div>
          <div className="sidebar"></div>
          <Cart
          /* cartItems = {this.state.cartItems}
          removeFromCart={this.removeFromCart}
          createOrder= {this.createOrder} */
          ></Cart>
        </div>
        </main>
        <footer>Pranika Software Solution &copy;2024</footer>
      </div>
      </Provider>
    );
  }

}

export default App;
