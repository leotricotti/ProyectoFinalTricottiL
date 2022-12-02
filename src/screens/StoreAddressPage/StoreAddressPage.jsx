import { useState, useEffect } from "react";
import img from "../../assets/images/stores/encontranos.jpg";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { Spinner } from "../../components/Widgets/Spinner";
import styles from "../../CSS/storeAddress.module.css";

export const StoreAddressPage = () => {
  const [storeAddress, setStoreAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemsColection = collection(db, "storeAddress");
    getDocs(itemsColection).then((snapshot) => {
      setStoreAddress(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.flexContainer}>
      <div className={styles.heading}>
        <h3 className={styles.menuTitle}>Puntos de venta</h3>
        <div className={styles.location}>
          <span>Ciudad de Buenos Aires</span>
        </div>
      </div>
      <img src={img} alt="Converse pride" className={styles.img} />
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.stores}>
          {storeAddress.map((store) => {
            return (
              <div className={styles.storeData} key={store.id}>
                <h3 className={styles.storeTitle}>{store.store}</h3>
                <span className={styles.item}>{store.address}</span>
                <span className={styles.item}>{store.city}</span>
                <span className={styles.item}>{store.open}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
