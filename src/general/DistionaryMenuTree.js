// import {initState as TreeMenu} from '../reducers/menu-tree';

export function GetDistionatyMenu(mapMenu, TreeMenu, Parent = null){
    for(let menu of TreeMenu){
        mapMenu.set(menu, Parent);
        if(menu.items != null){
            GetDistionatyMenu(mapMenu, menu.items, menu);
        }
    }
    return mapMenu;
}