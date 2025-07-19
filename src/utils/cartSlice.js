import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            const existingItem = state.items.find(item => ((item.card?item.card.info.id:item.dish.info.id) === (action.payload.card?action.payload.card.info.id:action.payload.dish.info.id)));

            if (existingItem) {
                existingItem.quantity += 1;
            } 
            else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const item = state.items.find(item => ((item.card?item.card.info.id:item.dish.info.id) === (action.payload.card?action.payload.card.info.id:action.payload.dish.info.id)));
            if(item){
                if(item.quantity>1){
                    item.quantity -= 1;
                }
                else{
                    state.items = state.items.filter(i => ((i.card?i.card.info.id:i.dish.info.id)!==(action.payload.card?action.payload.card.info.id:action.payload.dish.info.id)));
                }
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;