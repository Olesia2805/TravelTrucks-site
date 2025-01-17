import style from './Container.module.css';
import clsx from 'clsx';

const Container = ({ children, className }) => {
  const containerClassName = clsx(className, {
    // [style.example]: className === 'example',
    [style.navContainer]: className === 'navContainer',
    [style.container]: true,
  });
  return <div className={containerClassName}>{children}</div>;
};

export default Container;
