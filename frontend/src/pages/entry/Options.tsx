import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Scoop} from '../../types'
import {Row} from "react-bootstrap";
import ScoopOptions from "./ScoopOptions";
import ToppingOption from "./ToppingOption";


const Options = ({optionType}: {optionType: 'scoops' | 'toppings'}) => {
    const [items, setItems] = useState<Scoop[]>([])

    useEffect(() => {
        axios.get<Scoop[]>(`http://localhost:3030/${optionType}`)
            .then((response) => {
                setItems(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [optionType])

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