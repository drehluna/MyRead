import { useContext, useState } from "react";


import { BookShelfs } from "./bookShelf";
import SearchBar from "./serachBar";
import style from '../styles/global.module.css'
import { bookcontext } from "../Contexts/bookContext";
import DesejolerProvider, { DesejolerContext } from "../Contexts/desejoContext";
import LendoAtualProvider, { LendoAtualContext } from "../Contexts/lendoContext";
import JaliProvider ,{ JaliContext } from "../Contexts/jaContext";


export function Main() {



  const {BKSEACH,ChangePage} = useContext(bookcontext)
  const {LendoAtual, SetLendo} = useContext(LendoAtualContext)
  const {DesejoLer} = useContext(DesejolerContext)
  const {JaLi} = useContext(JaliContext)


  
  

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
              <BookShelfs Nome="Desejo ler" BookList={DesejoLer} />
              <BookShelfs Nome="Já terminei" BookList={JaLi} />
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