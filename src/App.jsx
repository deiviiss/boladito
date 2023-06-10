import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/profile/*" />
        </Routes>
      </BrowserRouter>

    </>
  )
}
