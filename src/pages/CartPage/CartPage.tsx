import { Grid, Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'

type Props = {
    removeProductFromCart: (id: number) => void
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart{' '}
            </Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
