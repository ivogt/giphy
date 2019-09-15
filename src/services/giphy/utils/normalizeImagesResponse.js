const mapImages = images => {
  return images.map(({ id, url, title, type, user = {}, images }) => ({
    id,
    link: url,
    title,
    type,
    media: {
      animate: { m: images.fixed_height.url, l: images['downsized_large'].url },
      still: {
        m: images.fixed_width_still.url,
        l: images['480w_still'].url
      }
    },
    author: user.display_name,
    profile_url: user.profile_url
  }));
};

export default mapImages;
