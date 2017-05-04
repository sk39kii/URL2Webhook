(function() {

  var inputPresenceCheck = function() {
    var webhookurl = $("#webhookurl").val();
    var channel = $("#channel").val();
    var username = $("#username").val();
    if (webhookurl && channel && username) {
      console.log("show");
      $('#send').show();
    } else {
      $('#send').hide();
    }
  };

  var postRequest = function() {
    var webhookurl = $("#webhookurl").val();
    var channel = $("#channel").val();
    var prefix = channel.slice(0,1);
    if (prefix != "#" && prefix != "@") {
      channel = "#" + channel;
    }
    var username = $("#username").val();
    var text = $("#pagetitle").val() + "\n" + $("#pageurl").val();
    var data = 'payload=' + JSON.stringify({
                  "channel": channel,
                  "username": username,
                  "text": text
                });

    $.ajax({
      url: webhookurl,
      type: 'POST',
      data: data,
      success: function(data) {
        console.log('success');
        setResult(true, "Please click the close button.");
        // windowClose();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
        setResult(false, "Please review the setting.");
      }
    });

  }

  $("#send").click(function() {
    postRequest();
  });

  $("input").keyup(inputPresenceCheck);

  var init_popup = function() {
    loadStrage();
    chrome.tabs.getSelected(null, function(tab) {
        $("#pagetitle").val(tab.title);
        $("#pageurl").val(tab.url);
    });
    inputPresenceCheck();
  };

  init_popup();

})();
