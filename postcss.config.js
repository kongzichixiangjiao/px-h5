module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px2rem-exclude": {
            remUnit: 37.5, // 与vant统一
            exclude: /node_modules|folder_name/i
        }
    }
};