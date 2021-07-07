// Test away!
import React from "react"
import {fireEvent, render} from "@testing-library/react";
import Controls from "./Controls";

test('Controls renders successfully', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
})

// checks if toggleClose will run onClick
test('Closes gate on click', () => {
    const toggleClosedMock = jest.fn();
    const {getByText} = render(<Controls toggleClosed={toggleClosedMock} />);
    const closeGate = getByText(/close gate/i);
    fireEvent.click(closeGate);
    expect(toggleClosedMock).toHaveBeenCalled();
});

// checks if toggleLock will run onClick. The closed attribute must be set equal to true for this to run
test('Locks gate on click', () => {
   const toggleLockedMock = jest.fn();
   const {getByText} = render(<Controls closed={true} toggleLocked={toggleLockedMock} />);
   const lockGate = getByText(/lock gate/i);
   fireEvent.click(lockGate);
   expect(toggleLockedMock).toHaveBeenCalled();
});

// Checks if locked is disabled when the gate is open
test('Lock Gate is disabled when gate is open', () => {
    const {getByText} = render(<Controls />);
    expect(getByText(/lock gate/i).disabled).toEqual(true);
})

// Checks if open gate is disabled, when gate is locked. Closed has to also be equal to true for this test to run
test('Open Gate is disabled, while locked is true', () => {
    const {getByText} = render(<Controls locked={true} closed={true} />);
    expect(getByText(/open gate/i).disabled).toEqual(true);
});