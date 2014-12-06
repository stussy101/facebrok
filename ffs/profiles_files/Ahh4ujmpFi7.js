/*!CK:1052189713!*//*1416196326,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xiSec"]); }

/**
 * @providesModule sha256
 * @preserve-header
 *
 * Copyright (c) 2003, Christoph Bichlmeier
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */__d("sha256",["str2rstr"],function(a,b,c,d,e,f,g){function h(fa,ga){return ((ga>>>fa)|(ga<<(32-fa)));}function i(fa,ga,ha){return ((fa&ga)^(~fa&ha));}function j(fa,ga,ha){return ((fa&ga)^(fa&ha)^(ga&ha));}function k(fa){return (h(2,fa)^h(13,fa)^h(22,fa));}function l(fa){return (h(6,fa)^h(11,fa)^h(25,fa));}function m(fa){return (h(7,fa)^h(18,fa)^(fa>>>3));}function n(fa){return (h(17,fa)^h(19,fa)^(fa>>>10));}function o(fa,ga){return (fa[ga&15]+=n(fa[(ga+14)&15])+fa[(ga+9)&15]+m(fa[(ga+1)&15]));}var p=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),q=new Array(8),r=new Array(2),s=new Array(64),t=new Array(16),u="0123456789abcdef";function v(fa,ga){var ha=(fa&65535)+(ga&65535),ia=(fa>>16)+(ga>>16)+(ha>>16);return (ia<<16)|(ha&65535);}function w(){r[0]=r[1]=0;q[0]=1779033703;q[1]=3144134277;q[2]=1013904242;q[3]=2773480762;q[4]=1359893119;q[5]=2600822924;q[6]=528734635;q[7]=1541459225;}function x(){var fa,ga,ha,ia,ja,ka,la,ma,na,oa;fa=q[0];ga=q[1];ha=q[2];ia=q[3];ja=q[4];ka=q[5];la=q[6];ma=q[7];for(var pa=0;pa<16;pa++)t[pa]=((s[(pa<<2)+3])|(s[(pa<<2)+2]<<8)|(s[(pa<<2)+1]<<16)|(s[pa<<2]<<24));for(var qa=0;qa<64;qa++){na=ma+l(ja)+i(ja,ka,la)+p[qa];if(qa<16){na+=t[qa];}else na+=o(t,qa);oa=k(fa)+j(fa,ga,ha);ma=la;la=ka;ka=ja;ja=v(ia,na);ia=ha;ha=ga;ga=fa;fa=v(na,oa);}q[0]+=fa;q[1]+=ga;q[2]+=ha;q[3]+=ia;q[4]+=ja;q[5]+=ka;q[6]+=la;q[7]+=ma;}function y(fa,ga){var ha,ia,ja=0;ia=((r[0]>>3)&63);var ka=(ga&63);if((r[0]+=(ga<<3))<(ga<<3))r[1]++;r[1]+=(ga>>29);for(ha=0;ha+63<ga;ha+=64){for(var la=ia;la<64;la++)s[la]=fa.charCodeAt(ja++);x();ia=0;}for(var la=0;la<ka;la++)s[la]=fa.charCodeAt(ja++);}function z(){var fa=((r[0]>>3)&63);s[fa++]=128;if(fa<=56){for(var ga=fa;ga<56;ga++)s[ga]=0;}else{for(var ga=fa;ga<64;ga++)s[ga]=0;x();for(var ga=0;ga<56;ga++)s[ga]=0;}s[56]=(r[1]>>>24)&255;s[57]=(r[1]>>>16)&255;s[58]=(r[1]>>>8)&255;s[59]=r[1]&255;s[60]=(r[0]>>>24)&255;s[61]=(r[0]>>>16)&255;s[62]=(r[0]>>>8)&255;s[63]=r[0]&255;x();}function aa(){var fa=0,ga=new Array(32);for(var ha=0;ha<8;ha++){ga[fa++]=((q[ha]>>>24)&255);ga[fa++]=((q[ha]>>>16)&255);ga[fa++]=((q[ha]>>>8)&255);ga[fa++]=(q[ha]&255);}return ga;}function ba(){var fa=new String();for(var ga=0;ga<8;ga++)for(var ha=28;ha>=0;ha-=4)fa+=u.charAt((q[ga]>>>ha)&15);return fa;}function ca(fa){var ga=0;for(var ha=0;ha<8;ha++)for(var ia=28;ia>=0;ia-=4)fa[ga++]=u.charCodeAt((q[ha]>>>ia)&15);}function da(fa,ga){w();y(fa,fa.length);z();if(ga){ca(ga);}else return ba();}function ea(fa,ga,ha){if(fa===null||fa===(void 0))return null;ga=(typeof ga=='undefined')?true:ga;if(ga)fa=g(fa);return da(fa,ha);}e.exports=ea;},null);
__d("QuickSandHeader",["sha256","Int64"],function(a,b,c,d,e,f,g,h){function i(j,k){"use strict";this.$QuickSandHeader0=1<<k;this.$QuickSandHeader1=this.$QuickSandHeader0/2;this.$QuickSandHeader2=h.fromInt(this.$QuickSandHeader1-1);this.$QuickSandHeader3=[];this.$QuickSandHeader4=0;this.$QuickSandHeader5=0;this.$QuickSandHeader6=0;this.$QuickSandHeader7=0;var l=g(j),m=this.$QuickSandHeader8(this.$QuickSandHeader9(l)),n=this.$QuickSandHeader8(this.$QuickSandHeader9(l).slice(8));this.$QuickSandHeader3.push(m.xor(h.fromString('736f6d6570736575',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('646f72616e646f6d',16)));this.$QuickSandHeader3.push(m.xor(h.fromString('6c7967656e657261',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('7465646279746573',16)));}i.prototype.sipEdge=function(j){"use strict";return [this.sipNode(j,0),this.sipNode(j,1)];};i.prototype.sipNode=function(j,k){"use strict";return this.$QuickSandHeadera(2*j+k).and(this.$QuickSandHeader2).toInt();};i.prototype.getSize=function(){"use strict";return this.$QuickSandHeader0;};i.prototype.getHalfSize=function(){"use strict";return this.$QuickSandHeader1;};i.prototype.$QuickSandHeaderb=function(j,k){"use strict";return j.shiftLeft(k).or(j.shiftRightUnsigned(64-k));};i.prototype.$QuickSandHeader8=function(j){"use strict";var k=new h.fromInt(j[0]),l=h.fromInt(j[1]).shiftLeft(8),m=h.fromInt(j[2]).shiftLeft(16),n=h.fromInt(j[3]).shiftLeft(24),o=h.fromInt(j[4]).shiftLeft(32),p=h.fromInt(j[5]).shiftLeft(40),q=h.fromInt(j[6]).shiftLeft(48),r=h.fromInt(j[7]).shiftLeft(56);return k.or(l).or(m).or(n).or(o).or(p).or(q).or(r);};i.prototype.$QuickSandHeaderc=function(){"use strict";this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader5);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,13);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,16);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader4);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader6);this.$QuickSandHeader4=this.$QuickSandHeaderb(this.$QuickSandHeader4,32);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader5);this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,17);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,21);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader6);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader4);this.$QuickSandHeader6=this.$QuickSandHeaderb(this.$QuickSandHeader6,32);};i.prototype.$QuickSandHeader9=function(j){"use strict";for(var k=[],l=0;l<j.length;l+=2)k.push(parseInt(j.substr(l,2),16));return k;};i.prototype.$QuickSandHeadera=function(j){"use strict";var k=h.fromInt(j);this.$QuickSandHeader4=this.$QuickSandHeader3[0];this.$QuickSandHeader5=this.$QuickSandHeader3[1];this.$QuickSandHeader6=this.$QuickSandHeader3[2];this.$QuickSandHeader7=this.$QuickSandHeader3[3].xor(k);for(var l=0;l<2;l++)this.$QuickSandHeaderc();this.$QuickSandHeader4=this.$QuickSandHeader4.xor(k);this.$QuickSandHeader6=this.$QuickSandHeader6.xor(h.fromString('ff',16));for(l=0;l<4;l++)this.$QuickSandHeaderc();return this.$QuickSandHeader4.xor(this.$QuickSandHeader5).xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7);};e.exports=i;},null);
__d("QuickSandSolver",["Base64","Form","QuickSandHeader","sha256"],function(a,b,c,d,e,f,g,h,i,j){var k={solveAndUpdateForm:function(l,m,n,o,p,q,r){var s=JSON.stringify([this.solve(l,m,n,o,p),r]),t=document.getElementById(q);h.createHiddenInputs({qsstamp:g.encode(s)},t);},solve:function(l,m,n,o,p){var q=[],r=m;for(var s=0;s<l;s++){q.push(k.solveOneIteration(r,n,o,p));r=k.hashList(q[s]);}return q;},solveOneIteration:function(l,m,n,o){var p=8192,q=new i(l,m),r=o*q.getSize()/100,s=[],t=[],u=[];for(var v=0;v<r;v++){var w=q.sipEdge(v),x=w[0],y=w[1];x+=1;y+=1+q.getHalfSize();var z=s[x],aa=s[y];if(z==y||aa==x)continue;t[0]=x;u[0]=y;var ba=k.path(z,t,s,p),ca=k.path(aa,u,s,p);if(t[ba]==u[ca]){var da=Math.min(ba,ca);for(ba-=da,ca-=da;t[ba]!=u[ca];ba++,ca++);var ea=ba+ca+1;if(ea==n)return k.recoverSolution(ba,ca,t,u,q,n,r);continue;}if(ba<ca){while(ba--)s[t[ba+1]]=t[ba];s[x]=y;}else{while(ca--)s[u[ca+1]]=u[ca];s[y]=x;}}return [];},path:function(l,m,n,o){var p=0;for(p=0;l;l=n[l]){if(++p>=o){while(p--&&m[p]!=l);if(p<0){throw "Maximum path length was exceeded";}else throw "Illegal cycle has occured";}m[p]=l;}return p;},recoverSolution:function(l,m,n,o,p,q,r){var s=function(){};s.prototype.add=function(y){this[y]=true;};s.prototype.remove=function(y){delete this[y];};var t=[],u=new s();u.add([n[0],o[0]]);while(l--)u.add([n[(l+1)&~1],n[(l|1)]]);while(m--)u.add([o[m|1],o[(m+1)&~1]]);var v=0;for(var w=0;w<r;w++){var x=[1+p.sipNode(w,0),1+p.getHalfSize()+p.sipNode(w,1)];if(x in u){t[v++]=w;u.remove(x);}}return t;},hashList:function(l){var m=l.join('-');return j(m);}};e.exports=k;},null);