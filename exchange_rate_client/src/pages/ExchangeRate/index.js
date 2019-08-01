import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ExchangeRate extends React.Component{

    componentDidMount(){
        console.log(this.props.exchange_rates);
    }

    render(){
        return('Exchange Rate Page');
    }

}

let mapStateToProps = (state) => {
    return {
        exchange_rates: state.exchange_rate.get('exchange_rates')
    }
};

let mapActionToProps = {

};

export default withRouter(connect(mapStateToProps, mapActionToProps)(ExchangeRate));
