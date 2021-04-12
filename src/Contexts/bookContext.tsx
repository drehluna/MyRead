import { createContext, ReactNode, useState} from "react"
import {get} from '../API/bookAPI'

interface lista {
    id: string;
    title: string;
    authors: Array<string>;
    ShelfID: string;
    thumbnail: string;
}


interface context {
    AttLendo: Function;
    AttDesejoler:Function;
    AttJaterminei: Function;
    Attbookchange: Function;

    LendoAtual:Array<lista>;
    Desejoler:Array<lista>;
    Jaterminei:Array<lista>;
    bookchange:Array<lista>;
    ChangePage: () => void;
    BKSEACH: Boolean;
}

interface BookproviderProps {
    children: ReactNode
}

export const bookcontext = createContext({} as context);


export default function BookProvider({children} : BookproviderProps) {



    const [LendoAtual, AttLendo] = useState([{ id: '', title: '', authors: [] , ShelfID: "LendoAtual", thumbnail: "" }].splice(1,1))
    const [Desejoler, AttDesejoler] = useState([{ id: '', title: '',  authors: [] , ShelfID: "Desejoler", thumbnail: ""  }].splice(1,1))
    const [Jaterminei, AttJaterminei] = useState([{ id: '', title: '', authors: [] , ShelfID: "Jaterminei",thumbnail: "" }].splice(1,1))
    const [bookchange, Attbookchange] = useState([{id: '', title: '', authors: [] , ShelfID: "null",thumbnail: ""  }].splice(1,1))

   
    
    const [BKSEACH, ATTBK] = useState(false) 


    function ChangePage() {
        ATTBK(!BKSEACH)
        console.log(BKSEACH)
    }

    

    return (
        <bookcontext.Provider 
        value={{ AttLendo, AttDesejoler, AttJaterminei, LendoAtual, Desejoler, Jaterminei,ChangePage, BKSEACH, Attbookchange, bookchange}}>
        {children}
        </bookcontext.Provider>
    );
}

