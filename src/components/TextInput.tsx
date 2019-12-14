import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputField from "./InputField";
import "./TextInput.css";

export default function TextInput({ placeholder, value, onChange }: ITextInputProps) {
    const [editMode, setEditMode] = useState(false);
    const [currentValue, setValue] = useState(value);
    function handleChange(newValue: string) {
        onChange(newValue);
        setValue(newValue);
        setEditMode(false);
    }

    return (
        <>
            {editMode
                ? <InputField value={currentValue} onEnter={handleChange} placeholder={placeholder} onInput={setValue} className="text-input" />
                : <Button variant="link" onClick={() => setEditMode(true)}>
                    {value}
                </Button>
            }
        </>
    );
}

interface ITextInputProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}