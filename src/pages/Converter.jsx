import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Block } from '../components/Block'
import { BsArrowLeftRight } from 'react-icons/bs';

const Converter = () => {

  const ratesRef = useRef({});

  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('KGS')
  const [fromAmount, setFromAmount] = useState(1)
  const [toAmount, setToAmount] = useState(0) 

  
  const onChangeFromAmount = useCallback((value) => {
    const price = value / ratesRef.current[fromCurrency]
    const result = price * ratesRef.current[toCurrency]
    setFromAmount(value)
    setToAmount(result)
  },[fromCurrency,toCurrency])

  const onChangeToAmount = useCallback(() => {
    const result = fromAmount * ratesRef.current[toCurrency] / ratesRef.current[fromCurrency]
    setToAmount(result.toFixed(4))
  },[fromAmount,toCurrency,fromCurrency])

  useEffect(() => {
    onChangeFromAmount(fromAmount)
  }, [fromCurrency, fromAmount,onChangeFromAmount])

  useEffect(() => {
    onChangeToAmount(toAmount)
  }, [toCurrency, toAmount ,onChangeToAmount])

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  
useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => response.json())
        .then(json => {
          ratesRef.current = json.rates
          onChangeFromAmount(1)})
        .catch(error => {
          console.error(error)
          alert('Не удалось получить информацию')
        });
  }, [onChangeFromAmount]);

  const fromConvert = `1 ${fromCurrency} = ${(1 / ratesRef.current[fromCurrency] * ratesRef.current[toCurrency]).toFixed(4)}`
  const toConvert = `1 ${toCurrency} = ${(ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]).toFixed(4)} ${fromCurrency}`
 
  return (
    <div className="App">
      <Block 
          value={fromAmount} 
          currency={fromCurrency} 
          onChangeCurrency={setFromCurrency} 
          onChangeValue={onChangeFromAmount}
          rates={ratesRef}
          fromConvert={fromConvert}
          title1='У меня есть'
        />
        <div className='arrow' onClick={handleSwitch}>
          <BsArrowLeftRight size={30}/>
        </div>
        <Block 
          value={toAmount} 
          currency={toCurrency} 
          onChangeCurrency={setToCurrency} 
          onChangeValue={onChangeToAmount}
          toConvert={toConvert}
          title2='Хочу приобрести'
        />
    </div>
  )
}

export default Converter