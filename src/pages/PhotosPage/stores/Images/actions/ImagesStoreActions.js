const Actions = {
  load: () => async ({ setState, getState }, { api }) => {
    setState({ loading: true });
    const images = await api.get();
    console.log(images);
    setState({ data:images });
    setState({ loading: false });
  },

  loadMore: () => ({ setState, getState }) => {}
};

export default Actions;
