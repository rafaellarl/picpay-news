import {useRoute} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import NewsDetails from './NewsDetails.index';
import {FirebaseAnalytics} from '../../../../utils';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));

jest.mock('@react-native-firebase/analytics', () => ({
  default: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

jest.mock('../../../../utils/analytics/FirebaseAnalytics', () => ({
  saveScreenView: jest.fn(),
}));

const mockedUseRoute = useRoute as jest.Mock;
const mockedSaveScreenView = FirebaseAnalytics.saveScreenView as jest.Mock;

const renderScreen = () => render(<NewsDetails />);

describe('NewsDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseRoute.mockReturnValue({
      params: {
        image:
          'https://static.escolakids.uol.com.br/2025/06/ilustracao-de-um-menino-com-a-mao-na-orelha-captando-ondas-sonoras-ou-de-som.jpg',
        title: 'Som: o que é, como é produzido, curiosidades - Escola Kids',
      },
    });
  });

  it('should match snapshot on initial render', () => {
    const {toJSON} = renderScreen();
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render news details', () => {
    const {getByText, getByTestId} = renderScreen();

    getByTestId('test-id-news-image');
    getByText('Som: o que é, como é produzido, curiosidades - Escola Kids');
    getByText('Texto gerado por IA');
    getByText(
      'Plataformas nativas são aquelas desenvolvidas especificamente para cada sistema operacional, como Android e iOS. Essa abordagem permite um desempenho otimizado e acesso total aos recursos do dispositivo, embora exija a manutenção de códigos separados para cada plataforma. Por outro lado, as plataformas híbridas utilizam um único código-base para funcionar em diferentes sistemas, facilitando a manutenção e reduzindo os custos de desenvolvimento. Frameworks como React Native e Flutter são exemplos populares que têm ganhado espaço por suas capacidades e eficiência. O React Native permite a criação de interfaces com uma experiência próxima à nativa, utilizando JavaScript e uma comunidade ativa, enquanto o Flutter, com base em Dart, oferece alta performance e uma rica personalização visual por meio de seus widgets.',
    );
    getByText(
      'Para desenvolvedores que buscam agilidade e versatilidade, trabalhar com frameworks híbridos pode ser uma ótima escolha, principalmente se o projeto não exigir funcionalidades extremamente específicas de cada sistema operacional. A escolha entre uma plataforma nativa e uma híbrida dependerá do perfil do aplicativo, dos requisitos de performance e da experiência desejada para o usuário final. Assim, é importante avaliar cuidadosamente as necessidades do projeto e a disponibilidade de recursos para a manutenção do código.',
    );
    getByText(
      'Em suma, a decisão entre programação nativa e híbrida envolve ponderar performance, custo e facilidade de manutenção. Compreender as vantagens de cada abordagem, assim como dominar ferramentas como React Native e Flutter, permite ao desenvolvedor tomar decisões mais estratégicas. Experimente baixar um ambiente de desenvolvimento móvel, como o Android Studio ou o Visual Studio Code com plugins específicos para mobile, e teste na prática qual abordagem melhor se adapta aos seus projetos. O universo do desenvolvimento mobile está repleto de oportunidades para inovar e transformar ideias em aplicativos eficientes e impactantes.',
    );
  });

  it('Should register event screen view', () => {
    renderScreen();
    expect(mockedSaveScreenView).toHaveBeenCalledTimes(1);
    expect(mockedSaveScreenView).toHaveBeenCalledWith({
      flow: 'news',
      screenName: 'news_details',
    });
  });
});
