// components/Button.js
import styles from '../app/page.module.css';

const Button = ({ label, onClick, className = '' }) => {
    // Combina a classe base 'button' com qualquer classe extra (ex: 'operator')
    const finalClassName = `${styles.button} ${className}`;

    return (
        <button onClick={() => onClick(label)} className={finalClassName}>
            {label}
        </button>
    );
};

export default Button;