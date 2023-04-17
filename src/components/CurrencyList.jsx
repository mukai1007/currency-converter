import React, {useState} from 'react'
import { HiArrowUpRight, HiArrowDownRight } from 'react-icons/hi2';

const CurrencyList = ({curList}) => {

    const [selectedValue, setSelectedValue] = useState('');
    // console.log(selectedValue);

    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
      }
  return (
    <div>
        <div className='table'>
            <div className='thead'>
                <div className='item'>Наименование валюты</div>
                <div className='item'>Буквенный код</div>
                <div className='item'>Цифровой код</div>
                <div className='item'>Показатель</div>
            </div>
            {curList && Object.values(curList).map(cur => (
                <div key={cur.CharCode} className='tbody'>
                    <div className='item'>{cur.Name}</div>
                    <div className='item'>{cur.CharCode}</div>
                    <div className='item'>{cur.NumCode}</div>
                    <div className='item'>{cur.Value > cur.Previous ? <HiArrowUpRight size={20} color='green'/> : <HiArrowDownRight size={20} color='red'/>}</div>   
                </div>
            ))}
        </div>
    </div>    
  )
}

export default CurrencyList