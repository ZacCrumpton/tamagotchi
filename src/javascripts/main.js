import '../styles/main.scss';
import eat from './components/eat/eat';
import fun from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

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
  sleep.buildSleepProg();
  $('body').on('click', '#napBtn', sleep.napFunction);
  $('body').on('click', '#deepSleepBtn', sleep.deepSleepFunction);
};

init();
