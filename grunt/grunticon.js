// https://github.com/filamentgroup/grunticon

module.exports = {
    background: {
        files: [{
            cwd: './',
            expand: true,
            src: '<%= dirs.temp %>/background/svg/*.svg',
            dest: '<%= dirs.src %>/scss/generated'
        }],
        options: {
            cssprefix: 'icon--',
            datapngcss: '_grunticon.data-png.scss',
            datasvgcss: '_grunticon.data-svg.scss',
            urlpngcss:  '_grunticon.url-png.scss',
            pngfolder: '../../../<%= dirs.temp %>/background/png',
            previewhtml: '../../../<%= dirs.temp %>/background/preview.html',
            template: 'grunt/config/grunticon.hbs'
        }
    },
    sprite: {
        files: [{
            expand: true,
            cwd: './',
            src: '<%= dirs.temp %>/sprite/svg/*.svg',
            dest: '<%= dirs.temp %>/sprite'
        }]
    }
};
