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
    response: {
      201: { ...item },
    },
  },
};
