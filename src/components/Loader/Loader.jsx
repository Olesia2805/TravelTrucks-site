import { treadmill } from 'ldrs';
import loaderCss from './Loader.module.css';

const Loader = () => {
  treadmill.register();

  return (
    <div className={loaderCss.loaderWrapper}>
      <l-treadmill size="300" speed="2.5" color="#e44848"></l-treadmill>
    </div>
  );
};

export default Loader;
