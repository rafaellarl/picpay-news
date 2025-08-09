export interface INews {
  id: number;
  publishedAt: string;
  title: string;
  description: string;
  image: string;
}

// TODO: Ajustar tipagem da função getNews
export interface IUseGetNewApi {
  newsList: INews[];
  error: Error | null;
  loading: boolean;
  getNews: () => Promise<any>;
}
