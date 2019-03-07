
  
import Item1 from './../images/item1.jpeg'
import Item2 from './../images/item2.jpeg'
import Item3 from './../images/item3.jpeg'
import Item4 from './../images/item4.jpeg'
import Item5 from './../images/item5.jpeg'
import Item6 from './../images/item6.jpeg'
import { ADD_TO_CART,REMOVE_FROM_CART,SUB_QUANTITY,ADD_QUANTITY } from '../action/actionType';


const initState = {
    items: [
        {id:1,title:'Vans Old School', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'DC Terra', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Addidas SuperStar', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'NewBalance UltraRun', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Nike Air Max', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Ascis Crossover', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6},
        {id:7,title:'Vans Old School', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:8,title:'DC Terra', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id);
        let existed_item= state.addedItems.find(item=> action.id === item.id);
        if(existed_item){
            addedItem.quantity += 1 
            return{
                ...state,
                total: state.total + addedItem.price 
            }
        }
        else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
              
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }
    if(action.type === REMOVE_FROM_CART){
        let removedItem = state.items.find(item => item.id === action.id);
        let newitems = state.addedItems.filter(item=> action.id !== item.id);
        return{
            ...state,
            addedItems: newitems,
            total : state.total - (removedItem.price * removedItem.quantity)
        }
    }
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id);
        addedItem.quantity += 1;
        return {
            ...state,
            total : state.total + addedItem.price
        }

    }
    if(action.type === SUB_QUANTITY){
        let subItem = state.items.find(item=> item.id === action.id);
        subItem.quantity -= 1;
        return {
            ...state,
            total : state.total - subItem.price
        }

    }
    return state
}

export default cartReducer;