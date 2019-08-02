import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import empty from 'is-empty';

import { Container, Typography } from '@material-ui/core'

import styles from './index.module.scss';

//Redux actions
import { getCurrencies } from '../../redux/actions/currency';
import { getExchangeRate, updateExchangeRate } from '../../redux/actions/exchange_rate';

import ExchangeRateBlock from './components/ExchangeRateBlock';


class ExchangeRate extends React.Component {

    componentDidMount() {
        this.props.getCurrencies();
        this.props.getExchangeRate();
        const socket = io(`${process.env.REACT_APP_EXCHANGE_SER_HOST}/usd`);
        socket.on('exchange_rate_update', (data) => {
            this.props.updateExchangeRate(JSON.parse(data));
        })
    }

    render() {
        return (
            <div className={styles.background}>
                <Container maxWidth='xl'>
                    <Typography variant='h2' className={styles.title}>Cryptocurreny Realtime Price</Typography>
                    {
                        this.props.exchange_rates.map((_rate) => {
                            let base_currency = this.props.currencies.find((_currency) => {
                                return _currency.code.toLowerCase() === _rate.base.toLowerCase();
                            });
                            base_currency = (empty(base_currency)) ? null : base_currency.name
                            return (
                                <ExchangeRateBlock key={`${_rate.base}-${_rate.price}-${_rate.volume}-${_rate.change}`} ready={!empty(base_currency)} currency={base_currency} price={_rate.price} volume={_rate.volume} change = {_rate.change}/>
                            )
                        })
                    }

                </Container>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        exchange_rates: state.exchange_rate.get('exchange_rates').toJS(),
        currencies: state.currency.get('currencies').toJS(),
    }
};

let mapActionToProps = {
    getCurrencies,
    getExchangeRate,
    updateExchangeRate,
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(ExchangeRate));
