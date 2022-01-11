let counter = 0;

const reducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD_SAFE":
      counter++;
      return [
        ...initialState.map((el) => {
          return { ...el, select: false };
        }),
        {
          id: counter,
          ...action.payload,
          createdAt: new Date(),
          select: true,
          secrets: [],
        },
      ];
    case "EDIT_SAFE":
      return initialState.map((el) => {
        console.log(action.payload, "action.payload");
        if (el.id === action.payload.id) {
          return {
            ...el,
            safeName: action.payload.safeName,
            safeOwner: action.payload.safeOwner,
            safeType: action.payload.safeType,
            safeDesc: action.payload.safeDesc,
            createdAt: new Date(),
            select: true,
          };
        } else {
          return { ...el, select: false };
        }
      });
    case "DELETE_SAFE": //TODO
      const updatedState = initialState.filter((el) => {
        if (el.id !== action.payload) {
          return el;
        }
      });
      return updatedState.map((el, index) => {
        if (index == 0) {
          return {...el, select: true}
        } else {
          return el;
        }
      })
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
          return { ...el, secrets: [...el?.secrets, { ...action.payload }] };
        } else {
          return el;
        }
      });
    case "DELETE_SECRETS":
      return initialState.map((el) => {
        if (el.select === true) {
          console.log(el);
          return {
            ...el,
            secrets: el.secrets.filter((secret) => {
              console.log(secret);
              if (secret.id !== action.payload) {
                console.log(secret);
                return secret;
              }
            }),
          };
        } else {
          return el;
        }
      });
    default:
      return initialState;
  }
};

export default reducer;
