import{_ as i,r as n,o as p,c as d,e as o,w as a,a as s,b as e,d as c}from"./app.065cb8ed.js";const F={},h=c('<h1 id="\u66F4\u591A\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u529F\u80FD" aria-hidden="true">#</a> \u66F4\u591A\u529F\u80FD</h1><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86\u6307\u4EE4\u7684\u5B9A\u4E49\u65B9\u5F0F\u548C\u89E6\u53D1\u673A\u5236\uFF0C\u4EE5\u53CA\u5982\u4F55\u7F16\u5199\u5E2E\u52A9\u548C\u7EC4\u7EC7\u591A\u7EA7\u6307\u4EE4\u3002\u4F46\u8FD9\u53EA\u662F\u4E00\u4E2A\u5F00\u59CB\uFF0C\u8BA9\u6211\u4EEC\u771F\u6B63\u5C06\u6307\u4EE4\u7CFB\u7EDF\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5E76\u670D\u52A1\u4E8E\u4E0D\u540C\u7684\u5E73\u53F0\u548C\u7528\u6237\u7FA4\u4F53\u65F6\uFF0C\u8FD8\u6709\u66F4\u591A\u80FD\u505A\u7684\u4E8B\u60C5\u3002</p><h2 id="\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6743\u9650\u7BA1\u7406</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8981\u542F\u7528\u6743\u9650\u7BA1\u7406\uFF0C\u4F60\u9700\u8981\u5B89\u88C5\u6570\u636E\u5E93\u652F\u6301\u3002</p></div><p>\u9664\u4E86\u4E4B\u524D\u4ECB\u7ECD\u8FC7\u7684\u4E24\u4E2A\u53C2\u6570\u5916\uFF0C<code>ctx.command()</code> \u8FD8\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u989D\u5916\u53C2\u6570\uFF0C\u5B83\u63D0\u4F9B\u4E86\u6307\u4EE4\u76F8\u5173\u7684\u914D\u7F6E\u9879\u3002</p><h3 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> authority</h3><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>authority</code> \u5C5E\u6027\u8BBE\u7F6E\u4E00\u4E2A\u6307\u4EE4\u7684\u8C03\u7528\u6743\u9650\uFF1A</p>',7),y=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"// \u8BBE\u7F6E echo \u547D\u4EE4\u7684\u8C03\u7528\u6743\u9650\u4E3A 2 \u7EA7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ctx."),s("span",{style:{color:"#A6E22E"}},"command"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'echo <message:text> \u8F93\u51FA\u6536\u5230\u7684\u4FE1\u606F'"),s("span",{style:{color:"#F8F8F2"}},", { authority: "),s("span",{style:{color:"#AE81FF"}},"2"),s("span",{style:{color:"#F8F8F2"}}," })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#88846F"}},"// \u8BBE\u7F6E -t \u9009\u9879\u7684\u8C03\u7528\u6743\u9650\u4E3A 3 \u7EA7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ."),s("span",{style:{color:"#A6E22E"}},"option"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'timeout'"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#E6DB74"}},"'-t <seconds> \u8BBE\u5B9A\u5EF6\u8FDF\u53D1\u9001\u7684\u65F6\u95F4'"),s("span",{style:{color:"#F8F8F2"}},", { authority: "),s("span",{style:{color:"#AE81FF"}},"3"),s("span",{style:{color:"#F8F8F2"}}," })")])])],-1),u=s("p",null,"\u8FD9\u6837\u4E00\u6765\uFF0C1 \u7EA7\u6216\u4EE5\u4E0B\u6743\u9650\u7684\u7528\u6237\u5C31\u65E0\u6CD5\u8C03\u7528 echo \u6307\u4EE4\uFF1B2 \u7EA7\u6743\u9650\u7528\u6237\u53EA\u80FD\u8C03\u7528 echo \u6307\u4EE4\u4F46\u4E0D\u80FD\u4F7F\u7528 -t \u53C2\u6570\uFF1B3 \u7EA7\u6216\u4EE5\u4E0A\u6743\u9650\u7684\u7528\u6237\u4E0D\u53D7\u9650\u5236\u3002\u5BF9\u4E8E\u53D7\u9650\u7684\u7528\u6237\uFF0C\u673A\u5668\u4EBA\u5C06\u4F1A\u56DE\u590D\u201C\u6743\u9650\u4E0D\u8DB3\u201D\u3002",-1),_=s("h2",{id:"\u901F\u7387\u9650\u5236",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u901F\u7387\u9650\u5236","aria-hidden":"true"},"#"),e(" \u901F\u7387\u9650\u5236")],-1),m={class:"custom-container tip"},E=s("p",{class:"custom-container-title"},"TIP",-1),x=s("h3",{id:"maxusage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#maxusage","aria-hidden":"true"},"#"),e(" maxUsage")],-1),g=s("p",null,"\u6709\u4E9B\u6307\u4EE4\uFF08\u4F8B\u5982\u7B7E\u5230\u62BD\u5361\u70B9\u8D5E\uFF0C\u9AD8\u6027\u80FD\u635F\u8017\u7684\u8BA1\u7B97\uFF0C\u9650\u5236\u6B21\u6570\u7684 API \u8C03\u7528\u7B49\uFF09\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u88AB\u65E0\u9650\u5236\u8C03\u7528\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u5929\u8BBF\u95EE\u6B21\u6570\u7684\u4E0A\u9650\uFF1A",-1),f=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"// \u8BBE\u7F6E lottery \u6307\u4EE4\u6BCF\u4EBA\u6BCF\u5929\u53EA\u80FD\u8C03\u7528 10 \u6B21")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ctx."),s("span",{style:{color:"#A6E22E"}},"command"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'lottery \u62BD\u5361'"),s("span",{style:{color:"#F8F8F2"}},", { maxUsage: "),s("span",{style:{color:"#AE81FF"}},"10"),s("span",{style:{color:"#F8F8F2"}}," })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#88846F"}},"// \u8BBE\u7F6E\u4F7F\u7528\u4E86 -s \u7684\u8C03\u7528\u4E0D\u8BA1\u5165\u603B\u6B21\u6570")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ."),s("span",{style:{color:"#A6E22E"}},"option"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'--show'"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#E6DB74"}},"'-s \u67E5\u770B\u5DF2\u7ECF\u62BD\u5230\u7684\u7269\u54C1\u5217\u8868'"),s("span",{style:{color:"#F8F8F2"}},", { notUsage: "),s("span",{style:{color:"#AE81FF"}},"true"),s("span",{style:{color:"#F8F8F2"}}," })")])])],-1),b=s("p",null,"\u8FD9\u6837\u4E00\u6765\uFF0C\u6240\u6709\u8BBF\u95EE lottery \u6307\u4EE4\u4E14\u4E0D\u542B -s \u9009\u9879\u7684\u8C03\u7528\u6B21\u6570\u4E0A\u9650\u4FBF\u88AB\u8BBE\u6210\u4E86 10 \u6B21\u3002\u5F53\u8D85\u51FA\u603B\u6B21\u6570\u540E\uFF0C\u673A\u5668\u4EBA\u5C06\u56DE\u590D\u201C\u8C03\u7528\u6B21\u6570\u5DF2\u8FBE\u4E0A\u9650\u201D\u3002",-1),k=s("h3",{id:"mininterval",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mininterval","aria-hidden":"true"},"#"),e(" minInterval")],-1),A=s("p",null,"\u6709\u4E9B\u6307\u4EE4\uFF08\u4F8B\u5982\u9AD8\u5F3A\u5EA6\u5237\u5C4F\uFF09\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u88AB\u77ED\u65F6\u95F4\u5185\u91CD\u590D\u8C03\u7528\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u6700\u77ED\u89E6\u53D1\u95F4\u9694\uFF1A",-1),B=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { Time } "),s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E6DB74"}},"'koishi'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"// \u8BBE\u7F6E lottery \u6307\u4EE4\u6BCF 60 \u79D2\u53EA\u80FD\u8C03\u7528 1 \u6B21")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ctx."),s("span",{style:{color:"#A6E22E"}},"command"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'lottery'"),s("span",{style:{color:"#F8F8F2"}},", { minInterval: Time.minute })")])])],-1),v=s("p",null,[e("\u8FD9\u6837\u4E00\u6765\uFF0Clottery \u6307\u4EE4\u88AB\u8C03\u7528\u540E 60 \u79D2\u5185\uFF0C\u5982\u679C\u518D\u6B21\u88AB\u8C03\u7528\uFF0C\u5C06\u4F1A\u63D0\u793A\u201C\u8C03\u7528\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u201D\u3002\u5F53\u7136\uFF0C"),s("code",null,"notUsage"),e(" \u5BF9 "),s("code",null,"minInterval"),e(" \u4E5F\u540C\u6837\u751F\u6548\u3002")],-1),D={id:"usagename",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#usagename","aria-hidden":"true"},"#",-1),N=s("p",null,[e("\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u8BA9\u591A\u4E2A\u6307\u4EE4\u5171\u540C\u540C\u4E00\u4E2A\u8C03\u7528\u9650\u5236\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),s("code",null,"usageName"),e(" \u6765\u5B9E\u73B0\uFF1A")],-1),w=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ctx."),s("span",{style:{color:"#A6E22E"}},"command"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'lottery \u5E38\u9A7B\u62BD\u5361'"),s("span",{style:{color:"#F8F8F2"}},", { maxUsage: "),s("span",{style:{color:"#AE81FF"}},"10"),s("span",{style:{color:"#F8F8F2"}}," })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ctx."),s("span",{style:{color:"#A6E22E"}},"command"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},"'accurate \u7CBE\u51C6\u62BD\u5361'"),s("span",{style:{color:"#F8F8F2"}},", { maxUsage: "),s("span",{style:{color:"#AE81FF"}},"10"),s("span",{style:{color:"#F8F8F2"}},", usageName: "),s("span",{style:{color:"#E6DB74"}},"'lottery'"),s("span",{style:{color:"#F8F8F2"}}," })")])])],-1),T=s("p",null,"\u8FD9\u6837\u4E00\u6765\uFF0C\u5C31\u80FD\u9650\u5236\u6BCF\u5929\u7684 lottery \u548C accurate \u6307\u4EE4\u7684\u8C03\u7528\u6B21\u6570\u4E4B\u548C\u4E0D\u8D85\u8FC7 10 \u4E86\u3002",-1),U=s("h2",{id:"\u4FEE\u6539\u5DF2\u6709\u6307\u4EE4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4FEE\u6539\u5DF2\u6709\u6307\u4EE4","aria-hidden":"true"},"#"),e(" \u4FEE\u6539\u5DF2\u6709\u6307\u4EE4")],-1),P={class:"custom-container tip"},V=s("p",{class:"custom-container-title"},"TIP",-1),K=c('<h2 id="\u591A\u8BED\u8A00\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u652F\u6301" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u652F\u6301</h2><h2 id="\u5E73\u53F0\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u96C6\u6210" aria-hidden="true">#</a> \u5E73\u53F0\u96C6\u6210</h2><h2 id="\u6A21\u7CCA\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u7CCA\u5339\u914D" aria-hidden="true">#</a> \u6A21\u7CCA\u5339\u914D</h2><p>\u5728\u65E5\u5E38\u7684\u4F7F\u7528\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u96BE\u514D\u4F1A\u9047\u5230\u6253\u9519\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6 Koishi \u8FD8\u4F1A\u81EA\u52A8\u6839\u636E\u76F8\u8FD1\u7684\u6307\u4EE4\u540D\u8FDB\u884C\u7EA0\u9519\u63D0\u9192\uFF1A</p>',4);function j(C,L){const l=n("panel-view"),t=n("RouterLink"),r=n("Badge");return p(),d("div",null,[h,o(l,{class:"code",title:"",style:{}},{default:a(()=>[y]),_:1}),u,_,s("div",m,[E,s("p",null,[e("\u8981\u542F\u7528\u901F\u7387\u9650\u5236\uFF0C\u4F60\u9700\u8981\u5B89\u88C5\u6570\u636E\u5E93\u652F\u6301\u548C\u5B98\u65B9\u63D2\u4EF6 "),o(t,{to:"/plugins/accessibility/rate-limit.html"},{default:a(()=>[e("@koishijs/plugin-rate-limit")]),_:1}),e("\u3002")])]),x,g,o(l,{class:"code",title:"",style:{}},{default:a(()=>[f]),_:1}),b,k,A,o(l,{class:"code",title:"",style:{}},{default:a(()=>[B]),_:1}),v,s("h3",D,[I,e(" usageName "),o(r,{text:"beta",type:"warning"})]),N,o(l,{class:"code",title:"",style:{}},{default:a(()=>[w]),_:1}),T,U,s("div",P,[V,s("p",null,[e("\u8981\u4FEE\u6539\u5DF2\u6709\u6307\u4EE4\uFF0C\u4F60\u9700\u8981\u5B89\u88C5\u5B98\u65B9\u63D2\u4EF6 "),o(t,{to:"/plugins/accessibility/commands.html"},{default:a(()=>[e("@koishijs/plugin-commands")]),_:1}),e("\u3002")])]),K,o(l,{messages:[["Alice","ecko hello"],["Koishi","\u6CA1\u6709\u6B64\u547D\u4EE4\u3002\u4F60\u8981\u627E\u7684\u662F\u4E0D\u662F\u201Cecho\u201D\uFF1F\u53D1\u9001\u7A7A\u884C\u6216\u53E5\u53F7\u4EE5\u8C03\u7528\u63A8\u6D4B\u7684\u6307\u4EE4\u3002"],["Alice","."],["Koishi","hello"]]},null,8,["messages"]),s("p",null,[e("\u5982\u679C\u60F3\u8C03\u6574\u6A21\u7CCA\u5339\u914D\u7684\u7A0B\u5EA6\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u9879 "),o(t,{to:"/api/core/app.html#options-minsimilarity"},{default:a(()=>[e("minSimilarity")]),_:1}),e("\u3002\u662F\u4E0D\u662F\u5F88\u65B9\u4FBF\u5462\uFF1F")])])}const S=i(F,[["render",j],["__file","more.html.vue"]]);export{S as default};
