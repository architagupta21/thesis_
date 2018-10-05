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
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
    ];
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/typescript',
    ];

    console.log(api.env());

    if (api.env('production')) {
        plugins = [
            ['transform-remove-console', { exclude: ['error', 'warn'] }],
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
        ];
        presets.push([
            'minify',
            {
                keepFnName: false,
                removeConsole: true,
                removeDebugger: true,
            },
        ]);
    }

    return {
        presets,
        plugins,
    };
};
