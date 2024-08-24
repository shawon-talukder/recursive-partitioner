import PropTypes from 'prop-types';

const Button = ({ label, handleClick, isDisabled, classes }) => {
    const className = `px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ${classes} disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-700 `
    
    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isDisabled}
            className={className}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    classes: PropTypes.string
};

export default Button