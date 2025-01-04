import reactESLint from 'eslint-plugin-react';



export const react = () => {
    return {
        files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx","src/**/*.jsx",],
        plugins: {
            react: reactESLint
        },
        rules: {
            ...reactESLint.configs.recommended.rules
        },
    }
}
