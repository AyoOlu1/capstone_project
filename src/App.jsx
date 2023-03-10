import "./style.css";
import Header from "./Components/Heading";
import GoogleSearch from "./Components/GoogleSearch";
import Footer from "./Components/Footer";
import Time from "./Components/Time";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Time />
      <GoogleSearch />
      <Footer />
    </div>
  );
};
