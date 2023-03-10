import "./style.css";
import Header from "./Components/Heading";
import GoogleSearch from "./Components/GoogleSearch";
import Footer from "./Components/Footer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <GoogleSearch />
      <Footer />
    </div>
  );
};
