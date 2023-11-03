import { categoryList } from "@/utils/manageCategories";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

export const FeatureCategoriesCard = () => {
    const router = useRouter()
    // const list = [
    //     {
    //         name: "CPU",
    //         icon: <FiCpu />,
    //         url: "/products/cpu",
    //     },
    //     {
    //         name: "STORAGE",
    //         icon: <MdStorage />,
    //         url: "/products/storage",
    //     },
    //     {
    //         name: "RAM",
    //         icon: <CgSmartphoneRam />,
    //         url: "/products/ram",
    //     },
    //     {
    //         name: "MONITOR",
    //         icon: <LuMonitor />,
    //         url: "/products/monitor",
    //     },
    //     {
    //         name: "POWER SUPPLY",
    //         icon: <ImPowerCord />,
    //         url: "/products/power_supply",
    //     },
    //     {
    //         name: "MOTHERBOARD",
    //         icon: <BsMotherboard />,
    //         url: "/products/motherboard",
    //     }
    // ]
    // const abc = [
    //     "mens-shirts",
    //     "skincare",
    //     "home-decoration",
    //     "smartphones",
    //     "sunglasses",
    //     "lighting",
    //     "automotive",
    //     "womens-watches",
    //     "laptops",
    //     "groceries",
    //     "fragrances",
    //     "motorcycle",
    //     "mens-watches",
    //     "mens-shoes",
    //     "womens-jewellery",
    //     "womens-bags",
    //     "furniture",
    //     "womens-dresses",
    //     "womens-shoes",
    // ]

    return (
        <Row className={'text-center w-100 d-flex justify-content-center align-items-center'}>
            {
                categoryList
                    .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
                    .map((category, index) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={3}
                            lg={2}
                            className={'mb-3'}
                            key={index}
                        >
                            <div
                                style={{ backgroundColor: "#e7e7e7", minHeight: "7rem" }}
                                className={'p-3 custom-hoverOn-featured-category'}
                                onClick={() => router.push(`${category.url}`)}
                            >
                                <span style={{ fontSize: "4rem" }}>{category.icon}</span>
                                <p>{category.name}</p>
                            </div>
                        </Col>
                    ))
            }
        </Row>
    )
}