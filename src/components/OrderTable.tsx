import React from "react";
import Order from "../store/models/Order";
import Table from "react-bootstrap/Table";
import "./OrderTable.css";

interface TableProps {
    orders: Array<Order>
}

export default function OrderTable({ orders }: TableProps) {
    return <Table className="OrderTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            { orders.map(({ id, name, total }) => <tr key={id}>
                <td>{name}</td>
                <td>{total}</td>
            </tr>)}
        </tbody>
    </Table>
}