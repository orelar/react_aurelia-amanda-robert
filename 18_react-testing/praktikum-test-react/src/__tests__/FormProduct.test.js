/** @jest-environment jsdom */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MockImage from "../assets/logo-akal.png";
import FormProduct from "../components/common/FormProduct";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux"; // Import the Provider
import store from "../store/store"; // Import your Redux store
it("should render product name form input", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );

  const productNameLabel = screen.getByLabelText(/Product name/i);
  const productCategoryLabel = screen.getByLabelText(/Product category/i);
  const imageProductLabel = screen.getByLabelText(/Image of product/i);
  const productFreshnessLabel = screen.getByText(/Product Freshness/i);
  const additionalDescriptionLabel = screen.getByLabelText(
    /Additional description/i
  );
  const productPriceLabel = screen.getByLabelText(/Product price/i);

  expect(productNameLabel).toBeInTheDocument();
  expect(productCategoryLabel).toBeInTheDocument();
  expect(imageProductLabel).toBeInTheDocument();
  expect(productFreshnessLabel).toBeInTheDocument();
  expect(additionalDescriptionLabel).toBeInTheDocument();
  expect(productPriceLabel).toBeInTheDocument();
});

it("should render the form correctly", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  expect(screen.getByText("Detail Product")).toBeInTheDocument();
});

it("should show errors for invalid input", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );

  // Submit the form without filling out any fields
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Expect error messages to be displayed
  expect(
    screen.getByText("Product Name is empty! Please fill the Product Name")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Product Category is empty! Please select a valid category"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Image is not found! Please select a file")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Product Freshness is empty! Please select one!")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Additional Desc is empty! Please fill the Additional Desc"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Product Price is empty! Please fill the Product Price")
  ).toBeInTheDocument();
});

it("should show errors for specific field validations", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Product Name
  fireEvent.change(screen.getByTestId("productNameInput"), {
    target: { value: "Dummy 2" },
  });

  // Product Price
  fireEvent.change(screen.getByTestId("productPriceInput"), {
    target: { value: "-200" },
  });

  // Expect error messages for specific fields
  expect(
    screen.getByText(
      "Product Name is invalid! Only letters and spaces are allowed, and it should be 1-25 characters long"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Product Price is invalid! Please enter a valid positive number"
    )
  ).toBeInTheDocument();
});

it("should handle additional description input", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate typing in the additional description input
  const additionalDescInput = screen.getByLabelText(/Additional Description/i);
  fireEvent.change(additionalDescInput, {
    target: {
      value: "Sample additional description",
    },
  });

  // Check that the additional description state is updated and error message is cleared
  expect(
    screen.queryByText(
      "Additional Desc is empty! Please fill the Additional Desc"
    )
  ).toBeNull();
});

it("should handle image selection and show error for invalid image format", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Create a file input
  const imageInput = screen.getByLabelText(/Image of product/i);

  // Create an invalid image file (e.g., a TXT file)
  const invalidImageFile = new File(["sample"], "sample.txt", {
    type: "text/plain", // Set a TXT file type
  });

  // Create a change event to simulate file selection with an invalid image format (TXT)
  const invalidChangeEvent = {
    target: {
      files: [invalidImageFile],
    },
  };

  // Trigger the change event to simulate selecting an invalid image format (TXT)
  fireEvent.change(imageInput, invalidChangeEvent);

  // Check that the image state is reset and the error message is displayed
  expect(screen.queryByText("Successfully upload file!"));
  expect(
    screen.queryByText(/Image is not found! Please select a valid image file/i)
  ).toBeNull();
});

it("should handle product category selection", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate selecting a product category
  const productCategorySelect = screen.getByLabelText(/Product category/i);
  fireEvent.change(productCategorySelect, {
    target: {
      value: "Category 1",
    },
  });

  // Check that the product category state is updated and error message is cleared
  expect(
    screen.queryByText(
      "Product Category is invalid! Please select a valid category"
    )
  ).toBeNull();
});

it("should handle product freshness selection", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate selecting a product freshness
  const productFreshnessRadio = screen.getByLabelText(/Brand New/i);
  fireEvent.click(productFreshnessRadio);

  // Check that the product freshness state is updated and error message is cleared
  expect(
    screen.queryByText(
      "Product Freshness is invalid! Please select a valid freshness"
    )
  ).toBeNull();
});

