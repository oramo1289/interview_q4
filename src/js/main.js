const reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'+
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '<div>' +
                            '{{#documents}}' +
                                '<h3 class="reports_title">' +
                                    '<a href="{{url}}" target="_blank">{{title}}</a>' +
                                '</h3>' +
                            '{{/documents}}' +
                        '</div>' +

                        '<div>' +
                            '{{#documents}}' +
                                '<h3 class="reports_title">' +
                                    '<a class="reports_info" href="{{url}}" target="_blank">{{file_size}}</a>' +
                                '</h3>' +
                            '{{/documents}}' +
                        '</div>' +

                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        const inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();