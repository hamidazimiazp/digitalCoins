import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CoinCard from '../components/CoinCard';
import SearchBox from '../components/SearchBox';
import { loadCoins } from '../redux/api';
import "./main.scss";
import { Skeleton } from '@mui/material';


const Main = ({ coins, loadCoins }) => {

    const [filtredCoins, setFiltredCoins] = useState([]);

    useEffect(() => {
        if (coins.length === 0) loadCoins();
        let ordered_coins = coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
        setFiltredCoins(ordered_coins);
    }, [loadCoins, coins]);


    const onChangeHandler = event => {
        setFiltredCoins(coins.filter(item => item.id.toLowerCase().includes(event.target.value.toLowerCase())).sort((a, b) => a.market_cap_rank - b.market_cap_rank));
    }


    return (
        <>

            <div className='wrapper'>
                <SearchBox onChangeHandler={onChangeHandler} />
                <Suspense fallback={<h2>Loading ...</h2>}>
                    {filtredCoins.map(item => {
                        return <Suspense key={item.id} fallback={<Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            width="50%"
                            height={150}
                            style={{ margin: 10, borderRadius: 7 }}
                        />}>
                            <CoinCard data={item} />
                        </Suspense>
                    })
                    }
                </Suspense>
            </div>
        </>
    );
}


const mapStateToProps = state => ({
    coins: state
});


const mapDispatchToProps = dispatch => ({
    loadCoins: () => dispatch(loadCoins())
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);