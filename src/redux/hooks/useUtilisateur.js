import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setUtilisateurs } from "../utilisateurSlice";

const useUtilisateurs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "utilisateurs"),
      (snapshot) => {
        const utilisateurs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setUtilisateurs(utilisateurs));
      },
      (error) => {
        console.error("Erreur lors de la récupération des utilisateurs:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useUtilisateurs;
