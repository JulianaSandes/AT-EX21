import NavProjeto from "../components/NavProjeto";
import Cards from "../components/Cards";
import Carrossel from "../components/Carrossel";
import "../App.css"
import NavRodape from "../components/NavRodape";
import imgCelular from "../assets/celular.png";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
        </div>
      <div className="container-home">
        <div className="container">   
         <h1 className="title">Quem nós somos?</h1>
         <h3 className="subtitulo">Feito pra você e quem você ama.</h3>
            <div className="textos">
              <h2 className="textos"><AiOutlineCheckCircle/> Flores: 100% Naturais e Verdadeiras.</h2>
              <h2 className="textos"><AiOutlineCheckCircle/> Bouquet: Feitos a mão. Com cuidado e carinho.</h2>
              <h2 className="textos"><AiOutlineCheckCircle/> Feitos a mão: Bouquet de flores inovados.</h2>
              <h2 className="textos"> <AiOutlineCheckCircle/>Entrega: Totalmente seguro e confiavel.</h2>
            </div>
        </div>
        <img className="imgCelular" src={imgCelular} alt="ImgCelular" />
      </div>
        <div className="card-group">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div>
          <NavRodape/>
        </div>
      </div>
    </div>
  );
}
export default Home;
