import React, { Component } from 'react'
import CCitem from './CCitem';



 class CCitems extends Component {
    render() {
     //   console.log( this.props.itemsList);

        return (this.props.itemsList.map((item)=>(
            <div > 
                <CCitem key={item.id} item={item} addtocart={this.props.addtocart }  itemORcart={true}></CCitem>
            </div>
        )
        )
        )
       
    }
}

export default CCitems
