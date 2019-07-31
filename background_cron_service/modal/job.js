import moment from 'moment';

class Job {

    constructor(id, base, target, scheduled_on) {
        this.id = id;
        this.base = base;
        this.target = target;
        this.scheduled_on = scheduled_on;
    }

    isScheduledOn(query_time) {
        return this.scheduled_on.isBefore(query_time);
    }

    isSameJob(query_time){
        return this.scheduled_on.subtract(30, 's').isSame(query_time);
    }

    update(knex, scheduled_on) {
        return knex('exchange_rate_jobs').where({
            base: this.base,
            target: this.target,
        }).update({
            scheduled_on: scheduled_on.format("YYYY-MM-DD HH:mm:ss"),
        })
    };

}

export default Job;