/*
ブックマークレットを呼び出したらカーソルが赤色になるので、どこかしかをクリックすると以下の内容がクリップボードにコピーされる。

1. 画像の上でクリックしたら、画像リンクがコピーされる。
 例）![](http***.jpg)
2. リンクの上でクリックしたら、リンクテキストとリンクURLがコピーされる。
 例）[リンクテキスト](http***.html)
3. 画像もリンクもないところでクリックしたら、ページタイトルとページURLがコピーされる。
 例）[ページタイトル](http***.html)

これは Markdown フォーマット用。handler() の中で copy() に渡してる書式を書き換えれば、wikiフォーマットとかいろいろ使える。
*/
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
