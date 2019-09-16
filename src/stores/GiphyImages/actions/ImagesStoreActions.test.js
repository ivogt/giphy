import { GiphyService } from '../../../services';
import Actions from './ImagesStoreActions';

jest.mock('../../../services');

const mockData = [[], {}];
const mockDataWithItems = [
  [
    {
      id: 'UVgARihN5UEb6',
      link: 'https://giphy.com/gifs/cat-kittens-funny-UVgARihN5UEb6',
      title: 'kittens GIF',
      type: 'gif',
      media: {
        animate: {
          m: 'https://media1.giphy.com/media/UVgARihN5UEb6/200.gif',
          l: 'https://media1.giphy.com/media/UVgARihN5UEb6/giphy.gif'
        },
        still: {
          m: 'https://media1.giphy.com/media/UVgARihN5UEb6/200w_s.gif',
          l: 'https://media1.giphy.com/media/UVgARihN5UEb6/480w_s.jpg'
        }
      },
      author: undefined,
      profile_url: undefined
    },
    {
      id: 'kvrvnB158J4fm',
      link: 'https://giphy.com/gifs/cat-kitten-kittens-kvrvnB158J4fm',
      title: 'kittens GIF',
      type: 'gif',
      media: {
        animate: {
          m: 'https://media0.giphy.com/media/kvrvnB158J4fm/200.gif',
          l: 'https://media0.giphy.com/media/kvrvnB158J4fm/giphy.gif'
        },
        still: {
          m: 'https://media0.giphy.com/media/kvrvnB158J4fm/200w_s.gif',
          l: 'https://media2.giphy.com/media/kvrvnB158J4fm/480w_s.jpg'
        }
      },
      author: undefined,
      profile_url: undefined
    }
  ], {
    total_count:2
  }
];

const setState = jest.fn();
const getState = jest.fn();

beforeEach(() => {
  jest.resetAllMocks();
});

it('should load data ', async () => {
  const thunk = Actions.load();
  const mock = GiphyService.get.mockImplementation((...args) => {
    return mockData;
  });
  getState.mockImplementation(() => ({
    data: [],
    page: 0,
    q: 'k'
  }));

  await thunk({ setState, getState });
  expect(GiphyService.get).toHaveBeenCalledWith({ page: 1, q: 'k' });
  expect(setState).toHaveBeenCalled();
});

it('should load next page ', async () => {
  const thunk = Actions.load();
  const mock = GiphyService.get.mockImplementation((...args) => {
    return mockData;
  });
  getState.mockImplementation(() => ({
    data: [],
    page: 1,
    q: 'k'
  }));

  await thunk({ setState, getState });
  expect(GiphyService.get).toHaveBeenCalledWith({ page: 2, q: 'k' });
  expect(setState).toHaveBeenCalled();
});

it('should search and reset the page ', async () => {
  const thunkSearch = Actions.search("imac");
  const mock = GiphyService.get.mockImplementation((...args) => {
    return mockDataWithItems;
  });
  getState.mockImplementation(() => ({
    data: [],
    page: 1,
    q: 'k'
  }));

  await thunkSearch({ setState, getState });
  expect(GiphyService.get).toHaveBeenCalledWith({ page: 1, q: 'imac' });
  expect(setState).toHaveBeenCalled();
  expect(setState.mock.calls.length).toBe(2);
  const [,[data]] =setState.mock.calls;
  expect(data.loading).toBe(false);

});
