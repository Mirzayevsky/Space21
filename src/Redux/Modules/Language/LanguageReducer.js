const  defaultState = "english";

export const languageReducer = (state = defaultState,action) => {
    switch (action.type){
        case "change_to_en":
            state = action.payload;
            break;
        case "change_to_ru":
            state = action.payload;
            break;
        case "change_to_uz":
            state = action.payload;
        default:
            break;
    }
    return state;

}