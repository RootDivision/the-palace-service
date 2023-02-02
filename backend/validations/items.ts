const item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

export const itemsSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: { ...item },
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

export const addItemSchema = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
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
