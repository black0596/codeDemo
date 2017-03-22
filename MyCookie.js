function setCookie(name , value , iDay) {
    if(iDay){
        var oDate = new Data();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie = name +'=' + value +';path = /; expires='+oDate;
    } else{
        document.cookie=name +'=' + value +';path = /';
    }
}
function getCookie(name) {
    var arr=document.cookie.split(';');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name){
            return arr2[1]
        }
    }
    return ''
}
function removeCoolie(name) {
    setCookie(name , 'bjc' , -10)
}