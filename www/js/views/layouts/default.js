define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layouts/default.html',
    'views/nav'
], function ($, _, Backbone, Template, Navigation) {
    var Layout = Backbone.View.extend({
        el: '#app',
        template: _.template(Template),
        initialize: function () {
            this.render();
            var nav = new Navigation();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return Layout;
});