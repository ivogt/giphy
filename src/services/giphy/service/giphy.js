import mapImages from '../utils/normalizeImagesResponse';
const DefaultOptions = { q : '', limit : 12, offset : 0, rating : 'G', lang : 'en' };

export default (get, ApiKey) => ({
  get: async ({page=1,q}) => {
    const offset = DefaultOptions.limit * ( page -1 )
    const {data} = await get('gifs/search', {
      params: { ...DefaultOptions, api_key: ApiKey ,offset , q:escape(q) }
    });
    return [mapImages(data.data), data.pagination];
  }
});
