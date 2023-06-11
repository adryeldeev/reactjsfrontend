
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create'
import Ler from './Ler'
import Editar from './Editar'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/ler/:id' element={<Ler/>}/>
      <Route path='/Editar/:id' element={<Editar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
