define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/layouts/default.html'
], function ($, _, Backbone, Template) {
        var Layout = Backbone.View.extend({
            el: '#app',
            template: _.template(Template),
            inicialize: function () {
                this.render();
            },
            render: function () {
                this.$el.hmtl(this.template());
                return this;
            }
        });
    return Layout;
});