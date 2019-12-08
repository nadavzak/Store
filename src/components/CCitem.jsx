import React, { Component } from 'react'
import {Card , Button} from 'react-bootstrap';


export class CCitem extends Component {
    render() 
    {
        if(this.props.itemORcart)
        {
       // console.log(this.props.item);
        return (
            <div>
           


                <Card className="text-center">
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title><img className="img-fluid" src={this.props.item.image} alt="" /></Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                           <div><br/></div> Price:{this.props.item.price }
                            <span>&#8364;</span>
                        </Card.Text>
                        <Button  variant="outline-primary" onClick={()=>this.props.addtocart(this.props.item)}>Add To Cart</Button>
                    </Card.Body>
                   
                </Card>
                
            </div>
        )//return
    }//if
        else{
    return(
        <div  >
            <h1>MY CART</h1>
            <Card className="text-center">
   
                    <div className="col-sm-12 p-3 mb-2">
                 <Card.Header>{this.props.item.name}</Card.Header>
                </div>
               
              
             
                   
                    
                    <Card.Body>
                        <Card.Title><img className="img-fluid" src={this.props.item.image} alt="" /></Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                           <div><br/></div> Price:{this.props.item.price }
                            <span>&#8364;</span>
                        </Card.Text>
                   
                    </Card.Body>
                    <div >
                    <Button variant="outline-danger" onClick={()=>this.props.removeFromCart(this.props.item)}>cancel</Button>
                    <div><br/></div>
                </div>   
                </Card>
                
        </div>
    )//return
    }//else

}//render


}//class


export default CCitem
