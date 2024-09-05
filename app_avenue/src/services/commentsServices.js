import axios from "axios";

const URL = '';

export const fetchComments = async () => {
    const response = await axios.get(URL)

    return response.data
}

export const fetchCommentById = async (id) => {
    const response = await axios.get(`${URL}/${id}`)

    return response.data
}