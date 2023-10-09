const currentDate = new Date();
// *Get the year and month parts
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

// *Format the value to set in the input field
const todayDate = `${year}-${month}`;

export const TileComponentInitialState = {
    isSubmitted: false,
    isMouseOver: false,
    isClicked: false,
    value1: '',
    value2: '',
    value3: todayDate,
    value4: todayDate,
    textareaValue: '',
};

export const TileComponentReducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, isSubmitted: action.payload };
        case 'EDIT':
            return { ...state, isSubmitted: false };
        case 'MOUSE_OVER':
            return { ...state, isMouseOver: action.payload };
        case 'CLICK':
            return { ...state, isClicked: !state.isClicked };
        case 'UPDATE_VALUES':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
