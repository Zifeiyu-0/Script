/*
脚本作者：佚名
脚本日期：2023-11-20 19:52:01
引用地址：
*/
var headers = $request['headers'];
delete headers["Authorization"];
delete headers["User-Agent"];
// headers['buvid'] = $persistentStore.read("Bilibili_buvid");
headers['authorization'] = $persistentStore.read("Bilibili_Authorization");
headers['user-agent'] = $persistentStore.read("Bilibili_User-Agent");
$done({ 'headers': headers });