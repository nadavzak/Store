import React, { Component } from 'react'
import CCitems from './CCitems'
import CCitemsInCart from './CCitemsInCart '

export class CCshop extends Component {
    
    state= {
       itemsList: this.props.itemsList,
       itemsInCart:[],
      totalPrice:0
    }

   
    addtocart= (chosenItem) =>
    {
        console.log( this.state.itemsList);
        console.log( this.state.itemsInCart);
  
        let itemMovetocart=this.state.itemsInCart;
        itemMovetocart.push(chosenItem);
        //console.log( itemMovetocart);
     
       // console.log( this.state.itemsList );
        let itemsinlits=this.state.itemsList.filter((iteminlist)=> iteminlist.id !== chosenItem.id);
        console.log( itemsinlits);
        
        //console.log( chosenItem.id);
      
        //console.log( itemsinlits);
        let price=this.state.totalPrice;
        price=price+chosenItem.price;
        console.log(price)
        this.setState({ 
            itemsList:itemsinlits,
            itemsInCart:itemMovetocart,
            totalPrice:price

          
        });
       
 
        console.log( this.state.itemsList);
        console.log( this.state.itemsInCart);
    }

    removeFromCart=(itemTOremove)=>
    {
        let itemONcart=this.state.itemsInCart;
        itemONcart=itemONcart.filter((item)=>itemTOremove.id != item.id );
        //setstate
        let items=this.state.itemsList;
        items.push(itemTOremove);

        let price=this.state.totalPrice;
        price=price-itemTOremove.price;
        console.log(price);
        this.setState({
            itemsList: items , 
            itemsInCart:itemONcart, 
            totalPrice:price
        })
    }

    render() {

        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12 p-3 mb-2">
                    <img id="eaglesLogo" src="../images/AdidasLogo.png" alt="Adidas Logo" /><br />
                    <h1>Adidas shop</h1>
                </div>
                <div className="col-sm-4 p-3 mb-2">
                <div> <h3>total Price: {this.state.totalPrice }</h3> </div>
                    <CCitemsInCart itemsInCart={this.state.itemsInCart}  removeFromCart={this.removeFromCart}  /></div>
                <div className="col-sm-8 p-3 mb-2"><CCitems  itemsList={this.state.itemsList} addtocart={this.addtocart}  /></div>
            </div>
        </div>
        )
        
    }
    
}

export default CCshop
