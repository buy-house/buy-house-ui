import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import useAuth from "../../auth/useAuth";

import StyledTextField from "../../styled/StyledTextField";
import StyledContainer from "../../styled/StyledContainer";
import StyledButton from "../../styled/StyledButton";
import StyledLink from "../../styled/StyledLink";
import { SIGN_UP_ROUTE } from "../../app/Routes";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  // const navigate = useNavigate();

  // const { signIn } = useAuth();

  // const onSubmit = (data) => {
  //   try {
  //     const { email, password, rememberMe } = data;
  //     signIn({ email, password, rememberMe });
  //     // navigate(MAIN_ROUTE);
  //   } catch (error) {
  //     setError("email", {
  //       type: "invalidCredentials",
  //       message: "Invalid credentials!",
  //     });
  //     console.error("Error signing in:", error);
  //   }
  // };

  return (
    <StyledContainer
      gap={2}
      // onSubmit={handleSubmit(onSubmit)} component="form"
    >
      <h3 style={{ color: "#172234" }}>Login</h3>
      <StyledTextField
        label="Email"
        placeholder="Email"
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "Field is required!",
            },
            maxLength: {
              value: 320,
              message: "Max length is 100 symbols!",
            },
            pattern: {
              value: /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
              message: "Enter a valid email!",
            },
          }),
        }}
        // helperText={errors?.email ? errors.email.message : " "}
        // err={!!errors?.email}
      />

      <StyledTextField
        label="Password"
        placeholder="Password"
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 8,
              message: "Min length is 8 symbols!",
            },
            maxLength: {
              value: 32,
              message: "Max length is 32 symbols!",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
              message: "Enter a valid email!",
            },
          }),
        }}
        // helperText={errors?.password ? errors.password.message : " "}
        // err={!!errors?.password}
      />

      <StyledLink
        to={"#"}
        component={RouterLink}
        text="Forgot password?"
        style={{ alignSelf: "end" }}
      />

      <StyledButton
        variant="contained"
        type="submit"
        text="Sign in"
        fullWidth
      />

      <span
        style={{
          color: "#172234",
          fontWeight: 600,
          fontSize: "14px",
          fontFamily: "'Lato', sans-serif",
          alignSelf: "center",
        }}>
        Don't have an account?{" "}
        <StyledLink to={SIGN_UP_ROUTE} component={RouterLink} text="Sign up" />
      </span>
    </StyledContainer>
  );
};

export default LoginForm;
