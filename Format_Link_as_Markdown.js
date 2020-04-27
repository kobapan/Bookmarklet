/*
ブックマークレットを呼び出したらカーソルが赤色になるので、どこかしかをクリックすると以下の内容がクリップボードにコピーされる。

1. 画像の上でクリックしたら、画像リンクがコピーされる。
 例）![](http***.jpg)
2. リンクの上でクリックしたら、リンクテキストとリンクURLがコピーされる。
 例）[リンクテキスト](http***.html)
3. 画像もリンクもないところでクリックしたら、ページタイトルとページURLがコピーされる。
 例）[ページタイトル](http***.html)

これは Markdown フォーマット用。c() の中で cp() に渡してる書式を書き換えれば、wikiフォーマットとかいろいろ使える。
*/
javascript:(function(){
    function c(e) {
        e.preventDefault();
        let t=e.target;
        if(t.src){p('![]('+t.src+')');}
        else if (t.href){p('['+t.innerHTML+']('+t.href+')');}
        else {p('['+d.title+']('+d.URL+')')}
    }
    function p(str) {
        let t=d.createElement("textarea");
        t.value=str;
        d.body.appendChild(t);
        t.select();
        d.execCommand("copy");
        t.parentElement.removeChild(t);
        d.head.removeChild(s);
        d.removeEventListener('click',c,false);
    }
    function v(s) {
        var a=d.createElement('canvas'),
            x=a.getContext('2d');
        a.width=20;
        a.height=20;
        x.strokeStyle=s;
        x.lineWidth=2;
        x.beginPath();
        x.moveTo(0, 0);
        x.lineTo(20, 20);
        x.stroke();
        x.lineWidth=4;
        x.beginPath();
        x.moveTo(0, 10);
        x.lineTo(0, 0);
        x.lineTo(10, 0);
        x.stroke();
        return a.toDataURL();
    }
    let d=document,s=d.createElement('style');
    d.head.appendChild(s);
    s.textContent='body{cursor:url('+v('#DC143C')+'),auto !important} a:hover{cursor:url('+v('#008B8B')+'),auto !important}';
    d.addEventListener('click',c,false);
})();
