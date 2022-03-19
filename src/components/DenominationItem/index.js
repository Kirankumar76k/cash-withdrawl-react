// Write your code here
import './index.css'

// import  from '../DenominationItem'

const DenominationItem = props => {
  const {denominationDetails, withdrawAmount} = props
  const {value} = denominationDetails

  const onWithdraw = () => {
    withdrawAmount(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
