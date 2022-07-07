import "./style.css";   
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";


export default function App() {
  return <div className="div">
    <Header />
    <div className="sub-div">
    {notes.map( (note)=>(
<Note 
  key = {note.id}
  title = {note.title}
  content = {note.content} 
  />
))}   
    </div>
    <Footer />
  </div>;
}
