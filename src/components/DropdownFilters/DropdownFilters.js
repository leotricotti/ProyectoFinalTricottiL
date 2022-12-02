import { useState } from "react";
import { PlusSign } from "../Widgets/PlusSign";
import { FilterItem } from "../FilterItem/FilterItem";
import styles from "../../CSS/dropdownFilters.module.css";

export const DropdownFilters = (handleInput) => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <>
      <div className={styles.filtersConatiner}>
        <ul>
          <div className={styles.filterBtn}>
            <span>Filtros</span>
            <div className={styles.plusSign}>
              <PlusSign action={() => setToggleFilter(!toggleFilter)} />
            </div>
          </div>
          {toggleFilter && (
            <>
              <nav className={styles.navContainer}>
                <FilterItem
                  id={1}
                  url={"/products"}
                  title={"todo"}
                  handleInput={handleInput}
                />
                <FilterItem
                  id={2}
                  url={"/sneakers"}
                  title={"calzado"}
                  handleInput={handleInput}
                />
                <FilterItem
                  id={3}
                  url={"/sportswear"}
                  title={"indumentaria"}
                  handleInput={handleInput}
                />
                <FilterItem
                  id={4}
                  url={"/accessories"}
                  title={"accesorios"}
                  handleInput={handleInput}
                />
              </nav>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
