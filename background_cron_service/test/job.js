import '@babel/polyfill';

import assert from 'assert';
import { expect } from 'chai';
import moment from 'moment';

import knex from '../config/knex';
import Job from '../modal/job';

describe('Testing on Modal - Job', () => {
    describe('Testing: Job.isScheduledOn', () => {
        it('scheduled on this moment - expect result:  true', () => {
            let current = moment();
            const isScheduledOn = new Job(0, 'btc', 'usd', current).isScheduledOn(current);
            expect(isScheduledOn).to.eql(true);
        });
        it('scheduled later - expect result: false', () => {
            let scheduledOn = moment().add(30, 's');
            const isScheduledOn = new Job(0, 'btc', 'usd', scheduledOn).isScheduledOn(moment());
            expect(isScheduledOn).to.eql(false);
        });
        it('scheduled on previously - expect result : true', () => {
            let scheduledOn = moment().subtract(30, 's');
            const isScheduledOn = new Job(0, 'btc', 'usd', scheduledOn).isScheduledOn(moment());
            expect(isScheduledOn).to.eql(true);
        })
    });
});