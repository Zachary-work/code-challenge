import { CronJob } from 'cron';

new CronJob('* * * * * *', () => {
    console.log('I am a little cron');
}, null, true);