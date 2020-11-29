import React, { useContext, useReducer } from "react";
import Alert from "./Alert";

const AlertContext = React.createContext();
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext);
};

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";

const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { ...state, visible: true, text: action.text };
    case "hide":
      return { ...state, visible: false };
    default:
      return state;
  }
};

const AlertProvider = ({ children }) => {
  // const [alert, setAlerst] = useState(false);

  // const toggle = () => {
  //     setAlerst((prev) => !prev);
  //   };

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: "",
  });

  const show = (text) => {
    dispatch({ type: SHOW_ALERT, text });
  };

  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
        text: state.text,
      }}
    >
      {/* <AlertToggleContext.Provider value={toggle}> */}
      {children}
      {/* </AlertToggleContext.Provider> */}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
