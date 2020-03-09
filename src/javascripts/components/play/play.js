import playData from '../../helpers/data/playData';
import utils from '../../helpers/util';

const buildPlayProg = () => {
  const playProg = playData.getPlay();
  let domString = '';
  domString += '<h3>PLAY</h3>';
  domString += `<p>${playProg}</p>`;
  domString += '<button id="mostFunBtn" class="playBtn">Throw Ball</button>';
  domString += '<button id="leastFunButton" class="playBtn">Give Chew Toy</button';
  utils.printToDom('play', domString);
};

const mostFun = () => {
  playData.funActivity();
  buildPlayProg();
};

const leastFun = () => {
  playData.lessFunActivity();
  buildPlayProg();
};

export default { buildPlayProg, mostFun, leastFun };
