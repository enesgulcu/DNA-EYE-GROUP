import * as React from 'react';

export const EmailTemplate = ({ name, expDate, brand, phoneNumber, email, message }) => (
    <div>
        <p>From Web, Contact Form:</p>
        <p>Name: {name},</p>
        {expDate && <p>Expiration Date: {expDate}</p>}
        {brand && <p>Brand: {brand},</p>}
        <p>Phone Number: {phoneNumber},</p>
        <p>Email: {email},</p>
        <p>message: {message}</p>
    </div>
);
