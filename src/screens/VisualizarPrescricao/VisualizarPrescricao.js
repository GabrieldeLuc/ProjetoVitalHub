import { Container, ContainerScroll } from "../../components/Container/Style";
import { ImageMapa } from "../../components/Images/Style";

export const VisualizarPrescricao = () => {
  return (
    <ContainerScroll>
      <Container>
        <ImageMapa source={require("../../assets/doutor.png")} />
      </Container>
    </ContainerScroll>
  );
};
