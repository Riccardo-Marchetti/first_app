// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ClassImage from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent textButton="CLICCA QUA" />
        <ButtonComponent textButton="PREMI QUA" />
        <ClassImage
          srcImage="http://placekitten.com/300/200"
          logoImage="logoGatto1"
        />
        <ClassImage srcImage="https://place.dog/300/200" logoImage="logoCane" />
        <ClassImage
          srcImage="http://placekitten.com/400/300"
          logoImage="logoGatto2"
        />
      </header>
    </div>
  );
}

export default App;
