import { useDispatch } from "react-redux";
import './MyReset.css';

export default function MyInput() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch ({
            type: "RESET",
        });
    }

    return (
        <div >
            <button className="button" onClick={handleClick}>R</button>
        </div>
    );
}
