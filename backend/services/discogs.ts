import { discogsConfig } from "../../backend/config";

interface Params {
  page: number;
  per_page: number;
  sort: String;
  sort_order: String;
}

const fetchDiscogsCollection = async ({ params }: { params: Params }) => {
  try {
    const response = await fetch(
      `${discogsConfig.api}/users/${discogsConfig.user}/collection/folders/0/releases?token=${discogsConfig.token}&page=${params.page}&per_page=${params.per_page}&sort=${params.sort}&sort_order=${params.sort_order}`
    );
    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export default {
  fetchDiscogsCollection,
};
