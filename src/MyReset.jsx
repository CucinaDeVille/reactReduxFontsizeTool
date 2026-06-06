import { useDispatch } from "react-redux";
import { fetchWiki } from "./fetchWiki";
import './MyReset.css';

export default function MyInput() {

    // useDispatch hook returns function to send update REQUESTS to store
    const dispatch = useDispatch(); // dispatch holds that very function to send requests (actions)

    // if called, dispatch is handed a function and executed
    const handleClick = () => {
        dispatch (fetchWiki());
    }

    return (
        <div >
            <button className="button" onClick={handleClick}>R</button> {/* if button is pushed, handleClick is called*/}
        </div>
    );
}
