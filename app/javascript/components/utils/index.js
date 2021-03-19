export const dateFormatter = (date) => `${date.split(/(T|\.)/)[0].split("-").reverse().join("-")}`;

export const datetimeFormat = (date) =>`${date.split(/(T|\.)/)[2]} ${date.split(/(T|\.)/)[0].split("-").reverse().join("-")}`;