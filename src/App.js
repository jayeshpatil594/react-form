import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "./App.css";
import LendingForm from "./containers/LendingForm/LendingForm";
import reducers from './reducers'
const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LendingForm />
      </div>
    </Provider>
  );
}

export default App;
