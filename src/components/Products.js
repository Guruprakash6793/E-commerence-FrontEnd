import React,{Component} from 'react';
import formatCurrency from '../utill';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart} from '../actions/cartActions'

class Products extends Component{
    componentDidMount(){
        this.props.fetchProducts();
    }
    render(){
        return(
            <div>
                {!this.props.products ? (
                    <div>Loading</div>
                ):(
                <ul className="products">
                 { this.props.products.map((product) => (
                     <li key={product._id}>
                         <div className="product">
                             <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title}></img>
                                <p>{product.title}</p>
                             </a>
                             <div className="product-price">
                                 <div>{formatCurrency(product.price)}</div>
                                 <button 
                                 onClick={()=> this.props.addToCart(product)}
                                 className="button primary">Add to Cart</button>
                             </div>
                         </div>
                     </li>
                 )) }
                </ul>
                )}
            </div>
        )
    }
}

export default connect((state) => ({products: state.products.filteredItems}),{
    fetchProducts,addToCart
})(Products);
    
    