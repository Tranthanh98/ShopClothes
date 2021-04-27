import { SELECT_MENU_ADMIN } from "../constants/admin-menu"

export const selectMenu = (routeMenu)=>{
    return {
        type: SELECT_MENU_ADMIN,
        payload:{
            name: routeMenu.name,
            path: routeMenu.path
        }
    }
}