import React, { useContext } from "react";
import { StoreContext } from "../store";
import { observer } from "mobx-react-lite";
import { currency } from "../utils";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./FoodSplitter.css";

function FoodSplitter() {
    const { orderStore, uiStore } = useContext(StoreContext);
    const { editing, edit, clear } = uiStore;
    const { orders, subtotal: sumTotal, add, remove, tax, delivery, tip, calculateDelivery, calculateTip, calculateTotal, deliveryTotal, total, taxTotal, tipTotal } = orderStore;

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
                    <Button variant="link">(${delivery})</Button>
                    </th>
                    <th>Tax
                    <Button variant="link">({tax}%)</Button>
                    </th>
                    <th>Tip
                    <Button variant="link">({tip}%)</Button>
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
                        <Button variant="link" onClick={() => edit(order.id)}>
                            {order.name}
                        </Button>
                    </td>
                    <td>
                        <Button variant="link">
                            {currency(order.total)}
                        </Button>
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