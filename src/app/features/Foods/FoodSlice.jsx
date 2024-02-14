import { createSlice } from "@reduxjs/toolkit";

const initialFoods = {
    foods: [
        {
            id: 1,
            title: "Chicken chees Burger",
            chefe: "Alomgir"
        },
        {
            id: 2,
            title: "Chicken Momo",
            chefe: "Jahangir"
        },
        {
            id: 3,
            title: "Chicken Shaworma",
            chefe: "Mohiuddin"
        },
    ]
}

export const foodSlice = createSlice({
    name: "foods",
    initialState: initialFoods,
    reducers: {
        showFood: state => state,
        addFood: (state, action) => {
            state.foods.push(action.payload)
        },
        updatFood: (state, action) =>{
            const {id, title, chefe} = action.payload;
            const isExistFood = state.foods.filter(food => food.id === id);
            if(isExistFood){
                isExistFood[0].title = title;
                isExistFood[0].chefe = chefe;
            }
        },
        deleteFood: (state, action) =>{
            state.foods = state.foods.filter(food => food.id !== action.payload)
        }
    }
})

export const {showFood, addFood, deleteFood, updatFood} =  foodSlice.actions

export default foodSlice.reducer