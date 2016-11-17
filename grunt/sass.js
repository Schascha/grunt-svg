// https://github.com/sindresorhus/grunt-sass

module.exports = {
    options: {
        outputStyle: 'expanded',
        sourceMap: true
    },
    build: {
        files: '<%= files.sassBuild %>'
    }
};
