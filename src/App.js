import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./page/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./page/UploadPage/UploadPage";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<MainPage/>}/>  
      <Route path="Upload" element={<UploadPage/>}/>    
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
