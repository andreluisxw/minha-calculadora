// app/page.js
"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

export default function HomePage() {
    const [display, setDisplay] = useState('0');

    const handleInput = (value) => {
        if (display === '0' || display === 'Erro') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    const handleDecimalClick = () => {
        const parts = display.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];

        if (!lastPart.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleClearClick = () => {
        setDisplay('0');
    };

    const handleEqualsClick = () => {
        try {
            const result = eval(display);
            setDisplay(String(result));
        } catch (error) {
            setDisplay('Erro');
        }
    };

    return (
        // A classe 'main' será usada para centralizar
        <main>
            <div className={styles.calculator}>
                <Display value={display} />
                <ButtonPanel
                    onInput={handleInput}
                    onDecimal={handleDecimalClick}
                    onClear={handleClearClick}
                    onEquals={handleEqualsClick}
                />
            </div>
        </main>
    );
}