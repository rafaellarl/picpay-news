import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const Wrapper = styled.View``;

export const Container = styled.View`
    height: 180px;
    border-radius: 8px;
    background-color: #E8E8E8;
`;

export const Image = styled.Image`
    height: 180px;
    width: 100%;
`;

export const GradientContainer = styled(LinearGradient)`
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
`;

export const TextContainer = styled.View`
    padding-top: 8px;
    padding-left: 16px;
    padding-bottom: 8px;
`;

export const Title = styled.Text`
    font-size: 12px;
    color: #8C8C8C;
`;

export const Date = styled.Text`
    font-size: 16px;
    color: #111111;
    font-weight: 700;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #FFFFFF8A;
`;