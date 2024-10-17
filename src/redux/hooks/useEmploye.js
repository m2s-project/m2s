import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setEmployes } from "../employeSlice";

const useEmployes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "employes"),
      (snapshot) => {
        const employes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setEmployes(employes));
      },
      (error) => {
        console.error("Erreur lors de la récupération des employes:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useEmployes;
