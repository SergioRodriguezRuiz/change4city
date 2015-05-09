define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dashboard.html'
], function ($, _, Backbone, Template) {
    var Dashboard = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return Dashboard;
});

