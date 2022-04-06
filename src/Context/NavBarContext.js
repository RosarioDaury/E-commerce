import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({children}) => {
    const [showNav, setShowNav] = useState(false);

    const data = {showNav, setShowNav}

    return <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
}