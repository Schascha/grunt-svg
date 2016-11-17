// https://github.com/ahmednuaman/grunt-scss-lint

module.exports = {
    allFiles: '<%= files.scss %>',
    options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        exclude: '<%= dirs.src %>/scss/generated/**/*.scss'
    }
};
