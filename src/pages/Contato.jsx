import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import Forms from "../components/Forms"
import { BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from "react-icons/bs";
//import "../App.css";

function Contato() {
  return (
    <div>
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Entre em contato com a gente</h1>
        </div>
          <div>
            <Forms/>
          </div>
          <h2 className="subtitulo">
          Venha acompanhar a gente nas redes         
          </h2>
          <div className="flex">
          <div className="icons"> 
          <BsInstagram/>
          </div>
          <div className="icons">
          <BsLinkedin/>
          </div>
          <div className="icons">
          <BsTwitch/>
          </div>
          <div className="icons">
          <BsTwitter/>
          </div>
          </div>
          
          
          
    </div>
    </div>
  );
}
export default Contato;
