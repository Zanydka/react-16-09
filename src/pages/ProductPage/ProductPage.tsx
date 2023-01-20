import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hools'
import { getProductsObject, ProductProps } from 'utils/productsArray'

type Props = {}
type productsObjectProps = {
    [id: number]: ProductProps
}
const ProductPage = (props: Props) => {
    const { id } = useParams()
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: productsObjectProps = getProductsObject(productsArray)

    console.log(id)
    return <div>{productsObject[parseInt(id!)].name}</div>
}
export default ProductPage
