import React from "react";
import {act, render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        userEvent.click(checkbox)
        expect(button).toBeEnabled()
        userEvent.click(checkbox)
        expect(button).toBeDisabled()
    })

    test('popover show when hover', async () => {
        render(<SummaryForm />)
        const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
        expect(nullPopover).not.toBeInTheDocument();

        const termsAndConditions = screen.getByText(/terms and conditions/i)
        userEvent.hover(termsAndConditions)
        const popover = screen.queryByText(/no ice cream will actually be delivered/i)
        expect(popover).toBeInTheDocument()

        userEvent.unhover(termsAndConditions)
        await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
        )
    })
})