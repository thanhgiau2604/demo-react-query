import { axiosClient } from "./axiosClient"

export const postsAPI = {
    getPosts() {
        return axiosClient.get('/api/posts')
    }
}