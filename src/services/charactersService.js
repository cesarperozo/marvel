import API from './api';
import md5 from 'md5';

const publicKey = '1442c32e3e942ea37f09b937b8dae03c';
const privateKey = 'd866da2ca1f249fb6f750dc2888625179825e9e7';

function getApiKeyParams() {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  return `?apikey=${publicKey}&hash=${hash}&ts=${ts}`;
}

const searchByName = query => {
  return API.get(`characters${getApiKeyParams()}&nameStartsWith=${query}`).then(
    res => res.data.data.results,
  );
};

const searchById = id => {
  return API.get(`characters/${id}${getApiKeyParams()}`).then(res => res.data.data.results[0]);
};

const searchComicsById = id => {
  return API.get(`characters/${id}/comics${getApiKeyParams()}`).then(res => res.data.data.results);
};

const searchSeriesById = id => {
  return API.get(`characters/${id}/series${getApiKeyParams()}`).then(res => res.data.data.results);
};

const searchStoriesById = id => {
  return API.get(`characters/${id}/stories${getApiKeyParams()}`).then(res => res.data.data.results);
};

const searchEventsById = id => {
  return API.get(`characters/${id}/events${getApiKeyParams()}`).then(res => res.data.data.results);
};

export {
  searchByName,
  searchById,
  searchComicsById,
  searchSeriesById,
  searchStoriesById,
  searchEventsById,
};
