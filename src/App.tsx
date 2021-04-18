
import { Main } from "./components/Main";
import BookProvider from "./Contexts/bookContext";
import DesejolerProvider from "./Contexts/desejoContext";
import JaliProvider from "./Contexts/jaContext";
import LendoAtualProvider from "./Contexts/lendoContext";

function App() {
  return (
    <div>
      <LendoAtualProvider>
      <JaliProvider>
        <DesejolerProvider>
      <BookProvider>
      <Main/>
      </BookProvider>
      </DesejolerProvider>
      </JaliProvider>
      </LendoAtualProvider>
    </div>
  );
}



export default App;
