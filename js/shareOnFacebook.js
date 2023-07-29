function shareOnFacebook() {
    var url = 'https://sleanghak.github.io/leanghak-coder/'; // URL of the content you want to share
    var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

    window.open(shareUrl, '_blank');
}