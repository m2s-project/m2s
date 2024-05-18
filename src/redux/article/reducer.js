import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  articles: [],
};

const reducer = (state = initialState.articles, action) => {
  if (localStorage.getItem("articles")) {
    state = JSON.parse(localStorage.getItem("articles"));
  }
  switch (action.type) {
    case ADD_ARTICLE:
      let articles = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("articles", JSON.stringify(articles));
      return articles;

    case DELETE_ARTICLE:
      let filterArticles = state.filter(
        (article) => action.payload.uuid !== article.uuid
      );
      localStorage.setItem("articles", JSON.stringify(filterArticles));
      return filterArticles;

    case UPDATE_ARTICLE:
      let updateArticles = state.map((article) => {
        if (action.payload.uuid === article.uuid) {
          return action.payload;
        }
        return article;
      });
      localStorage.setItem("articles", JSON.stringify(updateArticles));
      return updateArticles;

    default:
      return state;
  }
};

export default reducer;
