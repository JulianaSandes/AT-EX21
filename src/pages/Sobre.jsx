import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
//import "../App.css";

function Sobre() {
  return (
    <div>
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Sobre a EsperançaTech</h1>
        </div>
        <div>
          <p className="sobre-p">
          O projeto "Crianças Seguras: Prevenção de Abuso e Autodefesa" é uma iniciativa abrangente que visa proteger e capacitar crianças, pais e cuidadores por meio da educação, conscientização e aquisição de habilidades práticas. Combinando educação sobre prevenção de abuso infantil com aulas adaptadas de autodefesa, o projeto oferece uma abordagem holística para criar ambientes mais seguros e empoderar nossas crianças.
          </p>
          <p className="sobre-p">
          Nossa missão é criar uma comunidade que esteja unida na proteção das crianças, equipando-as com os conhecimentos e as habilidades necessárias para reconhecer, prevenir e enfrentar situações de risco. Acreditamos que a combinação de educação sobre prevenção de abuso infantil e técnicas de autodefesa pode ajudar a construir crianças confiantes, conscientes e seguras.
          </p>
          <p className="sobre-p">
          Juntos, podemos criar um ambiente onde todas as crianças se sintam seguras, confiantes e preparadas para enfrentar qualquer desafio que possa surgir. Vamos trabalhar juntos para fortalecer nossas crianças e construir um mundo mais seguro para todos.
          </p>
        </div>
    </div>
    </div>
  );
}
export default Sobre;
