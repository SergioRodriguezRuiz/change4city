define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/events.html',
    'collections/event'
], function ($, _, Backbone, App, Template, EventCollection) {
    var Events = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            var events = new EventCollection ();
            events.bind('reset', this.render, this);
        },
        events: {
            'click #menuButton' : 'showMenu'
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        render: function (events) {
            this.$el.html(this.template({
                events: events.models
            }));
            return this;
        }
    });
    return Events;
});

