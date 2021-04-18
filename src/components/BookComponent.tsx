import { useContext } from 'react';
import { bookcontext } from "../Contexts/bookContext";
import { DesejolerContext } from '../Contexts/desejoContext';
import { JaliContext } from '../Contexts/jaContext';
import { LendoAtualContext } from '../Contexts/lendoContext';
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


    const {SetLendo,LendoAtual} = useContext(LendoAtualContext)
    const {DesejoLer,SetDesejoLer} = useContext(DesejolerContext)
    const {SetJali,JaLi} = useContext(JaliContext)
        

        const remove = (shelf:string, index:number) => {

            console.log("fui chamado", shelf, index)

            

            if(shelf === "LendoAtual"){
                const newarray = [...LendoAtual]
                newarray.splice(index,1)
                SetLendo(newarray)
                
                
            }
            if(shelf === "Desejoler"){
                const newarray = [...DesejoLer]
                newarray.splice(index,1)
                SetDesejoLer(newarray)
                
            }
            if(shelf === "Jaterminei"){
                
                const newarray = [...JaLi]
                newarray.splice(index,1)
                SetJali(newarray)
              
                

            }
        }

        const ChangeBookEvent = (index:number, id:string, name:string, value:string, shelfID:string,thumbnail:string, authors:Array<string>) => {
            
            if(value === "LendoAtualmente"){
                SetLendo((LendoAtual:Array<lista>) => [...LendoAtual, {id:id, title:name, ShelfID: "LendoAtual", thumbnail:thumbnail, authors:authors }])
                remove(shelfID,index)
                
                
            }
            if(value === "DesejoLer"){
                SetDesejoLer((DesejoLer:Array<lista>) => [...DesejoLer, {id:id, title:name, ShelfID: "Desejoler", thumbnail:thumbnail, authors:authors }])
                remove(shelfID,index)
               
               
               
            }
            if(value === "JaLi"){
                
                SetJali((JaLi:Array<lista>) => [...JaLi, {id:id, title:name, ShelfID: "Jaterminei", thumbnail:thumbnail, authors:authors }])
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
                <div>{itens.authors.map((authors) => 
                    <div className={style.bookauthors}>{authors}</div>
                )}</div>
            </div>
        </li>)
    return (
        <ol className={style.booksgrid}>
            {listitem}
        </ol>
    );
}