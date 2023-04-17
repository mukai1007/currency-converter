import React, { useEffect, useMemo, useState } from 'react'
import CurrencyList from '../components/CurrencyList'
import Search from '../components/Search'

const Currency = () => {

  const [curList, setCurList] = useState({})
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => response.json())
        .then(json => {
          setCurList(json.Valute)
      
        })
        .catch(error => {
          console.error(error)
          alert('Не удалось получить информацию')
        });
  }, []);

  const searchCurrency = useMemo(() => {
    return Object.values(curList).filter(item => item.CharCode.toLowerCase().includes(searchQuery.toLowerCase()) || item.Name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [curList, searchQuery])

  return (
    <div>
      <Search
        onChangeValue={setSearchQuery}
        value={searchQuery}
      />
      <CurrencyList curList={searchCurrency}/>
    </div>
  )
}

export default Currency