import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart,addQuantity,subQuantity} from '../action/cartAction'
import '../styles/Home.css';


 class Cart extends Component{
	
	removeitem = (id)=>{
        this.props.removeFromCart(id); 
    }
	
	addQuan = (id)=>{
        this.props.addQuantity(id); 
	}
	
	subQuan = (id)=>{
        this.props.subQuantity(id); 
    }
    render(){
        let addedItems = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                        </div>

                        <div className="card-content">
                            <p>{item.title}</p>
                            <p><b>Price: {item.price}$</b></p>
							<p><b>Quantity : {item.Quantity}</b></p>
							<button className="remove" onClick={()=>{this.removeitem(item.id)}}>Remove Item</button>
							<button className="addQuan" onClick={()=>{this.addQuan(item.id)}}>Add Item</button>
							<button className="subQuan" onClick={()=>{this.subQuan(item.id)}}>Sub Item</button>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Items in Cart</h3>
                <div className="box">
                    {addedItems}
                </div>
				<div className="container">
				    <h3>Total : {this.props.total}</h3>
				</div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
	  items: state.addedItems,
	  total: state.total
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
	   removeFromCart: (id)=>{dispatch(removeFromCart(id))},
	   addQuantity: (id)=>{dispatch(addQuantity(id))},
	   subQuantity: (id)=>{dispatch(subQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
