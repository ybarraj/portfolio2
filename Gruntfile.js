/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 2280,
            height: 900,
            suffix: '_large_2x',
            quality: 50,
            aspectRatio: false,
            gravity: 'North'
          },
          {
            /* Change these */
            width: 1140,
            height: 450,
            suffix: '_large_1x',
            quality: 50,
            aspectRatio: false,
            gravity: 'North'
          },
          {
            /* Change these */
            width: 555,
            height: 300,
            suffix: '_med_1x',
            quality: 30,
            aspectRatio: false,
            gravity: 'North'
          },
          {
            /* Change these */
            width: 400,
            suffix: '_small_1x',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
