import '../styles/main.scss';
import eat from './components/eat/eat';

const init = () => {
  eat.buildFullProg();
  $('body').on('click', '#healthyFoodBtn', eat.feedHealthy);
  $('body').on('click', '#unhealthyFoodBtn', eat.feedUnhealthy);
};

init();
