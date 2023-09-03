import { createContext, useState, useEffect } from "react";

export const OpenContext = createContext()

export const OpenProvider = ({children}) => {
    const [openAddPhoto, setOpenAddPhoto] = useState(false)

    useEffect(() => {
        document.body.style.overflow = openAddPhoto ? 'hidden' : 'auto' 
    }, [openAddPhoto])

    return (
        <OpenContext.Provider value={{openAddPhoto, setOpenAddPhoto}}>{children}</OpenContext.Provider>
    )
}