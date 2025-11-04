import { AllRoutes } from "./routes/Allroutes";
import { Header, Footer } from "./components/index";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
