(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){e.exports={Btn:"Buttons_Btn__3XVRn",Answer:"Buttons_Answer__1EVei",Big:"Buttons_Big__fkn6u",Config:"Buttons_Config__3mHAv",Small:"Buttons_Small__1hVra"}},20:function(e,t,s){e.exports={Instructions:"StartGameModal_Instructions__1q0iH"}},27:function(e,t,s){e.exports={AnswerInformer:"AnswerInformer_AnswerInformer__7VDLQ",Correct:"AnswerInformer_Correct__1opd-",Incorrect:"AnswerInformer_Incorrect__9ENrA"}},31:function(e,t,s){e.exports={GameDesk:"MatchingRound_GameDesk__2iByN",TextRow:"MatchingRound_TextRow__2BVuM"}},36:function(e,t,s){e.exports={TextBox:"TextBox_TextBox__3Hmb0"}},37:function(e,t,s){e.exports={Modal:"Modal_Modal__27sKI"}},38:function(e,t,s){e.exports={NavbarOuter:"Navbar_NavbarOuter__2QxoC"}},42:function(e,t,s){e.exports=s(57)},47:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),a=s(24),r=s.n(a),o=(s(47),s(17)),h=s(3),l=s(4),c=s(6),u=s(5),d=s(7),m=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-sm "},i.a.createElement("h2",null,"HomePage"))}}]),t}(n.Component),p=s(11),f=s(22),v=s(36),g=s.n(v),b=function(e){return i.a.createElement("div",{className:"col-12 "+g.a.TextBox},{hebrew:i.a.createElement("p",null,e.textHebrew),english:i.a.createElement("p",null,e.textEnglish),both:i.a.createElement("div",null,i.a.createElement("p",null,e.textHebrew),i.a.createElement("p",null,e.textEnglish))}[e.lang])},x=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={count:20,timerInterval:""},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.startCountDown()}},{key:"componentDidUpdate",value:function(e,t,s){e!=this.props&&this.props.round!=e.round&&(this.setState({count:20-5*(this.props.clue-1)}),clearInterval(this.state.timeInterval),this.startCountDown())}},{key:"startCountDown",value:function(){var e=setInterval(function(){var e=this;this.setState({count:this.state.count-1},(function(){e.state.count<=0&&(e.props.resetClue(),e.setState({count:10}),clearInterval(e.state.timeInterval),e.startCountDown())}))}.bind(this),1e3);this.setState({timeInterval:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",{style:{display:"inline-block"}},"Round: ",this.props.round,"  "),i.a.createElement("h2",{style:{display:"inline-block",marginLeft:"20px"}},"Time for Clue: ",this.state.count))}}]),t}(n.Component),C=function(e){return i.a.createElement("div",{style:{display:"inline"}},i.a.createElement("h2",null,"Score: ",e.score))},E=s(27),w=s.n(E),_=function(e){var t=i.a.createElement("p",null,"Correct Answer:  ",e.answer),s=i.a.createElement("p",{className:e.correct?w.a.Correct:w.a.Incorrect}," ",e.correct?"Correct!":"Incorrect"),n=i.a.createElement("p",null,"+",e.addedPoints,"  ");return i.a.createElement("div",{className:w.a.AnswerInformer},s,e.correct?n:t)},y=s(31),A=s.n(y),M=function(){function e(){Object(h.a)(this,e)}return Object(l.a)(e,[{key:"cleanText",value:function(e){return e.map((function(e){return e.replace(/<[^>]*>/g,"")}))}}]),e}(),I=s(15),O=s.n(I),G=function(e){return i.a.createElement("button",{className:"col-sm "+O.a.Btn+" "+O.a.Config,onClick:function(){return e.setConfig(e.response)}},e.children)},B=function(e){return i.a.createElement("button",{className:O.a.Btn+" "+O.a.Big,onClick:e.onClick},e.children)},k=function(e){return i.a.createElement("div",{className:"col-sm "},i.a.createElement("button",{className:O.a.Btn+" "+O.a.Answer,onClick:function(){return e.resetRoundHandler(e.correct?100*(4-e.clue):0,e.correct)}},i.a.createElement("p",null,e.answerHebrew),i.a.createElement("p",null,e.answerEnglish)))},S=function(e){return i.a.createElement("div",{className:"col-sm "},i.a.createElement("button",{className:O.a.Btn+" "+O.a.Small,onClick:e.onClick},i.a.createElement("p",null,e.children)))},T=new M,N=function(e){function t(e){var s;Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetRoundHandler=function(e,t){s.userTexts=s.selectRandomTexts(3,P[s.props.text]),console.log("After Click "+s.userTexts),s.props.updateScoreHandler(e);var n=s.state.textInfos[0].textNameEnglish;s.setState({userTexts:s.userTexts,clue:1,answeredCorrectly:t,answerInform:!0,correctAnswer:n,addedPoints:e},(function(){console.log("Post Click state"+s.state.userTexts),s.correctAnswerShow(),s.getTextInfo(s.state.userTexts),s.getLabels(s.state.userTexts)}))},s.correctAnswerShow=function(){var e=setInterval((function(){s.setState({answerInform:!1,round:s.state.round+1}),clearInterval(e)}),1500)},s.resetClue=function(){3==s.state.clue?s.resetRoundHandler(0,!1):s.setState({clue:s.state.clue+1})};var n=s.selectRandomTexts(3,P[s.props.text]);return s.state={userTexts:n,textInfos:[],labels:[],round:0,clue:1,answerInform:!1,answeredCorrectly:!1,correctAnswer:"",addedPoints:0},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getTextInfo(this.state.userTexts),this.getLabels(this.state.userTexts)}},{key:"getTextInfo",value:function(e){for(var t=this,s=Object(f.a)(e),n=[],i=s[0],a=0;a<s.length;a++)n.push(i);Promise.all(n.map((function(e){var s=t.chooseRandomSubtext(e,P[t.props.text]);return console.log(e+" . "+s),fetch("http://www.sefaria.org/api/texts/"+e+"."+s).then((function(e){return e.json()})).then((function(e){e.text=T.cleanText(e.text);var s=t.chooseRandomVerse(e.text);return new j(e.indexTitle,e.heTitle,e.he[s],e.text[s])}))}))).then((function(e){console.log("Text Values"),console.log(e),t.setState({textInfos:e,count:t.state.count+3},(function(){return console.log("finished changes texts")}))}))}},{key:"getLabels",value:function(e){var t=this,s=Object(f.a)(e);Promise.all(s.map((function(e){return fetch("http://www.sefaria.org/api/texts/"+e).then((function(e){return e.json()})).then((function(t){t.text=T.cleanText(t.text);var n=e==s[0];return new L(t.indexTitle.replace(/Mishnah/,""),t.heIndexTitle.replace("\u05de\u05e9\u05e0\u05d4",""),n)}))}))).then((function(e){console.log("Label values"),console.log(e),t.shuffleArray(e),t.setState({labels:e},(function(){return console.log("finished changes labels")}))}))}},{key:"selectRandomTexts",value:function(e,t){for(var s=Object.keys(t),n=Object(f.a)(s),i=[],a=0;a<e;a++){var r=Math.floor(Math.random()*n.length);i.push(n[r]),n.splice(r,1)}return console.log("Pre-Selected "+i),i}},{key:"chooseRandomSubtext",value:function(e,t){var s=Math.ceil(Math.random()*t[e]);if("Berakhot"==t[0]&&64==t[t[0]]){if(1==s){s=2;var n=Math.round(Math.random());return s.toString()(0==n?"a":"b")}s-=1;var i=Math.round(Math.random());return s.toString()+(0==i?"a":"b")}return s}},{key:"chooseRandomVerse",value:function(e){return Math.floor(Math.random()*e.length)}},{key:"hashcode",value:function(e){var t,s=0;for(t=0;t<e.length;t++)s=(s<<5)-s+e.charCodeAt(t),s|=0;return s}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),n=[e[s],e[t]];e[t]=n[0],e[s]=n[1]}}},{key:"render",value:function(){var e=this;console.log("render round"),console.log(this.state.labels);var t=[],s=[],n="";this.state.textInfos.length>0&&(t=this.state.textInfos.filter((function(t,s){return s<=e.state.clue-1})).map((function(t,s){return i.a.createElement(b,{key:s+e.state.textInfos.length*e.props.round,lang:e.props.lang,textEnglish:t.textEnglish,textHebrew:t.textHebrew})})),s=this.state.labels.map((function(t,s){return i.a.createElement(k,{key:s+e.state.textInfos.length*e.props.round,answerEnglish:t.textNameEnglish,answerHebrew:t.textNameHebrew,correct:t.correct,clue:e.state.clue,lang:e.props.lang,resetRoundHandler:e.resetRoundHandler})})),this.state.clue>=1&&this.state.clue<3&&(n=i.a.createElement(S,{onClick:this.resetClue},"Next Clue")));var a="";return this.state.answerInform&&(a=i.a.createElement(_,{correct:this.state.answeredCorrectly,answer:this.state.correctAnswer,addedPoints:this.state.addedPoints})),i.a.createElement("div",{className:"container "+A.a.GameDesk},i.a.createElement("h2",null,"Match the Verse to the Correct Text"),i.a.createElement("div",{className:A.a.TextRow},i.a.createElement("div",{className:"row "},this.state.answerInform?a:t,!this.state.answerInform&&n)),i.a.createElement("div",{className:"row"},this.state.answerInform?i.a.createElement("p",null):s),i.a.createElement(C,{score:this.props.score}),this.state.answerInform?i.a.createElement("p",null):i.a.createElement(x,{round:this.state.round,style:{display:"inline"},resetRoundHandler:this.resetRoundHandler,resetClue:this.resetClue}))}}]),t}(n.Component),j=function e(t,s,n,i){Object(h.a)(this,e),this.textNameEnglish=t,this.textNameHebrew=s,this.textHebrew=n,this.textEnglish=i},L=function e(t,s,n){Object(h.a)(this,e),this.textNameEnglish=t,this.textNameHebrew=s,this.correct=n},P={tanakh:{Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,I_Samuel:31,II_Samuel:24,I_Kings:22,II_Kings:25,Isaiah:66,Jeremiah:52,Ezekiel:48,Hosea:14,Joel:4,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:3,Psalms:150,Proverbs:31,Job:42,Song_of_Songs:8,Ruth:4,Lamentations:5,Ecclesiastes:12,Esther:10,Daniel:12,Ezra:10,Nehemiah:13,I_Chronicles:29,II_Chronicles:36},mishnah:{Mishnah_Berakhot:9,Mishnah_Peah:8,Mishnah_Demai:7,Mishnah_Kilayim:9,Mishnah_Sheviit:10,Mishnah_Terumot:11,Mishnah_Maasrot:5,Mishnah_Maaser_Sheni:5,Mishnah_Challah:4,Mishnah_Orlah:3,Mishnah_Bikkurim:4,Mishnah_Shabbat:24,Mishnah_Eruvin:10,Mishnah_Pesachim:10,Mishnah_Shekalim:8,Mishnah_Yoma:8,Mishnah_Sukkah:5,Mishnah_Beitzah:5,Mishnah_Rosh_Hashanah:4,Mishnah_Taanit:4,Mishnah_Megillah:4,Mishnah_Moed_Katan:3,Mishnah_Chagigah:3,Mishnah_Yevamot:16,Mishnah_Ketubot:13,Mishnah_Nedarim:11,Mishnah_Nazir:9,Mishnah_Sotah:9,Mishnah_Gittin:9,Mishnah_Kiddushin:4,Mishnah_Bava_Kamma:10,Mishnah_Bava_Metzia:10,Mishnah_Bava_Batra:10,Mishnah_Sanhedrin:11,Mishnah_Makkot:3,Mishnah_Shevuot:8,Mishnah_Eduyot:8,Mishnah_Avodah_Zarah:5,Mishnah_Avot:5,Mishnah_Horayot:3,Mishnah_Zevachim:14,Mishnah_Menachot:13,Mishnah_Chullin:12,Mishnah_Bekhorot:9,Mishnah_Arakhin:9,Mishnah_Temurah:7,Mishnah_Keritot:6,Mishnah_Meilah:6,Mishnah_Tamid:7,Mishnah_Middot:5,Mishnah_Kinnim:3,Mishnah_Kelim:30,Mishnah_Oholot:18,Mishnah_Negaim:14,Mishnah_Parah:12,Mishnah_Tahorot:10,Mishnah_Mikvaot:10,Mishnah_Niddah:10,Mishnah_Makhshirin:6,Mishnah_Zavim:5,Mishnah_Tevul_Yom:4,Mishnah_Yadayim:4,Mishnah_Oktzin:3},talmud:{Berakhot:64,Shabbat:157,Eruvin:105,Pesachim:121,Rosh_Hashanah:35,Yoma:88,Sukkah:56,Beitzah:40,Taanit:31,Megillah:32,Moed_Katan:29,Chagigah:27,Yevamot:122,Ketubot:112,Nedarim:91,Nazir:66,Sotah:49,Gittin:90,Kiddushin:82,Bava_Kamma:119,Bava_Metzia:119,Bava_Batra:176,Sanhedrin:113,Makkot:24,Shevuot:49,Avodah_Zarah:76,Horayot:14,Zevachim:120,Menachot:110,Chullin:142,Bekhorot:61,Arakhin:34,Temurah:34,Keritot:28,Meilah:22,Tamid:8,Niddah:73}},F=s(37),W=s.n(F),R=function(e){return i.a.createElement("div",{className:W.a.Modal},e.children)},H=function(e){return i.a.createElement(R,null,i.a.createElement("h2",null,"Final Score:"),i.a.createElement("h2",null,e.score),i.a.createElement("p",null,"Thanks for Playing!"),i.a.createElement(B,{onClick:e.reStartGame},"Play again"))},Q=s(20),D=s.n(Q),K=function(e){return i.a.createElement(R,null,i.a.createElement("h2",null,"Game: \u05e9\u05dc\u05d5\u05e9\u05d4 \u05de\u05d9 \u05d9\u05d5\u05d3\u05e2"),i.a.createElement("p",{className:D.a.Instructions},"Please choose a language for the verses"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(G,{setConfig:function(){return e.setLang("hebrew")}},"Hebrew"),i.a.createElement(G,{setConfig:function(){return e.setLang("english")}},"English"),i.a.createElement(G,{setConfig:function(){return e.setLang("both")}},"Both"))))},U=function(e){return i.a.createElement(R,null,i.a.createElement("h2",null,"Game: \u05e9\u05dc\u05d5\u05e9\u05d4 \u05de\u05d9 \u05d9\u05d5\u05d3\u05e2"),i.a.createElement("p",{className:D.a.Instructions},"Please choose a text"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(G,{setConfig:function(){return e.setText("tanakh")}},"Tanakh"),i.a.createElement(G,{setConfig:function(){return e.setText("mishnah")}},"Mishnah"),i.a.createElement(G,{setConfig:function(){return e.setText("talmud")}},"Talmud"))))},V=s(23),Z=s(28),z=s(38),J=s.n(z),X=s(21),Y=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(V.a,{className:J.a.NavbarOuter,expand:"lg"},i.a.createElement(V.a.Brand,{href:"#"},"Sefarcade"),i.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(V.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(Z.a,{className:"mr-auto"},i.a.createElement(Z.a.Link,{as:X.b,to:"/about"},"About"),i.a.createElement(Z.a.Link,{as:X.b,to:"/matchingGame"},"Play"))))}}]),t}(n.Component),q=function(e){return i.a.createElement(R,null,i.a.createElement("h2",null,"Game: \u05e9\u05dc\u05d5\u05e9\u05d4 \u05de\u05d9 \u05d9\u05d5\u05d3\u05e2"),i.a.createElement("p",{className:D.a.Instructions},"You will be presented with 3 verses from a book in the Hebrew Bible. They will appear on the screen gradually. the fewer hints you are given before you guess the more a correct answer is worth. "),i.a.createElement("p",null,"!\u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"),i.a.createElement(B,{onClick:e.startGame},"Start"))},$=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).updateScoreHandler=function(t){e.state.round==e.state.rounds?e.setState({score:e.state.score+t,gameOver:!0,gameStarted:!1}):e.setState({score:e.state.score+t,round:e.state.round+1})},e.startGame=function(){e.setState({gameStarted:!0,score:0,round:1,gameOver:!1})},e.setLang=function(t){e.setState({lang:t,gameLang:!1,gameText:!0})},e.setText=function(t){e.setState({text:t,gameText:!1,startGame:!0})},e.state={lang:"english",text:"tanakh",score:0,round:1,gameStarted:!1,gameOver:!1,startGame:!1,gameLang:!0,gameText:!1,rounds:10},e.updateScoreHandler=e.updateScoreHandler.bind(Object(p.a)(e)),e.startGame=e.startGame.bind(Object(p.a)(e)),e.setLang=e.setLang.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return this.state.gameOver?e=i.a.createElement(H,{reStartGame:this.startGame,score:this.state.score}):this.state.gameStarted?e=i.a.createElement(N,{updateScoreHandler:this.updateScoreHandler,round:this.state.round,score:this.state.score,lang:this.state.lang,text:this.state.text}):this.state.startGame?e=i.a.createElement(q,{startGame:this.startGame}):this.state.gameLang?e=i.a.createElement(K,{setLang:this.setLang}):this.state.gameText&&(e=i.a.createElement(U,{setText:this.setText})),i.a.createElement("div",null,e)}}]),t}(n.Component),ee=(s(55),function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeClueBoxes:"",activeClue:"",boxInFocus:""},s.setActiveClueBoxes=s.setActiveClueBoxes.bind(Object(p.a)(s)),s.setActiveClue=s.setActiveClue.bind(Object(p.a)(s)),s.setBoxInFocus=s.setBoxInFocus.bind(Object(p.a)(s)),s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,s){if(e.clues!==this.props.clues){var n=Object.keys(this.props.clues)[1];this.setState({activeClueBoxes:this.props.clues[n].boxes,activeClue:[n],boxInFocus:this.props.clues[n].boxes[0]})}}},{key:"setActiveClueBoxes",value:function(e){this.setState({activeClueBoxes:e})}},{key:"setActiveClue",value:function(e){this.setState({activeClue:e})}},{key:"setBoxInFocus",value:function(e){this.setState({boxInFocus:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"crossword"},i.a.createElement(te,{clues:this.props.clues,setActiveClueBoxes:this.setActiveClueBoxes,activeClue:this.state.activeClue,setActiveClue:this.setActiveClue,setBoxInFocus:this.setBoxInFocus}),i.a.createElement(ne,{grid:this.props.grid,allClues:this.props.clues,clues:this.props.clues,setActiveClueBoxes:this.setActiveClueBoxes,highlightedBoxes:this.state.activeClueBoxes,setActiveClue:this.setActiveClue,activeClueBoxes:this.state.activeClueBoxes,setBoxInFocus:this.setBoxInFocus,boxInFocus:this.state.boxInFocus,dimensions:this.props.dimensions}))}}]),t}(n.Component)),te=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={across:[],down:[]},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,s){if(e!=this.props){var n=[],i=[];for(var a in this.props.clues){var r=this.props.clues[a];r.id=a,"across"===r.direction?n.push(r):i.push(r)}this.setState({across:n,down:i})}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"clue-lists"},i.a.createElement("div",{className:"clue-list-wrapper"},i.a.createElement("h2",null,"Across"),i.a.createElement("ol",{className:"clue-list"},this.state.across.map((function(t){return i.a.createElement(se,{key:t.id,clueID:t.id,clueText:t.clue,clueNumber:t.number,clueBoxes:t.boxes,clueDir:"across",setActiveClueBoxes:e.props.setActiveClueBoxes,setActiveClue:e.props.setActiveClue,isActive:e.props.activeClue.indexOf(t.id)>-1,setBoxInFocus:e.props.setBoxInFocus})})))),i.a.createElement("div",{className:"clue-list-wrapper"},i.a.createElement("h2",null,"Down"),i.a.createElement("ol",{className:"clue-list"},this.state.down.map((function(t){return i.a.createElement(se,{key:t.id,clueID:t.id,clueText:t.clue,clueNumber:t.number,clueBoxes:t.boxes,clueDir:"down",setActiveClueBoxes:e.props.setActiveClueBoxes,setActiveClue:e.props.setActiveClue,isActive:e.props.activeClue.indexOf(t.id)>-1,setBoxInFocus:e.props.setBoxInFocus})})))))}}]),t}(n.Component),se=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={active:e.isActive},s.handleClick=s.handleClick.bind(Object(p.a)(s)),s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,s){e!==this.props&&this.setState({active:this.props.isActive})}},{key:"handleClick",value:function(){var e=[];e.push(this.props.clueID),this.props.setActiveClueBoxes(this.props.clueBoxes),this.props.setActiveClue(e),"down"==this.props.clueDir?this.props.setBoxInFocus(this.props.clueBoxes[0]):this.props.setBoxInFocus(this.props.clueBoxes[this.props.clueBoxes.length-1])}},{key:"render",value:function(){return i.a.createElement("li",{className:"clue ".concat(this.state.active?"active":"")},i.a.createElement("button",{className:"clue-button",onClick:this.handleClick},i.a.createElement("span",{className:"clue-number"},this.props.clueNumber,"."),i.a.createElement("span",{className:"clue-text"},this.props.clueText)))}}]),t}(n.Component),ne=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).isBoxFilled=function(e){return!(null==s.props.grid.find((function(t){return t.id==e})).letter)},s.state={boxMatrix:[],boxes:[]},s.isBoxFilled=s.isBoxFilled.bind(Object(p.a)(s)),s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,s){var n=this;if(e!=this.props){for(var a=this.props.grid.map((function(e){var t=e.id,s=e.letter,a=e.clues,r=e.label;return i.a.createElement(ie,{key:t,id:t,letter:s,boxMatrix:n.state.boxMatrix,boxClues:a,label:r,allClues:n.props.allClues,isHighlighted:n.props.highlightedBoxes.indexOf(t)>-1,setActiveClueBoxes:n.props.setActiveClueBoxes,setActiveClue:n.props.setActiveClue,activeClueBoxes:n.props.activeClueBoxes,setBoxInFocus:n.props.setBoxInFocus,boxInFocus:n.props.boxInFocus,dimensions:n.props.dimensions,isBoxFilled:n.isBoxFilled})})),r=[],o=0;o<this.props.dimensions[1];o++){for(var h=[],l=0;l<this.props.dimensions[0];l++)h.push(a[o*this.props.dimensions[1]+l]);r.push(h)}this.setState({boxMatrix:r,boxes:a})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"crossword-board"},this.state.boxes)}}]),t}(n.Component),ie=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={highlight:e.isHighlighted,isInFocus:e.boxInFocus==s.props.id},s.handleFocus=s.handleFocus.bind(Object(p.a)(s)),s.uniKeyCode=s.uniKeyCode.bind(Object(p.a)(s)),s.uniKeyUp=s.uniKeyUp.bind(Object(p.a)(s)),s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,s){e!=this.props&&(this.props.boxInFocus==this.props.id&&this.textInput.focus(),this.setState({highlight:this.props.isHighlighted,isInFocus:this.props.isInFocus}))}},{key:"handleFocus",value:function(e){if(!this.props.activeClueBoxes.includes(this.props.id)){this.props.setActiveClue(this.props.boxClues);var t=[],s=!0,n=!1,i=void 0;try{for(var a,r=this.props.boxClues[Symbol.iterator]();!(s=(a=r.next()).done);s=!0){var o=a.value;t=t.concat(this.props.allClues[o].boxes)}}catch(h){n=!0,i=h}finally{try{s||null==r.return||r.return()}finally{if(n)throw i}}this.props.setActiveClueBoxes(t),this.props.setBoxInFocus(this.props.id)}}},{key:"uniKeyCode",value:function(e){var t=e.keyCode,s=this.props.id.charCodeAt(0)-65,n=parseInt(this.props.id.charAt(1));if(37==t){if(s>0){s-=1;var i=String.fromCharCode(s+65)+n;this.props.isBoxFilled(i)&&this.props.setBoxInFocus(i)}}else if(38==t){if(n>1){n-=1;var a=String.fromCharCode(s+65)+n;this.props.isBoxFilled(a)&&this.props.setBoxInFocus(a)}}else if(39==t){if(s<this.props.dimensions[0]-1){s+=1;var r=String.fromCharCode(s+65)+n;this.props.isBoxFilled(r)&&this.props.setBoxInFocus(r)}}else if(40==t&&n<=this.props.dimensions[1]){n+=1;var o=String.fromCharCode(s+65)+n;this.props.isBoxFilled(o)&&this.props.setBoxInFocus(o)}}},{key:"uniKeyUp",value:function(e){var t=e.keyCode,s=this.props.id.charCodeAt(0)-65,n=parseInt(this.props.id.charAt(1));if(t>=65&&t<=90)if("A"==this.props.boxClues[0].charAt(0)){if(s>0){s-=1;var i=String.fromCharCode(s+65)+n;this.props.isBoxFilled(i)&&this.props.setBoxInFocus(i)}}else if(n<this.props.dimensions[1]-1){n+=1;var a=String.fromCharCode(s+65)+n;this.props.isBoxFilled(a)&&this.props.setBoxInFocus(a)}}},{key:"render",value:function(){var e,t,s=this;return this.props.label&&(e=i.a.createElement("span",{className:"box-label"},this.props.label)),this.props.letter&&(t=i.a.createElement("input",{type:"text",maxLength:"1",className:"box-input ".concat(this.state.highlight?"highlight":""),onFocus:this.handleFocus,onKeyDown:this.uniKeyCode,onKeyUp:this.uniKeyUp,ref:function(e){s.textInput=e}})),i.a.createElement("div",{className:"box ".concat(this.props.letter?"":" blank")},e,t)}}]),t}(n.Component),ae={HORIZONTAL:1,VERTICAL:2,MAX_PASSES:3,MAX_RUNTIME:5e3,CENTER_FIRST:!1,UNSET:-1,_self:void 0,Grid:new Array,QuestionGrid:new Array,Words:new Array,QuestionList:new Array,bestFit:null,sErrors:"",lang:"he",SetLang:function(e){this.lang=e},Reset:function(){this.Grid=new Array,this.QuestionGrid=new Array,this.QuestionList=new Array},ResetComplete:function(){this.Reset(),this.Words=new Array,this.bestFit=null,this.sErrors=""},GetNumberOfWordGroups:function(){for(var e=0,t=0;t<this.Words.length;t++)this.Words[t].orphaned&&e++;return e},GetUnusedWords:function(){for(var e=new Array,t=0;t<this.Words.length;t++)null==this.Words[t].chosenPosition&&e.push(this.Words[t].word);return e},GetQuestionGrid:function(){return this.QuestionGrid},GetQuestionList:function(){return this.QuestionList},Create:function(e,t,s){var n,i=(new Date).getTime();this.ResetComplete(),this.bestFit=null;for(var a=0;a<s.length;a++)s[a].trim().length>1&&this.Words.push(new oe(s[a]));do{this.Reset(),this.Grid=new Array(t),this.QuestionGrid=new Array(t);for(var r=0;r<this.Grid.length;r++)this.Grid[r]=new Array(e),this.QuestionGrid[r]=new Array(e);for(r=0;r<this.Grid.length;r++)for(var o=0;o<this.Grid[0].length;o++)this.Grid[r][o]="",this.QuestionGrid[r][o]="";for(a=0;a<this.Words.length;a++)this.Words[a].Reset();this.SortByLength(this.Words);for(var h=1;h<=this.MAX_PASSES;h++)for(a=0;a<this.Words.length;a++)(this.Words[a].orphaned&&this.Words[a].posIndex==this.UNSET||1==h)&&(this.Words[a].Reset(),this.AddWord(this.Words[a],a,h));if(this.GenerateQuestionGrid(),null!=this.bestFit)this.bestFit.WordGroupsCount>this.GetNumberOfWordGroups()&&(this.bestFit=null,this.bestFit=new he(this.Grid.slice(),this.Words.slice(),this.QuestionGrid.slice(),this.QuestionList.slice(),this.GetNumberOfWordGroups()));else{a=this.GetNumberOfWordGroups();this.bestFit=new he(this.Grid.slice(),this.Words.slice(),this.QuestionGrid.slice(),this.QuestionList.slice(),this.GetNumberOfWordGroups())}n=(new Date).getTime()}while(n-i<this.MAX_RUNTIME&&this.GetNumberOfWordGroups()>1);return this.bestFit.WordGroupsCount<this.GetNumberOfWordGroups()&&(this.Reset(),this.Grid=this.bestFit.Grid,this.Words=this.bestFit.Words,this.QuestionGrid=this.bestFit.QuestionGrid,this.QuestionList=this.bestFit.QuestionList),this.Grid},GenerateQuestionGrid:function(){for(var e=1,t=0;t<this.Words.length;t++)if(this.Words[t].posIndex!=this.UNSET){if(this.Words[t].crossingPositions.length>0){var s={x:this.Words[t].crossingPositions[this.Words[t].posIndex].x,y:this.Words[t].crossingPositions[this.Words[t].posIndex].y,d:this.Words[t].crossingPositions[this.Words[t].posIndex].direction,clue:this.Words[t].clue};this.QuestionList.push(s)}else{s={x:this.Words[t].availablePositions[this.Words[t].posIndex].x,y:this.Words[t].availablePositions[this.Words[t].posIndex].y,d:this.Words[t].availablePositions[this.Words[t].posIndex].direction,num:0,clue:this.Words[t].clue};this.QuestionList.push(s)}e++}this.QuestionList=this.SortXwordQuestions(this.QuestionList);e=0;for(var n=0;n<this.QuestionList.length;n++)0==this.QuestionGrid[this.QuestionList[n].x][this.QuestionList[n].y].length?(e++,this.QuestionGrid[this.QuestionList[n].x][this.QuestionList[n].y]=e.toString(),this.QuestionList[n].num=e):this.QuestionList[n].num=e},SortXwordQuestions:function(e){return e.sort((function(e,t){var s=1;return e.y<t.y&&(s=-1),e.y==t.y&&e.x<t.x&&(s=-1),s})),e},SortByLength:function(e){return e.sort((function(e,t){return e.word.length<t.word.length})),e},AddWord:function(e,t,s){if(this.GetPositions(e,t,s),e.crossingPositions.length+e.availablePositions.length>0){var n,i=this.UNSET;if(e.crossingPositions.length>0?(i=Math.floor(Math.random()*e.crossingPositions.length),n=e.crossingPositions[i],e.orphaned=!1):(0==t&&1==s||s>=this.MAX_PASSES)&&(i=Math.floor(Math.random()*e.availablePositions.length),n=e.availablePositions[i]),i!=this.UNSET){e.posIndex=i,e.crossingPositions.length>0?e.chosenPosition=e.crossingPositions[e.posIndex]:e.availablePositions.length>0&&(e.chosenPosition=e.availablePositions[e.posIndex]);for(var a=e.word.split("").reverse().join(""),r=0;r<e.word.length;r++)n.direction==this.HORIZONTAL?this.Grid[n.x+r][n.y]=a.charAt(r):n.direction==this.VERTICAL&&(this.Grid[n.x][n.y+r]=e.word.charAt(r))}}},GetPositions:function(e,t,s){if(this.CENTER_FIRST&&0==t&&1==s){var n=void 0,i=e.word.split("").reverse().join(""),a=0,r=0,o=this.HORIZONTAL;if(this.Grid.length>this.Grid[0].length)a=Math.floor(this.Grid.length/2),r=Math.floor((this.Grid[0].length-e.word.length)/2),o=this.VERTICAL;else{a=Math.floor((this.Grid.length-e.word.length)/2),r=Math.floor(this.Grid[0].length/2);e.word;o=this.HORIZONTAL}void 0!==(n=this.TestPosition(i,a,r,o))&&e.availablePositions.push(n)}else for(a=0;a<this.Grid.length;a++)for(r=0;r<this.Grid[0].length;r++){n=void 0;void 0!==(n=this.TestPosition(e.word.split("").reverse().join(""),a,r,this.HORIZONTAL))&&(n.crossingPoint>0?e.crossingPositions.push(n):e.availablePositions.push(n)),void 0!==(n=this.TestPosition(e.word,a,r,this.VERTICAL))&&(n.crossingPoint>0?e.crossingPositions.push(n):e.availablePositions.push(n))}},TestPosition:function(e,t,s,n){var i=0;if(!this.CharBeforeFirstLetter(t,s,n)&&!this.CharAfterLastLetter(e.length,t,s,n)){if(n==this.HORIZONTAL){if(t+e.length>this.Grid.length)return;for(var a=0;a<e.length;a++){if(this.Grid[t+a][s].length>0&&this.Grid[t+a][s]!=e.charAt(a))return;if(this.AnotherWordOnThisLine(t+a,s,n))return;if(this.Grid[t+a][s]==e.charAt(a).toString())i++;else if(this.SidesHaveChars(t+a,s,n))return}}else if(n==this.VERTICAL){if(s+e.length>this.Grid[0].length)return;for(a=0;a<e.length;a++){if(this.Grid[t][s+a].length>0&&this.Grid[t][s+a]!=e.charAt(a))return;if(this.AnotherWordOnThisLine(t,s+a,n))return;if(this.Grid[t][s+a]==e.charAt(a).toString())i++;else if(this.SidesHaveChars(t,s+a,n))return}}return new re(t,s,n,i)}},CharAfterLastLetter:function(e,t,s,n){if(n==this.HORIZONTAL){if(t+e<this.Grid.length&&this.Grid[t+e][s].length>0)return!0}else if(n==this.VERTICAL&&s+e<this.Grid[0].length&&this.Grid[t][s+e].length>0)return!0;return!1},CharBeforeFirstLetter:function(e,t,s){if(s==this.HORIZONTAL){if(e-1>=0&&this.Grid[e-1][t].length>0)return!0}else if(s==this.VERTICAL&&t-1>=0&&this.Grid[e][t-1].length>0)return!0;return!1},AnotherWordOnThisLine:function(e,t,s){for(var n=0;n<this.Words.length;n++)if(null!=this.Words[n].chosenPosition&&this.Words[n].chosenPosition.x==e&&this.Words[n].chosenPosition.y==t&&this.Words[n].chosenPosition.direction==s)return!0;return!1},SidesHaveChars:function(e,t,s){if(s==this.HORIZONTAL){if(t-1>=0&&this.Grid[e][t-1].length>0)return!0;if(t+1<this.Grid[0].length&&this.Grid[e][t+1].length>0)return!0}else if(s==this.VERTICAL){if(e-1>=0&&this.Grid[e-1][t].length>0)return!0;if(e+1<this.Grid.length&&this.Grid[e+1][t].length>0)return!0}return!1}};function re(e,t,s,n){this.x=e,this.y=t,this.direction=s,this.crossingPoint=n}function oe(e){var t=(e=e.trim()).indexOf(",");t>0&&t<e.length-1?(this.word=e.substr(0,t),this.clue=e.substr(t+1)):(ae.sErrors+="Missing clue: "+e+"<br/>",this.word=e,this.clue=e),this.crossingPositions=new Array,this.availablePositions=new Array,this.orphaned=!0,this.posIndex=-1,this.chosenPosition=null,this.ResetArrays=function(){this.crossingPositions=new Array,this.availablePositions=new Array},this.Reset=function(){this.crossingPositions=new Array,this.availablePositions=new Array,this.orphaned=!0,this.posIndex=-1,this.chosenPosition=null}}function he(e,t,s,n,i){this.Grid=e,this.Words=t,this.QuestionGrid=s,this.QuestionList=n,this.WordGroupsCount=i}var le=[{word:"\u05d7\u05e9\u05d5\u05e0",clue:"sad month"},{word:"\u05d0\u05d3\u05e8",clue:"happy month"},{word:"\u05d5\u05d9\u05d0\u05de\u05e8\u05de\u05e9\u05d4",clue:"And God Said to Moses"},{word:"\u05de\u05db\u05d1\u05d9",clue:"The israeli basketball club"},{word:"\u05de\u05d9\u05dc\u05d4\u05d0\u05dc\u05d9",clue:"Who is with god? Come with me"},{word:"\u05ea\u05de\u05d5\u05d6",clue:"fast month"},{word:"\u05e0\u05d9\u05e1\u05e0",clue:"f\u05e8\u05e7\u05e7 month"},{word:"\u05d9\u05e8\u05de\u05d9\u05d4\u05d5",clue:"the boss"},{word:"\u05e1\u05d9\u05d1\u05e0",clue:"it just is"}],ce=["\u05d7\u05e9\u05d5\u05e0","\u05d0\u05d3\u05e8","\u05d5\u05d9\u05d0\u05de\u05e8\u05de\u05e9\u05d4","\u05de\u05db\u05d1\u05d9","\u05de\u05d9\u05dc\u05d4\u05d0\u05dc\u05d9","\u05ea\u05de\u05d5\u05d6","\u05e0\u05d9\u05e1\u05e0","\u05d9\u05e8\u05de\u05d9\u05d4\u05d5","\u05e1\u05d9\u05d1\u05e0"],ue=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).structure_Grid_Data=function(){for(var e=[],t={},n=1;n<=s.state.dimensions[0];n++)for(var i=0;i<s.state.dimensions[1];i++){var a=String.fromCharCode(65+i)+n;console.log("id : "+a),e.push(new de(a,null,null,null))}console.log(e);var r=1,o=0,h=0;s.state.gridMatrix.forEach((function(n){var i=[];Object(f.a)(n.clue).forEach((function(t,s){var a,l;1==n.d?(a=String.fromCharCode(65+n.x+s),l=n.y+1):(a=String.fromCharCode(65+n.x),l=n.y+1+s);var c=a+l;i.push(c),console.log("id2 : "+c);var u=e.find((function(e){return e.id===c}));u.letter=n.clue.charAt(s);var d=1==n.d?"Ac":"Dn";null!=u.clues?u.clues.push(d+n.num):u.clues=[d+n.num],1==n.d?s==n.clue.length-1&&(null!=u.label?(o=u.label,h++):(u.label=r-h,o=r-h)):0==s&&(null!=u.label?(o=u.label,h++):(u.label=r-h,o=r-h))}));var a=s.state.clueList.find((function(e){return e.word==n.clue})).clue,l=1==n.d?"across":"down",c=(1==n.d?"Ac":"Dn")+n.num;t[c]=new me(a,n.clue,l,o,i),r++})),s.setState({grid:e,clues:t})},ae.Create(11,11,ce),s.state={dimensions:[11,11],gridMatrix:ae.GetQuestionList(),clueList:le,grid:[],clues:{}},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.structure_Grid_Data()}},{key:"render",value:function(){return i.a.createElement("div",{className:"col-sm "},i.a.createElement(ee,{clues:this.state.clues,grid:this.state.grid,dimensions:this.state.dimensions}))}}]),t}(n.Component),de=function e(t,s,n,i){Object(h.a)(this,e),this.id=t,this.letter=s,this.clues=n,this.label=i},me=function e(t,s,n,i,a){Object(h.a)(this,e),this.clue=t,this.answer=s,this.direction=n,this.number=i,this.boxes=a},pe=function(e){function t(e){var s;return Object(h.a)(this,t),(s=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-sm "},i.a.createElement("h2",null,"About"),i.a.createElement(ue,null))}}]),t}(n.Component);s(56);var fe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Y,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/matchingGame",component:$}),i.a.createElement(o.a,{path:"/about",component:pe}),i.a.createElement(o.a,{path:"/",component:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(X.a,null,i.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.37201c72.chunk.js.map