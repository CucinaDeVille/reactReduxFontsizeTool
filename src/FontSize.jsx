import { useDispatch, useSelector } from "react-redux";
import './FontSize.css';

export default function FontSize() {

  const dispatch = useDispatch();
  const num = useSelector(state => state.size);

  return (
    <div>
      FontSize
      <div className='niceButtons'>

        <span>{num}</span>

        <button className='button' onClick={() => dispatch ({type: "SET_SIZE", payload: num +1})}>+</button>
        <button className='button' onClick={() => dispatch ({type: "SET_SIZE", payload: num -1})}>-</button>
      </div>
    </div>
  );
}
