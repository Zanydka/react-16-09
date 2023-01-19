import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hools'
import { likeSlice } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart?: (id: number, count: number) => void
}

const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    // const [color, setColor] = useState<string>('green')

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.likeProducts[id])
    const dispatch = useAppDispatch()

    // const changeColor = () => {
    //     // setColor((prevState: string) =>
    //     //     prevState === 'green' ? 'red' : 'green'
    //     // )
    //     setColor((prevState: string) => {
    //         if (prevState === 'green') {
    //             return 'red'
    //         } else {
    //             return 'green'
    //         }
    //     })
    // }

    return (
        <Card
            className="product"
            variant="outlined"
            onClick={() => dispatch(toggleLikeState(id))}
        >
            <CardContent>
                <Button variant="outlined">
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-decs">{desc}</div>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity}
                </div>
                <div className="product-price">
                    <span>Price:</span> {price}
                </div>
                {/* <p className={`${color}`}>Color: {color}</p>
                <button onClick={changeColor}>change color</button> */}
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() =>
                        dispatch(
                            addProductToCart({
                                id,
                                count,
                            })
                        )
                    }
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export const { toggleLikeState } = likeSlice.actions
export default ProductsListItem
