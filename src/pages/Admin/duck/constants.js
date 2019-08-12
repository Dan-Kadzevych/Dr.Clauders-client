export const petOptions = [
    {
        value: 1,
        label: 'Собакам'
    },
    {
        value: 2,
        label: 'Кошкам'
    }
];

export const categoryInitialValues = {
    name: '',
    slug: '',
    parent: { value: 0, label: 'Нет' },
    pet: null
};

export const productInitialValues = {
    title: '',
    slug: '',
    category: null,
    description: '',
    tabs: null
};
