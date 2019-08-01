import React from 'react';
import empty from 'is-empty';
import { Container, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';

import ReactPlaceholder from 'react-placeholder';

import styles from './index.module.scss';


class ExchangeRateBlock extends React.Component {

    render() {
        return (
            <Card className={styles.card}>
                <FadeIn>
                    <CardContent>
                        <ReactPlaceholder type='text' ready={this.props.ready} rows={5} showLoadingAnimation={true}>
                            <Typography variant='h4' className={styles.card_title}>{this.props.currency}</Typography>
                            <Typography variant='h5' className={styles.price}>${this.props.price}</Typography>
                            <div className={styles.sub_info}>
                                <div className={styles.subblock}>
                                    <Typography variant='h6'>volume:</Typography>
                                    <Typography variant='body1'>{(empty(this.props.volume)) ? '--' : this.props.volume}</Typography>
                                </div>
                                <div className={styles.subblock}>
                                    <Typography variant='h6'>change:</Typography>
                                    <Typography variant='body1' className={(this.props.change > 0) ? styles.positive : styles.negative}>{this.props.change}</Typography>
                                </div>
                            </div>
                        </ReactPlaceholder>
                    </CardContent>
                </FadeIn>
            </Card>
        );
    }

}

export default ExchangeRateBlock;