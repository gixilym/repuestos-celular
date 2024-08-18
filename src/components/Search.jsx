function Search({ handleChange, searchTerm }) {
  return (
    <input
      id="product-name"
      type="search"
      placeholder="Ej: Poco x3 Pro"
      autoFocus
      value={searchTerm}
      onChange={handleChange}
      className="w-full text-xl border-2 border-slate-200 placeholder:text-slate-500/90 bg-slate-100 px-4 py-3 outline-0 rounded-md"
    />
  );
}

export default Search;
