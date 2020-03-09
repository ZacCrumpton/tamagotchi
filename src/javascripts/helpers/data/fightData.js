let str = 100;

const runAway = () => {
  if (str <= 90) {
    str += 10;
  } else (str = 100);
};

const attack = () => {
  if (str >= 2) {
    str -= 2;
  } else (str = 0);
};

const getStr = () => str;

export default { getStr, runAway, attack };
