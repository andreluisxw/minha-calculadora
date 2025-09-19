// components/Display.js
import styles from '../app/page.module.css'; // Podemos reutilizar os estilos

const Display = ({ value }) => {
    return (
        <div className={styles.display}>
            {value}
        </div>
    );
};

export default Display;