define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/video.html'
],  function ($, _, Backbone, App, Template) {
    var Tv = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function (options) {
            this.getDescription(options);
        },
        getDescription: function (op) {
            var dis = this;
            $.ajax({
                type: 'GET',
                url: 'http://vimeo.com/api/v2/video/'+op.src+'.json',
                jsonp: 'jsonp',
                success: function (data) {
                    var videoTitle = data[0].title;
                    var videoDesc = data[0].description;
                    dis.render(op.src, videoTitle, videoDesc);
                }
            });
        },

        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },

        events: {
            'click #menuButton' : 'showMenu'
        },
        render: function (src, t, d) {
            console.log(src);
            this.$el.html(this.template({
                src: src,
                title: t,
                description: d
            }));
            return this;
        }
    });
    return Tv;
});