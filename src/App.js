import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
/**
 * A functional component that represents the main application.
 *
 * It uses the Redux useSelector hook to access the state of the counter and the dispatch hook to dispatch actions.
 * It renders a div with a greeting, the current counter value, the error message (if any), the loading status, and buttons to dispatch actions to add or subtract from the counter.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  const numval = useSelector((state) => state.counter.counterValue);
  const AsynObj = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{numval}</h2>
      <h2>{AsynObj.error}</h2>
      <h2>{!AsynObj.loading ? "Idle" : "Loading"}</h2>
      <button
        onClick={() => {
          dispatch(addTen());
        }}
      >
        Add Ten
      </button>
      <button
        onClick={() => {
          dispatch(addTen(30));
        }}
      >
        Add Custom
      </button>
      <button
        onClick={() => {
          dispatch(subs());
        }}
      >
        sub
      </button>
      <button
        onClick={() => {
          dispatch(TimeAddVal(25));
        }}
      >
        Delay Call
      </button>
    </div>
  );
}