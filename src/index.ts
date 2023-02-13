import createPrettyLogger from 'pino-pretty'

export default function createLogPretty(options: any) {
	return createPrettyLogger({
		...options,
		translateTime: 'SYS:dd/mm/yyyy HH:MM:ss',
		ignore: 'pid,hostname',
		colorize: true,
		singleLine: true,
	})
}
