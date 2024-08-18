import { NAME_COLUMN } from "./consts";

const normalizeStr = str =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const plainStr = str => normalizeStr(str.toLowerCase().trim());

const len = str => str.length;

const productName = p => p[""] + " " + p[NAME_COLUMN];

function formatPrice(num) {
  const numStr = num.toString();
  const format = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return format;
}

const deleteEmptys = p =>
  p[NAME_COLUMN].includes("CEL/ WSP") ||
  p[NAME_COLUMN].includes("ACTUALIZACIÓN") ||
  p[NAME_COLUMN].includes("BAJAMOS LOS") ||
  p[NAME_COLUMN].includes("ACTUALIZADO") ||
  (p[""] == "" && p[NAME_COLUMN] == "") ||
  p[""] == "MODELO" ||
  p[""] == " SAMSUNG" ||
  p[""] == "LG" ||
  p[""] == "IPHONE" ||
  p[""] == "MOTOROLA" ||
  p[""] == "HUAWEI" ||
  p[""] == "XIAOMI" ||
  p[""] == "TCL" ||
  p[""] == "TABLET 7 PULGADAS" ||
  p[""] == "DISPLAY" ||
  p[""] == "TOUCH" ||
  p[""] == "ALCATEL";

export { deleteEmptys, formatPrice, len, plainStr, productName };
