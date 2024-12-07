import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Site from "./Site"
import Header from "./Components/Header/Header"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path='/' element={<Site/>} />
            {/* <Route  path='/home' element={</>} /> */}
            {/* <Route  path='/Link2' element={<Link2/>} />
            <Route  path='/Products/:id' element={<ProductItem/>} />
            <Route  path='/Products' element={<Products/>} />
            <Route  path='/Lessons' element={<Lessons/>} />
            <Route  path='/Posts' element={<Posts/>} /> */}

            {/* <Route  path='*' element={<NotFound/>} /> */}

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
