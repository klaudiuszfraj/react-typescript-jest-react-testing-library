import { rest } from "msw";

export const handlers = [
    rest.get('http://localhost:3030/scoops', ((req, res, context) => {
        return res(
            context.json([
                {name: 'Chocolate', imagePath: 'images.chocolate.png'},
                {name: 'Vanilla', imagePath: 'images.vanilla.png'}
            ])
        )
    })),
    rest.get('http://localhost:3030/toppings', ((req, res, context) => {
        return res(
            context.json([
                {name: 'Chocolate', imagePath: 'images.chocolate.png'},
                {name: 'M&Ms', imagePath: 'images.mm.png'},
                {name: 'Hot fudge', imagePath: 'images.hot-fudge.png'}
            ])
        )
    }))
]