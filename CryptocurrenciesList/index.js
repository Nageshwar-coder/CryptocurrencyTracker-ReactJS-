import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
    state = {currencyList: [], isLoading: true}

    componentDidMount() {
        this.getCurrencyDetails()
    }

    getCurrencyDetails = async () => {
        const response = await fetch("https://apis.ccbp.in/crypto-currency-converter")
        const data = await response.json()
        const updatedData = data.map(eachItem => ({
            id: eachItem.id,
            currencyName: eachItem.currency_name,
            currencyLogo: eachItem.currency_logo,
            euroValue: eachItem.euro_value,
            usdValue: eachItem.usd_value,
        }))
        this.setState({currencyList: updatedData, isLoading: false})
    }

    getLoadAndAppend = () => {
        const {currencyList, isLoading} = this.state
        let element
        if (isLoading) {
            element = (
                <div className='loader'>
                    <Loader type="Rings" color="#ffffff" height={80} width={80} />
                </div>
            )
        } else {
            element = (
                currencyList.map(eachItem => (
                    <CryptocurrencyItem key={eachItem.id} itemDetails={eachItem} />
                ))
            )
        }
        return element
    }

    render() {
        return (
            <div className='bg'>
                <h1 className='heading'>Cryptocurrency Tracker</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt='cryptocurrency' className='image' />
                <div className='live-list'>
                    <div className='list-heading'>
                        <p className='heading-type'>Coin Type</p>
                        <div className='currency-type'>
                            <p className='heading-type'>USD</p>
                            <p className='heading-type'>EURO</p>
                        </div>
                    </div>
                    <ul className='currency-list'>{this.getLoadAndAppend()}</ul>
                </div>
            </div>
        )
    }
}

export default CryptocurrenciesList