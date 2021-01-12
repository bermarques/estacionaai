import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./requests/uploadImages";

function App() {
  return (
    <div className="App">
      <input type="file" onChange={UploadImage} id="image" />
    </div>
  );
}

export default App;
