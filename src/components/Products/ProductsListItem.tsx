import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}

const ProductsListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    // const [color, setColor] = useState<string>('green')

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
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
        <Card className="product" variant="outlined">
            <CardContent>
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
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        // 1-sposob
                        // onClick={() => setCount(count - 1)}
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        // 1-sposob
                        // onClick={() => setCount(count + 1)}
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(count, price)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
