class GetNewsMapper {
  static toDomain(data: any) {
    const {results} = data;

    const resultsFormatted = results.map((result: any, index: number) => {
      return {
        id: index,
        publishedAt: result.published_at,
        title: result.title,
        description: result.description,
        image: result.image,
      };
    });
    return resultsFormatted;
  }
}

export default GetNewsMapper;
