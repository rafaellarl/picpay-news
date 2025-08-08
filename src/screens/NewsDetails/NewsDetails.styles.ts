import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
    flex: 1;
    background-color: #111111;
`;

export const Container = styled.View`
    flex: 1;
    padding: 16px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 200px;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 3,
    ellipsizeMode: 'tail'
})`
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #FFFFFF;
    padding-top: 32;
`;

export const DescriptionBold = styled(Description)`
    font-weight: 700;
`;