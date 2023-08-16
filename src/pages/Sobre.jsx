import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
//import "../App.css";

function Sobre() {
  return (
    <div>
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Sobre a nossa loja</h1>
        </div>
        <div>
          <p className="sobre-p">
          Bem-vindo à nossa loja de informática, um paraíso para entusiastas da tecnologia e amantes de computadores! Aqui, temos tudo o que você precisa para satisfazer sua paixão por dispositivos eletrônicos, componentes de computador e soluções inteligentes para suas necessidades tecnológicas.
          </p>
          <p className="sobre-p">
          Se você é um profissional em busca de ferramentas de trabalho eficientes, temos uma variedade de laptops, tablets e softwares de produtividade para ajudá-lo a alcançar seus objetivos. Desde máquinas potentes com telas de alta resolução até programas de edição de vídeo e design gráfico de última geração, tudo o que você precisa para criar e realizar está ao seu alcance.
          </p>
        </div>
    </div>
    </div>
  );
}
export default Sobre;
