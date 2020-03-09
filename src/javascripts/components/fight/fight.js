import fightData from '../../helpers/data/fightData';
import utils from '../../helpers/util';

const buildFightProg = () => {
  const fightProg = fightData.getStr();
  let domString = '';
  domString += '<h3>Fight</h3>';
  domString += `<p>${fightProg}</p>`;
  domString += '<button id="runAwayBtn" class="fightBtn">Run Away</button>';
  domString += '<button id="attackBtn" class="fightBtn">Shoryuken</button';
  utils.printToDom('fight', domString);
};

const runAwayFunction = () => {
  fightData.runAway();
  buildFightProg();
};

const attackFunction = () => {
  fightData.attack();
  buildFightProg();
};

export default { buildFightProg, runAwayFunction, attackFunction };
