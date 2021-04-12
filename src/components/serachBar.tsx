import { useContext, useEffect, useState } from 'react';
import { bookcontext } from '../Contexts/bookContext';
import style from '../styles/global.module.css'

import { getAll, search } from '../API/bookAPI'
import { BookComponent } from './BookComponent';


interface lista {
  id: string;
  title: string;
  ShelfID: string;
  thumbnail: string;
  authors: Array<string>;
}

export default function SearchBar() {

  


  const { ChangePage, bookchange, Attbookchange } = useContext(bookcontext)

  

  const handleInputChange = (e: any) => {  
    Attbookchange([{id: '', title: '', authors: [] , ShelfID: "null",thumbnail: ""  }].splice(1,1)) 
    setTimeout(() => {
      getBooks(e.target.value)
    }, 2*1000); 
  }

  async function getBooks(query: string) {
    let books = await search(query)

    for (let i in books) {
      let id = books[i]['id'] 
      let name = books[i]['title'] ? books[i]['title'] : 'Conteúdo inexistente.'


      


      const thumb = books[i]['imageLinks'] ? books[i]['imageLinks']['thumbnail'] : 'https://i.ibb.co/NCh2r8g/404-error-1.png'
      
      const author = books[i]['authors']

      


      


  
      Attbookchange((bookchange: Array<lista>) => [...bookchange, { id: id, title: name, ShelfID: "null", thumbnail:  thumb, authors: author }])
      
    }
    
  }


  return (
    

    <div className={style.searchbooksbar}>
     
      <a className={style.closesearch} onClick={ChangePage}>Close</a>
      <div className={style.searchbooksinputwrapper}>


        <input onChange={handleInputChange} type="text" placeholder="Search by title or author" />

        <div className={style.searchbooksresults}>
          <ol className={style.booksgrid}>
            <BookComponent BookList={bookchange} />
          </ol>

        </div>
      </div>
    </div>

  );
}