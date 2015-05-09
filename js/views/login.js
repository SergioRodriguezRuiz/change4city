define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login.html',
    'text!templates/reminder.html'
], function ($, _, Backbone, Template, ReminderTemplate) {
    var Dashboard = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        fieldValidation: function () {
            console.log('valid user');
        },
        reminder: function () {
            this.template = _.template(ReminderTemplate);
            this.render();
            //this.$el.replaceWith(ReminderTemplate);
        },
        recovery: function () {
            console.log('recover psw');
        },
        events: {
            "click #login": "fieldValidation",
            "click #forgotPsw": "reminder",
            "click #reminder": "recovery"
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return Dashboard;
});

