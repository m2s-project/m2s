import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setArticles } from "../articleSlice";

const useArticles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "articles"),
      (snapshot) => {
        const articles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setArticles(articles));
      },
      (error) => {
        console.error("Erreur lors de la récupération des articles:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useArticles;
