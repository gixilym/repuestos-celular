import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Loading from "./components/Loading";
import Pricings from "./components/Pricings";
import ProductsList from "./components/ProductsList";
import { JM_MODULES_URL } from "./utils/consts";
import { deleteEmptys } from "./utils/helpers";
import { useStore } from "./utils/store";

function App() {
  const { setProducts } = useStore(),
    [loading, setLoading] = useState(true),
    [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => loadModules(), []);

  function loadModules() {
    fetch(JM_MODULES_URL)
      .then(res => res.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: "array", sheetStubs: true }),
          sheetName = workbook.SheetNames[0],
          sheet = workbook.Sheets[sheetName],
          parsed = XLSX.utils.sheet_to_json(sheet, { defval: "", raw: true });
        setProducts(parsed.filter(p => !deleteEmptys(p)));
      })
      .then(() => setLoading(false))
      .catch(err => console.error(`Error en 'loadModules': ${err.message}`));
  }

  return (
    <main className="bg-white px-8 py-6 rounded-md border-2 w-full max-w-xl space-y-8 h-full">
      {/* <Category /> */}
      <Pricings selectedProduct={selectedProduct} />
      {loading ? (
        <Loading />
      ) : (
        <ProductsList
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </main>
  );
}

export default App;

/*
 function loadBatteries() {
    //* Solo toma los primeros 100 elementos.
    fetch(JM_BATTERIES_URL)
      .then(res => res.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: "array", sheetStubs: true }),
          sheetName = workbook.SheetNames[0],
          sheet = workbook.Sheets[sheetName],
          parsed = XLSX.utils.sheet_to_json(sheet, { defval: "", raw: true });
        console.log("baterías: ", parsed);
      })
      .then(() => setLoading(false))
      .catch(err => console.error(`Error en 'loadBatteries': ${err.message}`));
  }
*/
