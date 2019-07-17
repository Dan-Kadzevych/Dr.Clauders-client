export const normalizeDeliveryOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name,
        placeholder: el.ID === 1 ? 'Выберите отделение' : 'Выберите улицу',
        type: el.ID === 2 && 'street',
        needAddress: true
    }));

export const normalizePaymentOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name
    }));
