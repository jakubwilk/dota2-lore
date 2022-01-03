// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dota2Theme = require('./src/app/theme/dota2-theme')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: dota2Theme,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
