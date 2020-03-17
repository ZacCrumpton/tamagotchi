import petData from '../../helpers/data/petData';
import utils from '../../helpers/util';

const buildPetImg = () => {
  const petDisplay = petData.getPetImg();
  let domString = '';
  domString += '<h3>RYU</h3>';
  domString += `<img src="${petDisplay}" alt="chibi-ryu">`;
  utils.printToDom('pet', domString);
};

export default { buildPetImg };
