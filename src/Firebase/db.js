import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { app } from "./Config";

export const db = getFirestore(app);

// 🔹 Traer todos los productos
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));

  return querySnapshot.docs.map(docu => ({
    id: docu.id,
    ...docu.data()
  }));
};

// 🔹 Traer UN producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "items", id);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    id: snap.id,
    ...snap.data()
  };
};