import SignupForm from "../components/SignupForm";
import {useState} from "react";
import SocialLoginPage from "../components/SocialLoginPage";
import Container from "@mui/material/Container";


const Signup = () => {

    const [showSignUpForm, setShowSignUpForm] = useState(false);

    return (
        <Container>
            {showSignUpForm ? <SignupForm/> : <SocialLoginPage setShowSignUpForm={setShowSignUpForm}/>}
        </Container>
    );
}

export default Signup;