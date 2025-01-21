import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  // Arrange
  render(
    <Input
      labelText="Name"
      placeholder="Gib deinen Namen ein"
      name="username"
      value=""
      onChange={() => {}}
      required={true}
    />
  );

  // Act
  const label = screen.getByLabelText("Name");
  const input = screen.getByPlaceholderText("Gib deinen Namen ein");

  // Assert
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("placeholder", "Gib deinen Namen ein");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  // Arrange
  const handleChange = jest.fn();
  render(
    <Input
      labelText="Name"
      placeholder="Gib deinen Namen ein"
      name="username"
      value=""
      onChange={handleChange}
      required={false}
    />
  );

  // Act
  const input = screen.getByPlaceholderText("Gib deinen Namen ein");
  await userEvent.type(input, "Max");

  // Assert
  expect(handleChange).toHaveBeenCalledTimes(3); // "M", "a", "x"
});
