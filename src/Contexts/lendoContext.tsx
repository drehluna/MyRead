import { createContext, ReactNode, useEffect, useState } from "react";

interface lista {
    id: string;
    title: string;
    authors: Array<string>;
    ShelfID: string;
    thumbnail: string;
}


interface context {

    LendoAtual:Array<lista>;
    SetLendo: Function;
   
}

interface BookproviderProps {
    children: ReactNode
}

export const LendoAtualContext = createContext({} as context);


export default function LendoAtualProvider({children} : BookproviderProps) {

   
    const user = JSON.parse(localStorage.getItem('LendoAtual') || '{}');

   
   const [LendoAtual, SetLendo] = useState([{ id: '', title: '', authors: [] , ShelfID: "LendoAtual", thumbnail: "" }].splice(1,1))
   
   localStorage.setItem('LendoAtual', JSON.stringify(LendoAtual))

   useEffect(() => {
    for (let i in user) {
        console.log(user)
        let idb = user[i]['id']
        let name = user[i]['title'] ? user[i]['title'] : 'Conteúdo inexistente.'
        let thumb = user[i]['thumbnail']
        let author = user[i]['authors'] ? user[i]['authors'] : ['']
        SetLendo((LendoAtual: Array<lista>) => [...LendoAtual, { id: idb, title: name, ShelfID: "LendoAtual", thumbnail: thumb, authors: author }])
        }
   }, [])

    return (
        <LendoAtualContext.Provider value={{LendoAtual, SetLendo}}>
            {children}
        </LendoAtualContext.Provider>
    );
}