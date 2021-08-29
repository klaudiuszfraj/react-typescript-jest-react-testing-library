export type Scoop = {
    name: string
    imagePath: string
    updateItemCount: (name:string, event:string) => void
}
export type Topping = {
    name: string
    imagePath: string
}