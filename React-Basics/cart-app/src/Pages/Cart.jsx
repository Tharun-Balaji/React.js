import { useDispatch, useSelector } from "react-redux"
import store from "../Store/store";
import { removeFromCart } from "../Store/CardSlice";


export default function Cart(){
    const item = useSelector(
        function(store){
            return store.cart;
        }
    )

    const dispatch = useDispatch();

    function handleRemove(id){
        dispatch(removeFromCart(id));
    }
    return(<div className="cartWrapper" >
        {
            item.map(function(item){
                return(
                    <div className="cartCard">
                        <img src={item.image} alt={item.name}></img>
                        <h5>{item.title}</h5>
                        <h5>Price: {item.price}</h5>
                        <button onClick={() => handleRemove(item.id)}  className="remove-btn" >Remove from Cart</button>
                    </div>
                )
            })
        }
    </div>
    )
}