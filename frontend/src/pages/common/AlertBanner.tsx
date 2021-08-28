import React from 'react';
import {Alert} from "react-bootstrap";

type Props = {
    message?: string
    variant?: string
}

const AlertBanner = ({message, variant}:Props) => {
    const alertMessage = message || 'An unexpected error occurred. Please try again later.'
    const alertVariant = variant || 'danger'
    return (
        <Alert
            variant={alertVariant}
            style={{backgroundColor: 'red'}}
        >
            {alertMessage}
        </Alert>);
};

export default AlertBanner;