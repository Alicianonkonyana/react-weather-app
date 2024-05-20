import "./App.css";
import Weather from "./Weather";

export default App;
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Alicianonkonyana"
            target="_black"
            rel="noreferrer"
          >
            Alicia Nonkonyana
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Alicianonkonyana/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced on Git-hub
          </a>{" "}
          hosted on{" "}
          <a
            href="https://tiny-hummingbird-564b6e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
