export default axios => async (url, options) => {
  try {
    return await axios.get(url, options);
  } catch (e) {
    console.error(url, options, e.stack || e);
    throw e;
  }
};
