import { TProduct } from "@/Redux/features/productsSlice";
import { Card } from "antd";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { BsEyeFill } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

export const ProductCard = ({ product }: { product: TProduct }) => {
    const { Meta } = Card;
    const router = useRouter()
    return (
        <Card
            hoverable
            style={{ width: "80%" }}
            cover={<img alt="example" src={product.thumbnail} height={"200em"} />}
        >
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <div>
                <p> <strong>Name:</strong>  {product.title}</p>
                <p className="p-2 bg-dark text-light text-center" style={{ fontSize: "1.4em", borderRadius: "25px" }}> <strong>Price</strong> : {product.price} USD</p>
                <p> <strong>Category:</strong>  {product.category}</p>
                <p> <strong> Stock:</strong> {product.stock}</p>
                <p> <strong> Rating: </strong>{product.rating}</p>
            </div>
            <div className="d-flex justify-content-evenly">
                <Button
                    variant="dark"
                    className="p-3"
                    onClick={() => router.push(`/product/${product._id}`)}
                >
                    <BsEyeFill />
                </Button>
                <Button variant="dark" className="p-3" onClick={() => alert('Hello world')}> <FiShoppingCart /> </Button>
            </div>
        </Card>
    )
}