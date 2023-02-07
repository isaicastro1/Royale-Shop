import {
  OrderContainer,
  OrderSummary,
  OrderItems,
  OrderItem,
  ItemDetails,
  Quantity,
  Total,
} from "./order.styles";

const Order = () => {
  const storedOrderDetails = localStorage.getItem("orderDetails");
  const storedOrderTotal = localStorage.getItem("orderTotal");

  // Convert the string back into an array
  const orderDetailsArray = JSON.parse(storedOrderDetails);
  const orderTotal = JSON.parse(storedOrderTotal);

  return (
    <OrderContainer>
      <OrderSummary>
        <h2>THANK YOU FOR YOUR ORDER!</h2>
        <p>We'll send you a confirmation email once your order has shipped!</p>
        <OrderItems>
          {orderDetailsArray &&
            orderDetailsArray.map((item) => {
              return (
                <OrderItem key={item.id}>
                  <Quantity>
                    <h3>x{item.quantity}</h3>
                    <img
                      src={item.imageUrl}
                      style={{ width: "100px" }}
                      alt={item.name}
                    />
                  </Quantity>
                  <ItemDetails>
                    <h3 style={{ textAlign: "center", margin: 0 }}>
                      {item.name}
                    </h3>
                    <span>${item.price}</span>
                  </ItemDetails>
                </OrderItem>
              );
            })}
        </OrderItems>
        <Total>
          <h3 style={{ margin: 0 }}>Total:</h3>
          <h3 style={{ margin: 0 }}>${orderTotal}</h3>
        </Total>
      </OrderSummary>
    </OrderContainer>
  );
};

export default Order;
