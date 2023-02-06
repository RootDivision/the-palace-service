import itemRespository from "../repositories/releases";

const addRelease = (data: any) => itemRespository.addRelease(data);
const getReleases = () => itemRespository.getReleases();

export default {
  addRelease,
  getReleases,
};
