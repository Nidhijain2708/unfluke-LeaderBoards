import React from 'react';
import './BB.css';

const BB = () => {
  return (
    <div className='BBDivOuter'>
        <h1 className='leftPart'>Basic Backtest</h1>
        <div className='rightPart'>
            <span className='SpanText'>Slippage</span>
            <span className='SpanSelect'>
                <select className='SpanSelectTag'>
                    <option>0%</option>
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                    <option>40%</option>
                </select>
            </span>
        </div>
        <div className='clearfix'></div>
    </div>
  )
}

export default BB