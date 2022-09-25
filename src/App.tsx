import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Details, Catalog } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:id" element={<Details />} />
          <Route path="/:category" element={<Catalog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
