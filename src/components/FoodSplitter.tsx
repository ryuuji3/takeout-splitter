import React, { useContext } from "react";
import { StoreContext } from "../store";
import OrderTable from "./OrderTable";
import { observer } from "mobx-react-lite";

function FoodSplitter() {
    const { orderStore } = useContext(StoreContext);
    const { orders, subtotal, add, remove, tax, delivery, tip, calculateDelivery, calculateTip, calculateTotal, deliveryTotal, total, taxTotal, tipTotal } = orderStore;

    return <div>
        <OrderTable 
            orders={orders} 
            add={add}
            remove={remove} 
            tax={tax} 
            delivery={delivery} 
            tip={tip} 
            calculateDelivery={calculateDelivery}
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