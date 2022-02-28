import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Content from "./components/content/Content";
import { NewsContextProvider } from "./components/content/NewsContext";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <NewsContextProvider>
      <Content/>
      </NewsContextProvider>
    </div>
  );
}

export default App;
