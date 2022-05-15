import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CoinCard from '../components/CoinCard';
import SearchBox from '../components/SearchBox';
import { loadCoins } from '../redux/api';
import "./main.scss";


const Main = ({ coins, loadCoins }) => {

    const [filtredCoins, setFiltredCoins] = useState([]);

    useEffect(() => {
        if (coins.length === 0) loadCoins();
        let ordered_coins = coins.sort((a, b) => a + b);
        setFiltredCoins(ordered_coins);
    }, [loadCoins, coins]);


    const onChangeHandler = event => {
        setFiltredCoins(coins.filter(item => item.id.toLowerCase().includes(event.target.value.toLowerCase())));
    }


    return (
        <>
            <div className='wrapper'>
                <SearchBox onChangeHandler={onChangeHandler} />
                {
                    filtredCoins.map(item => <CoinCard key={item.id} data={item} />)
                }
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