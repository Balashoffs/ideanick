import express from 'express'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('Pong!')
})

expressApp.listen(3000, () => {
  console.info('Express server listening on port ' + process.env.PORT)
})
