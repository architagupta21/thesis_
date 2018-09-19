// eslint-disable-next-line func-names
module.exports = function(api) {
    let presets = null;
    let plugins = null;

    console.log(api.env());

    if (api.env('development')) {
        plugins = [];
        presets = ['@babel/preset-env', '@babel/preset-react'];
    } else {
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
