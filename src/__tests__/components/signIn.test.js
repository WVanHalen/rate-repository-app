import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "../../components/SignIn/SignInContainer";
// ...

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const initialvalues = {
        username: "",
        password: "",
      };
      const onSubmit = jest.fn();
      const { getByTestId } = render(
        <SignInContainer onSubmit={onSubmit} initialValues={initialvalues} />
      );

      fireEvent.changeText(getByTestId("username"), "kalle");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
