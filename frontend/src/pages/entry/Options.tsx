import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOptions from "./ScoopOptions";
import {Scoops} from '../../types'
import {Row} from "react-bootstrap";


const Options = ({optionType}: {optionType: 'scoops' | 'toppings'}) => {
    const [items, setItems] = useState<Scoops[]>([])

    useEffect(() => {
        axios.get<Scoops[]>(`http://localhost:3030/${optionType}`)
            .then((response) => {
                setItems(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [optionType])

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : null

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