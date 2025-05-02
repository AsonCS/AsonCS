import winston from 'winston'

const { combine, timestamp, json } = winston.format

function getDate() {
	const date = new Date()
	return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

export default function getLogger(): winston.Logger {
	const logger = winston.createLogger({
		level: 'info', // Set the minimum log level
		format: combine(timestamp(), json()),
		transports: [
			/*new winston.transports.File({
				filename: `./logs/${getDate()}-error.log`,
				level: 'error',
			}),
			new winston.transports.File({
				filename: `./logs/${getDate()}.log`,
			}),*/
		],
	})

	if (process.env.NODE_ENV !== 'production') {
		logger.add(
			new winston.transports.Console({
				format: winston.format.simple(),
			})
		)
	}

	return logger
}
