import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../Login";

describe("Test case for testing login", () => {
  //   test("Simular erro de login", async () => {
  //     render(<LoginForm />);

  //     // userEvent.type(screen.getByRole("textbox"), "pablo@pablo.com");
  //     // userEvent.type(screen.getByRole("textbox"), "Pablo123");
  //     userEvent.click(screen.getByRole("button"));

  //     const failLogin = await screen.findAllByRole(<LoginForm />);

  //     expect(failLogin).toBeTruthy();
  //   });

  test("Should not let the user be able to click on the button when the input value is empty", () => {
    render(<LoginForm />);
    const mockDispatch = jest.fn();
    expect(screen.getByRole("button")).toBeFalsy();
  });
});

// describe("When everything is ok", () => {
//   test("Should name appear on the list when the user type a value on input and click on the button", async () => {
//     render(<List />);

//     userEvent.type(screen.getByRole("textbox"), "Filipe");
//     userEvent.click(screen.getByRole("button"));

//     userEvent.type(screen.getByRole("textbox"), "Pedro");
//     userEvent.click(screen.getByRole("button"));

//     const myList = await screen.findAllByRole("listitem");

//     expect(myList).toHaveLength(2);
//   });

//   test("Should not let the user be able to click on the button when the input value is empty", () => {
//     render(<List />);
//     expect(screen.getByRole("button")).toBeDisabled();
//   });
// });
