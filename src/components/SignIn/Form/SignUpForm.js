import { useDispatch } from "react-redux";
import { addUser } from "../../../store/action/addUser";
import { Input, Button } from "../../InputField/InputField";

const SignUpForm = ({setSuccessSignUp}) => {
  let dispatch = useDispatch();

  const SignUpFunction = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target).entries());
    
    if (localStorage.getItem("users")) {
      let index = JSON.parse(localStorage.getItem("users")).findIndex(
        (e) => e.email === data.email
      );
      if (index < 0) {
        dispatch(addUser(data));
        setSuccessSignUp(true);
      } else {
        let tooltip = document.createElement("span");
        tooltip.innerText = "Email is already in use.";
        ["sign-up__invalid-feedback", "sign-up__invalid-feedback--show"].map(
          (e) => tooltip.classList.add(e)
        );
        if (!document.querySelector(".sign-up__invalid-feedback")) {
          e.target
            .querySelector(`input[type='email']`)
            .parentElement.classList.toggle("sign-up__input-group--error");
          e.target
            .querySelector(`input[type='email']`)
            .parentElement.appendChild(tooltip);
        }
        e.target.querySelector(`input[type='email']`).style.border =
          "1px solid red";
      }
    } else {
      dispatch(addUser(data));
      setSuccessSignUp(true);
    }
  };

  return (
    <section className="sign-up__form">
      <form id="sign-up-submit" onSubmit={SignUpFunction}>
        <Input
          field={{ _uid: "fullname", label: "Full Name" }}
          type="text"
          required="required"
        />
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
        <Input
          field={{
            _uid: "updates",
            label: "Sign up for email updates",
          }}
          type="checkbox"
          className="sign-up__chkbox-label"
        />
        <Button className="sign-up__button" type="submit" value="Sign Up" />
      </form>
    </section>
  );
};

export default SignUpForm;
