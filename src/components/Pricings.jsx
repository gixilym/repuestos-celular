import { isNull } from "es-toolkit";
import { twMerge } from "tailwind-merge";
import { formatPrice, productName } from "../utils/helpers.js";
import { useStore } from "../utils/store";

function Pricings({ selectedProduct }) {
  const { multiply, setMultiply } = useStore(),
    price = Number((selectedProduct?._1 * multiply).toFixed(0)),
    cost = selectedProduct?._1,
    avaible = selectedProduct?._2,
    name = isNull(selectedProduct)
      ? "nombre del repuesto"
      : productName(selectedProduct);

  return (
    <div className="flex flex-col justify-start items-start w-full gap-y-6">
      <h2 className="text-2xl text-start w-full border-b-2 border-slate-300">
        ➡️ {name}
      </h2>
      <h3
        className={twMerge(
          avaible == "AGOTADO" ? "text-red-600" : "text-green-600",
          "text-2xl w-full text-center font-semibold"
        )}
      >
        {avaible ?? <span className="text-transparent">.</span>}
      </h3>
      <div className="flex justify-between gap-x-4 items-end w-full">
        <div className="w-full space-y-1 text-slate-900">
          <div className="flex w-full justify-between items-center">
            <label htmlFor="product-price" className="block font-bold text-lg">
              Venta
            </label>
            <div className="flex items-center justify-center gap-x-2">
              <p className="text-sm uppercase">Coste por</p>
              <select
                id="product-price"
                value={multiply}
                onChange={e => setMultiply(Number(e.target.value))}
                className="text-xl font-bold border outline-0 border-slate-800 rounded-md p-1 text-slate-800"
              >
                <option value="2.1">2.1</option>
                <option value="2.2">2.2</option>
                <option value="2.3">2.3</option>
                <option value="2.4">2.4</option>
                <option value="2.5">2.5</option>
              </select>
            </div>
          </div>
          <div
            id="product-price"
            className="bg-green-200 p-4 rounded-md text-2xl font-bold text-center border-2 border-green-300/50"
          >
            ${isNaN(price) ? 0 : formatPrice(price)}
          </div>
        </div>
        <div className="w-full space-y-1">
          <label
            htmlFor="product-cost"
            className="block font-bold text-lg text-slate-700 text-center"
          >
            Coste
          </label>
          <div
            id="product-cost"
            className="bg-gray-200 p-4 rounded-md text-2xl font-bold text-center text-slate-600 border-2 border-slate-300/50"
          >
            ${isNaN(cost) ? 0 : formatPrice(cost)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricings;
