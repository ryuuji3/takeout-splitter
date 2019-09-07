import React, { useContext } from "react";
import { StoreContext } from "../store";
import OrderTable from "./OrderTable";

function FoodSplitter() {
    const { orderStore } = useContext(StoreContext);
    const { orders, subtotal } = orderStore;

    return <div>
        <OrderTable orders={orders} />
        <p>
            Subtotal: { subtotal }
        </p>
    </div>
}

export default FoodSplitter;