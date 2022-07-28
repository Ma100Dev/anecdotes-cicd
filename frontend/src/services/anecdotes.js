import axios from 'axios';

const baseUrl = `/api/anecdotes`;

const getId = () => (100000 * Math.random()).toFixed(0);

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const add = async (content) => {
  const data = {
    content: content,
    id: getId(),
    votes: 0
  };
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const setLikes = async (id) => {
  const objUrl = `${baseUrl}/${id}`;
  const votes = await (await axios.get(objUrl)).data.votes;
  const data = {
    votes: votes + 1
  };
  const response = await axios.patch(objUrl, data);
  return response.data;
};

const exports = { getAll, add, setLikes };
export default exports;