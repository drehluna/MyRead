
import { Main } from "./components/Main";
import BookProvider from "./Contexts/bookContext";

function App() {
  return (
    <div>
      <BookProvider>
      <Main/>
      </BookProvider>
    </div>
  );
}

export default App;
