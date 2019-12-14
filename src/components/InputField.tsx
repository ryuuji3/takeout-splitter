import React, { KeyboardEventHandler, FocusEventHandler } from 'react';

const ENTER_KEY = 13;

export interface IInputFieldProps extends IInputFieldEventHandlers {
    placeholder: string;
    value: string;
    className: string;
};

export interface IInputFieldEventHandlers {
    onEnter: (value: string) => void;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onInput?: (value: string) => void;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, value: string, { onKeyDown, onEnter }: IInputFieldEventHandlers) => {
    if (onKeyDown) {
        onKeyDown(e);
    }

    if (e.keyCode !== ENTER_KEY) {
        return;
    }

    e.preventDefault();

    const trimmed = value.trim();

    if (trimmed) {
        onEnter(trimmed);
    }
}

const handleFocus = (e: React.FocusEvent<HTMLInputElement>, { onFocus }: IInputFieldEventHandlers) => {
    if (onFocus) {
        onFocus(e);
    }
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, { onInput }: IInputFieldEventHandlers) => {
    if (onInput) {
        onInput(e.target.value);
    }
}

const handleBlur = (e: React.FocusEvent<HTMLInputElement>, { onBlur }: IInputFieldEventHandlers) => {
    if (onBlur) {
        onBlur(e);
    }
}

function InputField({ placeholder, value, className, ...handlers }: IInputFieldProps) {
    return <input
        className={className}
        value={value}
        placeholder={placeholder}
        onKeyDown={e => handleKeyDown(e, value, handlers)}
        onFocus={e => handleFocus(e, handlers)}
        onChange={e => handleChange(e, handlers)}
        onBlur={e => handleBlur(e, handlers)}
        autoFocus={true}
    />;
}

export default InputField;