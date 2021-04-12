import { useContext, useState } from "react";


import { BookShelfs } from "./bookShelf";
import SearchBar from "./serachBar";
import style from '../styles/global.module.css'
import { bookcontext } from "../Contexts/bookContext";


export function Main() {


  const {
    Desejoler,
    Jaterminei,
    LendoAtual,
    BKSEACH,
    ChangePage
  } = useContext(bookcontext)



  return (

    <div>
      <div className={style.listbookstitle}>
        <h1>Meus Livros</h1>
      </div>
      {
        BKSEACH ? (
          <div>
            <SearchBar />
          </div>
        ) : (
          <div>

            <div>
              <BookShelfs Nome="Lendo atualmente" BookList={LendoAtual} />
              <BookShelfs Nome="Desejo ler" BookList={Desejoler} />
              <BookShelfs Nome="Já terminei" BookList={Jaterminei} />
              <div className={style.opensearch}>
                <a onClick={ChangePage}>+</a>
              </div>
            </div>
          </div>

        )
      }
    </div>
  );
}