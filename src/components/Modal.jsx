import React from 'react'

const Modal = ({ isVisible = false, onClose, allCurrencies, onChangeCurrency, defaultCurrencies }) => {
  return !isVisible ? null :(
    <div className='modal' onClick={onClose}>
       <div className='modal-dialog'>
            {allCurrencies.map(cur => (
                <div
                    onClick={() => onChangeCurrency(cur.code, defaultCurrencies.splice(3, 1, cur))}
                    className='modal-content'
                    key={cur.code}
                >
                    <div className='modal-item'>
                        <span className='title'>{cur.title}</span> 
                        <span className='code'>{cur.code}</span>
                    </div>
                </div>
            ))}
       </div>
    </div>
  )
}

export default Modal