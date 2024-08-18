import { create } from "zustand";

export const useStore = create(set => ({
  showList: true,
  setShowList: showList => set({ showList }),
  products: [],
  setProducts: products => set({ products }),
  multiply: 2.2,
  setMultiply: multiply => set({ multiply }),
  category: "modules",
  setCategory: category => set({ category }),
}));
