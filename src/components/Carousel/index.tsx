import Carousel from 'react-bootstrap/Carousel';

const imageData = [
    {
        src: 'https://i.ibb.co/wRGrCBc/spring-sale.png',
        alt: 'flash-sale-background',
        h3: 'Make wish everyday',
        p: 'If someone gift me a latest MACKBOOK Pro.'
    },
    {
        src: 'https://i.ibb.co/zRVRcSc/f.png',
        alt: 'satellite-internet',
        h3: 'Satellite Internet',
        p: 'StarX starting new service in BANGLADESH.'
    },
    {
        src: 'https://i.ibb.co/z4hF6Br/flat-design.png',
        alt: 'coverage',
        h3: 'Good coverage',
        p: 'Unreachable place by general also cover with good network.'
    },
]

function CarouselComponent() {
    return (
        <Carousel>
            {
                imageData.map((img, i) => (
                    <Carousel.Item key={i}>
                        <div style={{
                            maxHeight: '75vh'
                        }}>
                            <img
                                src={img.src}
                                className="img-fluid w-100"
                                alt={img.alt}
                            // style={{
                            //     objectFit:'fill'
                            // }}
                            />
                        </div>
                        {/* <Carousel.Caption>
                            <h3>{img.h3}</h3>
                            <p>{img.p}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselComponent;
