import "./App.css"
import Navbar from "./Components/navbar/Navbar";
import NotFound from "./Components/notFound/NotFound";
import Details from "./Components/details/Details";
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
         <Route path="/solulab" element={<Details/>}/>
         <Route path="/add" element={<NotFound/>}/>
         <Route path="/patient" element={<NotFound/>}/>
         <Route path="/folder" element={<NotFound/>}/>
         <Route path="/upload" element={<NotFound/>}/>
         <Route path="/report" element={<NotFound/>}/>
         <Route path="/settings" element={<NotFound/>}/>
         <Route path="/logout" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
