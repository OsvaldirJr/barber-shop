import { createAction, createReducer } from "@reduxjs/toolkit";
import { Cart, Facilitie, NewUserData } from "~/@types/Common/Types";
import { activeUser, coordinates, Favorite, interest } from "~/@types/Common/UserTypes";

export interface UserReducerData {
    isAuthenticated: boolean,
    activeUser?: activeUser,
    activePark?: Facilitie,
    activeFavorites?: Favorite<any>[]
    activeCart?: Cart
    activeUserData?: NewUserData
    activeCurrentUser?: string
}

const INITIAL_STATE: UserReducerData = {
    isAuthenticated: false
};

export const changeParks = createAction<Facilitie>("CHANGE_PARK");
export const changeCoordinates = createAction<coordinates>("CHANGE_COORDINATES");
export const changeInterests = createAction<interest[]>("CHANGE_INTERESTS");
export const changeFavorites = createAction<Favorite<any>[]>("CHANGE_FAVORITES");
export const login = createAction<activeUser>("LOGIN");
export const logout = createAction("LOGOUT");
export const notAuthenticated = createAction("NOT_AUTHENTICATED");
export const cart = createAction<Cart>("CART")
export const userData = createAction<any[]>("USERDATA")
export const currentUser = createAction<string>("CURRENTUSER")

export default createReducer(INITIAL_STATE, {
    [changeParks.type]: (state, action) => ({ ...state, activePark: action.payload }),
    [changeCoordinates.type]: (state, action) => ({ ...state, activeUser: { ...state.activeUser, coordinates: action.payload } }),
    [login.type]: (state, action) => ({ ...state, activeUser: action.payload, isAuthenticated: true }),
    [logout.type]: () => (INITIAL_STATE),
    [notAuthenticated.type]: (state) => ({ ...state, isAuthenticated: false }),
    [changeInterests.type]: (state, action) => ({ ...state, activeUser: { ...state.activeUser, interests: action.payload } }),
    [changeFavorites.type]: (state, action) => ({ ...state, activeFavorites: action.payload }),
    [cart.type]: (state, action) => ({ ...state, activeCart: action.payload }),
    [userData.type]: (state, action) => ({ ...state, activeUserData: action.payload, isAuthenticated: true }),
    [currentUser.type]: (state, action) => ({ ...state, activeCurrentUser: action.payload, isAuthenticated: true }),
});