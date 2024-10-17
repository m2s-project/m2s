import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { setOrders } from "../orderSlice";

const useOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setOrders(orders));
      },
      (error) => {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
};

export default useOrders;
