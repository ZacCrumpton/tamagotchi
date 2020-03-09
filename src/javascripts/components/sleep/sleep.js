import sleepData from '../../helpers/data/sleepData';
import utils from '../../helpers/util';

const buildSleepProg = () => {
  const sleepProg = sleepData.getEnergy();
  let domString = '';
  domString += '<h3>Sleep</h3>';
  domString += `<p>${sleepProg}</p>`;
  domString += '<button id="napBtn" class="sleepBtn">Nap</button>';
  domString += '<button id="deepSleepBtn" class="sleepBtn">Deep Slumber</button';
  utils.printToDom('sleep', domString);
};

const napFunction = () => {
  sleepData.nap();
  buildSleepProg();
};

const deepSleepFunction = () => {
  sleepData.deepSleep();
  buildSleepProg();
};

export default { buildSleepProg, napFunction, deepSleepFunction };
