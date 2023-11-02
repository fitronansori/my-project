import PropTypes from "prop-types";

const Button = ({ label, className, type }) => {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
