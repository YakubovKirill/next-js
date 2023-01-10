import { ReactNode, createContext, useState } from "react";

export interface IAppContext {
    menu: any[],
    firstCategory: any,
    setMenu?: (newMenu: any[]) => void,
}

const iniContext: IAppContext = {
    menu: [],
    firstCategory: '',
}

export const AppContext = createContext<IAppContext>(iniContext);
