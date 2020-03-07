import eatData from '../../helpers/data/eatData';
import utils from '../../helpers/util';

const buildFullProg = () => {
  const fullProg = eatData.getFull();
  let domString = '';
  domString += '<h3>EAT</h3>';
  domString += `<p>${fullProg}</p>`;
  domString += '<button id="healthyFoodBtn" class="foodBtn">Carrot</button>';
  domString += '<button id="unhealthyFoodBtn" class="foodBtn">Chocolate Cake</button';
  utils.printToDom('eat', domString);
};

const feedHealthy = () => {
  eatData.addFull();
  buildFullProg();
};

const feedUnhealthy = () => {
  eatData.subFull();
  buildFullProg();
};

export default { buildFullProg, feedHealthy, feedUnhealthy };
