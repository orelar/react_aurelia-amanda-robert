import axios from "axios";

export const APIproduct = {
  getProducts: async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product`
      );

      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
};
