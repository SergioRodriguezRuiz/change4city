define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layouts/default.html'
], function ($, _, Backbone, Template) {
        var Layout = Backbone.View.extend({
            el: '#app',
            template: _.template(Template),
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            }
        });
    return Layout;
});