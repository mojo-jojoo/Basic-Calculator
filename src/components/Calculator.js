import React, { useState } from 'react';
import './Calculator.js';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleMemoryRecall = () => {
    if (memory !== null) {
      setDisplay(display + memory);
    }
  };

  const handleMemoryAdd = () => {
    try {
      const result = eval(display);
      setMemory((memory || 0) + result);
      setDisplay('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleMemorySubtract = () => {
    try {
      const result = eval(display);
      setMemory((memory || 0) - result);
      setDisplay('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      setDisplay(Math.sqrt(eval(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleExponent = () => {
    setDisplay(display + '**');
  };

  const handlePercentage = () => {
    try {
      setDisplay((eval(display) / 100).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{display || '0'}</div>
      <div className="button-grid">
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operation" onClick={() => handleButtonClick('/')}>÷</button>

        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operation" onClick={() => handleButtonClick('*')}>×</button>

        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operation" onClick={() => handleButtonClick('-')}>−</button>

        <button className="button zero" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={handleSquareRoot}>√</button>
        <button className="button operation" onClick={() => handleButtonClick('+')}>+</button>

        <button className="button operation" onClick={handlePercentage}>%</button>
        <button className="button operation" onClick={handleExponent}>^</button>
        <button className="button operation" onClick={handleClear}>C</button>
        <button className="button operation" onClick={calculateResult}>=</button>

        {/* Memory Buttons */}
        <button className="button" onClick={handleMemoryAdd}>M+</button>
        <button className="button" onClick={handleMemorySubtract}>M-</button>
        <button className="button" onClick={handleMemoryRecall}>MR</button>
      </div>
    </div>
  );
};

export default Calculator;
