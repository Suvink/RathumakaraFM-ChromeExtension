let tablink;

chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
});

$("#btn-get").click(function(){
    keyWordsearch();
  });
 
$("#btn-login").click(function(){
    discordauth();
});


function discordauth(){
    let discord = new LoginWithDiscord({
        clientID: '515877878546825236',
        scopes: [
            Scope.Identify
        ]
    });
 

  //Youtube Data API v3

function keyWordsearch() {
    gapi.client.setApiKey('AIzaSyBPdyRMC_31mjFfq5Zn0NHyttqQqt2GbcE');
    gapi.client.load('youtube', 'v3', function() {
        makeRequest();
    });
}

function makeRequest() {
   
        const q = tablink;
        const request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            maxResults: 1
        });
        request.execute(function(response) {
            $('#results').empty()
            const srchItems = response.result.items;
            $.each(srchItems, function(index, item) {
                vidTitle = item.snippet.title;
                vidThumburl = item.snippet.thumbnails.default.url;
                const thumbUrl = vidThumburl;
                $("#ytThumb").attr("src", thumbUrl);
                $("#songUrl h6").html(vidTitle);
            
            })
        })
    
    
}

  

