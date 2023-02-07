export const parseReleaseForSave = (discogsReleases: [], dbReleases: []) => {
  const newItems = discogsReleases
    .map((r: any) => ({
      id: r.id,
      instance_id: r.instance_id,
      date_added: r.date_added,
      rating: r.rating,
    }))
    .filter(
      (value: any, index: number, self: any) =>
        self.findIndex((v: any) => v.id === value.id) === index
    )
    .filter((dc: any) => !dbReleases.find((db: any) => db.id === dc.id));

  return newItems;
};
