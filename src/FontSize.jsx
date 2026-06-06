import { useDispatch, useSelector } from "react-redux";
import './FontSize.css';

export default function FontSize() {

    // hook returns function that can later be used to send actions to store
    const dispatch = useDispatch();

    // hook to read current state of variable
    const num = useSelector(state => state.size); // function is provided, redux executes it and returns result

    return (
        <div>
            FontSize
            <div className='niceButtons'>
                <span>{num}</span>

                {/* use function to send REQUESTS to store to update variable -> store will forward request to reducer */}
                <button className='button' onClick={() => dispatch ({type: "SET_SIZE", payload: num +1})}>+</button>
                <button className='button' onClick={() => dispatch ({type: "SET_SIZE", payload: num -1})}>-</button>
            </div>
        </div>
    );
}
