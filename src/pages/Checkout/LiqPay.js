import React from 'react';

export const LiqPay = ({ SubmitBtn, data, signature }) => {
    return (
        <form
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            acceptCharset="utf-8"
        >
            <input type="hidden" name="data" value={data} />
            <input type="hidden" name="signature" value={signature} />
            <SubmitBtn />
        </form>
    );
};
