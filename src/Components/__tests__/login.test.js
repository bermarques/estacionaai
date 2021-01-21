// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import LoginForm from "../Login";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// jest.mock("axios");
// const mockedAxios = axios;

// describe("When the user enters an invalid pokemon name", () => {
//   test("Shoul show an error message in the screen", async () => {
//     mockedAxios.get.mockRejectedValueOnce(new Error());
//     render(<LoginForm />);
//     userEvent.type(screen.getByRole("textbox"), "");
//     userEvent.type(screen.getByRole("textbox"), "");
//     userEvent.click(screen.getByRole("button"));
//     const message = await screen.findByText(/O campo E-mail é obrigatório!/);
//     expect(message).toBeInTheDocument();
//   });
// });
