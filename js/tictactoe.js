const _0xe70a49=_0x2888;function _0x5b22(){const _0x459e28=['textContent','.box','show','length','310473biTDix','floor','push','remove','4816141ymBlXJ','1hQWAkt','classList','button','add','random','addEventListener','.options\x20.playerX','class','innerHTML','Match\x20has\x20been\x20drawn!','section\x20boxes','toFixed','load','Player\x20<p>','pointerEvents','target','.select-box','7rhVXgu','contains','50UjcQhI','249770ZNehqw','1372744wSVaZE','click','4017qJrtOI','604GJngHe','.play-board','.players','style','382906gjQJqD','hide','active','1113150geYutA','none','setAttribute','.won-text','childElementCount','player','querySelector','players\x20active\x20player'];_0x5b22=function(){return _0x459e28;};return _0x5b22();}(function(_0x520852,_0x47caf4){const _0x351500=_0x2888,_0x3f0d06=_0x520852();while(!![]){try{const _0x343e64=parseInt(_0x351500(0x110))/0x1*(-parseInt(_0x351500(0xfc))/0x2)+parseInt(_0x351500(0xf7))/0x3*(parseInt(_0x351500(0xf8))/0x4)+parseInt(_0x351500(0xf4))/0x5+parseInt(_0x351500(0xff))/0x6*(parseInt(_0x351500(0xf1))/0x7)+parseInt(_0x351500(0xf5))/0x8+parseInt(_0x351500(0x10b))/0x9*(parseInt(_0x351500(0xf3))/0xa)+-parseInt(_0x351500(0x10f))/0xb;if(_0x343e64===_0x47caf4)break;else _0x3f0d06['push'](_0x3f0d06['shift']());}catch(_0x93ffb5){_0x3f0d06['push'](_0x3f0d06['shift']());}}}(_0x5b22,0x2538e));const oSvg='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20512\x20512\x22><path\x20d=\x22M512\x20256C512\x20397.4\x20397.4\x20512\x20256\x20512C114.6\x20512\x200\x20397.4\x200\x20256C0\x20114.6\x20114.6\x200\x20256\x200C397.4\x200\x20512\x20114.6\x20512\x20256zM256\x2048C141.1\x2048\x2048\x20141.1\x2048\x20256C48\x20370.9\x20141.1\x20464\x20256\x20464C370.9\x20464\x20464\x20370.9\x20464\x20256C464\x20141.1\x20370.9\x2048\x20256\x2048z\x22/></svg>',xSvg='<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20320\x20512\x22><path\x20d=\x22M310.6\x20361.4c12.5\x2012.5\x2012.5\x2032.75\x200\x2045.25C304.4\x20412.9\x20296.2\x20416\x20288\x20416s-16.38-3.125-22.62-9.375L160\x20301.3L54.63\x20406.6C48.38\x20412.9\x2040.19\x20416\x2032\x20416S15.63\x20412.9\x209.375\x20406.6c-12.5-12.5-12.5-32.75\x200-45.25l105.4-105.4L9.375\x20150.6c-12.5-12.5-12.5-32.75\x200-45.25s32.75-12.5\x2045.25\x200L160\x20210.8l105.4-105.4c12.5-12.5\x2032.75-12.5\x2045.25\x200s12.5\x2032.75\x200\x2045.25l-105.4\x20105.4L310.6\x20361.4z\x22/></svg>',selectBox=document[_0xe70a49(0x105)](_0xe70a49(0xf0)),selectBtnX=selectBox['querySelector'](_0xe70a49(0xe6)),selectBtnO=selectBox[_0xe70a49(0x105)]('.options\x20.playerO'),playBoard=document['querySelector'](_0xe70a49(0xf9)),players=document['querySelector'](_0xe70a49(0xfa)),allBox=document['querySelectorAll'](_0xe70a49(0xea)),resultBox=document['querySelector']('.result-box'),wonText=resultBox[_0xe70a49(0x105)](_0xe70a49(0x102)),replayBtn=resultBox[_0xe70a49(0x105)](_0xe70a49(0x112));window[_0xe70a49(0xe5)](_0xe70a49(0xec),()=>{const _0x452787=_0xe70a49;for(let _0x58815a=0x0;_0x58815a<allBox[_0x452787(0x10a)];_0x58815a++){allBox[_0x58815a][_0x452787(0xe5)](_0x452787(0xf6),_0x971bc1=>{const _0x5db7b1=_0x452787;clickedBox(_0x971bc1[_0x5db7b1(0xef)]);});}}),selectBtnX['addEventListener']('click',()=>{const _0x3c4dee=_0xe70a49;selectBox[_0x3c4dee(0x111)][_0x3c4dee(0x113)](_0x3c4dee(0xfd)),playBoard[_0x3c4dee(0x111)][_0x3c4dee(0x113)](_0x3c4dee(0x109));}),selectBtnO['addEventListener'](_0xe70a49(0xf6),()=>{const _0x11c1f1=_0xe70a49;selectBox[_0x11c1f1(0x111)]['add'](_0x11c1f1(0xfd)),playBoard[_0x11c1f1(0x111)]['add'](_0x11c1f1(0x109)),players[_0x11c1f1(0x101)](_0x11c1f1(0xe7),_0x11c1f1(0x106));});let playerSign='X',runBot=!![];function clickedBox(_0x545fea){const _0xd7869e=_0xe70a49;players[_0xd7869e(0x111)][_0xd7869e(0xf2)]('player')?(playerSign='O',_0x545fea['innerHTML']=oSvg,players[_0xd7869e(0x111)]['remove'](_0xd7869e(0xfe)),_0x545fea['setAttribute']('id',playerSign)):(_0x545fea[_0xd7869e(0xe8)]=xSvg,_0x545fea['setAttribute']('id',playerSign),players[_0xd7869e(0x111)]['add'](_0xd7869e(0xfe)));selectWinner(),_0x545fea[_0xd7869e(0xfb)][_0xd7869e(0xee)]='none',playBoard[_0xd7869e(0xfb)]['pointerEvents']=_0xd7869e(0x100);let _0x1937d3=(Math['random']()*0x3e8+0xc8)[_0xd7869e(0xeb)]();setTimeout(()=>{bot(runBot);},_0x1937d3);}function bot(){const _0x3cba72=_0xe70a49;let _0x1a04e7=[];if(runBot){playerSign='O';for(let _0x16a6bf=0x0;_0x16a6bf<allBox['length'];_0x16a6bf++){allBox[_0x16a6bf][_0x3cba72(0x103)]==0x0&&_0x1a04e7[_0x3cba72(0x10d)](_0x16a6bf);}let _0x1de785=_0x1a04e7[Math[_0x3cba72(0x10c)](Math[_0x3cba72(0xe4)]()*_0x1a04e7['length'])];_0x1a04e7['length']>0x0&&(players[_0x3cba72(0x111)][_0x3cba72(0xf2)](_0x3cba72(0x104))?(playerSign='X',allBox[_0x1de785][_0x3cba72(0xe8)]=xSvg,allBox[_0x1de785][_0x3cba72(0x101)]('id',playerSign),players['classList'][_0x3cba72(0x113)](_0x3cba72(0xfe))):(allBox[_0x1de785][_0x3cba72(0xe8)]=oSvg,players['classList'][_0x3cba72(0x10e)]('active'),allBox[_0x1de785]['setAttribute']('id',playerSign)),selectWinner()),allBox[_0x1de785][_0x3cba72(0xfb)][_0x3cba72(0xee)]=_0x3cba72(0x100),playBoard['style'][_0x3cba72(0xee)]='auto',playerSign='X';}}function getIdVal(_0x2ff6c0){const _0x4ca028=_0xe70a49;return document['querySelector'](_0x4ca028(0x108)+_0x2ff6c0)['id'];}function checkIdSign(_0x44d2be,_0x5c8153,_0x7e7df,_0x2cb6cc){if(getIdVal(_0x44d2be)==_0x2cb6cc&&getIdVal(_0x5c8153)==_0x2cb6cc&&getIdVal(_0x7e7df)==_0x2cb6cc)return!![];}function selectWinner(){const _0x50e9ab=_0xe70a49;checkIdSign(0x1,0x2,0x3,playerSign)||checkIdSign(0x4,0x5,0x6,playerSign)||checkIdSign(0x7,0x8,0x9,playerSign)||checkIdSign(0x1,0x4,0x7,playerSign)||checkIdSign(0x2,0x5,0x8,playerSign)||checkIdSign(0x3,0x6,0x9,playerSign)||checkIdSign(0x1,0x5,0x9,playerSign)||checkIdSign(0x3,0x5,0x7,playerSign)?(runBot=![],bot(runBot),setTimeout(()=>{const _0x47623e=_0x2888;resultBox['classList'][_0x47623e(0x113)](_0x47623e(0x109)),playBoard[_0x47623e(0x111)]['remove']('show');},0x2bc),wonText[_0x50e9ab(0xe8)]=_0x50e9ab(0xed)+playerSign+'</p>\x20won\x20the\x20game!'):getIdVal(0x1)!=''&&getIdVal(0x2)!=''&&getIdVal(0x3)!=''&&getIdVal(0x4)!=''&&getIdVal(0x5)!=''&&getIdVal(0x6)!=''&&getIdVal(0x7)!=''&&getIdVal(0x8)!=''&&getIdVal(0x9)!=''&&(runBot=![],bot(runBot),setTimeout(()=>{const _0x4240ff=_0x50e9ab;resultBox[_0x4240ff(0x111)][_0x4240ff(0x113)]('show'),playBoard[_0x4240ff(0x111)][_0x4240ff(0x10e)](_0x4240ff(0x109));},0x2bc),wonText[_0x50e9ab(0x107)]=_0x50e9ab(0xe9));}function _0x2888(_0x27dc8f,_0x3c70c3){const _0x5b22d1=_0x5b22();return _0x2888=function(_0x2888e3,_0x50df66){_0x2888e3=_0x2888e3-0xe4;let _0x7783de=_0x5b22d1[_0x2888e3];return _0x7783de;},_0x2888(_0x27dc8f,_0x3c70c3);}replayBtn['addEventListener'](_0xe70a49(0xf6),()=>{refreshPage();});