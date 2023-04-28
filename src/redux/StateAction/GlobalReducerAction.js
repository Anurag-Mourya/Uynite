import store from "../store";
export const yourEvent = (value) => {
  store.dispatch({
    type: "SET_YOUR_EVENT",
    payload: value,
  });
};

export const displayNone = (value) => {
  store.dispatch({
    type: "SET_DISPLAY_EVENT",
    payload: value,
  });
};

export const openPage4 = (value) => {
  store.dispatch({
    type: "OPEN_PAGE_4",
    payload: value,
  });
};

export const displayArrow = (value) => {
  store.dispatch({
    type: "DISPLAY_ARROW",
    payload: value,
  });
};
