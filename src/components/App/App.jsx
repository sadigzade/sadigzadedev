import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
