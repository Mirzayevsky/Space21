import  {createSlice} from "@reduxjs/toolkit";
const getReducer = createSlice({
    name:"productData",
    initialState:{
        url: `https://wolffolins.b-cdn.net/`
    },
    reducers:{
        getData:(state, action) => {
            state.data = action.payload
        },
    }
});

export  function  GetData  ( ) {
    return(dispatch) => {
        dispatch( {
            type: getData.type,
            payload: null
        })
    }
}

export const {getData} = getReducer.actions
export default  getReducer.reducer