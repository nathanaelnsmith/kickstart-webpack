import Router from 'dom-routing'
import home from './components/Home/home.js'
import './main.scss';

let routes = {
  'common': {
    init() {}
  },
  home
}

let router = Router(routes);
router.load();
