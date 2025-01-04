import {javascript, FSD, typescript, react} from './configs/index.js'


const eslint = () => {
	const configs = []

	//configs.push(javascript())
	//configs.push(FSD())
	configs.push(react())
	//configs.push(...typescript())

	return configs
}

export {eslint}
