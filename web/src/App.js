import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { Provider } from "react-redux";

import store from "./Redux/Store/store";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    // <AuthContextProvider>
      <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </Provider>
    // </AuthContextProvider>
  );
}

export default App;
