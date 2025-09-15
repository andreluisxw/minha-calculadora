"use client";

import styles from './page.module.css';
import { useState } from 'react';

export default function HomePage() {
    // Nosso estado agora é bem mais simples. Apenas o que está no visor.
    const [display, setDisplay] = useState('0');

    // Função para lidar com cliques em números e operadores
    const handleInput = (value) => {
        // Se o display for '0' ou 'Erro', substitui pelo novo valor
        if (display === '0' || display === 'Erro') {
            setDisplay(value);
        } else {
            // Senão, concatena o novo valor ao que já existe
            setDisplay(display + value);
        }
    };

    // Função para o ponto decimal, com lógica para evitar múltiplos pontos
    const handleDecimalClick = () => {
        // Encontra o último número na expressão
        const parts = display.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];

        // Se o último número ainda não tiver um ponto, adiciona
        if (!lastPart.includes('.')) {
            setDisplay(display + '.');
        }
    };

    // Função que limpa o visor
    const handleClearClick = () => {
        setDisplay('0');
    };

    // Função que calcula o resultado final
    const handleEqualsClick = () => {
        try {
            // Usamos a função eval() para calcular a expressão no visor.
            // String() converte o resultado final para texto.
            const result = eval(display);
            setDisplay(String(result));
        } catch (error) {
            // Se a expressão for inválida (ex: "5+"), mostramos "Erro".
            setDisplay('Erro');
        }
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>{display}</div>
            <div className={styles.buttons}>
                <button onClick={handleClearClick} className={`${styles.button} ${styles.clear}`}>AC</button>
                <button onClick={() => handleInput('/')} className={`${styles.button} ${styles.operator}`}>/</button>
                <button onClick={() => handleInput('*')} className={`${styles.button} ${styles.operator}`}>*</button>

                <button onClick={() => handleInput('7')} className={styles.button}>7</button>
                <button onClick={() => handleInput('8')} className={styles.button}>8</button>
                <button onClick={() => handleInput('9')} className={styles.button}>9</button>
                <button onClick={() => handleInput('-')} className={`${styles.button} ${styles.operator}`}>-</button>

                <button onClick={() => handleInput('4')} className={styles.button}>4</button>
                <button onClick={() => handleInput('5')} className={styles.button}>5</button>
                <button onClick={() => handleInput('6')} className={styles.button}>6</button>
                <button onClick={() => handleInput('+')} className={`${styles.button} ${styles.operator}`}>+</button>

                <button onClick={() => handleInput('1')} className={styles.button}>1</button>
                <button onClick={() => handleInput('2')} className={styles.button}>2</button>
                <button onClick={() => handleInput('3')} className={styles.button}>3</button>
                <button onClick={handleEqualsClick} className={`${styles.button} ${styles.equals}`} style={{gridRow: 'span 2'}}>=</button>

                <button onClick={() => handleInput('0')} className={styles.button} style={{gridColumn: 'span 2'}}>0</button>
                <button onClick={handleDecimalClick} className={styles.button}>.</button>
            </div>
        </div>
    );
}