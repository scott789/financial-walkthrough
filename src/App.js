import "./App.css";
import BasicAppBar from "./components/BasicAppBar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <BasicAppBar />
      <body className="App-body">
        <Cards />
      </body>
    </div>
  );
}

export default App;
