import { useDispatch, useSelector }from "react-redux";
import './TextInput.css';

export default function TextInput() {

    const dispatch = useDispatch();
    const text = useSelector(state => state.text);

    const handleChange = (event) => {
        dispatch ({
            type: "SET_SIZE",
            payload: event.target.value
        });
      }
    
    return (
      <div>
        <input className="NiceInput" type="text" onChange={handleChange} value={text}/>
      </div>
    );
}
