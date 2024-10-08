function wrapHtml(input, wrapper, extra = "") {
	return "<" + wrapper + extra + ">" + input + "</" + wrapper + ">";
}

$.ajax({
	type: 'GET',
	url: "/feeds/rss.xml",
	crossDomain: true,
	dataType: 'XML',
	success: function (xml) {
		var x2js = new X2JS();
		var rsse = x2js.xml2json(xml).rss;
		var rss = rsse.channel;
		var buffer = "";
		//buffer = buffer + wrapHtml(rss.feed.title, "h1")
		const items = rss.item;
    const item = items[0]
//		document.getElementById("ett").innerHTML = document.getElementById("ett").innerHTML + toString(rsse);

		console.log(rss);

		var count = 0;

			if (item.link == "" || item.link == null) {
				var title = wrapHtml(item.title, "big", " title=\"" + item.guid + "\"");
			} else {
				var title = wrapHtml(wrapHtml(item.title, "big"), "a", " href=\"" + item.link + "\"");
			}
			var content = wrapHtml(item.description, "p");
			var time = item.pubDate.substring(0, item.pubDate.length - 4);
			var options = {
				year: 'numeric', month: 'numeric', day: 'numeric',
				hour: 'numeric', minute: 'numeric', second: 'numeric'
			};
			var formatter = new Intl.DateTimeFormat([], options);
			var localtime = formatter.format(new Date(new Date(time) - (new Date().getTimezoneOffset() * 1000 * 60)));
			var sub = wrapHtml(
				"Published by " + item.author + " on " + localtime + " local time",
				"small"
			);
			buffer = buffer + wrapHtml(title + content + sub, "div")
			count++;
		
		document.getElementById("news2").innerHTML = buffer;
	}
})
