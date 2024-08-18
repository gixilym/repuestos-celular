function Product({ productName, selectProduct }) {
  return (
    <li
      className="p-3 hover:bg-white duration-100 cursor-pointer text-lg border-t-2 border-slate-400/40"
      onClick={() => selectProduct(productName)}
    >
      {productName}
    </li>
  );
}

export default Product;
