const {createSlice}=require("@reduxjs/toolkit")
const initialBooks={
    books:[
        {
            id:1,
            title:"Neuron NUrsing Education",
            author:"H.Al Hasib"
        },
        {
            id:2,
            title:"Endeavour Gynaecology",
            author:"Dr. Jahir"
        }
    ]
}
export const bookSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
    }

})

export const {showBooks}=bookSlice.actions;
export default bookSlice.reducer;