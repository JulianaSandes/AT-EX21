import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import "../App.css"
import NavRodape from "../components/NavRodape";
import imgCelular from "../assets/celular.png";
import imgHome from "../assets/celularHome.png"
import { AiOutlineCheckCircle } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
        </div>
        <div>
      <h1 className="sobre"> Por que precisamos falar sobre o abuso sexual infantil?</h1>
      <p className="sobre-p">
      Crianças necessitam de proteção diante da frequente vitimização, embora isso não seja amplamente reconhecido. A falta de estatísticas exatas é uma dificuldade real, mas o Disque-Denúncia é um indicador crucial. Em 2017, mais de 120 mil denúncias foram feitas, com 70 mil ligadas à violência contra crianças e adolescentes. As denúncias são direcionadas às autoridades que investigam os casos. O Sistema Único de Saúde (SUS) também destaca o problema, com 22,9 mil atendimentos a vítimas de estupro em 2016, a maioria com idades entre 0 e 14 anos, incluindo 6 mil abaixo dos 9 anos. Além dos números impactantes, é importante enfatizar o sofrimento silencioso das vítimas, devido ao tabu social. Romper esse silêncio pode empoderar outras vítimas a enfrentarem seus agressores e compartilharem suas experiências.
      </p>
    <h1 className="text-disque">Disque 100</h1>
      </div>
      <hr />
        <div className="container-home">
        <div className="container">   
         <h1 className="title">Quem nós somos?</h1>
         <h3 className="subtitulo">Crianças Seguras: Prevenção de Abuso e Autodefesa</h3>
            <div className="textos">
              <h2 className="textos"><AiOutlineCheckCircle/> Educar crianças, pais e cuidadores sobre a prevenção de abuso infantil</h2>
              <h2 className="textos"><AiOutlineCheckCircle/> Reconhecimento de sinais de perigo</h2>
              <h2 className="textos"><AiOutlineCheckCircle/> Como relatar casos suspeitos</h2>
              <h2 className="textos"> <AiOutlineCheckCircle/> Ensinar crianças a se defender em situações de risco</h2>
            </div>
        </div>
        <img className="imgCelular" src={imgCelular} alt="ImgCelular" />
      </div>
      <hr />
    <div className="container-app">
      <img className="imgApp" src={imgHome} alt="ImgApp" />
      <div className="container-appText">
      <h1 className="title-app">Nosso aplicativo</h1>
      <h2 className="subtitulo-app">Nosso principal objetivo é educar crianças, pais e cuidadores sobre a prevenção de abuso infantil</h2>
      <ul>
        <li>Sessões de Conscientização</li>
        <li>Aulas de Autodefesa Adaptadas</li>
        <li>Materiais Educativos Interativos</li>
        <li>Campanhas de Conscientização</li>
        <li>Recursos de Apoio Contínuo</li>
      </ul>
      </div>
    </div>
        <div>
          <NavRodape/>
        </div>
      </div>
    </div>
  );
}
export default Home;
