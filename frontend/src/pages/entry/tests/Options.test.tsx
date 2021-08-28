import {render, screen} from "@testing-library/react";

import Options from "../Options";

test('displays image for each scoop from server', async() => {
    render(<Options optionType={'scoops'} /> )

    const scoopsImage = await screen.findAllByRole('img', {name: /scoop$/i})
    expect(scoopsImage).toHaveLength(2)

    // @ts-ignore
    const altText = scoopsImage.map(element => element.alt)
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('displays image for each topping from server', async() => {
    render(<Options optionType={'toppings'} /> )

    const toppingImage = await screen.findAllByRole('img', {name: /topping$/i})
    expect(toppingImage).toHaveLength(3)

    // @ts-ignore
    const altText = toppingImage.map(element => element.alt)
    expect(altText).toEqual(['Chocolate topping', 'M&Ms topping', 'Hot fudge topping'])
})