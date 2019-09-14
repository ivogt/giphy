const mapImages = (images)=>{
  return images.map(({id, url, title, type,user={},images})=>({
    id, link:url, title, type,
    media : {
      m : images.fixed_height.url
    },
    author: user.display_name,
    profile_url: user.profile_url
  }))
}
export default (get, ApiKey) => ({
  get: async ({ q = 'k', limit = 10, offset = 0, rating = 'G', lang = 'en' }={}) => {
    const {data} = await get('gifs/search', {
      params: { q, limit, offset, rating, lang, api_key: ApiKey }
    });
    return mapImages(data.data);
  }
});
