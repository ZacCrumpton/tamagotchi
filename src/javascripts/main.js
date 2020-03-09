import '../styles/main.scss';
import eat from './components/eat/eat';
import fun from './components/play/play';

const init = () => {
  eat.buildFullProg();
  $('body').on('click', '#healthyFoodBtn', eat.feedHealthy);
  $('body').on('click', '#unhealthyFoodBtn', eat.feedUnhealthy);
  fun.buildPlayProg();
  $('body').on('click', '#mostFunBtn', fun.mostFun);
  $('body').on('click', '#leastFunBtn', fun.leastFun);
};

init();
