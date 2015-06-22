define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/initial.html'
],  function ($, _, Backbone, App, Template) {
    var InitialScreen = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            $('body').css('background-image', 'url(../www/img/fondo.png)');
            this.render();
            setTimeout(function(){
                App.router.navigate("petitions", {trigger: true});
                $('#imgLoad').remove;
                $('body').css('background-image', '');
            }, 2000);
        },

        events: {

        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return InitialScreen;
});