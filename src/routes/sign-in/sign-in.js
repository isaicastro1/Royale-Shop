import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
  useEffect(() => {
    getRedirectResult(auth).then((response) => {
      if (response) {
        console.log(response);
      }
    });
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
