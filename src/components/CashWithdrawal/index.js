// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  onWithDrawAmount = value => {
    this.setState(prevState => ({
      total: prevState.total - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {total} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="profile">
            <div className="pic">
              <p className="name-s">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees">{total}</p>
              <p className="in-words">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="">Withdraw</p>
            <p className="">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denom-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationDetails={eachItem}
                  withdrawAmount={this.onWithDrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
