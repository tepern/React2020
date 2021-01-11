import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

//import topMenu from '../HeaderMenu';
/*import img1 from '../../../assets/images/products/1.png';
import img2 from '../../../assets/images/products/2.png';
import img3 from '../../../assets/images/products/3.png';
import img4 from '../../../assets/images/products/4.png';
import img5 from '../../../assets/images/products/5.png';
import img6 from '../../../assets/images/products/6.png';
import img7 from '../../../assets/images/products/7.png';
import img8 from '../../../assets/images/products/8.png';
import img9 from '../../../assets/images/products/9.png';
import img10 from '../../../assets/images/products/10.png';*/

class Product extends Component {
    
    handleClick = (id) => {
        this.props.addToCart(id);
    } 

    render() {

       return (
            <div class="product__item">
                <div class="product__img">
                    <img src={this.props.img} alt=""></img>
                </div>
                <div class="product__title">{this.props.name}</div>
                <p class="product__price">${this.props.price}</p>
                <div class="product-button">
                    <button class="product__btn btn" onClick={()=>{this.handleClick(this.props.id)}}>Add to cart</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
} 


export default connect(null,mapDispatchToProps)(Product)