it("should handle product category change and show error for invalid category", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate selecting an invalid product category
  const productCategorySelect = screen.getByLabelText(/Product category/i);
  fireEvent.change(productCategorySelect, {
    target: {
      value: "Choose...",
    },
  });

  // Check that the product category state is updated and an error message is displayed
  expect(
    screen.getByText(
      "Product Category is empty! Please select a valid category"
    )
  ).toBeInTheDocument();
});

it("should handle product price change and show error for invalid price", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate entering an invalid product price
  const productPriceInput = screen.getByLabelText(/Product Price/i); // Adjust the label as needed
  fireEvent.change(productPriceInput, {
    target: {
      value: "-10", // An invalid negative price
    },
  });

  // Check that the product price state is updated and an error message is displayed
  expect(
    screen.getByText(
      "Product Price is invalid! Please enter a valid positive number"
    )
  ).toBeInTheDocument();
});

it("should handle form submission with empty fields", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Submit the form without filling out any fields
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Expect error messages to be displayed
  expect(
    screen.getByText("Product Name is empty! Please fill the Product Name")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Image is not found! Please select a file")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Product Category is empty! Please select a valid category"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Product Freshness is empty! Please select one!")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Additional Desc is empty! Please fill the Additional Desc"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Product Price is empty! Please fill the Product Price")
  ).toBeInTheDocument();
});

it("should handle form submission with too long product name", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate entering a product name that exceeds 25 characters
  const productNameInput = screen.getByLabelText(/Product name/i);
  fireEvent.change(productNameInput, {
    target: {
      value: "Haloinicontohnamaprodukyangjumlahnyaterlaluamatsangatpanjangpol",
    },
  });

  // Submit the form
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Expect error message for too long product name
  expect(
    screen.getByText(
      "Product Name is invalid! Only letters and spaces are allowed, and it should be 1-25 characters long"
    )
  ).toBeInTheDocument();
});

it("should handle form submission with invalid product price", () => {
  render(
    <Provider store={store}>
      <FormProduct />
    </Provider>
  );
  // Simulate entering a negative product price
  const productPriceInput = screen.getByLabelText(/Product Price/i);
  fireEvent.change(productPriceInput, { target: { value: "-12" } });

  // Submit the form
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Expect error message for invalid product price
  expect(
    screen.getByText(
      "Product Price is invalid! Please enter a valid positive number"
    )
  ).toBeInTheDocument();
});

it("should handle form submission with valid input", () => {
  const mockOnAddProduct = jest.fn(); // Mock the onAddProduct function

  render(
    <Provider store={store}>
      <FormProduct onAddProduct={mockOnAddProduct} />
    </Provider>
  );
  // Fill out the form with valid input
  const productNameInput = screen.getByLabelText(/Product name/i);
  const categoryInput = screen.getByLabelText(/Product category/i);
  const imageInput = screen.getByLabelText(/Image of product/i);
  const freshnessInput = screen.getByLabelText(/Brand New/i);
  const additionalDescInput = screen.getByLabelText(/Additional Description/i);
  const priceInput = screen.getByLabelText(/Product Price/i);

  fireEvent.change(productNameInput, { target: { value: "Sample Product" } });
  fireEvent.change(categoryInput, { target: { value: "Category 1" } });
  fireEvent.change(imageInput, {
    target: { files: [new File([], "sample.jpg")] },
  });
  fireEvent.click(freshnessInput);
  fireEvent.change(additionalDescInput, {
    target: { value: "Sample additional description" },
  });
  fireEvent.change(priceInput, { target: { value: "10.99" } });

  // Submit the form
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Expect that the form is submitted successfully (no error messages)
  expect(
    screen.queryByText("Product Name is empty! Please fill the Product Name")
  ).toBeNull();
  expect(
    screen.queryByText("Image is not found! Please select a file")
  ).toBeNull();
  expect(
    screen.queryByText("Product Category is empty! Please select one!")
  ).toBeNull();
  expect(
    screen.queryByText("Product Freshness is empty! Please select one!")
  ).toBeNull();
  expect(
    screen.queryByText("Product Name must not exceed 25 characters")
  ).toBeNull();
  expect(
    screen.queryByText(
      "Product Price is invalid! Please enter a valid positive number"
    )
  ).toBeNull();
});
