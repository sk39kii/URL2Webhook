(function() {
  $("#save").click(function() {
    if (saveStrage()) {
      setResult(true, "Please click the close button.");
    } else {
      setResult(false, "Please restart chrome and try again.");
    }
  });

  var init_options = function() {
    loadStrage();
  };

  init_options();
})();
