import { createStore } from "redux";

const initialState = {
  loggedIn: false,
  signup: false,
  toggle: false,
  currentUser: "",
  searchQuery: "",
  players: [],
  tennisCourts: [],
  matches: [],
  page: false
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return { ...state, players: action.players };
    case "SET_COURTS":
      return { ...state, tennisCourts: action.court };
    case "SET_MATCHES":
      return { ...state, matches: action.match };
    case "login-success":
      return { ...state, loggedIn: true, currentUser: action.user };
    case "SET-firstPage":
      return { ...state, page: true };
    case "SET-TOGGLE":
      return { ...state, toggle: action.button };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
