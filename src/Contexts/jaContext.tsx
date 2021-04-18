import { createContext, ReactNode, useEffect, useState } from "react";

interface lista {
    id: string;
    title: string;
    authors: Array<string>;
    ShelfID: string;
    thumbnail: string;
}

interface context {
    SetJali: Function;

    JaLi:Array<lista>;
}

interface BookproviderProps {
    children: ReactNode
}


export const JaliContext = createContext({} as context);

export default function JaliProvider({children} : BookproviderProps) {

    const user = JSON.parse(localStorage.getItem('JaLi') || '{}');

    const [JaLi, SetJali] = useState([{ id: '', title: '', authors: [] , ShelfID: "Jaterminei", thumbnail: "" }].splice(1,1))
 

    localStorage.setItem('JaLi', JSON.stringify(JaLi))

   useEffect(() => {
    for (let i in user) {
        console.log(user)
        let idb = user[i]['id']
        let name = user[i]['title'] ? user[i]['title'] : 'Conteúdo inexistente.'
        let thumb = user[i]['thumbnail']
        let author = user[i]['authors'] ? user[i]['authors'] : ['']
        SetJali((JaLi: Array<lista>) => [...JaLi, { id: idb, title: name, ShelfID: "LendoAtual", thumbnail: thumb, authors: author }])
        }
   }, [])

     return (
         <JaliContext.Provider value={{JaLi, SetJali}}>
             {children}
         </JaliContext.Provider>
     );
 }