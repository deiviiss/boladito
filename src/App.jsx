import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { FilterProvider } from './context/filtersContext'
import { ProductsProvider } from './context/productsContext'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'

export default function App () {
  return (
    <ProductsProvider>
      <FilterProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ProfilePage />} path="/profile/*" />
            <Route element={<CheckoutPage />} path="/checkout/*" />
            <Route element={<ProductsPage />} path="/list-products/*" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FilterProvider>
    </ProductsProvider>
  )
}
