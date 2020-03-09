import '../styles/main.scss';
import eat from './components/eat/eat';
import fun from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  eat.buildFullProg();
  $('body').on('click', '#healthyFoodBtn', eat.feedHealthy);
  $('body').on('click', '#unhealthyFoodBtn', eat.feedUnhealthy);
  fun.buildPlayProg();
  $('body').on('click', '#mostFunBtn', fun.mostFun);
  $('body').on('click', '#leastFunBtn', fun.leastFun);
  fight.buildFightProg();
  $('body').on('click', '#runAwayBtn', fight.runAwayFunction);
  $('body').on('click', '#attackBtn', fight.attackFunction);
};

init();
