// Test away!
import React from "react"
import {render} from "@testing-library/react";
import Display from "./Display";

test('Display renders successfully', () => {
    render(<Display />)
});

test('Closed if close prop is true', () => {
    const container = render(<Display closed={true} />);
    container.getByText(/closed/i);
});

test('Open if close prop is false', () => {
    const container = render(<Display closed={false} />);
    container.getByText(/open/i);
});

test('Locked if lock prop is true', () => {
    const container = render(<Display locked={true} />);
    container.getByText(/locked/i);
});

test('Unlocked if lock prop is false', () => {
    const container = render(<Display locked={false} />);
    container.getByText(/unlocked/i);
});

test('Checks if className is red-led when gate is closed', () => {
    const container = render(<Display closed={true} />);
    container.getByTestId(/red-led/i);
});

test('Checks if className is red-led when gate is locked', () => {
    const container = render(<Display locked={true} />);
    container.getByTestId(/red-led/i);
});

test('Checks if className is green-led when gate is open', () => {
    const container = render(<Display closed={false} />);
    container.getAllByTestId(/green-led/i);
});

test('Checks if className is green-led when gate is open', () => {
    const container = render(<Display locked={false} />);
    container.getAllByTestId(/green-led/i);
});