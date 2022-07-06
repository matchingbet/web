import SignupForm from "../components/SignupForm";
import {useState} from "react";
import SocialLogin from "../components/SocialLogin";
import Container from "@mui/material/Container";


const Signup = () => {

    const [showSignUpForm, setShowSignUpForm] = useState(false);

    return (
        <Container>
            {showSignUpForm ? <SignupForm/> : <SocialLogin setShowSignUpForm={setShowSignUpForm}/>}
        </Container>
    );
}

export default Signup;