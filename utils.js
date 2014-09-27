var chalk   = require('chalk')
var request = require('request')
var workshops_url = 'http://nodeschool.io/stavanger/workshops.json'

module.exports = {

    displayHelpMaybe : function(args) {
        if (args.help || args.h || args._.length == 0) {
            this.displayUsage()
            process.exit(0)
        }
    },

    displayUsage : function() {
        console.log('displaying usage')
    },

    displayError : function(msg) {
        console.log(chalk.red('ERROR: '+msg))
        process.exit(1)
    },

    displayWorkshops : function(workshops) {
        console.log('displaying workshops', workshops)
    },

    grabWorkshops : function(callback) {
        request(workshops_url, function(err, res, payload) {
            if (err) { this.displayError(err) }
            if (res.statusCode != 200) { this.displayError('Unable to grab workshops. Internet says: '+res.statusCode) }
            callback(JSON.parse(payload).workshops)
        })
    }

}