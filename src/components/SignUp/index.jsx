import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";
import useSignUp from "../../hooks/useSignUp";
import SignUpContainer from "./SignUpContainer";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signUp({ username, password });
      if (data) {
        await signIn({ username, password });
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SignUpContainer initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
};

export default SignUp;
