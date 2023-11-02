import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
/**
 * The main application component.
 * It uses Redux for state management and dispatches actions to update the counter value.
 * It also displays the counter value, error message, and loading status.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  const { counterValue, error, loading } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  /**
   * Dispatches an action to add ten to the counter value.
   */
  const handleAddTen = () => dispatch(addTen());
  
  /**
   * Dispatches an action to add a custom value to the counter value.
   */
  const handleAddCustom = () => dispatch(addTen(30));
  
  /**
   * Dispatches an action to subtract from the counter value.
   */
  const handleSub = () => dispatch(subs());
  
  /**
   * Dispatches an action to add a value to the counter after a delay.
   */
  const handleDelayCall = () => dispatch(TimeAddVal(25));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{counterValue}</h2>
      <h2>{error}</h2>
      <h2>{!loading ? "Idle" : "Loading"}</h2>
      <button onClick={handleAddTen}>Add Ten</button>
      <button onClick={handleAddCustom}>Add Custom</button>
      <button onClick={handleSub}>sub</button>
      <button onClick={handleDelayCall}>Delay Call</button>
    </div>
  );
}