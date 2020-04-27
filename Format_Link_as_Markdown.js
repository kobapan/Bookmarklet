javascript:(function(){
    function hd(e) {
        e.preventDefault();
        let t=e.target;
        if(t.src){cp('![]('+t.src+')');}
        else if (t.href){cp('['+t.innerHTML+']('+t.href+')');}
        else {cp('['+d.title+']('+d.URL+')')}
    }
    function cp(str) {
        let ta=d.createElement("textarea");
        ta.value=str;
        d.body.appendChild(ta);
        ta.select();
        d.execCommand("copy");
        ta.parentElement.removeChild(ta);
        d.head.removeChild(s);
        d.removeEventListener('click',hd,false);
    }
    function cu() {
        var c=d.createElement('canvas'),
            ctx=c.getContext('2d');
        c.width=20;
        c.height=20;
        ctx.strokeStyle='#FF0000';
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(20, 20);
        ctx.stroke();
        ctx.lineWidth=4;
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, 0);
        ctx.lineTo(10, 0);
        ctx.stroke();
        return c.toDataURL();
    }
    let d=document,s=d.createElement('style');
    d.head.appendChild(s);
    s.textContent='body,a:hover{cursor:url('+cu()+'), auto !important}';
    d.addEventListener('click',hd,false);
})();
