import "./style.css";   
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

export default function App() {
  return <div className="div">
    <Header />
    <div className="sub-div">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
    <Footer />
  </div>;
}
