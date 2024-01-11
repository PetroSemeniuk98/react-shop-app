import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { ContexProvider } from "./contex";

const App = () => {
  return (
    <>
      <Header />
      <ContexProvider>
        <Shop />
      </ContexProvider>
      <Footer />
    </>
  );
};

export default App;
