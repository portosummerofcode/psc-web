import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { AUTHENTICATE } from "mutations";
import { useCurrentUser } from "hooks";

import { handleGraphQLErrors } from "lib/graphql";


//
// Components
import {
  Field,
  Form,
  Heading,
  Link,
  Section,
  P,
} from "components/2020/uikit";

//
// Validation
// import { composeValidators, validatePresence, validateEmail } from "validators";
import { validatePresence, validateEmail } from "validators";

export const Login = () => {
  const history = useHistory();

  const { refetch } = useCurrentUser();
  const [authenticate] = useMutation(AUTHENTICATE);

  const submit = ({ email, password }) => {
    return authenticate({ variables: { email: email.trim().toLowerCase(), password }})
      .then((response) => localStorage.setItem("jwt", response.data.authenticate))
      .then(refetch)
      .then(() => {
        history.push("/dashboard");
        return null;
      })
      .catch(handleGraphQLErrors);
  };
  // const submit = (a,b,c,d) => console.log(a,b,c,d);

  return (
    <Section background="white" center>
      <Heading size="xl" color="purple" centered>
        Sign In
      </Heading>

      <Form
        onSubmit={submit}
        submitLabel="Sign In"
        initialValues={{ email: "", password: "" }}
      >
        <Field
          label="Email"
          name="email"
          placeholder="Email"
          type="text"
          validate={validateEmail}
        />

        <Field
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          validate={validatePresence}
        />
      </Form>

      <P additional>
        Don't have an account? <Link to="/signup">Sign up</Link>
        <br />
        Forgot your password? <Link to="/recover-password">Recover it</Link>
      </P>
    </Section>
  );
};

export default Login;
// export default compose(
//   withCurrentUser,
//
//   graphql(
//     gql`mutation authenticate($email: String!, $password: String!) {
//       authenticate(email: $email, password: $password)
//     }`,
//     { name: "authenticate" },
//   ),
// )(Login);
