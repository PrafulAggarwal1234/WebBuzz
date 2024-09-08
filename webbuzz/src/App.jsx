import Homepage from './components/Homepage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './components/Register'
import Schedule from './components/Schedule'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Trivia from './components/Trivia'
import PlayTrivia from './components/Play'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path='/trivia' element={<Trivia />} />
          <Route path='/playtrivia/:category' element={<PlayTrivia/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
