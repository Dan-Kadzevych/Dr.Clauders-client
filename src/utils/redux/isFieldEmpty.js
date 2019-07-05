const isEmptyString = value => value === '';

const isEmptyArrayOrObject = value =>
    !(value instanceof Set) &&
    (typeof value === 'object' &&
        value !== null &&
        !Object.keys(value)
            .map(key => value[key])
            .filter(val => !isFieldEmpty(val)).length);

const isFieldEmpty = value =>
    value == null || isEmptyString(value) || isEmptyArrayOrObject(value);

export default isFieldEmpty;
