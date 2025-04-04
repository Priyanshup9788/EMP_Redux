import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddEmp from './Components/AddEmp';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header';
import ViewEmp from './Components/ViewEmp';
import UpdateEmp from './Components/UpdateEmp';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<AddEmp/>} />
        <Route path='/view' element={<ViewEmp/>} />
        <Route path='/update/:id' element={<UpdateEmp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
