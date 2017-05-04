
  var saveStrage = function() {
    var ret = true;
    try {
      localStorage.setItem('webhookurl', $("#webhookurl").val());
      localStorage.setItem('channel', $("#channel").val());
      localStorage.setItem('username', $("#username").val());
    } catch(e) {
      ret = false;
    }
    return ret;
  };

  var loadStrage = function() {
    $("#webhookurl").val(localStorage.getItem('webhookurl'));
    $("#channel").val(localStorage.getItem('channel'));
    $("#username").val(localStorage.getItem('username'));
  };

  var setResult = function(is_success, guide_msg) {
    var css = "alert-danger";
    var button = '  <button type="button" class="close" data-dismiss="alert">&times;</button>';
    var msg = button + '  Error.<br>' + guide_msg;

    if (is_success) {
      css = "alert-success";
      msg = button + '  Successfully.<br>' + guide_msg;
    }

    var html = '<div class="alert alert-dismissible ' + css + '">' + msg + '</div>';
    $("#result").html(html);
  };

  var windowClose = function() {
    window.close();
    return false;
  };

  $("#close").click(function() {
    windowClose();
  });
