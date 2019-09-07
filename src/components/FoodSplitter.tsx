import React, { useContext } from "react";
import { StoreContext } from "../store";
import OrderTable from "./OrderTable";
import { observer } from "mobx-react-lite";

function FoodSplitter() {
    const { orderStore } = useContext(StoreContext);
    const { orders, subtotal, remove } = orderStore;

    return <div>
        <OrderTable orders={orders} remove={remove} />
        <p>
            Subtotal: { subtotal }
        </p>
    </div>
}

export default observer(FoodSplitter);