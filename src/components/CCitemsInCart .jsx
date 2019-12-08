import React, { Component } from 'react'
import CCitem from './CCitem'




 class CCitemsInCart  extends Component {
    render() {
  
        return (this.props.itemsInCart.map((item)=>(
            <div > 
                <CCitem key={item.id} item={item} removeFromCart={this.props.removeFromCart} itemORcart={false} ></CCitem>
            
            
            </div>
        )
        )
        )
       
    }
}

export default CCitemsInCart 
