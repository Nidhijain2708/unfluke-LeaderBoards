import React from 'react'
import './Tbody.css';

const Tbody = () => {
  return (
    <div className='tableDiv'>
      <table cellPadding="10px" cellSpacing="5px">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win %(Day)</th>
            <th>Price(Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="Rank">1</th>
            <td className="Name">Selling with er entr</td>
            <td className="CalmarRatio">📈3.96</td>
            <td className="OverallProfit">381845</td>
            <td className="AvgDailyProfit">319.54</td>
            <td className="Win">0.65</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">2</th>
            <td className="Name">strategy_name</td>
            <td className="CalmarRatio">📈3.62</td>
            <td className="OverallProfit">268872.5</td>
            <td className="AvgDailyProfit">216.31</td>
            <td className="Win">0.64</td>
            <td className="Price">500</td>
            <td className="Buy">Buy</td>
          </tr>
          <tr>
            <th className="Rank">3</th>
            <td className="Name">Based on premium and</td>
            <td className="CalmarRatio">📈3.14</td>
            <td className="OverallProfit">255425</td>
            <td className="AvgDailyProfit">208.51</td>
            <td className="Win">0.64</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">4</th>
            <td className="Name">strategy_name</td>
            <td className="CalmarRatio">📈3.22</td>
            <td className="OverallProfit">370845</td>
            <td className="AvgDailyProfit">303.47</td>
            <td className="Win">0.65</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">5</th>
            <td className="Name">strategy_name</td>
            <td className="CalmarRatio">📈3.22</td>
            <td className="OverallProfit">370845</td>
            <td className="AvgDailyProfit">303.47</td>
            <td className="Win">0.65</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">6</th>
            <td className="Name">Based on premium wit</td>
            <td className="CalmarRatio">📈3.01</td>
            <td className="OverallProfit">135980</td>
            <td className="AvgDailyProfit">184.77</td>
            <td className="Win">0.49</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">7</th>
            <td className="Name">strategy_name</td>
            <td className="CalmarRatio">📈3.22</td>
            <td className="OverallProfit">267867.5</td>
            <td className="AvgDailyProfit">218.49</td>
            <td className="Win">0.6</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">8</th>
            <td className="Name">Wait and trade_save</td>
            <td className="CalmarRatio">📈2.62</td>
            <td className="OverallProfit">178252.5</td>
            <td className="AvgDailyProfit">161.9</td>
            <td className="Win">0.63</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">9</th>
            <td className="Name">Iron condor</td>
            <td className="CalmarRatio">📈2.44</td>
            <td className="OverallProfit">176420</td>
            <td className="AvgDailyProfit">137.51</td>
            <td className="Win">0.65</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
          <tr>
            <th className="Rank">10</th>
            <td className="Name">strategy_name</td>
            <td className="CalmarRatio">📈2.04</td>
            <td className="OverallProfit">244555</td>
            <td className="AvgDailyProfit">198,66</td>
            <td className="Win">0.62</td>
            <td className="Price">-</td>
            <td className="View">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tbody