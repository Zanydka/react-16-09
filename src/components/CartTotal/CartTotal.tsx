import { getProductsObject, ProductProps } from 'utils/productsArray'
import { useAppSelector } from 'redux/hools'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
type productsObjectProps = {
    [id: number]: ProductProps
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: productsObjectProps = getProductsObject(productsArray)
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
                $
            </div>
        )
    }
}
export default CartTotal
