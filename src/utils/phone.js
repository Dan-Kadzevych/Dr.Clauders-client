import IMask from 'imask';

const maskOptions = {
    mask: '+{38} (000) 000-00-00'
};

export const normalizePhone = value => {
    return value.replace(/[_ ()-]/g, '');
};

export const formatPhone = value => {
    const masked = IMask.createMask(maskOptions);

    return masked.resolve(value);
};
