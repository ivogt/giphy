export default axios => async (url, options) => {
  try {
    const res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.error(url, options, e.stack || e);
    throw e;
  }
};
