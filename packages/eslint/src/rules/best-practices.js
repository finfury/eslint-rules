export const bestPractices = () => {
    return {
        rules: {
            'accessor-pairs': 'off', // Отключение правила, требующего наличие пар геттер/сеттер
            'array-callback-return': ['error', {allowImplicit: true}], // Требование возвращать значение в колбэках методов массива, разрешая неявный возврат
            'block-scoped-var': 'error', // Требовать использование переменных, объявленных в блочной области видимости
            complexity: ['off', 20], // Отключение ограничения на цикломатическую сложность
            'class-methods-use-this': [
                'error',
                {
                    exceptMethods: [], // Ожидание, что методы класса будут использовать `this`, исключая указанные методы
                },
            ], // Требовать использования `this` в методах класса, за исключением указанных методов
            'consistent-return': 'error', // Требовать, чтобы функции всегда возвращали значение или ничего
            curly: ['error', 'multi-line'], // Требовать использование фигурных скобок для многострочных блоков
            'default-case': ['error', {commentPattern: '^no default$'}], // Требовать наличие `default` в `switch`, если нет комментария, соответствующего шаблону
            'default-case-last': 'error', // Требовать, чтобы `default` был последним в `switch`
            'default-param-last': 'error', // Требовать, чтобы параметры со значениями по умолчанию были последними в списке параметров
            'dot-notation': ['error', {allowKeywords: true}], // Требовать использование нотации с точкой, когда это возможно
            'dot-location': ['error', 'property'], // Требовать расположение точки на той же строке, что и свойство
            eqeqeq: ['error', 'always', {null: 'ignore'}], // Требовать использование `===` и `!==` вместо `==` и `!=`, за исключением сравнения с `null`
            'grouped-accessor-pairs': 'error', // Требовать группировку геттеров и сеттеров
            'guard-for-in': 'error', // Требовать фильтрацию свойств при использовании `for-in`
            'max-classes-per-file': ['error', 1], // Ограничение на количество классов в одном файле
            'no-alert': 'warn', // Предупреждение при использовании `alert`, `confirm` и `prompt`
            'no-caller': 'error', // Запрет использования `arguments.caller` и `arguments.callee`
            'no-case-declarations': 'error', // Запрет объявлений переменных в `case` блоках без оборачивания в блок
            'no-constructor-return': 'error', // Запрет возвращать значения из конструктора
            'no-div-regex': 'off', // Отключение запрета на использование регулярных выражений, начинающихся с `/`
            'no-else-return': ['error', {allowElseIf: false}], // Запрет `else` после `return` в `if`, кроме случаев с `else if`
            'no-empty-function': [
                'error', {
                    allow: [
                        'arrowFunctions',
                        'functions',
                        'methods',
                    ],
                }],
            'no-empty-pattern': 'error',
            'no-empty-static-block': 'off',
            'no-eq-null': 'off',
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-label': 'error',
            'no-fallthrough': 'error',
            'no-floating-decimal': 'error',
            'no-global-assign': ['error', {exceptions: []}],
            'no-native-reassign': 'off',
            'no-implicit-coercion': [
                'off', {
                    boolean: false,
                    number: true,
                    string: true,
                    allow: [],
                }],
            'no-implicit-globals': 'off',
            'no-implied-eval': 'error',
            'no-invalid-this': 'off',
            'no-iterator': 'error',
            'no-labels': ['error', {allowLoop: false, allowSwitch: false}],
            'no-lone-blocks': 'error',
            'no-loop-func': 'error',
            'no-magic-numbers': [
                'off', {
                    ignore: [],
                    ignoreArrayIndexes: true,
                    enforceConst: true,
                    detectObjects: false,
                }],
            'no-multi-spaces': [
                'error', {
                    ignoreEOLComments: false,
                }],
            'no-multi-str': 'error',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-nonoctal-decimal-escape': 'error',
            'no-object-constructor': 'off',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': [
                'error', {
                    props: true,
                    ignorePropertyModificationsFor: [
                        'acc', // for reduce accumulators
                        'accumulator', // for reduce accumulators
                        'e', // for e.returnvalue
                        'ctx', // for Koa routing
                        'context', // for Koa routing
                        'req', // for Express requests
                        'request', // for Express requests
                        'res', // for Express responses
                        'response', // for Express responses
                        '$scope', // for Angular 1 scopes
                        'staticContext', // for ReactRouter context
                    ],
                }],
            'no-proto': 'error',
            'no-redeclare': 'error',
            'no-restricted-properties': [
                'error', {
                    object: 'arguments',
                    property: 'callee',
                    message: 'arguments.callee is deprecated',
                }, {
                    object: 'global',
                    property: 'isFinite',
                    message: 'Please use Number.isFinite instead',
                }, {
                    object: 'self',
                    property: 'isFinite',
                    message: 'Please use Number.isFinite instead',
                }, {
                    object: 'window',
                    property: 'isFinite',
                    message: 'Please use Number.isFinite instead',
                }, {
                    object: 'global',
                    property: 'isNaN',
                    message: 'Please use Number.isNaN instead',
                }, {
                    object: 'self',
                    property: 'isNaN',
                    message: 'Please use Number.isNaN instead',
                }, {
                    object: 'window',
                    property: 'isNaN',
                    message: 'Please use Number.isNaN instead',
                }, {
                    property: '__defineGetter__',
                    message: 'Please use Object.defineProperty instead.',
                }, {
                    property: '__defineSetter__',
                    message: 'Please use Object.defineProperty instead.',
                }, {
                    object: 'Math',
                    property: 'pow',
                    message: 'Use the exponentiation operator (**) instead.',
                }],
            'no-return-assign': ['error', 'always'],
            'no-return-await': 'error',
            'no-script-url': 'error',
            'no-self-assign': [
                'error', {
                    props: true,
                }],
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-throw-literal': 'error',
            'no-unmodified-loop-condition': 'off',
            'no-unused-expressions': [
                'error', {
                    allowShortCircuit: false,
                    allowTernary: false,
                    allowTaggedTemplates: false,
                }],
            'no-unused-labels': 'error',
            'no-useless-call': 'off',
            'no-useless-catch': 'error',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-return': 'error',
            'no-void': 'error',
            'no-warning-comments': ['off', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],
            'no-with': 'error',
            'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
            'prefer-named-capture-group': 'off',
            'prefer-object-has-own': 'off',
            'prefer-regex-literals': [
                'error', {
                    disallowRedundantWrapping: true,
                }],
            radix: 'error',
            'require-await': 'off',
            'require-unicode-regexp': 'off',
            'vars-on-top': 'error',
            'wrap-iife': ['error', 'outside', {functionPrototypeMethods: false}],
            yoda: 'error',
        },
    }
}
