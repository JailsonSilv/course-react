// 1 criar context 
import { createContext, useState } from "react";

export const  CounterContext = createContext();

// 2 criar provider 
export const CounterContextProvider = ({children}) => {

    const [counter, setCouter] = useState(1)

    return (
        <CounterContext.Provider value={{counter, setCouter}}>
            {children}
        </CounterContext.Provider>
    )

}
