import React from "react";
import Order from "../store/models/Order";
import Table from "react-bootstrap/Table";
import "./OrderTable.css";

interface TableProps {
    orders: Array<Order>
    remove: (id: string) => void
}

export default function OrderTable({ orders, remove }: TableProps) {
    return <Table className="OrderTable">
        <thead>
            <tr>
                <th colSpan={2}>Name</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            { orders.map(({ id, name, total }) => <tr key={id}>
                <td>
                    <a href="#" onClick={() => remove(id)}>Remove</a>
                </td>
                <td>{name}</td>
                <td>{total}</td>
            </tr>)}
        </tbody>
    </Table>
}