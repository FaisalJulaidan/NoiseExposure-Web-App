const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@primary-color": "#176381",
                    "@link-color": "#176381"
                }
            }
        }
    ]
};