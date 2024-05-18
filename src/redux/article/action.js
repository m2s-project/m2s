
import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE  } from "./type";
// article
export const addArticle = (article) => {

  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const deleteArticle = (article) => {

  return {
    type: DELETE_ARTICLE,
    payload: article,
  };
};

export const updateArticle = (article) => {
  return {
    type: UPDATE_ARTICLE,
    payload: article,
  };
};
