import { createContext, ReactNode, useEffect, useState } from "react"
import { get } from '../API/bookAPI'

interface lista {
    id: string;
    title: string;
    authors: Array<string>;
    ShelfID: string;
    thumbnail: string;
}


interface context {

    Attbookchange: Function;
    bookchange: Array<lista>;
    ChangePage: () => void;
    BKSEACH: Boolean;
}

interface BookproviderProps {
    children: ReactNode
}

export const bookcontext = createContext({} as context);


export default function BookProvider({ children }: BookproviderProps) {

    const [bookchange, Attbookchange] = useState([{ id: '', title: '', authors: [], ShelfID: "null", thumbnail: "" }].splice(1, 1))
    const [BKSEACH, ATTBK] = useState(false)
    function ChangePage() {
        ATTBK(!BKSEACH)
        console.log(BKSEACH)
    }

    return (
        <bookcontext.Provider
            value={{ ChangePage, BKSEACH, Attbookchange, bookchange }}>
            {children}
        </bookcontext.Provider>
    );
}

