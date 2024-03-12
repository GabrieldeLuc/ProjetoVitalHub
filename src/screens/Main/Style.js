import styled from "styled-components";

export const ContentIcon = styled.View.attrs({
  focused: true,
})`
  border-radius: 18px;
  padding: 9px 12px;
  background-color: ${(props) => `${props.tabBarActiveBackgroundColor}`};

  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextIcon = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
`;

export const ContainerIcons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 18px;
  width: 100px;
  height: 40px;
`;

export const TextTabBottom = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 12px;
`;
