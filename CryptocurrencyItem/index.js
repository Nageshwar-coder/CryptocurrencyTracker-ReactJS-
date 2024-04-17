import './index.css'

const CryptocurrencyItem = props => {
    const {itemDetails} = props
    const {currencyName, currencyLogo, euroValue, usdValue} = itemDetails
    return (
        <li className='currency-item'>
            <div className='currency'>
                <img src={currencyLogo} alt='' className='logo' />
                <p className='currency-name'>{currencyName}</p>
            </div>
            <div className='values'>
                <p>{usdValue}</p>
                <p>{euroValue}</p>
            </div>
        </li>
    )
}

export default CryptocurrencyItem