import {createContext, useContext, useState, useMemo, useEffect, ProviderProps} from "react";
import {pricePerItem} from "../constants";

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount)
}

const OrderDetails = createContext([
    {
        totals: {
            scoops: 0,
            toppings: 0
        }
    }])

export const useOrderDetails = () => {
    const context = useContext(OrderDetails)
    // if (context) {
    //     throw new Error('useOrderDetails must be used with an OrderDetailsProvider')
    // }
    return context
}
const calculateSubtotal = (optionType: 'scoops' | 'toppings', optionCounts: { scoops: Map<any, any>; toppings: Map<any, any>; }) => {
    let optionCount = 0
    // @ts-ignore
    for (const count of optionCounts[optionType].values()) {
        optionCount += count
    }
    return optionCount * pricePerItem[optionType]
}

export const OrderDetailsProvider = (props: JSX.IntrinsicAttributes & ProviderProps<never[]>) => {
    const [optionCounts, setOptionCounts] = useState({
        scoops: new Map(),
        toppings: new Map(),
    })
    const [totals, setTotals] = useState({
        scoops: formatCurrency(0),
        toppings: formatCurrency(0),
        grandTotal: formatCurrency(0)
    })


    useEffect(() => {
        const scoopSubtotal = calculateSubtotal('scoops', optionCounts)
        const toppingsSubtotal = calculateSubtotal('toppings', optionCounts)
        const grandTotal = scoopSubtotal + toppingsSubtotal
        setTotals({
            scoops: formatCurrency(scoopSubtotal),
            toppings: formatCurrency(toppingsSubtotal),
            grandTotal: formatCurrency(grandTotal)
        })
    }, [optionCounts])

    const value = useMemo(() => {
        function updateItemCount(itemName: string, newItemCount: string, optionType: 'scoops' | 'toppings') {
            const newOptionCounts = {...optionCounts}

            const optionCountsMap = optionCounts[optionType];
            optionCountsMap.set(itemName, parseInt(newItemCount))

            setOptionCounts(newOptionCounts)
        }

        return [{...optionCounts, totals}, updateItemCount]
    }, [optionCounts, totals])
    return <OrderDetails.Provider value={value} {...props} />
}


