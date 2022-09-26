module.exports = {
    resolve: {
        fallback: {
            "stream": { process: require.resolve('process/browser')},
        }
    }
}