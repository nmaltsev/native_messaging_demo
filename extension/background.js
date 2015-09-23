function test(){
	chrome.runtime.sendNativeMessage('drweb.unix.host_shell_daemon',{ 
		text: "Hello"
	}, function(msg){
		console.log("Received: " + msg && msg.message);
		console.dir(msg);
	});
}

var port = chrome.runtime.connectNative('drweb.unix.host_shell_daemon');
port.onMessage.addListener(function(msg) {
  console.log("Received " + msg && msg.message);
  console.dir(msg);
});
port.onDisconnect.addListener(function() {
  console.log("Disconnected");
});
port.postMessage({text: "test"});

