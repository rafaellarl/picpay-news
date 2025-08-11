import {formatDateToShortPtBr} from '../../utils';

import {INews} from '../types';

class GetNewsMapper {
  static toDomain(data: any): INews[] {
    const {results} = data;

    const resultsFormatted = results.map((result: any, index: number) => {
      const publishedAtFormatted = formatDateToShortPtBr(result.published_at);

      return {
        id: index,
        image: result.image,
        title: result.title,
        description: result.description,
        publishedAt: publishedAtFormatted,
      };
    });
    return resultsFormatted;
  }
}

export default GetNewsMapper;
