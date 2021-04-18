import style from '../styles/global.module.css'
import { BookComponent } from './BookComponent'

interface lista {
    id: string;
    title: string;
    thumbnail: string;
    ShelfID: string;
    authors: Array<string>;
    
}


interface ShelfProps {

    Nome: string;
    BookList: Array<lista>;
    
    
}

export function BookShelfs(props: ShelfProps) {


    

    return (

        <div>
            <div className={style.listbook}>
                
                <div className={style.listbookscontent}>
                    <div>
                        <div className={style.bookshelf}>
                            <h2 className={style.bookshelftitle}>{props.Nome}</h2>
                            <div className={style.bookshelfbooks}>
                                    <BookComponent BookList={props.BookList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


