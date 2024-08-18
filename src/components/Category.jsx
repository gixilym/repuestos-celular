import { useStore } from "../utils/store";

function Category() {
  const { category, setCategory } = useStore();

  return (
    <select
      id="select-category"
      value={category}
      onChange={e => setCategory(e.target.value)}
      className="w-full text-2xl border-2 border-slate-400 rounded-lg p-3 bg-slate-200 uppercase outline-0"
    >
      <option className="text-lg" value="modules">
        Módulos
      </option>
      <option className="text-lg" value="batteries">
        Baterías
      </option>
    </select>
  );
}

export default Category;
