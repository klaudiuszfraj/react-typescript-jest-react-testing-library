import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Scoop} from '../../types'
import {Row} from "react-bootstrap";
import ScoopOptions from "./ScoopOptions";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

const Options = ({optionType}: {optionType: 'scoops' | 'toppings'}) => {
    const [items, setItems] = useState<Scoop[]>([])
    const [error, setError] = useState(false)

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
        return <AlertBanner />
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption

    const optionsItems = items.map(item =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />)

    return (
        <Row>
            {optionsItems}
        </Row>
    );
};

export default Options;