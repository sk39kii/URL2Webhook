(function() {

  var inputPresenceCheck = function() {
    var webhookurl = $("#webhookurl").val();
    if (webhookurl) {
      $('#send').show();
    } else {
      $('#send').hide();
    }
  };

  var postRequest = function() {
    var webhookurl = $("#webhookurl").val();

    var text = $("#pagetitle").val() + "\n" + $("#pageurl").val() + "\n" + $("#memo").val();

    var unfurl_links = true;

    var data = 'payload=' + JSON.stringify({
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
