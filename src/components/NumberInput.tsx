import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputField from "./InputField";
import { currency } from "../utils";
import "./NumberInput.css";

export default function NumberInput({ value, onChange }: INumberInputProps) {
    const [editMode, setEditMode] = useState(false);
    const [currentValue, setValue] = useState(value.toString());
    function handleChange(newValue: string) {
        const parsed = parseFloat(newValue);

        if (isNaN(parsed)) {
            onChange(0);
            setValue("0");
        } else {
            onChange(parsed);
            setValue(parsed.toString());
        }

        setEditMode(false);
    }

    return (
        <>
            {editMode
                ? <InputField value={currentValue} onEnter={handleChange} placeholder="Enter $" onInput={setValue} className="number-input" />
                : <Button variant="link" onClick={() => setEditMode(true)}>
                    {currency(value)}
                </Button>
            }
        </>
    );
}

interface INumberInputProps {
    value: number;
    onChange: (value: number) => void;
}