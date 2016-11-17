// https://github.com/firstandthird/load-grunt-config
module.exports = {
    default: [
        'build'
    ],
    build: [
        'clean',
        'copy:svg4everybody',
        'images',
        'scss'
    ],
    scss: [
        'sass'
        //'scsslint'
    ],
    images: [
        'svg-sprite',
        'svg-background'
    ],
    'svg-sprite': [
        'svgmin:sprite',
        'grunticon:sprite',
        'svgstore',
        'copy:sprite'
    ],
    'svg-background': [
        'svgmin:background',
        'grunticon:background'
    ]
};
