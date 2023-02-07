import itemRespository from "../repositories/releases";

const addRelease = (data: any) => itemRespository.addRelease(data);

const addReleases = (data:any) => itemRespository.addReleases(data);

const getReleases = () => itemRespository.getReleases();

export default {
  addRelease,
  addReleases,
  getReleases,
};
