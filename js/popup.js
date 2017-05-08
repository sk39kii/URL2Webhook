(function() {

  var inputPresenceCheck = function() {
    var webhookurl = $("#webhookurl").val();
    var channel = $("#channel").val();
    var username = $("#username").val();
    if (webhookurl && channel && username) {
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

    var unfurl_links = true;
    // if($("input[name=unfurl_links]:checked").val() == "yes") {
    //   unfurl_links = true;
    // }

    var data = 'payload=' + JSON.stringify({
                  "channel": channel,
                  "username": username,
                  "text": text,
                  "unfurl_links": unfurl_links
                });

    $.ajax({
      url: webhookurl,
      type: 'POST',
      data: data,
      success: function(data) {
        console.log('success');
        setResult(true, "Please click the close button.", false);
        // windowClose();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
        setResult(false, "Please review the setting.", false);
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
