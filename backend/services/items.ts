import itemRespository from "../repositories/items";

const getItems = () => itemRespository.getItems();

export default {
  getItems,
};
