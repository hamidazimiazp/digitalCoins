import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { loadCoins } from '../redux/api';


const Main = ({ coins, loadCoins }) => {

    const [filtredCoins, setFiltredCoins] = useState([]);

    useEffect(() => {
        if (coins.length === 0) loadCoins();
        setFiltredCoins(coins);
    }, [loadCoins, coins]);


    const onChangeHandler = event => {
        setFiltredCoins(coins.filter(item => item.id.toLowerCase().includes(event.target.value.toLowerCase())));
    }


    return (
        <>
            <SearchBox onChangeHandler={onChangeHandler} />
            {
                filtredCoins.map(item => <li key={item.id}>{item.id}</li>)
            }
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