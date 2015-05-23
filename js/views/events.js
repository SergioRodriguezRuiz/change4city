define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/events.html',
], function ($, _, Backbone, App, Template) {
    var Events = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        events: {
            'click #menuButton' : 'showMenu'
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return Events;
});

