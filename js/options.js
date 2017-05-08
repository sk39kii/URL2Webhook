(function() {
  $("#save").click(function() {
    if (saveStrage()) {
      setResult(true, "Please click the close button.", true);
    } else {
      setResult(false, "Please restart chrome and try again.", true);
    }
  });

  var init_options = function() {
    loadStrage();
  };

  init_options();
})();
