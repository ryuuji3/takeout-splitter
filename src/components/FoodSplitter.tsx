import React, { useContext } from "react";
import { StoreContext } from "../store";
import OrderTable from "./OrderTable";
import { observer } from "mobx-react-lite";
import { currency } from "../utils";

function FoodSplitter() {
    const { orderStore } = useContext(StoreContext);
    const { orders, subtotal, remove, tax, delivery, tip, deliveryPerOrder, calculateTip, calculateTotal, deliveryTotal, total, taxTotal, tipTotal } = orderStore;

    return <div>
        <OrderTable 
            orders={orders} 
            remove={remove} 
            tax={tax} 
            delivery={delivery} 
            tip={tip} 
            deliveryPerOrder={deliveryPerOrder}
            calculateTip={calculateTip}
            changeTax={tax => { orderStore.tax = tax; }}
            changeDelivery={delivery => { orderStore.delivery = delivery; }}
            changeTip={tip => { orderStore.tip = tip; }}
            calculateTotal={calculateTotal}
            sumTotal={subtotal}
            deliveryTotal={deliveryTotal}
            taxTotal={taxTotal}
            tipTotal={tipTotal}
            total={total}
        />
    </div>
}

export default observer(FoodSplitter);