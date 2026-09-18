import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ContentArea from "./components/ContentArea";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Form />
      <ContentArea />
      <Footer />
    </>
  );
}

export default App;
