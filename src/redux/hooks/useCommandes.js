import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setCommandes } from "../commandeSlice";

const useCommandes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "commandes"),
      (snapshot) => {
        const commandes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setCommandes(commandes));
      },
      (error) => {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useCommandes;
