const uppercase = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

const padding = (n) => (n < 10 ? "0" + n : n);

const precision = (num) => Math.floor(num);

export default {
  uppercase,
  padding,
  precision,
};
