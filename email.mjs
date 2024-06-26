import {program} from 'commander'
import colors from 'colors';
import { mailTransport } from './mailTransport.mjs';

program
.option('-s, --subject')
.option('-t, --to')
.option('-m, --message');

program.parse();

const options = program.opts()
const args = program.args;
// console.log(options); //this option is for objects
// console.log(args); //this args is for arrows

if (options.subject && options.to && options.message) {
    // Send email
    mailTransport.sendMail({
        from: 'noreply@shopa.life',
        to: args[1],
        subject: args[0],
        text: args[2]
    })
    .then(console.log) //then shows if it works
    .catch(console.log); //catch shows if it fails
    console.log('Message sent'.rainbow);
} else {
    console.log('Some options are missing');
}

