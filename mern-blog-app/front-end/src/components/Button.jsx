import PropTypes from "prop-types";

const Button = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
