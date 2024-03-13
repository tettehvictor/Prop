import React from 'react'
import New from './components/New'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Projectpage from './pages/Projectpage'
import Testmonials from './pages/Testmonials'
const App = () => {
  const image = 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
  const image1 = 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=400'
  const image2 = 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=400'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/8719362/1.jpg?7722'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/0412362/4.jpg?1105'
  return (
    <>

     {/* <div className='d-flex flex-wrap gap-5'>
     <New img={image} name='White shoes' descrip='It is quite good' price={345}/>
      <New  img={image1} name='Red shoes' descrip='IT is red obvi' price={3990}/>
      <New  img={image2} name='Yellow boot' descrip='Keep moving you cant afford' price={3030030}/>
      <New  img={image3} name='gold belt' descrip='your fees' price={84938}/>
      <New  img={image4} name='tv' descrip='you cant' price={7583939}/>
 
     </div> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Projectpage/>}/>
      <Route path='/testimonails' element={<Testmonials/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App