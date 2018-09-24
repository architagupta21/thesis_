// eslint-disable-next-line func-names
module.exports = function(api) {
    let plugins = [
        [
            'babel-plugin-styled-components',
            {
                displayName: true,
                fileName: false,
            },
        ],
    ];
    let presets = ['@babel/preset-env', '@babel/preset-react'];

    console.log(api.env());

    if (api.env('production')) {
        plugins = [
            ['transform-remove-console', { exclude: ['error', 'warn'] }],
        ];
        presets = [
            '@babel/preset-env',
            '@babel/preset-react',
            [
                'minify',
                {
                    keepFnName: false,
                    removeConsole: true,
                    removeDebugger: true,
                },
            ],
        ];
    }

    return {
        presets,
        plugins,
    };
};
