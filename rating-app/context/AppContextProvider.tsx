import { ReactNode, useState } from "react";
import { AppContext, IAppContext } from ".";

export const AppContextProvider = ({menu, firstCategory, children}: IAppContext & { children: ReactNode }): JSX.Element => {
    const [menuState, setMenuState] = useState<any[]>(menu);
    const setMenu = (newMenu: any[]) => {
        setMenuState(newMenu)
    }
    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}> {children} </AppContext.Provider>
}