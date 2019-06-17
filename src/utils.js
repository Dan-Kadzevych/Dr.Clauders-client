import Color from 'color';

export const toRgba = color => {
    return (
        Color(color)
            .rgb()
            .array()
            .join(',') + ','
    );
};

export const toDark = color => {
    return Color(color)
        .darken(0.2)
        .hex();
};
