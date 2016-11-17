// https://github.com/FWeinb/grunt-svgstore

module.exports = {
    options: {
        svg: {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        }
    },
    sprite: {
        files: {
            '<%= dirs.dist %>/images/svg/sprite/sprite.svg': '<%= dirs.temp %>/sprite/svg/*.svg'
        }
    }
};
