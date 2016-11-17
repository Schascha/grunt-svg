// https://github.com/gruntjs/grunt-contrib-copy

module.exports = {
    sprite: {
        expand: true,
        cwd: '<%= dirs.temp %>/sprite/png',
        dest: '<%= dirs.dist %>/images/svg/sprite',
        src: '*.png',
        rename: function(dest, src) {
            'use strict';
            var path = require('path');

            // Prefix each fallback png with
            // spritemap.svg name into the destination
            // as needed for svg4everybody
            return path.join(
                dest,
                'sprite.svg.' + path.basename(src)
            );
        }
    },
    svg4everybody: {
        expand: true,
        cwd: 'node_modules/svg4everybody/dist',
        dest: '<%= dirs.dist %>/js',
        src: 'svg4everybody.legacy.js'
    }
};

