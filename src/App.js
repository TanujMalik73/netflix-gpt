import Body from "./Component/Body";
import { Provider } from "react-redux";
import userstore from "./util/userstore";

function App() {
  return (
      <Provider store={userstore}><Body/></Provider>
  );
}

export default App;
