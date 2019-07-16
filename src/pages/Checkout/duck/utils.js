export const normalizeDeliveryOptions = byID =>
    Object.values(byID).map(el => ({ value: el.ID, label: el.name }));
