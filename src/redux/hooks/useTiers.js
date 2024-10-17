import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setTiers } from "../tiersSlice";

const useTiers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tiers"),
      (snapshot) => {
        const tiers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setTiers(tiers));
      },
      (error) => {
        console.error("Erreur lors de la récupération des tiers:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useTiers;
