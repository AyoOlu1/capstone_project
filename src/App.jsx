import "./style.css";
import { Header, GoogleSearch, Footer, Time, News } from "./Components/index";

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Time />
        <GoogleSearch />
        <News />
      </div>
      <Footer />
    </>
  );
};
