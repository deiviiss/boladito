import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ProviderProducts } from './context/productContext'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

export default function App () {
  return (
    <ProviderProducts>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/profile/*" />
          <Route element={<CheckoutPage />} path="/checkout/*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProviderProducts>
  )
}
