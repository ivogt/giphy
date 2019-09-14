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
const DefaultOptions = { q : '', limit : 12, offset : 0, rating : 'G', lang : 'en' };

export default (get, ApiKey) => ({
  get: async ({page=1,q}) => {
    console.log({page,q});
    var offset = DefaultOptions.limit * ( page -1 )
    const {data} = await get('gifs/search', {
      params: { ...DefaultOptions, api_key: ApiKey ,offset , q:escape(q) }
    });
    return mapImages(data.data);
  }
});
