import {render, RenderOptions} from "@testing-library/react";
import {OrderDetailsProvider} from "../contexts/OrdearDetails";

const renderWithContext = (ui: JSX.Element, options?: RenderOptions) =>
    render(ui, { wrapper: OrderDetailsProvider, ...options})

//re-exports
export * from '@testing-library/react';
export { renderWithContext as render}