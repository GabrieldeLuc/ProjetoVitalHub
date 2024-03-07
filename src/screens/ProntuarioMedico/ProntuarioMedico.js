import { Container, ContainerScroll } from "../../components/Container/Style";
import { ImagePerfil } from "../../components/Images/Style";
import { Title } from "../../components/Title/Style";

export const ProntuarioMedico = ({setModal}) => {
    return (
      <ContainerScroll>
        <Container>
          <ImagePerfil source={require("../../assets/paciente.png")} />
  
          <Title>Richard Kosta</Title>
  
          {/* <TextModalProntuario>
            28 anos richard.kosta@gmail.com
          </TextModalProntuario>
  
          <ContainerInputProntuario>
            <Label>Descrição da consulta</Label>
            <InputLarge placeholder="Descrição" />
          </ContainerInputProntuario>
  
          <ContainerInputProntuario>
            <Label>Diagnóstico do paciente</Label>
            <Input placeholder="Diagnóstico" />
          </ContainerInputProntuario>
  
          <ContainerInputProntuario>
            <Label>Prescrição médica</Label>
            <InputLarge placeholder="Prescrição médica" />
          </ContainerInputProntuario>
  
          <Button>
            <ButtonTitle>salvar</ButtonTitle>
          </Button>
  
          <ButtonCancel setModal={false}/>
        </Container>
      </ContainerScroll>
    );
  };
  
  export const EditarProntuario = () => {
    return (
      <ContainerScroll>
        <Container>
          <ImageLarge source={require("../../assets/KostaLarge.png")} />
  
          <Title>Richard Kosta</Title>
  
          <TextModalProntuario>
            28 anos richard.kosta@gmail.com
          </TextModalProntuario>
  
          <ContainerInputProntuario>
            <Label>Descrição da consulta</Label>
            <InputLargeDisabled
              placeholder="Descrição"
              editable={false}
            />
          </ContainerInputProntuario>
  
          <ContainerInputProntuario>
            <Label>Diagnóstico do paciente</Label>
            <InputDisabled placeholder="Diagnóstico" editable={false} />
          </ContainerInputProntuario>
  
          <ContainerInputProntuario>
            <Label>Prescrição médica</Label>
            <InputLargeDisabled placeholder="Prescrição médica" editable={false} />
          </ContainerInputProntuario>
  
          <Button>
            <ButtonTitle>salvar</ButtonTitle>
          </Button>
  
          <Button>
            <ButtonTitle>editar</ButtonTitle>
          </Button>
  
          <LinkAccount>Cancelar</LinkAccount> */}
        </Container>
      </ContainerScroll>
    );
  };