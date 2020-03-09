let energy = 50;

const nap = () => {
  if (energy <= 50) {
    energy += 50;
  } else (energy = 100);
};

const deepSleep = () => {
  if (energy <= 40) {
    energy += 60;
  } else (energy = 100);
};

const getEnergy = () => energy;

export default { nap, deepSleep, getEnergy };
