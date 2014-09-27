#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2), {
    default : {}
})
var utils = require('./utils')

utils.displayHelpMaybe(args)

switch(args._[0]) {
    case 'workshops':
        utils.grabWorkshops(function(workshops) {
            utils.displayWorkshops(workshops)
        })
        break
    default:
        utils.displayError('Unkown argument '+args._[0])
        utils.displayUsage()
}