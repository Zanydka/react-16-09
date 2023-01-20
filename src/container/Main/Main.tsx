import { Container } from '@mui/material'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ProductPage from 'pages/ProductPage/ProductPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="products/:id" element={<ProductPage />} />
            </Routes>
        </Container>
    )
}

export default Main
