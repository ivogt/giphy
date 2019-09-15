const mapImages = images => {
  return images.map(({ id, url, title, type, user = {}, images }) => ({
    id,
    link: url,
    title,
    type,
    media: {
      m: images.fixed_height.url
    },
    author: user.display_name,
    profile_url: user.profile_url
  }));
};

export default mapImages;
