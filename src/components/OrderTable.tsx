import React, { SyntheticEvent } from "react";
import Order, { IOrder } from "../store/models/Order";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./OrderTable.css";
import { currency } from "../utils";

interface TableProps {
    orders: Array<Order>;
    add: (order?: IOrder) => Order;
    remove: (id: string) => void;
    tax: number;
    delivery: number;
    tip: number;
    changeTax: (tax: number) => void;
    changeTip: (tip: number) => void;
    changeDelivery: (delivery: number) => void;
    calculateDelivery: (id: string) => number;
    calculateTotal: (id: string) => number;
    calculateTip: (id: string) => number;
    sumTotal: number;
    deliveryTotal: number;
    taxTotal: number;
    tipTotal: number;
    total: number;
}

export default function OrderTable({ orders, add, remove, tax, delivery, tip, calculateTip, calculateTotal, calculateDelivery, sumTotal, deliveryTotal, taxTotal, tipTotal, total }: TableProps) {
    return <Table className="OrderTable">
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
            { orders.map(({ id, name, total: subtotal, calculateTax }) => <tr key={id}>
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
                <th>{ currency(sumTotal) }</th>
                <th>{ currency(deliveryTotal) }</th>
                <th>{ currency(taxTotal)}</th>
                <th>{ currency(tipTotal)}</th>
                <th>{ currency(total)}</th>
            </tr>
        </tbody>
    </Table>
}