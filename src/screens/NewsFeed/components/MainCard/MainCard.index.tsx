/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  Date,
  Image,
  Title,
  Wrapper,
  Container,
  Separator,
  TextContainer,
  GradientContainer,
} from './MainCard.styles';

export interface IMainCard {
  title: string;
  publishedAt: string;
  image: ImageSourcePropType;
}

const MainCard = ({title, publishedAt, image}: IMainCard) => {
  return (
    <Wrapper>
      <Container>
        <Image source={image} />
        {/*
                    TODO: Melhorar esse gradiente
                    TODO: Ajustar essas cores
                */}
        <GradientContainer
          colors={[
            'rgba(255, 255, 255, 0)',
            'rgba(222, 222, 222, 0.3)',
            'rgba(170, 170, 170, 0.7)',
            'rgba(140, 140, 140, 1)',
          ]}
          locations={[0, 0.2, 0.5, 1]}>
          <TextContainer>
            <Date>{publishedAt}</Date>
            <Title
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#111111',
              }}>
              {title}
            </Title>
          </TextContainer>
        </GradientContainer>
      </Container>
      <Separator />
    </Wrapper>
  );
};

export default MainCard;
