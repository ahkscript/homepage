(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-5170375-17', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');
document.getElementById('download-btn').onclick = function () {
	var s = this.getAttribute('href');
	ga('send', 'pageview', '/download/' + s.substr(s.lastIndexOf('/') + 1));
}
