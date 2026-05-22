import { useSelector }from "react-redux";
import './MyOutput.css';

export default function MyOutput() {
    const size = useSelector(state => state.size);
    const text = useSelector(state => state.outputText);

    return (
      <div className='show' style={{fontSize:size}}>
          {text}
      </div>
    );
}
