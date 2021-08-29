import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Scoop} from '../../types'
import {Row} from "react-bootstrap";
import ScoopOptions from "./ScoopOptions";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import {pricePerItem} from "../../constants";
import {useOrderDetails} from "../../contexts/OrdearDetails";

const Options = ({optionType}: { optionType: 'scoops' | 'toppings' }) => {
    const [items, setItems] = useState<Scoop[]>([])
    const [error, setError] = useState(false)
    const [orderDetails, updateItemCount] = useOrderDetails()
    useEffect(() => {
        axios.get<Scoop[]>(`http://localhost:3030/${optionType}`)
            .then((response) => {
                setItems(response.data)
            })
            .catch(error => {
                setError(true)
            })
    }, [optionType])

    if (error) {
        return <AlertBanner/>
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption
    //todo:: add regex
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()
    const optionsItems = items.map(item =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateItemCount={(itemName, newItemCount) => {
                updateItemCount(itemName, newItemCount, optionType)
            }
            }
        />)

    return (
        <>
            <h2>{title}</h2>
            <p>{pricePerItem[optionType]} each</p>
            <p>{title} total: {orderDetails.totals[optionType]}</p>
            <Row>{optionsItems}</Row>
        </>
    );
};

export default Options;