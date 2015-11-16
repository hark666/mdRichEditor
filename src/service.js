function mdRichEditorTbService() {
  var ToolbarService = {
		// attachs the menuBar
		init: function(toolbelt, toolsCount) {
		  this.toolbar = toolbelt;
		},
		// adds a menu to the menuBar
		add: function(item, index) {
			
			if(!item) { throw new Error(); }
			
			angular.forEach(item, function(tool, index) {
			   var button;
			   
			   button = "<md-button class=\"md-icon-button\" ng-click=\"action('" + tool.name + "', " + index + ")\">" +
				'<md-tooltip md-direction="bottom">' + tool.name + '</md-tooltip>' +
				"<i class=\"md-icon " + tool.icon + "\"></i>" +
			   '</md-button>';
			   
			   ToolbarService.toolbar.children().append(button);
			});

			ToolbarService.toolbar.children().append('<span flex>');
		
		}
	};
	return ToolbarService;
}