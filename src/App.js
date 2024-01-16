import { Link,  Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { ContexProvider } from "./contex";
import { Home } from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <ContexProvider>
        <Shop />
      </ContexProvider>
      <Footer />

      <Link to={"/"}>Home page</Link>
      
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
