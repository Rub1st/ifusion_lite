export const dateFormatter = (date) => `${date.split(/(T|\.)/)[0].split("-").reverse().join("-")}`;