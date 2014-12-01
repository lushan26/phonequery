(function() {
	var phone = prompt("输入可疑电话", "");
	if (!phone) {
		return
	}
	var iframeCount = 3;
	var heightPercent = Math.floor(100 / iframeCount);
	var wrapper = document.createElement("div");
	wrapper.style.cssText = "background:#fff;border-radius:10px;border:10px solid #ccc;;z-index:10000;position:fixed;width:40%;height:840px;left:30%;top:5%;";
	var iframe = document.createElement("iframe");
	var closer = document.createElement("div");
	closer.style.cssText = "text-align:center;vertical-align:middle;line-height:40px;z-index:10;background:#0f0;position:absolute;width:40px;height:40px;top:20px;right:20px;cursor:pointer;";
	closer.innerHTML = "关闭";
	iframe.style.cssText = "overflow:hidden;border:none;position:absolute;width:100%;height:" + heightPercent + "%;top:" + heightPercent * 0 + "%;";
	iframe.scrolling = "no";
	iframe.src = "http://www.so.com/s?q=" + encodeURIComponent(phone);
	closer.onclick = function() {
		wrapper.parentNode.removeChild(wrapper)
	};
	wrapper.appendChild(iframe);
	var iframe2 = document.createElement("iframe");
	iframe2.style.cssText = "overflow:hidden;;border:none;position:absolute;width:100%;height:" + heightPercent + "%;top:" + heightPercent * 1 + "%;";
	iframe2.scrolling = "no";
	iframe2.src = "http://www.sogou.com/web?query=" + encodeURIComponent(phone);
	wrapper.appendChild(iframe2);
	var iframe3 = document.createElement("iframe");
	iframe3.style.cssText = "overflow:hidden;border:none;position:absolute;width:100%;height:" + heightPercent + "%;top:" + heightPercent * 2 + "%;";
	iframe3.scrolling = "no";
	iframe3.src = "http://www.baidu.com/s?wd=" + encodeURIComponent(phone);
	wrapper.appendChild(iframe3);
	for (var i = 0; i < iframeCount - 1; i++) {
		var separator = document.createElement("DIV");
		separator.style.cssText = "width:100%;height:1px;position:absolute;background:#00f;top:" + heightPercent * (i + 1) + "%";
		wrapper.appendChild(separator)
	}
	wrapper.appendChild(closer);
	document.body.appendChild(wrapper)
})();
