import React, { useContext } from "react";
import { StoreContext } from "../store";
import { observer } from "mobx-react-lite";
import { currency } from "../utils";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NumberInput from "./NumberInput"
import TextInput from "./TextInput"
import "./FoodSplitter.css";

function FoodSplitter() {
    const { orderStore, uiStore } = useContext(StoreContext);
    const { editing, edit, clear } = uiStore;
    const { orders, subtotal: sumTotal, add, tax, remove, calculateDelivery, calculateTip, calculateTotal, deliveryTotal, total, taxTotal, tipTotal } = orderStore;

    return <div>
        <Table className="OrderTable">
            <thead>
                <tr>
                    <th>
                        <Button variant="success" onClick={() => add()}>
                            <i className="fas fa-plus" />
                        </Button>
                    </th>
                    <th>Name</th>
                    <th>Subtotal</th>
                    <th>Delivery
                        <NumberInput value={orderStore.delivery} onChange={newDelivery => { orderStore.delivery = newDelivery }} />
                    </th>
                    <th>Tax
                        <NumberInput value={orderStore.tax} onChange={newTax => { orderStore.tax = newTax }} />
                    </th>
                    <th>Tip
                        <NumberInput value={orderStore.tip} onChange={newTip => { orderStore.tip = newTip }} />
                    </th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => <tr key={order.id}>
                    <td>
                        <Button variant="danger" onClick={() => remove(order.id)}>
                            <i className="fas fa-trash-alt" />
                        </Button>
                    </td>
                    <td>
                        <TextInput value={order.name} onChange={name => { order.name = name; }} placeholder="Enter name" />
                    </td>
                    <td>
                        <NumberInput value={order.total} onChange={total => { order.total = total; }} />
                    </td>
                    <td>{currency(calculateDelivery(order.id))}</td>
                    <td>{currency(order.calculateTax(tax))}</td>
                    <td>{currency(calculateTip(order.id))}</td>
                    <td>{currency(calculateTotal(order.id))}</td>
                </tr>)}
                <tr>
                    <td colSpan={2}></td>
                    <th>{currency(sumTotal)}</th>
                    <th>{currency(deliveryTotal)}</th>
                    <th>{currency(taxTotal)}</th>
                    <th>{currency(tipTotal)}</th>
                    <th>{currency(total)}</th>
                </tr>
            </tbody>
        </Table>
    </div>
}

export default observer(FoodSplitter);