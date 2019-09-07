import React, { useContext } from "react";
import { StoreContext } from "../store";
import { observer } from "mobx-react-lite";
import { currency } from "../utils";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./FoodSplitter.css";

function FoodSplitter() {
    const { orderStore } = useContext(StoreContext);
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
                {orders.map(({ id, name, total: subtotal, calculateTax }) => <tr key={id}>
                    <td>
                        <Button variant="danger" onClick={() => remove(id)}>
                            <i className="fas fa-trash-alt" />
                        </Button>
                    </td>
                    <td>
                        <Button variant="link">
                            {name}
                        </Button>
                    </td>
                    <td>
                        <Button variant="link">
                            {currency(subtotal)}
                        </Button>
                    </td>
                    <td>{currency(calculateDelivery(id))}</td>
                    <td>{currency(calculateTax(tax))}</td>
                    <td>{currency(calculateTip(id))}</td>
                    <td>{currency(calculateTotal(id))}</td>
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