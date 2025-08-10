import {
  fireEvent,
  render,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';

import NewsFeed from './NewsFeed.index';
import {fetchNews} from '../../../api/resources/news.api';
import FirebaseAnalytics from '../../../utils/FirebaseAnalytics';

const MOCK_RESPONSE = {
  data: {
    results: [
      {
        published_at: '2025-07-31T17:07:56Z',
        title: 'Som: o que é, como é produzido, curiosidades - Escola Kids',
        description:
          'O som é uma onda. Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos. É usado na comunicação, na navegação e até em exames. . ....[Upgrade subscription plan]',
        image:
          'https://static.escolakids.uol.com.br/2025/06/ilustracao-de-um-menino-com-a-mao-na-orelha-captando-ondas-sonoras-ou-de-som.jpg',
      },
      {
        published_at: '2025-07-31T17:07:06Z',
        title:
          'Mariana Xavier revela que está namorando à distância e pede dicas para seguidores; veja quem é ele',
        description:
          'Mariana Xavier revelou que está namorando à distância. O diretor de filmes publicitários Guido Antonini é o novo amor da atriz, que pediu dicas para seus seguidores no Instagram que formam casais que ...[+13 chars]...[Upgrade subscription plan]',
        image:
          'https://www.estadao.com.br/resizer/v2/X2YIS5SZA5GYTLEOHJ2GBPPATU.jpg?quality=80&auth=59adec19ff8b3a52959cf375728f895d294195881677ead497d4cbf5f00ced24&width=1200&height=630&smart=true',
      },
      {
        published_at: '2025-07-31T17:07:06Z',
        title:
          'Jamie Lee Curtis confirma versão de "Crime, Disse Ela" para o cinema',
        description:
          'Publicado em 2025-07-27 10:17, por filmSPOT A atriz vencedora de um Óscar interpretará a personagem de Jessica Fletcher, celebrizada por Angela Lansbury. Jamie Lee Curtis confirmou que protagonizará u...[+7 chars]...[Upgrade subscription plan]',
        image: 'https://filmspot.com.pt/images/media/14139.jpg',
      },
      {
        published_at: '2025-07-31T17:07:00Z',
        title:
          'Fuvest 2026: novas datas de atendimento especializado - Brasil Escola',
        description:
          'Fuvest anuncia novas datas para solicitação de atendimento especializado no Vestibular 2026 São oferecidos mais de 8 mil vagas de graduação para concorrência no Vestibular. . ....[Upgrade subscription plan]',
        image:
          'https://s5.static.brasilescola.uol.com.br/vestibular/2025/05/vestibular-2026-da-fuvest.jpg',
      },
      {
        published_at: '2025-07-31T13:07:46Z',
        title: '"It: Welcome To Derry" - a origem do tal palhaço',
        description:
          'A HBO Max apresentou novas cenas da série que conta a origem de Pennywise. Baseada no universo criado por Stephen King a série de terror "It: Welcome To Derry" tem um novo teaser trailer, apresentado ...[+14 chars]...[Upgrade subscription plan]',
        image: 'https://filmspot.com.pt/images/media/14142.jpg',
      },
    ],
  },
};

jest.mock('@react-native-firebase/analytics', () => ({
  default: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../utils/FirebaseAnalytics', () => ({
  saveScreenView: jest.fn(),
  saveSelectContent: jest.fn(),
  saveEventException: jest.fn(),
}));

jest.mock('../../api/resources/news.api', () => {
  const actual = jest.requireActual('../../api/resources/news.api');
  return {
    __esModule: true,
    ...actual,
    fetchNews: jest.fn(),
  };
});

const mockedUseNavigation = useNavigation as jest.Mock;
const mockedFetchNews = fetchNews as jest.Mock;
const mockedSaveScreenView = FirebaseAnalytics.saveScreenView as jest.Mock;
const mockedSaveSelectContent =
  FirebaseAnalytics.saveSelectContent as jest.Mock;
const mockedEventException = FirebaseAnalytics.saveEventException as jest.Mock;

const renderScreen = () => render(<NewsFeed />);

describe('NewsFeed', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseNavigation.mockReturnValue({
      navigate: jest.fn(),
    });
  });

  describe('sanpshot test', () => {
    it('should match snapshot on initial render', () => {
      const {toJSON} = renderScreen();
      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with data', async () => {
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {toJSON, findByTestId} = renderScreen();

      await findByTestId('test-id-card-0');
      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with error', async () => {
      mockedFetchNews.mockRejectedValue(
        new Error('Erro ao buscar as notícias'),
      );
      const {toJSON, findByText} = renderScreen();

      await findByText('Algo deu errado.');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('render correctly', () => {
    it('Should render the loading component while the get news is in progress', async () => {
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {getByTestId} = renderScreen();
      getByTestId('test-id-loading');

      await waitFor(() => {
        getByTestId('test-id-card-0');
      });
    });

    it('Should render the cards component while the get news is finished', async () => {
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {getByTestId, getByText} = renderScreen();

      await waitFor(() => {
        getByTestId('test-id-card-0');
        getByText('Som: o que é, como é produzido, curiosidades - Escola Kids');
        getByText(
          /O som é uma onda. Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos./i,
        );
        getByTestId('test-id-card-1');
        getByText(
          'Mariana Xavier revela que está namorando à distância e pede dicas para seguidores; veja quem é ele',
        );
        getByText(/Mariana Xavier revelou que está namorando à distância./i);
        getByTestId('test-id-card-2');
        getByText(
          'Jamie Lee Curtis confirma versão de "Crime, Disse Ela" para o cinema',
        );
        getByText(
          /Publicado em 2025-07-27 10:17, por filmSPOT A atriz vencedora de um Óscar/i,
        );
        getByTestId('test-id-card-3');
        getByText(
          'Fuvest 2026: novas datas de atendimento especializado - Brasil Escola',
        );
        getByText(
          /Fuvest anuncia novas datas para solicitação de atendimento especializado no Vestibular/i,
        );
        getByTestId('test-id-card-4');
        getByText('"It: Welcome To Derry" - a origem do tal palhaço');
        getByText(
          /A HBO Max apresentou novas cenas da série que conta a origem de Pennywise./i,
        );
      });
    });

    it('Should render the generic Error component when the fetchNews return error', async () => {
      mockedFetchNews.mockRejectedValue(
        new Error('Erro ao buscar as notícias'),
      );
      const {getByText, getByTestId} = renderScreen();

      await waitFor(() => {
        getByText('Algo deu errado.');
        getByText('Tentar novamente');
        getByTestId('test-id-image-error');
      });
    });
  });

  describe('Events analytics', () => {
    it('Should register event when renderScreen', () => {
      renderScreen();
      expect(mockedSaveScreenView).toHaveBeenCalledTimes(1);
      expect(mockedSaveScreenView).toHaveBeenCalledWith({
        screenName: 'new-feed',
        flow: 'news',
      });
    });

    it('Should register event select content when user press in Card component', async () => {
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {getByTestId} = renderScreen();

      const card = await waitFor(() => getByTestId('test-id-card-2'));

      fireEvent.press(card);

      expect(mockedSaveSelectContent).toHaveBeenCalledTimes(1);
      expect(mockedSaveSelectContent).toHaveBeenCalledWith({
        flow: 'news',
        screenName: 'new-feed',
        contentType: 'news-card-2',
      });
    });
  });

  describe('Handle action user', () => {
    it('Should navigate for screen NewsDetails when user press in news card', async () => {
      const cardSeleted = MOCK_RESPONSE.data.results[2];
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {navigate} = mockedUseNavigation();
      const {getByTestId} = renderScreen();

      await waitFor(() => {
        fireEvent.press(getByTestId('test-id-card-2'));
      });

      expect(mockedSaveSelectContent).toHaveBeenCalledTimes(1);
      expect(navigate).toHaveBeenCalledTimes(1);
      expect(navigate).toHaveBeenCalledWith('NewsDetails', {
        title: cardSeleted.title,
        image: cardSeleted.image,
      });
    });

    it('Should add the news to favorites when the user presses the favorites button on the Card component', async () => {
      mockedFetchNews.mockResolvedValue(MOCK_RESPONSE);
      const {getByTestId} = renderScreen();

      await waitFor(() => {
        fireEvent.press(getByTestId('test-id-favorite-button-card-4'));
      });

      expect(mockedSaveSelectContent).toHaveBeenCalledTimes(1);
      expect(mockedSaveSelectContent).toHaveBeenCalledWith({
        flow: 'news',
        screenName: 'news-feed',
        contentType: 'card-4',
      });
    });

    it('Should try again get news when user press "Tentar novamente"', async () => {
      mockedFetchNews.mockRejectedValue(
        new Error('Erro ao buscar as notícias'),
      );
      const {getByText} = renderScreen();

      await waitFor(() => {
        fireEvent.press(getByText('Tentar novamente'));
      });

      expect(mockedFetchNews).toHaveBeenCalledTimes(2);
      expect(mockedEventException).toHaveBeenCalledTimes(1);
      expect(mockedEventException).toHaveBeenCalledWith({
        flow: 'news',
        screenName: 'news-feed',
        description: 'Erro ao buscar as notícias',
      });
    });
  });
});
