import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import Routing from "./layout";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <div>
        <Provider store={store}>
          {/* <NavBar /> */}

          <Routing />
        </Provider>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
