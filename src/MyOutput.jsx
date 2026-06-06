import { useSelector }from "react-redux";
import './MyOutput.css';

export default function MyOutput() {

    // read size and outputText from store and hold in variables
    const size = useSelector(state => state.size);
    const text = useSelector(state => state.outputText);

    return (
      <div className='show' style={{fontSize:size}}>
          {text}
      </div>
    );
}
