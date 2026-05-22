import { useDispatch } from "react-redux";
import { fetchWiki } from "./fetchWiki";
import './MyReset.css';

export default function MyInput() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch (fetchWiki());
    }

    return (
        <div >
            <button className="button" onClick={handleClick}>R</button>
        </div>
    );
}
