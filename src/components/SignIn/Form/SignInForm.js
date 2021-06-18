import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../../../store/action/isLoggedIn";
import { Input, Button } from "../../InputField/InputField";

const SignInForm = () => {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  const onSubmit = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target).entries());

    let isExist = users.some((e) => e.email === data.email);
    if (isExist) {
      dispatch(isLoggedIn());
    }
  };

  return (
    <section className="sign-up__form" onSubmit={onSubmit}>
      <form id="login-submit">
        <Input
          field={{ _uid: "email", label: "Email" }}
          type="email"
          required="required"
        />
        <Input
          field={{ _uid: "password", label: "Password" }}
          type="password"
          required="required"
          placeholder="Must be at least 6 characters"
        />
        <Button className="sign-up__button" type="submit" value="Sign In" />
      </form>
    </section>
  );
};

export default SignInForm;
