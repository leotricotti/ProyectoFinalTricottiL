import { useState, useEffect } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { FilterImg } from "../../components/FilterImg/FilterImg";
import { DropdownFilters } from "../../components/DropdownFilters/DropdownFilters";
import { firebaseServices } from "../../services/firebase";
import { Spinner } from "../../components/Widgets/Spinner";
import { useParams } from "react-router-dom";
import styles from "../../CSS/itemListContainer.module.css";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { getProductsList, getproductsByCategory } = firebaseServices;
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const products = categoryId
          ? await getproductsByCategory(categoryId)
          : await getProductsList();
        setProductsList(products);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, [categoryId]);

  const handleInput = (e) => {
    let classItem = e.currentTarget.children[0];

    if (classItem === "flex") {
      setActive("active");
      return (classItem.className.add(active));
    }
  };

  return (
    <>
      <FilterImg />
      <div className={styles.filterMobile}>
        <DropdownFilters handleInput={handleInput} />
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.filterDesktop}>
          <DropdownFilters handleInput={handleInput} />
        </div>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
              <Spinner />
            </div>
          </div>
        ) : (
          <ItemList productsList={productsList} />
        )}
      </div>
    </>
  );
};
