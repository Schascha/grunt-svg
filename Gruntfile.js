module.exports = function(grunt) {

    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-config')(grunt, {
        data: {
            dirs: grunt.file.readJSON('grunt/config/dirs.json'),
            files: grunt.file.readJSON('grunt/config/files.json'),
            pkg: grunt.file.readJSON('package.json')
        },
        loadGruntTasks: {
            pattern: [
                'grunt-*'
            ]
        }
    });
};
