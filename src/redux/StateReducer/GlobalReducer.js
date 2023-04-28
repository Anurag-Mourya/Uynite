const initialValue = {
  yourEvent: false,
  displayNone: false,
  displayArrow: false,
};

const globalData = (state = initialValue, action) => {
  switch (action.type) {
    case "SET_YOUR_EVENT":
      return { ...state, yourEvent: action.payload };

    case "SET_DISPLAY_EVENT":
      return { ...state, displayNone: action.payload };

    case "OPEN_PAGE_4":
      return { ...state, openPage4: action.payload };
      
    case "DISPLAY_ARROW":
      return { ...state, displayArrow: action.payload };


    default:
      return state;
  }
};
export default globalData;
