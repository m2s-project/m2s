import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setEntrepots } from "../entrepotSlice";

const useEntrepots = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "entrepots"),
      (snapshot) => {
        const entrepots = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setEntrepots(entrepots));
      },
      (error) => {
        console.error("Erreur lors de la récupération des entrepots:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useEntrepots;
