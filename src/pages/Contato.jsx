import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Forms from "../components/Forms"
import { BsInstagram, BsLinkedin, BsTwitch} from "react-icons/bs";
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
      
          
    </div>
    </div>
  );
}
export default Contato;
