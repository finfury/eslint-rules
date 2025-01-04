import {structure} from '../rules/structure.js'


export const FSD = () => {

    return {
        plugins: {
            FSDPlugin: {
                rules: {
                    "structure": structure,
                }
            }
        },
        rules: {
            "FSDPlugin/structure": 'error',
        }
    }
}
