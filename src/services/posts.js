/* eslint-disable react-hooks/rules-of-hooks */
import { postsAPI } from "../api/posts";
import { useQuery } from "react-query";

const fetchingPosts = async () => {
  const res = await postsAPI.getPosts();
  return res;
};

export const postServices = {
  fetchingPost() {
    return useQuery(["posts"], fetchingPosts, { staleTime: 10000 });
  },
};
