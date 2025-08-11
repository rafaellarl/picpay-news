import React from 'react';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

import {labels} from '../../labels';
import {TEST_IDS_SCREENS} from '../../constants';

import {
  Image,
  Title,
  Wrapper,
  Container,
  Description,
  DescriptionBold,
} from './NewsDetails.styles';
import useNewsDetails from './useNewsDetails';

/*
  Sugestão: Em uma api bem formatada podemos passar o body da noticía por rota também, neste caso como é uma api free o body ficou limitado.
  Por esse motivo coloquei um texto gerado por IA falando sobre programar nativo e em frameworks multiplataformas.

  Colocando um Banner de anúncio para estudo da lib e apresentar outros formas de apresentar anúncios.
*/
const NewsDetails = () => {
  const {image, title, adUnitId, bannerRef} = useNewsDetails();

  return (
    <Wrapper>
      <Image src={image} testID={TEST_IDS_SCREENS.newsDetails.imageNews} />
      <Container>
        <Title>{title}</Title>
        <DescriptionBold>{labels.newsDetails.subTitle}</DescriptionBold>
        <Description>{labels.newsDetails.detailsPartI}</Description>
        <Description>{labels.newsDetails.detailsPartII}</Description>
        <Description>{labels.newsDetails.detailsPartIII}</Description>
      </Container>
      <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </Wrapper>
  );
};

export default NewsDetails;
