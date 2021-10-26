
export function count(_count:HTMLElement,n:number):void {
    n++;
    for(let i=1;i<n;i++){
	_count.innerHTML+="<div class='num' style='animation: count 2s "+(n-i)+"s forwards;'>"+i+"</div>";
    _count.innerHTML+="<div class='num' id='zero' style='animation: countZero 1s "+(n)+"s forwards;'>0</div>";
    setTimeout(()=>{_count.style.display='none'},(n+1)*1000);
}
}
