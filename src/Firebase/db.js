import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./Config";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
