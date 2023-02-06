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
        releaseId: { type: "string" },
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
