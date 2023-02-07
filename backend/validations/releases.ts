const item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

export const releasesSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          releases: { type: "array" },
        },
      },
    },
  },
};

export const itemSchema = {
  schema: {
    response: {
      200: { ...item },
    },
  },
};

export const addReleaseSchema = {
  schema: {
    body: {
      type: "object",
      required: ["data"],
      properties: {
        id: { type: "string" },
        release_id: { type: "number" },
        instance_id: { type: "number" },
        date_added: { type: "string" },
        rating: { type: "number" },
      },
    },
    response: {
      201: { ...item },
    },
  },
};

export const deleteItemSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};

export const updateItemSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};
