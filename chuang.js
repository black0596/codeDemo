window.onload=function () {
    /*快速排序*/
    function quickS(arr) {
        if(arr.length<=1){
            return arr;
        }
        let num=Math.floor(arr.length/2);
        let numVal=arr.splice(num,1);
        let left=[];
        let rig=[];
        console.log(numVal);
        for(let i=0;i<arr.length;i++){
            if(arr[i]<numVal){
                left.push(arr[i])
            }else{
                rig.push(arr[i])
            }

        }
        return quickS(left).concat([numVal],quire(rig))
    }
    /*弹性菜单 目标点，起始点*/
    function StatMove(iTarget,target) {
        clearInterval(timer);
        timer=setInterval(function () {
            iSpeed+=(iTarget-target.offsetLeft)/6;
            iSpeed*=0.7;
            if(Math.abs(iTarget)<=1&&Math.abs(iTarget-target.offsetLeft)<=1){
                clearInterval(timer);
                iSpeed=0;
                target.style.left=iTarget+'px';
            }else {
                target.style.left=iSpeed+target.offsetLeft+'px';
            }
        },30)
    }
};