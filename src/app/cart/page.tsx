import React from "react";
import Container from "@/components/container/Container";
import Summary from "./components/summary/Summary";
import TableRow from "./components/tableRow/TableRow";

const Cart = () => {
  return (
    <main>
      <section className="w-full min-h-screen pt-20">
        <Container>
          <div className="py-10">
            <h1 className="mb-5 text-3xl font-semibold">Shopping Cart</h1>
            <div className="flex gap-5">
              <div className="flex-[4]">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow />
                  </tbody>
                </table>
              </div>
              <Summary />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Cart;
