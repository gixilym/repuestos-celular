import { isNull } from "es-toolkit";
import { useEffect, useState } from "react";
import { len, plainStr, productName } from "../utils/helpers";
import { useStore } from "../utils/store";
import NoMatches from "./NoMatches";
import Product from "./Product";
import Search from "./Search";

function ProductsList(props) {
  const { setShowList, products } = useStore(),
    { selectedProduct, setSelectedProduct } = props,
    [searchTerm, setSearchTerm] = useState(""),
    [noMatches, setNoMatches] = useState(false),
    [filteredProducts, setFilteredProducts] = useState(() =>
      products.map(p => productName(p))
    );

  useEffect(() => {
    if (searchTerm == "") {
      setSelectedProduct(null);
      setShowList(true);
    }

    if (searchTerm != "" && !isNull(selectedProduct)) {
      setShowList(true);
    }
  }, [searchTerm, products]);

  function handleChange(e) {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = products.filter(p =>
      plainStr(productName(p)).includes(plainStr(term))
    );

    const newList = filtered.map(p => productName(p));

    setFilteredProducts(newList);
    setNoMatches(len(newList) == 0);
  }

  function selectProduct(name) {
    setShowList(false);
    setSearchTerm(name);
    const p = products.find(p => productName(p) == name) ?? null;
    setSelectedProduct(p);
    scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div className="w-full space-y-4 h-full">
      <Search handleChange={handleChange} searchTerm={searchTerm} />

      {noMatches ? (
        <NoMatches />
      ) : (
        <ul className="border rounded-md mt-2 bg-slate-200 w-full h-full">
          {filteredProducts.map(p => (
            <Product
              key={crypto.randomUUID()}
              productName={p}
              selectProduct={selectProduct}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
