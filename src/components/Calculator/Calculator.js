import React, {useState} from 'react';
import './Calculator.css'
import Button from "../Button/Button";

const Calculator = () => {

    const buttonsValue = [
        {value: 'C', id: 1}, {value: '/', id: 2}, {value: '7', id: 3}, {value: '8', id: 4}, {value: '9', id: 5}, {value: '*', id: 6}, {value: '4', id: 7}, {value: '5', id: 8}, {value: '6', id: 9}, {value: '-', id: 10}, {value: '1', id: 11}, {value: '2', id: 12}, {value: '3', id: 13}, {value: '+', id: 14}, {value: '0', id: 15}, {value: '.', id: 16}, {value: '=', id: 17}
    ]

    const [firstValue, setFirstValue] = useState('0')
    const [operator, setOperator] = useState('')
    const [lastValue, setLastValue] = useState('')
    const [result, setResult] = useState('')
    const [errorNull, setErrorNull] = useState('')

    function handleClick(value) {
        if (errorNull !== '') {
            setErrorNull('')
            setFirstValue('0')
        } else if (result !== '' && !isNaN(Number(value))) {
            setResult('')
            setFirstValue(value)
        } else if (value === '=' && operator === '/' && lastValue === '0') {
            setFirstValue('')
            setOperator('')
            setLastValue('')
            setErrorNull('Не-а')
        } else if (result !== '' && value !== '=' && value !== 'C' && value !== '.' && isNaN(Number(value))) {
            setFirstValue(result)
            setResult('')
            setOperator(value)
        } else if (result !== '' && value === '=' && isNaN(Number(value))) {
            setFirstValue('0')
            setResult('')
        } else if (result !== '' && value === 'C' && isNaN(Number(value))) {
            setFirstValue('0')
            setResult('')
        } else if (firstValue === '0' && value !== 'C' && operator === '' && !isNaN(Number(value))) {
            setFirstValue(value)
        } else if (value === '/' || value === '*' || value === '-' || value === '+') {
            setOperator(value)
        } else if (value === 'C') {
            setFirstValue('0')
            setOperator('')
            setLastValue('')
        } else if (operator !== '' && value !== '=' && value !== '.' && value !== '0') {
            setLastValue(lastValue + value)
        } else if (value === '=' && lastValue !== '') {
            setResult(eval(firstValue+operator+lastValue))
            setFirstValue('')
            setOperator('')
            setLastValue('')
        } else if (value === '.' && result !== '') {
            if (String(result).indexOf('.') !== -1) {
                setResult(result)
            } else {
                setFirstValue(result + value)
                setResult('')
            }
        } else if (value === '.' && operator === '') {
            if (firstValue.indexOf('.') !== -1) {
                setFirstValue(firstValue)
            } else {
                setFirstValue(firstValue + value)
            }
        } else if (value === '.' && operator !== '') {
            if (lastValue.indexOf('.') !== -1) {
                setLastValue(lastValue)
            } else {
                setLastValue(lastValue + value)
            }
        } else if (value === '0' && operator !== '') {
            if (lastValue === '0') {
                setLastValue(lastValue)
            } else {
                setLastValue(lastValue + value)
            }
        } else if (value === '=' && lastValue === '') {
            setFirstValue(firstValue)
            setOperator('')
        } else {
            setFirstValue(firstValue + value)
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Backspace') {
            handleClick('C')
        }
        if(event.key === 'Escape') {
            handleClick('C')
        }
        if(event.key === '/') {
            handleClick('/')
        }
        if(event.key === '7') {
            handleClick('7')
        }
        if(event.key === '8') {
            handleClick('8')
        }
        if(event.key === '9') {
            handleClick('9')
        }
        if(event.key === '*') {
            handleClick('*')
        }
        if(event.key === '4') {
            handleClick('4')
        }
        if(event.key === '5') {
            handleClick('5')
        }
        if(event.key === '6') {
            handleClick('6')
        }
        if(event.key === '-') {
            handleClick('-')
        }
        if(event.key === '1') {
            handleClick('1')
        }
        if(event.key === '2') {
            handleClick('2')
        }
        if(event.key === '3') {
            handleClick('3')
        }
        if(event.key === '+') {
            handleClick('+')
        }
        if(event.key === '0') {
            handleClick('0')
        }
        if(event.key === '.') {
            handleClick('.')
        }
        if(event.key === '=') {
            handleClick('=')
        }
        if(event.key === 'Enter') {
            handleClick('=')
        }
    }


    return (
        <div className='calculator'>
            <div className='calculator__field'>
                <div className='calculator__field__text'>
                    {firstValue}
                    {operator}
                    {lastValue}
                    {result}
                    {errorNull}
                </div>
                <input className = 'calculator__field__input' onKeyUp={handleKeyPress} autoFocus = {true} onBlur={({target}) => target.focus()} type="text"/>
            </div>
            <div className='calculator__buttons'>
                {buttonsValue.map((item) => {
                    return <div onClick = {() => handleClick(item.value)} key = {item.id}><Button value = {item.value}>{item.value}</Button></div>
                })}
            </div>
        </div>
    );
};

export default Calculator;