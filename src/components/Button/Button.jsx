import btnCss from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, className, onClick, type = 'submit' }) => {
  const btnClassName = clsx(className, {
    // [btnCss.example]: className === 'example',
    [btnCss.home]: className === 'home',
    [btnCss.search]: className === 'search',
    [btnCss.picture]: className === 'picture',
    [btnCss.loadMore]: className === 'loadMore',
    [btnCss.submitForm]: className === 'submitForm',
    [btnCss.btn]: true,
  });
  return (
    <button className={btnClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
