const yargs = require("yargs");

const geocode = require('./geocode/geocode')

const argv = yargs
    .options({
        address:{
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address, (err, results) =>{
    if err{
        console.log(err);
    } else {
        console.log(JSON.stringify(result,undefined,2));
    }
});

"test"
