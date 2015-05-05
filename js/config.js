/**
 * Created by sergio on 5/5/15.
 */
require.config({
    deps: ['main'],
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore','jquery'],
            exports: 'backbone'
        },
        'bootstrap': ['jquery']
    }
})