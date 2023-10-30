import axios from "axios";
import { AxiosError } from "axios";
export const APIProduct = {
  getProducts: async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product`
      );

      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  getProductById: async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product/${id}`
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  createProduct: async (newProductData) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product`,
        newProductData
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  deleteProduct: async (id) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product/${id}`
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },

  updateProduct: async (id, updatedProductData) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/products/v1/product/${id}`, updatedProductData
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
};
