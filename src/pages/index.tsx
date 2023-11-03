import { TProduct } from "@/Redux/features/productsSlice";
import { FeatureCategoriesCard } from "@/components/Cards/FeatureCategoriesCard";
import { ProductCard } from "@/components/Cards/ProductCard";
import CarouselComponent from "@/components/Carousel";
import { Col, Row } from "antd";
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, allCategories }: { products: TProduct[] | undefined, allCategories: string[] }) {

  return (
    <>
      <Head>
        <title>My Shop</title>
      </Head>
      <main>
        <section>
          <CarouselComponent />
        </section>
        <section className={'text-center'}>
          <h1 className={'p-5'}>Categories</h1>
          <div className={'d-flex justify-content-center align-items-center'}>
            <FeatureCategoriesCard />
          </div>
        </section>
        <section>
          <div className='container mt-5 mb-5'>
            <h1 className={'text-center p-5'}>Recent product's</h1>
            <Row gutter={[16, 16]} justify={"center"}>
              {
                products?.slice(0, 9).map((product: TProduct, index) => (
                  <Col sm={24} md={12} lg={8} className='d-flex justify-content-center'
                    key={product._id}>
                    <ProductCard product={product} />
                  </Col>
                ))
              }
            </Row>
          </div>
        </section>
      </main>
    </>
  )
}


export const getServerSideProps = async () => {
  const result = await fetch('https://anxious-erin-shrug.cyclic.app/api/products')
  const data = await result.json()

  let allCategories: string[] = []

  const temp = data && data.products.map((pd: TProduct) => {
    if (!allCategories.find(a => a === pd.category)) {
      pd.category.length > 4 &&
        allCategories.push(pd.category)
    }
  })
  return {
    props: {
      products: data?.products,
      allCategories
    }
  }
}