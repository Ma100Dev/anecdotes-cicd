import axios from 'axios'

const PORT = process.env.PORT || 3000
const baseUrl = `http://localhost:${PORT}/api/anecdotes`

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const add = async (content) => {
    const data = {
        content: content,
        id: getId(),
        votes: 0
    }
    const response = await axios.post(baseUrl, data)
    return response.data
}

const setLikes = async (id) => {
    const objUrl = `${baseUrl}/${id}`
    const votes = await (await axios.get(objUrl)).data.votes
    const data = {
        votes: votes + 1
    }
    const response = await axios.patch(objUrl, data)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, add, setLikes }