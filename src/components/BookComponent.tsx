import { useContext } from 'react';
import { bookcontext } from "../Contexts/bookContext";
import style from '../styles/global.module.css'


interface lista {
    id: string;
    title: string;
    thumbnail: string;
    authors: Array<string>;
    ShelfID: string
}

interface bookComponent {

    BookList: Array<lista>;

}



export function BookComponent(props: bookComponent) {

    
   

    const { AttLendo,
        AttDesejoler, 
        AttJaterminei, 
        Desejoler,
        Jaterminei,
        LendoAtual} = useContext(bookcontext)
        


       

        const remove = (shelf:string, index:number) => {

            console.log("fui chamado", shelf, index)

            if(shelf === "LendoAtual"){
                const newarray = [...LendoAtual]
                newarray.splice(index,1)
                AttLendo(newarray)
            }
            if(shelf === "Desejoler"){
                const newarray = [...Desejoler]
                newarray.splice(index,1)
                AttDesejoler(newarray)
            }
            if(shelf === "Jaterminei"){

                const newarray = [...Jaterminei]
                newarray.splice(index,1)
                AttJaterminei(newarray)

            }
        }

        const ChangeBookEvent = (index:number, id:string, name:string, value:string, shelfID:string,thumbnail:string, authors:Array<string>) => {
            
            if(value === "LendoAtualmente"){
                remove(shelfID,index)
                AttLendo((LendoAtual:Array<lista>) => [...LendoAtual, {id:id, title:name, ShelfID: "LendoAtual", thumbnail:thumbnail, authors:authors }])
                remove(shelfID,index)
                
                
                
            }
            if(value === "DesejoLer"){
                console.log(shelfID)
                remove(shelfID,index)
                AttDesejoler((DesejoLer:Array<lista>) => [...DesejoLer, {id:id, title:name, ShelfID: "Desejoler", thumbnail:thumbnail, authors:authors }])
                remove(shelfID,index)
               
               
            }
            if(value === "JaLi"){
                
                
                AttJaterminei((Jaterminei:Array<lista>) => [...Jaterminei, {id:id, title:name, ShelfID: "Jaterminei", thumbnail:thumbnail, authors:authors }])
                remove(shelfID,index)
                
            }

            if(value === "none"){
                remove(shelfID,index)
            }
        }
        
        
        
        

    const listitem = props.BookList.map((itens, index) =>

        

        <li key={itens.id}>
            
            <div className={style.book}>
                <div className={style.booktop}>
                    <div className={style.bookcover} style={{ width: 128, height: 188, backgroundImage: `url("${itens.thumbnail? itens.thumbnail : 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'}")`}}></div>
                    
                    <div className={style.bookshelfchanger}>
                        <select onChange={e => ChangeBookEvent(index, itens.id, itens.title, e.target.value, itens.ShelfID, itens.thumbnail, itens.authors)}>
                            <option selected disabled>Mover para</option>
                            <option value="LendoAtualmente">Lendo atualmente</option>
                            <option value="DesejoLer">Desejo ler</option>
                            <option value="JaLi">Já li</option>
                            <option value="none">Excluir</option>
                        </select>

                        
                    </div>
                    
                </div>
                <div className={style.booktitle}>{itens.title}</div>
                <div className={style.bookauthors}>{itens.authors}</div>

               
               
            </div>

        </li>)


    return (
        <ol className={style.booksgrid}>
            {listitem}
        </ol>


    );
}