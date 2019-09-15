import { GiphyService as api } from '../../../services';

const Actions = {
  load: () => async ({ setState, getState }) => {
    const { page, q } = getState(),
      nextPage = page + 1;

    setState({ loading: true, page: nextPage });

    const [newImages, pagination] = await api.get({ page: nextPage, q }),
      { data } = getState();

    setState({ loading: false, data: data.concat(newImages), pagination });
  },

  search: q => async ({ setState, getState }) => {
    setState({ loading: true, data: [], q, page: 0 });

    const [newImages, pagination] = await api.get({ page: 1, q });

    setState({ loading: false, data: newImages, q, page: 0, pagination });
  }
};

export default Actions;
