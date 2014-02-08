var view = Strava.Labs.Activities.SegmentLeaderboardView;
var fn = view.prototype.render;

view.prototype.render = function () {
  var elem = jQuery(this.el);
  var result = fn.apply(this, Array.prototype.slice.call(arguments));

  if (elem.hasClass('once-only')) {
    return result;
  }

  // Only perform logic once per dropdown to avoid infinite loop.
  elem.addClass('once-only');

  // Only show "My Results" if we have at least one, which we can infer from
  // whether we have a PR listed.
  if (elem.find('.pr-comparison time').last().text().trim() !== "s") {
    elem.find('.clickable[data-filter=my_results]').click();
  }

  return result;
};
