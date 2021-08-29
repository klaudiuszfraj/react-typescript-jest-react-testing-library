import {render, screen, waitFor} from "../../../test-utils/test-utils";
import OrderEntry from "../OrderEntry";
import {rest} from "msw";
import {server} from "../../../mocks/server";


test('handles error  for scoops and toppings routers', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', ((req, res, context) => {
            return res(context.status(500))
        })),
        rest.get('http://localhost:3030/toppings', ((req, res, context) => {
            return res(context.status(500))
        })),
    )

    render(<OrderEntry/>)

    await waitFor(async () => {
        const alerts = await screen.findAllByRole('alert')
        expect(alerts).toHaveLength(2)
    })

})