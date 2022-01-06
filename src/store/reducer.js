let counter = 0;

const reducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD_SAFE":
      counter++;
      return [
        ...initialState.map((el) => {
            return {...el, select: false}
        }),
        {
          id: counter,
          ...action.payload,
          createdAt: new Date(),
          select: true,
          secrets: []
        },
      ];
    case "EDIT_SAFE":
      return initialState.map((el) => {
        if (el.id === action.payload.id) {
          return { ...action.payload, createdAt: new Date() };
        } else {
          return el;
        }
      });
    case "DELETE_SAFE":
      return initialState.filter((el) => {
        if (el.id !== action.payload) {
          return el;
        }
      });
    case "SELECT_SAFE":
      return initialState.map((el) => {
        if (el.id == action.payload) {
          return { ...el, select: true };
        } else {
            return { ...el, select: false };
        }
      });
      case "ADD_SECRETS":
        return initialState.map((el) => {
            if (el.select === true) {
              return { ...el, secrets: [...el.secrets, {...action.payload}] };
            } else {
              return el;
            }
          });
    default:
      return initialState;
  }
};

export default reducer;
