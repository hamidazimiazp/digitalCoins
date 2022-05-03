import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const Main = ({ coins }) => {

    useEffect(() => {
        console.log(coins);
    }, []);


    return (
        <>
            200
        </>
    );
}


const mapStateToProps = state => ({
    coins: state
});


export default connect(mapStateToProps)(Main);