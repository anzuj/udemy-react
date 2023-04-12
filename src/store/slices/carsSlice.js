import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {searchTerm: "", data: []},
    reducers: {
      changeSearchTerm(state,action){
        state.searchTerm = action.payload
      },
      addCar(state, action) {
        //name and cost from fromSlice, provided as payload in component
        state.data.push({name: action.payload.name, cost: action.payload.cost, id: nanoid()});
      },
      removeCar(state, action) {
        //payload will be the if of the car we want to remove
        state.data = state.data.filter(car => car.id !== action.payload)
      },
    },

  });

export const carsReducer = carsSlice.reducer

export const {changeSearchTerm, addCar, removeCar } = carsSlice.actions;