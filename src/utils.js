import Color from 'color';

export const toRgba = color => {
    return (
        Color(color)
            .rgb()
            .array()
            .join(',') + ','
    );
};
