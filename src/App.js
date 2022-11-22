import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome subtitle="Best place to search for books to drive u insane!" />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
