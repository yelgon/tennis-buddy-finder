import { createStore } from "redux";

const initialState = {
  loggedIn: false,
  signup: false,
  searchQuery: "",
  players: [],
  tennisCourts: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return { ...state, players: action.players };
    case "SET_COURTS":
      return { ...state, tennisCourts: action.court };
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
