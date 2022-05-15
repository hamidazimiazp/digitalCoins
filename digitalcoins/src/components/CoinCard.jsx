import "./CoinCard.scss";


const CoinCard = ({ data }) => {

    const change = data.price_change_percentage_24h.toFixed(2);

    return (
        <div className='crypto-card'>
            <div className="content">
                <h1>#{data.market_cap_rank}</h1>
                <img src={data.image} alt={data.id} />
                <span className='symbol'>{data.symbol.toUpperCase()}</span>
                <span>{`$${data.current_price.toFixed(2).toLocaleString()}`}</span>
                <span style={{ color: (change > 0) ? 'green' : "red" }}>{change}</span>
                <span>{`$${data.market_cap.toLocaleString()}`}</span>
            </div>
        </div>
    );
}

export default CoinCard;