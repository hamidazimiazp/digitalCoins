import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./CoinCard.scss";


const CoinCard = ({ data }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const change = data.price_change_percentage_24h.toFixed(2);

    return (
        <>
            {!loading ? (
                <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width="50%"
                    height={150}
                    style={{ margin: 10, borderRadius: 7 }}
                />
            ) : (
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
            )}
        </>
    );
}

export default CoinCard;