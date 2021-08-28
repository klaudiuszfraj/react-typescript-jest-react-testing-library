import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe('SummaryForm', () => {
    test('initial render', () => {
        render(<SummaryForm />)
        const button = screen.getByRole("button", {name: /confirm order/i});
        const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
        expect(button).toBeDisabled()
        expect(checkbox).not.toBeChecked();
    })

    test('clicking checkbox enables/disables button', () => {
        render(<SummaryForm />)
        const button = screen.getByRole("button", {name: /confirm order/i});
        const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()
        fireEvent.click(checkbox)
        expect(button).toBeDisabled()
    })
})