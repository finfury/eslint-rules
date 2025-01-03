import {structure} from '../rules/structure.js'


export const FSD = () => {

    return {
        files: ["src/**/*.js", "src/**/*.ts",],
        plugins: {
            FSDPlugin: {
                rules: {
                    "structure": structure,
                }
            }
        },
        rules: {
            "FSDPlugin/structure": [
                "error",
                {
                    "folders": [
                        "src/app",
                        "src/processes",
                        "src/pages",
                        "src/widgets",
                        "src/features",
                        "src/entities",
                        "src/shared",
                    ],
                    "files": [
                        //"README.md",
                        //"uuuuuuuuuu.json",
                        //"src/yyyyyyyyyy.json",
                        //"package.json",
                        //".gitignore"
                    ]
                }
            ],
        }
    }
}
