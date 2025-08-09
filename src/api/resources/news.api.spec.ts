import api from '../config/api';
import {fetchNews} from './news.api';
import {NEWS_ENPOINTS} from '../constants/new';

const MOCK_RESPONSE = {
  data: {
    results: [
      {
        id: 3006082767,
        href: 'https://es...[+44 chars]...[Upgrade subscription plan]',
        published_at: '2025-07-31T17:07:56Z',
        title: 'Som: o que é, como é produzido, curiosidades - Escola Kids',
        description:
          'O som é uma onda. Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos. É usado na comunicação, na navegação e até em exames. . ....[Upgrade subscription plan]',
        body: 'O som é uma onda. Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos. É usado na comunicação, na navegação e até em exames médicos. O som é captado pelos ouvidos. O som é...[+3208 chars]...[Upgrade subscription plan]',
        language: 'pt',
        author: null,
        image:
          'https://static.escolakids.uol.com.br/2025/06/ilustracao-de-um-menino-com-a-mao-na-orelha-captando-ondas-sonoras-ou-de-som.jpg',
        categories: [
          {
            id: 'medtop:20000027',
            name: 'rock and roll music',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000027',
            },
          },
          {
            id: 'medtop:20000021',
            name: 'musical genre',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000021',
            },
          },
          {
            id: 'medtop:20000018',
            name: 'music',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000018',
            },
          },
          {
            id: 'medtop:20000005',
            name: 'cinema',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000005',
            },
          },
          {
            id: 'medtop:20000002',
            name: 'arts and entertainment',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000002',
            },
          },
          {
            id: 'medtop:01000000',
            name: 'arts, culture, entertainment and media',
            score: 0.4,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:01000000',
            },
          },
          {
            id: 'medtop:20000049',
            name: 'periodical',
            score: 0.2,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000049',
            },
          },
          {
            id: 'medtop:20000045',
            name: 'mass media',
            score: 0.2,
            taxonomy: 'iptc_mediatopics',
            links: {
              self: 'https://api.apitube.io/v1/news/category/iptc_mediatopics/medtop:20000045',
            },
          },
        ],
        topics: [
          {
            id: 'industry.crypto_news',
            name: 'Crypto Industry News',
            score: 0.1,
            taxonomy: 'apitube',
            links: {
              self: 'https://api.apitube.io/v1/news/topic/industry.crypto_news',
            },
          },
        ],
        industries: [
          {
            id: 634,
            name: 'Film Theater',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/634',
            },
          },
          {
            id: 950,
            name: 'Staffing Solutions',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/950',
            },
          },
          {
            id: 751,
            name: 'Packaging',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/751',
            },
          },
          {
            id: 492,
            name: 'Sweet confections',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/492',
            },
          },
          {
            id: 982,
            name: 'Weight control',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/982',
            },
          },
          {
            id: 110,
            name: 'Theater Productions',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/110',
            },
          },
          {
            id: 947,
            name: 'Customer Support',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/947',
            },
          },
          {
            id: 1242,
            name: 'Lodging with breakfast',
            links: {
              self: 'https://api.apitube.io/v1/news/industry/1242',
            },
          },
        ],
        entities: [
          {
            id: 1498513,
            name: 'e&',
            type: 'organization',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1498513',
              wikipedia: 'https://en.wikipedia.org/wiki/Etisalat_and',
              wikidata: 'https://www.wikidata.org/wiki/Q543449',
            },
            frequency: 4,
            title: {
              pos: [
                {
                  start: 9,
                  end: 10,
                },
                {
                  start: 42,
                  end: 43,
                },
              ],
            },
            body: {
              pos: [
                {
                  start: 19,
                  end: 20,
                },
                {
                  start: 38,
                  end: 39,
                },
              ],
            },
          },
          {
            id: 1324199,
            name: 'Neuwerk',
            type: 'location',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1324199',
              wikipedia: 'https://en.wikipedia.org/wiki/Neuwerk',
              wikidata: 'https://www.wikidata.org/wiki/Q1622',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 0,
                  end: 1,
                },
                {
                  start: 158,
                  end: 159,
                },
              ],
            },
          },
          {
            id: 1307354,
            name: 'Namibia',
            type: 'location',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1307354',
              wikipedia: 'https://en.wikipedia.org/wiki/Namibia',
              wikidata: 'https://www.wikidata.org/wiki/Q1030',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 106,
                  end: 108,
                },
                {
                  start: 121,
                  end: 123,
                },
              ],
            },
          },
          {
            id: 1327430,
            name: 'Sweden',
            type: 'location',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1327430',
              wikipedia: 'https://en.wikipedia.org/wiki/Sweden',
              wikidata: 'https://www.wikidata.org/wiki/Q34',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 212,
                  end: 214,
                },
                {
                  start: 287,
                  end: 289,
                },
              ],
            },
          },
          {
            id: 1383824,
            name: 'Aalto University',
            type: 'organization',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1383824',
              wikipedia: 'https://en.wikipedia.org/wiki/Aalto_University',
              wikidata: 'https://www.wikidata.org/wiki/Q300980',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 643,
                  end: 644,
                },
                {
                  start: 945,
                  end: 946,
                },
              ],
            },
          },
          {
            id: 1454631,
            name: 'A+',
            type: 'person',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1454631',
              wikipedia: 'https://en.wikipedia.org/wiki/A+_(rapper)',
              wikidata: 'https://www.wikidata.org/wiki/Q277707',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 643,
                  end: 644,
                },
                {
                  start: 945,
                  end: 946,
                },
              ],
            },
          },
          {
            id: 1866434,
            name: 'human height',
            type: 'disease',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1866434',
              wikipedia: 'https://en.wikipedia.org/wiki/Human_height',
              wikidata: 'https://www.wikidata.org/wiki/Q476112',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 645,
                  end: 651,
                },
                {
                  start: 913,
                  end: 919,
                },
              ],
            },
          },
          {
            id: 1087426,
            name: 'No',
            type: 'location',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1087426',
              wikipedia: 'https://en.wikipedia.org/wiki/No,_Denmark',
              wikidata: 'https://www.wikidata.org/wiki/Q2408565',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 786,
                  end: 788,
                },
                {
                  start: 2863,
                  end: 2865,
                },
              ],
            },
          },
          {
            id: 1338736,
            name: 'weather',
            type: 'natural-disaster',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1338736',
              wikipedia: 'https://en.wikipedia.org/wiki/Weather',
              wikidata: 'https://www.wikidata.org/wiki/Q11663',
            },
            frequency: 2,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 1046,
                  end: 1051,
                },
                {
                  start: 2234,
                  end: 2239,
                },
              ],
            },
          },
          {
            id: 1866867,
            name: 'medical treatment',
            type: 'disease',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1866867',
              wikipedia: 'https://en.wikipedia.org/wiki/Therapy',
              wikidata: 'https://www.wikidata.org/wiki/Q179661',
            },
            frequency: 1,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 383,
                  end: 390,
                },
              ],
            },
          },
          {
            id: 1464499,
            name: 'Andrea Absolonová',
            type: 'person',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1464499',
              wikipedia: 'https://en.wikipedia.org/wiki/Andrea_Absolonová',
              wikidata: 'https://www.wikidata.org/wiki/Q234350',
            },
            frequency: 1,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 487,
                  end: 491,
                },
              ],
            },
          },
          {
            id: 1300212,
            name: 'Como',
            type: 'location',
            links: {
              self: 'https://api.apitube.io/v1/news/entity/1300212',
              wikipedia: 'https://en.wikipedia.org/wiki/Como',
              wikidata: 'https://www.wikidata.org/wiki/Q1308',
            },
            frequency: 1,
            title: {
              pos: [],
            },
            body: {
              pos: [
                {
                  start: 1604,
                  end: 1608,
                },
              ],
            },
          },
        ],
        source: {
          id: 54331,
          domain: 'escolaki...[+13 chars]...[Upgrade subscription plan]',
          home_page_url: 'https://...[+21 chars]...[Upgrade subscription plan]',
          type: 'news',
          bias: 'unknown',
          rankings: {
            opr: 5,
          },
          location: {
            country_name: 'Brazil',
            country_code: 'br',
          },
          favicon:
            'https://www.google.com/s2/favicons?domain=https://...[+21 chars]...[Upgrade subscription plan]',
        },
        sentiment: {
          overall: {
            score: 0.09,
            polarity: 'positive',
          },
          title: {
            score: 0.18,
            polarity: 'positive',
          },
          body: {
            score: 0,
            polarity: 'positive',
          },
        },
        summary: [
          {
            sentence:
              'Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos.',
            sentiment: {
              score: 0,
              polarity: 'neutral',
            },
          },
          {
            sentence:
              'O som é uma onda que só se movimenta em meios físicos, como água, ar, sólidos e outros, mas ele não consegue se movimentar no vácuo do espaço.',
            sentiment: {
              score: 0.05,
              polarity: 'positive',
            },
          },
          {
            sentence:
              'Servem para terapia sonora, limpeza de joias, construção de teatros e cinemas, ecolocalização dos animais e muito mais.',
            sentiment: {
              score: 0,
              polarity: 'neutral',
            },
          },
          {
            sentence:
              'Resumo sobre som O som é uma onda produzida por meio de oscilações ou vibrações na água, no ar ou em outros meios.',
            sentiment: {
              score: -0.07,
              polarity: 'negative',
            },
          },
          {
            sentence:
              'Principais características do som O som tem diversas características, sendo as principais delas a altura, o timbre e a intensidade.',
            sentiment: {
              score: 0,
              polarity: 'neutral',
            },
          },
        ],
        keywords: ['Escola Kids'],
        links: [
          {
            url: 'https://escolakids.uol.com.br/ciencias/sons-dos-animais.htm',
            type: 'link',
            format: 'link',
          },
          {
            url: 'https://escolakids.uol.com.br/ciencias/audicao.htm',
            type: 'link',
            format: 'link',
          },
        ],
        media: [],
        story: {
          id: 3006082767,
          uri: 'https://api.apitube.io/v1/news/story/3006082767',
        },
        is_duplicate: false,
        is_free: true,
        is_breaking: false,
        read_time: 5,
        sentences_count: 48,
        paragraphs_count: 57,
        words_count: 603,
        characters_count: 3408,
      },
    ],
  },
};

jest.mock('../config/api', () => ({
  get: jest.fn(),
}));

describe('news.api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should call API with correct endpoint', async () => {
    (api.get as jest.Mock).mockResolvedValue(MOCK_RESPONSE);

    await fetchNews();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith(
      'https://api.apitube.io/v1/news/everything?category.id=medtop%3A20000005&language.code=pt&page=1&per_page=10',
    );
  });

  it('Should throw error when API fails', async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

    try {
      await fetchNews();
      fail('Deveria ter lançado um erro');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      if (err instanceof Error) {
        expect(err.message).toBe('Network Error');
      }
    }
  });
});
