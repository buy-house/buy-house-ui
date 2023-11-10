import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import useAuth from "../../auth/useAuth";

import StyledTextField from "../../styled/StyledTextField";
import StyledContainer from "../../styled/StyledContainer";
import StyledButton from "../../styled/StyledButton";
import StyledLink from "../../styled/StyledLink";
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from "../../app/Routes";

const SignUpForm = () => {
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
      <h3 style={{ color: "#172234" }}>Sign Up</h3>

      <StyledTextField
        label="First Name"
        placeholder="First Name"
        register={{
          ...register("firstName", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 3,
              message: "Min length is 3 symbols!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        // helperText={errors?.lastName ? errors.lastName.message : " "}
        // err={!!errors?.lastName}
      />

      <StyledTextField
        label="Last Name"
        placeholder="Last Name"
        register={{
          ...register("lastName", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 3,
              message: "Min length is 3 symbols!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        // helperText={errors?.lastName ? errors.lastName.message : " "}
        // err={!!errors?.lastName}
      />

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

      <StyledButton
        variant="contained"
        type="submit"
        text="Sign up"
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
        Already have an account?{" "}
        <StyledLink to={LOGIN_ROUTE} component={RouterLink} text="Sign in" />
      </span>
    </StyledContainer>
  );
};

export default SignUpForm;
