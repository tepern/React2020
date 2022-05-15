import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/cartActions';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.amountInput = React.createRef();
  }

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }
  
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }


  render() {
    const addedProducts = this.props.items; 
    
    return (
      <ThemeContext.Consumer>{(context) => {
          const theme = !context.lightTheme ? '' : ' lightmode';  
          return (
            <section className={`section section_padding_top section_padding_bottom`+ theme}>
              <div class="cart-container container">
                <div class="cart-title">Your Shopping Cart</div>
                  <div class="cart">
                    { 
                      addedProducts.map(item => {
                          
                        return (

                          <div className = "cart__item">
                            <div class="cart__img">
                              <img src={item.img} alt="" />
                            </div>
                            <div class="cart__content">
                               <p class="cart__title">{item.name}</p>
                               <p class="cart__price">${item.price}</p>
                            </div>
                            <div className="cart__quantity">
                                <span>Quantity</span>
                                <p class="cart-quantity">{item.quantity}
                                  <span>
                                    <button className="cart__add" onClick={()=>{this.handleAddQuantity(item.No)}}>
                                    </button>
                                    <button className="cart__sub" onClick={()=>{this.handleSubtractQuantity(item.No)}}>
                                    </button>  
                                  </span>
                                </p>
                            </div>
                            <div className="cart__sum">${item.quantity*item.price}</div>
                            <div className="cart-remove">
                               <button className="cart__remove" onClick={()=>{this.handleRemove(item.No)}}>
                               </button>
                            </div>
                          </div>
                        )  
                       }   
                      )
                    }
                </div>
                <div className="cart-total">
                  <p>Total price</p>
                  <p class="title">${ this.props.total }</p>
                </div>      
              </div>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    )
  } 
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      removeItem: (id) => {dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)