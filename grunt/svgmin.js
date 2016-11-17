// https://github.com/sindresorhus/grunt-svgmin

module.exports = {
    options: {
        plugins: [
            {
                removeViewBox: false
            },
            {
                removeUselessStrokeAndFill: false
            }
        ]
    },
    background: {
        expand: true,
        cwd: '<%= dirs.src %>/images/svg/background',
        dest: '<%= dirs.temp %>/background/svg',
        ext: '.svg',
        src: '**/*.svg'
    },
    sprite: {
        expand: true,
        cwd: '<%= dirs.src %>/images/svg/sprite',
        dest: '<%= dirs.temp %>/sprite/svg',
        ext: '.svg',
        src: '**/*.svg'
    }
};
