import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tvgaspar.com.br/wp-content/uploads/2023/05/20230519-flyer-a6_frente-800x445-1.png"
          alt=""
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Disque 100</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://condomeeting.com.br/wp-content/uploads/2021/06/abuso-sexual.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Disque 100</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://redepara.com.br/imagens/galeria/157594/thumbs/e219ef6303594b24a5d46cbe609f8c4d.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Disque 100</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;