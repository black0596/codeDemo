
function json2url(json) {
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+ '='+json[name])
    }
    return arr.join('&')
}
function ajax(url, data, fnSucc, fnFail) {
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else{
        var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    oAjax.open('GET',url , +'?'+json2url(data) , true);
    oAjax.send();
    oAjax.onreadystatechange=function () {
        if(oAjax.readyState==4){
            if(oAjax.state>=200&&oAjax.state<300||oAjax.state==304){
                fnSucc&&fnSucc(oAjax.responseText)
            }else{
                fnFail&&fnFail(oAjax.state)
            }
        }
    }
}



