import  {createSlice} from "@reduxjs/toolkit";
const getReducer = createSlice({
    name:"productData",
    initialState:{
        url: `https://wolffolins.b-cdn.net/wolffolins/81de49a0-252f-4308-85de-c694a7dc4637_01_Google_Workspace_Rotate.mp4`
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