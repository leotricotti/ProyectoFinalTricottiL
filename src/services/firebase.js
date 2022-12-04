import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

export const firebaseServices = {
  getProductsList: async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  getproductsByCategory: async (categoryId) => {
    const db = getFirestore();
    const q = query(
      collection(db, "products"),
      where("category", "==", categoryId)
    );

    const snapshot = await getDocs(q);
    if (snapshot.size === 0) {
      return [];
    }
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  getPurchase: async () => {
    const db = getFirestore();
    const cartsCollection = collection(db, "carts");
    const snapshot = await getDocs(cartsCollection.id);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
}

