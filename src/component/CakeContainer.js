import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";
import {buyIceCream} from '../Redux/icecream/icecreamActions';
const CakeContainer = () => {
    const numberofCake = useSelector(state => state.cake.numofcake);
    const dispatch = useDispatch();

    const numofIcecream =useSelector(state => state.iceCream.numofIcecream);
    return ( 
        <div>
            <h2>number of cake is - {numberofCake}</h2>
            <h2>number of icecream is - {numofIcecream}</h2>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
            <button onClick={()=> dispatch(buyIceCream())}>
                buy icecream
            </button>
        </div>
     );
}
 // state ya numofcake
 // setState() ya dispatcher
 // connect redux to react

export default CakeContainer;

