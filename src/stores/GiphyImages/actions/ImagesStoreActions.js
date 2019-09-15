const Actions = {
  load: () => async ({ setState, getState }, { api }) => {

    const { page, q } = getState(),
      nextPage = page + 1;

    setState({ loading: true, page: nextPage });

    const newImages = await api.get({ page: nextPage, q }),
      { data } = getState();

    setState({ loading: false, data: data.concat(newImages) });
    
  },

  search: q => async ({ setState, getState }, { api }) => {

    setState({ loading: true, data: [], q, page: 0 });

    const newImages = await api.get({ page: 1, q });

    setState({ loading: false, data: newImages, q, page: 0 });

  }
};

export default Actions;
