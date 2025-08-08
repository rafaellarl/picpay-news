import { useState } from 'react';
import { IUseGetNewApi } from '../types';
// import { fetchNews } from '../resources/news.api';
// import GetNewsMapper from '../mappers/GetNewsMapper';

// TODO: Remover mock
const MOCK = [
  {
    id: 0,
    publishedAt: "2025-07-31T17:07:56Z",
    title: "Som: o que é, como é produzido, curiosidades - Escola Kids",
    description: "O som é uma onda. Ele é produzido por meio de oscilações ou vibrações que ocorrem em meios físicos. É usado na comunicação, na navegação e até em exames. . ....[Upgrade subscription plan]",
    image: "https://static.escolakids.uol.com.br/2025/06/ilustracao-de-um-menino-com-a-mao-na-orelha-captando-ondas-sonoras-ou-de-som.jpg"
  },
  {
    id: 1,
    publishedAt: "2025-07-31T17:07:06Z",
    title: "Mariana Xavier revela que está namorando à distância e pede dicas para seguidores; veja quem é ele",
    description: "Mariana Xavier revelou que está namorando à distância. O diretor de filmes publicitários Guido Antonini é o novo amor da atriz, que pediu dicas para seus seguidores no Instagram que formam casais que ...[+13 chars]...[Upgrade subscription plan]",
    image: "https://www.estadao.com.br/resizer/v2/X2YIS5SZA5GYTLEOHJ2GBPPATU.jpg?quality=80&auth=59adec19ff8b3a52959cf375728f895d294195881677ead497d4cbf5f00ced24&width=1200&height=630&smart=true"
  },
  {
    id: 2,
    publishedAt: "2025-07-31T17:07:06Z",
    title: "Jamie Lee Curtis confirma versão de \"Crime, Disse Ela\" para o cinema",
    description: "Publicado em 2025-07-27 10:17, por filmSPOT A atriz vencedora de um Óscar interpretará a personagem de Jessica Fletcher, celebrizada por Angela Lansbury. Jamie Lee Curtis confirmou que protagonizará u...[+7 chars]...[Upgrade subscription plan]",
    image: "https://filmspot.com.pt/images/media/14139.jpg"
  },
  {
    id: 3,
    publishedAt: "2025-07-31T17:07:00Z",
    title: "Fuvest 2026: novas datas de atendimento especializado - Brasil Escola",
    description: "Fuvest anuncia novas datas para solicitação de atendimento especializado no Vestibular 2026 São oferecidos mais de 8 mil vagas de graduação para concorrência no Vestibular. . ....[Upgrade subscription plan]",
    image: "https://s5.static.brasilescola.uol.com.br/vestibular/2025/05/vestibular-2026-da-fuvest.jpg"
  },
  {
    id: 4,
    publishedAt: "2025-07-31T13:07:46Z",
    title: "\"It: Welcome To Derry\" - a origem do tal palhaço",
    description: "A HBO Max apresentou novas cenas da série que conta a origem de Pennywise. Baseada no universo criado por Stephen King a série de terror \"It: Welcome To Derry\" tem um novo teaser trailer, apresentado ...[+14 chars]...[Upgrade subscription plan]",
    image: "https://filmspot.com.pt/images/media/14142.jpg"
  },
  {
    id: 5,
    publishedAt: "2025-07-31T12:07:49Z",
    title: "InfanTv - A Máquina do Tempo rumo à sua infância",
    description: "Especial musical infantil baseado na Declaração dos Direitos Universais das Crianças e apresentado pela Rede Globo. Emissora: TV Globo Transmissão Original: 6 de outubro de 1987. Duração: 60. . ....[Upgrade subscription plan]",
    image: "https://infantv.com.br/infantv/wp-content/uploads/2018/05/cancao_logo.jpg"
  },
  {
    id: 6,
    publishedAt: "2025-07-31T12:07:44Z",
    title: "Honda compra direito da música \"Respect\", com Aretha Franklin, para nova campanha | Exame",
    description: "A música \"Respect\" foi escrita por Otis Reding, mas ficou famosa na voz de Aretha Franklin. Gravada em 1967, está em primeiro lugar na lista das 500 Melhores Música de Todos os Tempos, da revista Roll...[+8 chars]...[Upgrade subscription plan]",
    image: "https://classic.exame.com/wp-content/uploads/2025/07/HRV_FramesPR_02.jpg"
  },
  {
    id: 7,
    publishedAt: "2025-07-31T12:07:01Z",
    title: "MDOC Melgaço arranca com 33 filmes de 23 países em competição",
    description: "O festival internacional de documentário decorre entre 28 de julho e 3 de agosto, com estreias nacionais, prémios internacionais e um programa cultural diversificado. A 11. ª edição do MDOC – Festival...[+5 chars]...[Upgrade subscription plan]",
    image: "https://filmspot.com.pt/images/media/14138.jpg"
  },
  {
    id: 8,
    publishedAt: "2025-07-31T10:07:52Z",
    title: "Novo filme de Marcos Pimentel, 'O silêncio das ostras' estreia em Juiz de Fora",
    description: "Imagem do filme ‘O silêncio das ostras’ (Foto: Divulgação)Em Minas Gerais, onde a mineração molda paisagens e histórias há séculos, um grupo de cineastas volta suas câmeras para um enredo marcado por ...[+11 chars]...[Upgrade subscription plan]",
    image: "https://tribunademinas.com.br/wp-content/uploads/2025/07/O-Silencio-das-Ostras-Divulgacao-1.png"
  },
  {
    id: 9,
    publishedAt: "2025-07-31T10:07:39Z",
    title: "David Fincher começa a filmar \"The Continuing Adventures of Cliff Booth\" em Los Angeles",
    description: "Publicado em 2025-07-28 20:45, por filmSPOT A produção do filme centrado na personagem de Brad Pitt em \"Era Uma Vez em Hollywood\", arrancou esta segunda-feira na cidade norte-americana. Começou hoje, ...[+11 chars]...[Upgrade subscription plan]",
    image: "https://filmspot.com.pt/images/media/14144.jpg"
  }
];

const useGetNewsApi = (): IUseGetNewApi => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [newsList, setNewsList] = useState<any>({});

    const getNews = async () => {
        setLoading(false);
        setError(null);
        setNewsList({});

        try {
            // const { data } = await fetchNews();
            // const responseFormatted = GetNewsMapper.toDomain(data);
            setNewsList(MOCK);
        } catch (err) {
            setError(err as Error);
            // TODO: Neste momento podemos registrar os erros em ferramentas de logs voltados para o front como por exemplo o Sentry
        } finally {
            setLoading(false);
        }
    };

    return {
        newsList,
        error,
        getNews,
        loading,
    }
};

export default useGetNewsApi;
