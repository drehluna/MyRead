import { createContext, ReactNode, useEffect, useState } from "react";

interface lista {
    id: string;
    title: string;
    authors: Array<string>;
    ShelfID: string;
    thumbnail: string;
}

interface context {
    SetDesejoLer: Function;
    DesejoLer:Array<lista>;
}

interface BookproviderProps {
    children: ReactNode
}

export const DesejolerContext = createContext({} as context);


export default function DesejolerProvider({children} : BookproviderProps) {

    
    const user = JSON.parse(localStorage.getItem('DesejoLer') || '{}');

    const [DesejoLer, SetDesejoLer] = useState([{ id: '', title: '', authors: [] , ShelfID: "Desejoler", thumbnail: "" }].splice(1,1))
 
    localStorage.setItem('DesejoLer', JSON.stringify(DesejoLer))

    useEffect(() => {
        for (let i in user) {
            console.log(user)
            let idb = user[i]['id']
          let name = user[i]['title'] ? user[i]['title'] : 'Conteúdo inexistente.'
          let thumb = user[i]['thumbnail']
          let author = user[i]['authors'] ? user[i]['authors'] : ['']
          SetDesejoLer((DesejoLer: Array<lista>) => [...DesejoLer, { id: idb, title: name, ShelfID: "Desejoler", thumbnail: thumb, authors: author }])
            }
       }, [])

     return (
         <DesejolerContext.Provider value={{DesejoLer, SetDesejoLer}}>
             {children}
         </DesejolerContext.Provider>
     );
 }