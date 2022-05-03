import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCoins } from '../redux/api';


const Main = ({ coins, loadCoins }) => {

    useEffect(() => {
        loadCoins()
    }, []);


    return (
        <>
            {
                coins.map(item => <li key={item.id}>{item.id}</li>)
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