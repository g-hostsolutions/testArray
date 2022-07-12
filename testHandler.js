const handler = require('./dist/index')

const env = {
	array: ['1', 'tste', 3, 5, 6, 9, 8]
}

handler.handler(env, {}, (error, result) => {
    if (error) console.error(JSON.stringify(error, null, 2))
    else console.log(JSON.stringify(result, null, 2))
})
