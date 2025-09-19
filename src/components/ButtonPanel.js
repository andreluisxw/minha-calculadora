// components/ButtonPanel.js
import Button from './Button';
import styles from '../app/page.module.css';

// Passamos todas as funções de manipulação como props
const ButtonPanel = ({ onInput, onDecimal, onClear, onEquals }) => {
    return (
        <div className={styles.buttons}>
            {/* Usamos 'onClear' para o AC, pois ele tem uma lógica diferente */}
            <Button label="AC" onClick={onClear} className={styles.clear} />
            <Button label="/" onClick={onInput} className={styles.operator} />
            <Button label="*" onClick={onInput} className={styles.operator} />

            <Button label="7" onClick={onInput} />
            <Button label="8" onClick={onInput} />
            <Button label="9" onClick={onInput} />
            <Button label="-" onClick={onInput} className={styles.operator} />

            <Button label="4" onClick={onInput} />
            <Button label="5" onClick={onInput} />
            <Button label="6" onClick={onInput} />
            <Button label="+" onClick={onInput} className={styles.operator} />

            <Button label="1" onClick={onInput} />
            <Button label="2" onClick={onInput} />
            <Button label="3" onClick={onInput} />
            {/* Usamos 'onEquals' para o =, pois ele também tem lógica própria */}
            <Button label="=" onClick={onEquals} className={styles.equals} style={{gridRow: 'span 2'}} />

            <Button label="0" onClick={onInput} className={styles.zero} style={{gridColumn: 'span 2'}} />
            {/* Usamos 'onDecimal' para o ponto */}
            <Button label="." onClick={onDecimal} />
        </div>
    );
};

export default ButtonPanel;