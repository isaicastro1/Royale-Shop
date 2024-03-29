import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearCart } from "../../store/cart/cart.action";

import { BUTTON_TYPE_CLASSES } from "../button/button";

import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
  TestText,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [isProcessingPayment, setisProcessingPayment] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setisProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    if (response.error) {
      setisProcessingPayment(false);
      return alert("There has been an error, please try again");
    }

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setisProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        const orderDetails = JSON.stringify(cartItems);
        const orderTotal = JSON.stringify(cartTotal);

        // Store the string in local storage
        localStorage.setItem("orderDetails", orderDetails);
        localStorage.setItem("orderTotal", orderTotal);
        alert("Payment Successful");
        dispatch(clearCart());
        navigate("/order");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <TestText>
          TEST *Please use 4242 4242 4242 4242 and a future date*
        </TestText>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          disabled={!cartItems.length}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
