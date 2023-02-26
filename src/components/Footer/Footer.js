import { Container, Icons } from "./styled";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.svg.png";

const Footer = () => {
  return (
    <Container>
      <Icons>
        <h1>Desenvolvido por: Guilherme</h1>
        <div>
          <a href="https://github.com/vigilatosp" target='_blank'>
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/vigilatosp/" target='_blank'>
            <img src={linkedin} />
          </a>
        </div>
        <p>Todos os direitos reservados.</p>
      </Icons>
    </Container>
  );
};

export default Footer;