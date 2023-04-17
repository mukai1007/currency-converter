import React from 'react';
import Modal from './Modal';
import AmountInput from './AmountInput';
import { defaultCurrencies, allCurrencies} from '../assets/constants.js'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export const Block = ({ value, currency, onChangeValue, onChangeCurrency, ratesRef, fromConvert, toConvert, title1, title2 }) => {

  const [isModal, setModal] = React.useState(false);

  return (
    <div className="block">
      <p className='convert'>{title1}</p>
      <p className='convert'>{title2}</p>
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur.code)}
            className={currency === cur.code ? 'active' : ''}
            key={cur.code}>
            {cur.code}
          </li>
        ))}
        <li onClick={() => setModal(true)} className={isModal ? 'active' : ''}>
          {isModal ? <BsChevronUp/> : <BsChevronDown/>}
        </li>
      </ul>
      <AmountInput
        onChangeValue={onChangeValue}
        value={value}
      />
      <p className='convert'>{fromConvert}</p>
      <p className='convert'>{toConvert}</p>

      <Modal
        isVisible={isModal}
        onClose={() => setModal(false)}
        ratesRef={ratesRef}
        allCurrencies={allCurrencies}
        currency={currency} 
        onChangeCurrency={onChangeCurrency}
        defaultCurrencies={defaultCurrencies}
      />
    </div>
  )
}
