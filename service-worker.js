if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const t=s=>l(s,a),u={module:{uri:a},exports:n,require:t};e[a]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(r(...s),n)))}}define(["./workbox-d249b2c8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"cf7b141c609467e55fb14a9d59ae7fc1"},{url:"about/contribute/docs.html",revision:"53ad0603fc3cea2c54c0f7351bc18bc6"},{url:"about/contribute/structure.html",revision:"faf848a30e6fcd9792199952c906181b"},{url:"about/history.html",revision:"459f5297d040870540f4b2768324dc07"},{url:"about/migration.html",revision:"2e5af2b649869271004f83fee864a41f"},{url:"about/releases/v4.1.html",revision:"ad3ec5e5dbd97da357a20735953dfc13"},{url:"about/releases/v4.2.html",revision:"3ceecd64ca3623803b94b46f2c050db5"},{url:"about/releases/v4.3.html",revision:"50dedf74b9618b7d2b99a17f95650db5"},{url:"about/releases/v4.4.html",revision:"89a3f7bcda3a6782f520bbae1f967e38"},{url:"about/releases/v4.5.html",revision:"df8cb48ca4c91996b00c15763419eb68"},{url:"about/releases/v4.6.html",revision:"f3b03e37d286a4e4e21f1594b421e89e"},{url:"about/releases/v4.7.html",revision:"dd296e10d23ba553b2e8acd35fddfa91"},{url:"about/releases/v4.8.html",revision:"3bc9ab362ea248f0175fedd75b25cbea"},{url:"api/core/adapter.html",revision:"7eb137d84723ed212270c089d90e0ba5"},{url:"api/core/app.html",revision:"19681c181e9bb57fb8e0cc82064d2820"},{url:"api/core/bot.html",revision:"ce756210e302f7e956160fa3eeddba12"},{url:"api/core/command.html",revision:"13389dc42557cfca440a62a2cec56fbd"},{url:"api/core/context.html",revision:"025d66b2a2282fd4932c2e06c4b6fdb8"},{url:"api/core/events.html",revision:"46155900d54c9b8c3dddcbfc59f854d8"},{url:"api/core/session.html",revision:"2b17c8d3673d74761ef64e55fbc32a54"},{url:"api/database/built-in.html",revision:"7399546e997ed454910b7a114c66e35f"},{url:"api/database/database.html",revision:"8aa7f024192b62d2c1952a0d7a6f259c"},{url:"api/database/evaluation.html",revision:"c5ad64cdb54b26658e6650a6e6ee398d"},{url:"api/database/model.html",revision:"5c5e09b1e6c1d8d006e76316bb501329"},{url:"api/database/query.html",revision:"62ae8bfc336a3376177d783309fb76d8"},{url:"api/glossary.html",revision:"61864c46f05cb8b233e750fb55490f61"},{url:"api/index.html",revision:"ab72a63584bf911319568baf56c1ac40"},{url:"api/service/assets.html",revision:"611146ec1b514f03aed472d660631fdf"},{url:"api/service/bots.html",revision:"96715265840595899010612a12948309"},{url:"api/service/http.html",revision:"3cab0c19d50e290334c887d28053f95c"},{url:"api/service/i18n.html",revision:"2da8b350616be216e8a3650bf513de1f"},{url:"api/service/lifecycle.html",revision:"3925e673e67ca7741a11b6868874df08"},{url:"api/service/logger.html",revision:"5b007d9d676c9481de36761640ffd6c6"},{url:"api/service/registry.html",revision:"8c209342a541680ec37bc69f23090f3e"},{url:"api/service/router.html",revision:"fe8ee732841159812aa5c4da37c078d8"},{url:"api/service/selector.html",revision:"18cd39634f7ce375dae65daf39c653bd"},{url:"api/utils/logger.html",revision:"f193c6f1dbf092b372a1b492b36ba2df"},{url:"api/utils/misc.html",revision:"e7418dcb004756903ba681385feef336"},{url:"api/utils/observer.html",revision:"242acb8496d680090f153a6d84c9bf3d"},{url:"api/utils/schema.html",revision:"3cda7be080db50732a4195e86b7a9600"},{url:"api/utils/segment.html",revision:"eab80552ddbd918475c9fd3c9df1bc99"},{url:"app-lifecycle.png",revision:"719c2e240dbc39c4380d98912e815214"},{url:"assets/404.html.98e87f94.js",revision:null},{url:"assets/404.html.ea7bdb7b.js",revision:null},{url:"assets/adapter.html.0b022b7e.js",revision:null},{url:"assets/adapter.html.115f0d90.js",revision:null},{url:"assets/adapter.html.5076bfa2.js",revision:null},{url:"assets/adapter.html.621c7fed.js",revision:null},{url:"assets/addon.html.16b43620.js",revision:null},{url:"assets/addon.html.42541936.js",revision:null},{url:"assets/admin.html.81fa29d1.js",revision:null},{url:"assets/admin.html.8d4a2df7.js",revision:null},{url:"assets/adventure.html.320f5a7b.js",revision:null},{url:"assets/adventure.html.fcd319c5.js",revision:null},{url:"assets/api.html.5480dc63.js",revision:null},{url:"assets/api.html.738266c4.js",revision:null},{url:"assets/app.065cb8ed.js",revision:null},{url:"assets/app.html.4bc8cfde.js",revision:null},{url:"assets/app.html.f5940f6d.js",revision:null},{url:"assets/assets.html.10f4f157.js",revision:null},{url:"assets/assets.html.a4222f66.js",revision:null},{url:"assets/auth.html.19e4b558.js",revision:null},{url:"assets/auth.html.6e49d742.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/bind.html.684528af.js",revision:null},{url:"assets/bind.html.d18e5c8e.js",revision:null},{url:"assets/binding.html.a89d5dbf.js",revision:null},{url:"assets/binding.html.d7ecb6d6.js",revision:null},{url:"assets/boilerplate.html.2e38a214.js",revision:null},{url:"assets/boilerplate.html.8af3480f.js",revision:null},{url:"assets/bot.html.2b402c01.js",revision:null},{url:"assets/bot.html.43e8dcba.js",revision:null},{url:"assets/bot.html.76f07b11.js",revision:null},{url:"assets/bot.html.e4738348.js",revision:null},{url:"assets/bots.html.2d751118.js",revision:null},{url:"assets/bots.html.74aa594e.js",revision:null},{url:"assets/broadcast.html.07b955fa.js",revision:null},{url:"assets/broadcast.html.466f4a3e.js",revision:null},{url:"assets/built-in.html.11355bbc.js",revision:null},{url:"assets/built-in.html.cbc1f873.js",revision:null},{url:"assets/builtin.html.49199ddf.js",revision:null},{url:"assets/builtin.html.e260faec.js",revision:null},{url:"assets/callme.html.9158e2c1.js",revision:null},{url:"assets/callme.html.9b2a7294.js",revision:null},{url:"assets/chat.html.997a2826.js",revision:null},{url:"assets/chat.html.c0361423.js",revision:null},{url:"assets/chat.html.da4a64d4.js",revision:null},{url:"assets/chat.html.f2a3178f.js",revision:null},{url:"assets/command.html.849552af.js",revision:null},{url:"assets/command.html.9f67129f.js",revision:null},{url:"assets/commands.html.26b8b0de.js",revision:null},{url:"assets/commands.html.88d9505b.js",revision:null},{url:"assets/commands.html.a9a78298.js",revision:null},{url:"assets/commands.html.feb420d2.js",revision:null},{url:"assets/community.html.52de68e8.js",revision:null},{url:"assets/community.html.c73901b0.js",revision:null},{url:"assets/config.html.50ca0355.js",revision:null},{url:"assets/config.html.75cbd2a7.js",revision:null},{url:"assets/config.html.879b4ade.js",revision:null},{url:"assets/config.html.e07225b7.js",revision:null},{url:"assets/configuration.html.4748c48c.js",revision:null},{url:"assets/configuration.html.d400e29d.js",revision:null},{url:"assets/container.html.1469cfbb.js",revision:null},{url:"assets/container.html.fb82960e.js",revision:null},{url:"assets/context.html.2f627010.js",revision:null},{url:"assets/context.html.937461f8.js",revision:null},{url:"assets/context.html.f07dca57.js",revision:null},{url:"assets/context.html.f40a178d.js",revision:null},{url:"assets/crowdin.html.8afa6f58.js",revision:null},{url:"assets/crowdin.html.de074460.js",revision:null},{url:"assets/data.html.3b0d29b9.js",revision:null},{url:"assets/data.html.a279fecc.js",revision:null},{url:"assets/database.html.55f33a30.js",revision:null},{url:"assets/database.html.dbe31379.js",revision:null},{url:"assets/dataview.html.0fe7b6dd.js",revision:null},{url:"assets/dataview.html.822f2da4.js",revision:null},{url:"assets/dataview.html.ada320ac.js",revision:null},{url:"assets/dataview.html.beaaf6f3.js",revision:null},{url:"assets/desktop.html.e55f2955.js",revision:null},{url:"assets/desktop.html.ed901f55.js",revision:null},{url:"assets/development.html.8fc972b9.js",revision:null},{url:"assets/development.html.e5c2600d.js",revision:null},{url:"assets/direct.html.b1c5de90.js",revision:null},{url:"assets/direct.html.b7f7596e.js",revision:null},{url:"assets/discord.html.1cfc0ca8.js",revision:null},{url:"assets/discord.html.578b5ee8.js",revision:null},{url:"assets/docs.html.57aa425d.js",revision:null},{url:"assets/docs.html.74f2fd94.js",revision:null},{url:"assets/echo.html.0ebfc36e.js",revision:null},{url:"assets/echo.html.1ad07da0.js",revision:null},{url:"assets/evaluation.html.72b315ef.js",revision:null},{url:"assets/evaluation.html.aee7906b.js",revision:null},{url:"assets/events.html.09774c9a.js",revision:null},{url:"assets/events.html.290ac2cd.js",revision:null},{url:"assets/events.html.2ec57b14.js",revision:null},{url:"assets/events.html.5daa31df.js",revision:null},{url:"assets/events.html.77817cf1.js",revision:null},{url:"assets/events.html.79ac11bb.js",revision:null},{url:"assets/events.html.b083901e.js",revision:null},{url:"assets/events.html.e665bbbd.js",revision:null},{url:"assets/execution.html.8db790d8.js",revision:null},{url:"assets/execution.html.cfd41f71.js",revision:null},{url:"assets/extension.html.018caf21.js",revision:null},{url:"assets/extension.html.389fc92d.js",revision:null},{url:"assets/faq.html.670e095a.js",revision:null},{url:"assets/faq.html.ef128849.js",revision:null},{url:"assets/feedback.html.0334a43e.js",revision:null},{url:"assets/feedback.html.afb20025.js",revision:null},{url:"assets/flow.html.4d2f9eee.js",revision:null},{url:"assets/flow.html.ed6a1001.js",revision:null},{url:"assets/forward.html.e9e44726.js",revision:null},{url:"assets/forward.html.f4ef9fe4.js",revision:null},{url:"assets/git.html.80bd6d35.js",revision:null},{url:"assets/git.html.b0444398.js",revision:null},{url:"assets/glossary.html.86e43747.js",revision:null},{url:"assets/glossary.html.c7dcfa1d.js",revision:null},{url:"assets/help.html.15554370.js",revision:null},{url:"assets/help.html.e19c1036.js",revision:null},{url:"assets/history.html.cd76f84d.js",revision:null},{url:"assets/history.html.e21f2397.js",revision:null},{url:"assets/http.html.405cc171.js",revision:null},{url:"assets/http.html.b30738b6.js",revision:null},{url:"assets/i18n.html.b2302653.js",revision:null},{url:"assets/i18n.html.e9e5de37.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0374f942.js",revision:null},{url:"assets/index.html.1488e79c.js",revision:null},{url:"assets/index.html.19e43a39.js",revision:null},{url:"assets/index.html.23247a5a.js",revision:null},{url:"assets/index.html.260af4b5.js",revision:null},{url:"assets/index.html.2ef17e07.js",revision:null},{url:"assets/index.html.330225dc.js",revision:null},{url:"assets/index.html.43869780.js",revision:null},{url:"assets/index.html.4b4c7dbd.js",revision:null},{url:"assets/index.html.4cb622c6.js",revision:null},{url:"assets/index.html.50f2d902.js",revision:null},{url:"assets/index.html.53146a2d.js",revision:null},{url:"assets/index.html.55ee85ad.js",revision:null},{url:"assets/index.html.574b69f0.js",revision:null},{url:"assets/index.html.5b97d189.js",revision:null},{url:"assets/index.html.6228414a.js",revision:null},{url:"assets/index.html.6340e616.js",revision:null},{url:"assets/index.html.6ee6a203.js",revision:null},{url:"assets/index.html.74e9034c.js",revision:null},{url:"assets/index.html.784fc2ea.js",revision:null},{url:"assets/index.html.7dd461be.js",revision:null},{url:"assets/index.html.87924cc1.js",revision:null},{url:"assets/index.html.9e22d532.js",revision:null},{url:"assets/index.html.9f87616b.js",revision:null},{url:"assets/index.html.a7fa043d.js",revision:null},{url:"assets/index.html.aae8df47.js",revision:null},{url:"assets/index.html.b678c0d9.js",revision:null},{url:"assets/index.html.baa43d56.js",revision:null},{url:"assets/index.html.bcc75967.js",revision:null},{url:"assets/index.html.ce0f1154.js",revision:null},{url:"assets/index.html.cff9a80c.js",revision:null},{url:"assets/index.html.d3f0041b.js",revision:null},{url:"assets/index.html.e3936fdc.js",revision:null},{url:"assets/index.html.eb8754d9.js",revision:null},{url:"assets/index.html.ee8fd7cf.js",revision:null},{url:"assets/index.html.fb7b61b1.js",revision:null},{url:"assets/insight.html.2e8faf4b.js",revision:null},{url:"assets/insight.html.cc701917.js",revision:null},{url:"assets/interp.html.53dabf4b.js",revision:null},{url:"assets/interp.html.55355f87.js",revision:null},{url:"assets/intro.html.36fceb30.js",revision:null},{url:"assets/intro.html.42f7f3e1.js",revision:null},{url:"assets/introduction.html.422aae5c.js",revision:null},{url:"assets/introduction.html.ed2cb13d.js",revision:null},{url:"assets/kook.html.7786d59f.js",revision:null},{url:"assets/kook.html.927bbd78.js",revision:null},{url:"assets/level.html.0993ab33.js",revision:null},{url:"assets/level.html.c26d7674.js",revision:null},{url:"assets/lifecycle.html.15505138.js",revision:null},{url:"assets/lifecycle.html.522329ac.js",revision:null},{url:"assets/lifecycle.html.90c406e4.js",revision:null},{url:"assets/lifecycle.html.90ea6e96.js",revision:null},{url:"assets/local.html.57841890.js",revision:null},{url:"assets/local.html.7471eddf.js",revision:null},{url:"assets/locales.html.634dfad1.js",revision:null},{url:"assets/locales.html.8ed75451.js",revision:null},{url:"assets/logger.html.0730d7f4.js",revision:null},{url:"assets/logger.html.5f5d39b9.js",revision:null},{url:"assets/logger.html.88b65540.js",revision:null},{url:"assets/logger.html.952ff600.js",revision:null},{url:"assets/logger.html.f51a35f2.js",revision:null},{url:"assets/logger.html.f7d0b823.js",revision:null},{url:"assets/main.html.339153f7.js",revision:null},{url:"assets/main.html.45b080c9.js",revision:null},{url:"assets/market.html.03fbfff4.js",revision:null},{url:"assets/market.html.43bad170.js",revision:null},{url:"assets/market.html.4f69874c.js",revision:null},{url:"assets/market.html.5da8b043.js",revision:null},{url:"assets/market.html.756f0e77.js",revision:null},{url:"assets/market.html.fd12dcac.js",revision:null},{url:"assets/memory.html.14ceec7c.js",revision:null},{url:"assets/memory.html.32945ec2.js",revision:null},{url:"assets/message.html.2f722ea9.js",revision:null},{url:"assets/message.html.bce2c414.js",revision:null},{url:"assets/middleware.html.8dbd1068.js",revision:null},{url:"assets/middleware.html.90dc1473.js",revision:null},{url:"assets/middleware.html.e97a2a7f.js",revision:null},{url:"assets/middleware.html.f2847396.js",revision:null},{url:"assets/migration.html.1f9579be.js",revision:null},{url:"assets/migration.html.57a823e8.js",revision:null},{url:"assets/misc.html.22dce233.js",revision:null},{url:"assets/misc.html.4ad48824.js",revision:null},{url:"assets/misc.html.da115aea.js",revision:null},{url:"assets/misc.html.e39349d3.js",revision:null},{url:"assets/mixin.html.d809e5c9.js",revision:null},{url:"assets/mixin.html.f1d37e66.js",revision:null},{url:"assets/mobile.html.012dc8f4.js",revision:null},{url:"assets/mobile.html.4e357252.js",revision:null},{url:"assets/mock.html.60f9ca93.js",revision:null},{url:"assets/mock.html.bb917d2a.js",revision:null},{url:"assets/model.html.5d983fc3.js",revision:null},{url:"assets/model.html.6eb07e74.js",revision:null},{url:"assets/model.html.dae145f4.js",revision:null},{url:"assets/model.html.ede52968.js",revision:null},{url:"assets/module.html.2720f948.js",revision:null},{url:"assets/module.html.a355285b.js",revision:null},{url:"assets/mongo.html.9b7ac219.js",revision:null},{url:"assets/mongo.html.ef6132b3.js",revision:null},{url:"assets/more.html.7ea65a03.js",revision:null},{url:"assets/more.html.f492e296.js",revision:null},{url:"assets/mysql.html.13d5253d.js",revision:null},{url:"assets/mysql.html.e6ff53cc.js",revision:null},{url:"assets/nestjs.html.06b5e489.js",revision:null},{url:"assets/nestjs.html.e7c10e0e.js",revision:null},{url:"assets/observer.html.74b71b59.js",revision:null},{url:"assets/observer.html.92651582.js",revision:null},{url:"assets/observer.html.92a1e4d8.js",revision:null},{url:"assets/observer.html.dd3a1765.js",revision:null},{url:"assets/onebot.html.2daea0c8.js",revision:null},{url:"assets/onebot.html.f85f4ec0.js",revision:null},{url:"assets/playground.html.0c809fd5.js",revision:null},{url:"assets/playground.html.657b1af5.js",revision:null},{url:"assets/presets.html.236ac244.js",revision:null},{url:"assets/presets.html.e33d3ad9.js",revision:null},{url:"assets/prob.html.549b2afb.js",revision:null},{url:"assets/prob.html.99191e27.js",revision:null},{url:"assets/publish.html.c0fa61f0.js",revision:null},{url:"assets/publish.html.d8ee2e0b.js",revision:null},{url:"assets/puppeteer.html.5087eaab.js",revision:null},{url:"assets/puppeteer.html.cd7245b9.js",revision:null},{url:"assets/qqguild.html.ade7f9b9.js",revision:null},{url:"assets/qqguild.html.fe1e6d09.js",revision:null},{url:"assets/query.html.6316a284.js",revision:null},{url:"assets/query.html.881c70df.js",revision:null},{url:"assets/rate-limit.html.8cd480c0.js",revision:null},{url:"assets/rate-limit.html.ed97a18e.js",revision:null},{url:"assets/recall.html.57655c08.js",revision:null},{url:"assets/recall.html.ef96b71f.js",revision:null},{url:"assets/regexp.html.3a41bf5d.js",revision:null},{url:"assets/regexp.html.e9d8070f.js",revision:null},{url:"assets/registry.html.7682d8e5.js",revision:null},{url:"assets/registry.html.f24f4618.js",revision:null},{url:"assets/remote.html.73a32a44.js",revision:null},{url:"assets/remote.html.9e09baf2.js",revision:null},{url:"assets/repeater.html.774ab797.js",revision:null},{url:"assets/repeater.html.dea9a185.js",revision:null},{url:"assets/respondent.html.07e9f5c4.js",revision:null},{url:"assets/respondent.html.901a643e.js",revision:null},{url:"assets/router.html.66953652.js",revision:null},{url:"assets/router.html.a35f7003.js",revision:null},{url:"assets/s3.html.67053a02.js",revision:null},{url:"assets/s3.html.c61b557e.js",revision:null},{url:"assets/sandbox.html.0bccf75f.js",revision:null},{url:"assets/sandbox.html.23a984f1.js",revision:null},{url:"assets/sandbox.html.96bf246c.js",revision:null},{url:"assets/sandbox.html.c4826a3a.js",revision:null},{url:"assets/sandbox.html.f583086d.js",revision:null},{url:"assets/sandbox.html.ffe676de.js",revision:null},{url:"assets/schedule.html.dfd230f2.js",revision:null},{url:"assets/schedule.html.f0b59e2b.js",revision:null},{url:"assets/schema.html.00c26bc5.js",revision:null},{url:"assets/schema.html.5bcf8ef3.js",revision:null},{url:"assets/schema.html.5c3fa187.js",revision:null},{url:"assets/schema.html.db7fe33b.js",revision:null},{url:"assets/schemastery.html.10a2e127.js",revision:null},{url:"assets/schemastery.html.bf7dcf2f.js",revision:null},{url:"assets/segment.html.07b813cd.js",revision:null},{url:"assets/segment.html.31ac69d0.js",revision:null},{url:"assets/segment.html.85847b62.js",revision:null},{url:"assets/segment.html.ee86a9b7.js",revision:null},{url:"assets/selector.html.041809ce.js",revision:null},{url:"assets/selector.html.741fd81f.js",revision:null},{url:"assets/selector.html.9f719a06.js",revision:null},{url:"assets/selector.html.db97b2f6.js",revision:null},{url:"assets/server.html.1eaa6b39.js",revision:null},{url:"assets/server.html.b10abd59.js",revision:null},{url:"assets/service.html.043426c3.js",revision:null},{url:"assets/service.html.91102dd6.js",revision:null},{url:"assets/service.html.ab8aa788.js",revision:null},{url:"assets/service.html.c7fb9c7a.js",revision:null},{url:"assets/session.html.4ff0b00c.js",revision:null},{url:"assets/session.html.66e2a5ef.js",revision:null},{url:"assets/session.html.748863da.js",revision:null},{url:"assets/session.html.cb7e8e3f.js",revision:null},{url:"assets/source.html.853801bd.js",revision:null},{url:"assets/source.html.e2208bd5.js",revision:null},{url:"assets/sqlite.html.337735f2.js",revision:null},{url:"assets/sqlite.html.51b2a7da.js",revision:null},{url:"assets/started.html.10036685.js",revision:null},{url:"assets/started.html.b04a9a24.js",revision:null},{url:"assets/status.html.416be95a.js",revision:null},{url:"assets/status.html.46877a84.js",revision:null},{url:"assets/structure.html.6816e803.js",revision:null},{url:"assets/structure.html.a564d6be.js",revision:null},{url:"assets/style.c0a23cef.css",revision:null},{url:"assets/sudo.html.03de2571.js",revision:null},{url:"assets/sudo.html.4462909f.js",revision:null},{url:"assets/telegram.html.55761569.js",revision:null},{url:"assets/telegram.html.c5d3eff8.js",revision:null},{url:"assets/thirdeye.html.244c213b.js",revision:null},{url:"assets/thirdeye.html.6e2a0a1c.js",revision:null},{url:"assets/translation.html.4063447b.js",revision:null},{url:"assets/translation.html.9a5bc3d3.js",revision:null},{url:"assets/unit-tests.html.3b637fd5.js",revision:null},{url:"assets/unit-tests.html.a966e797.js",revision:null},{url:"assets/v4.1.html.0a1b0ea3.js",revision:null},{url:"assets/v4.1.html.b61e6848.js",revision:null},{url:"assets/v4.2.html.a4ca3ba5.js",revision:null},{url:"assets/v4.2.html.f618b2cf.js",revision:null},{url:"assets/v4.3.html.cce1c023.js",revision:null},{url:"assets/v4.3.html.d87ce206.js",revision:null},{url:"assets/v4.4.html.1d4ed3b8.js",revision:null},{url:"assets/v4.4.html.7adc6889.js",revision:null},{url:"assets/v4.5.html.4098c60f.js",revision:null},{url:"assets/v4.5.html.4e1be2d6.js",revision:null},{url:"assets/v4.6.html.59a89406.js",revision:null},{url:"assets/v4.6.html.a618ef5b.js",revision:null},{url:"assets/v4.7.html.4cfc9f43.js",revision:null},{url:"assets/v4.7.html.55c78bac.js",revision:null},{url:"assets/v4.8.html.7ccb6053.js",revision:null},{url:"assets/v4.8.html.f4781948.js",revision:null},{url:"assets/verifier.html.5e4a0d3a.js",revision:null},{url:"assets/verifier.html.d520cde0.js",revision:null},{url:"assets/worker.html.163da2c1.js",revision:null},{url:"assets/worker.html.7909909b.js",revision:null},{url:"assets/writing.html.2c8719e7.js",revision:null},{url:"assets/writing.html.831aceb9.js",revision:null},{url:"assets/writing.html.f1fe3511.js",revision:null},{url:"assets/writing.html.f4eb4b40.js",revision:null},{url:"async-method.png",revision:"101dca6bd4016aaa8558fa9d24c9f99d"},{url:"avatar/satori.png",revision:"fbf70f03f5d713d4339fa3b07b40f427"},{url:"avatar/shiki.png",revision:"25c9768987944c4bccb7e6ddd6c693d6"},{url:"chess/othello-1.svg",revision:"44b88417a98379032216b4c3efe1b2ac"},{url:"chess/othello-2.svg",revision:"868c0dae7261d4fff7ef5f91c8862430"},{url:"chess/othello-3.svg",revision:"3126024190c107d8cf6546f74067a352"},{url:"community/decorator/nestjs.html",revision:"2143d4eb9f681dbebba33d6e02e1b672"},{url:"community/decorator/schemastery.html",revision:"63eda7fabd1919e413462ee9b14bb9a0"},{url:"community/decorator/thirdeye.html",revision:"fa551ef8a1454b3df4c568608c9c2a35"},{url:"community/dialogue/config.html",revision:"277bab04e6744de6e7d9887c7a168728"},{url:"community/dialogue/context.html",revision:"1990cda7b26d4d0d7afad78c192b09d2"},{url:"community/dialogue/events.html",revision:"a0edacac6b496cd4d24aca4c6ffc3352"},{url:"community/dialogue/flow.html",revision:"681af1605a6a799eb1a6f98a894d781f"},{url:"community/dialogue/index.html",revision:"b34a20da22695b4893a0e13fcc4ac893"},{url:"community/dialogue/interp.html",revision:"72a7fa9dc938d4389a15ae7c7b3605c4"},{url:"community/dialogue/misc.html",revision:"45fb057bf9b0d327f9a52a3f5aea6272"},{url:"community/dialogue/prob.html",revision:"c0fc47c24191798cefecfcaf300a7ecc"},{url:"community/dialogue/regexp.html",revision:"f00f15c3e5b0ffe64dffcbfa2b5b5e06"},{url:"community/dialogue/service.html",revision:"e05230c6faa3ded8809310bc14af3dd4"},{url:"community/eval/addon.html",revision:"4cfbaa1cf0fa0132f75fd33249751def"},{url:"community/eval/config.html",revision:"03bf3d04fa7371a36eaa7d128683815a"},{url:"community/eval/index.html",revision:"16eddb261fefdc15273328da03e57114"},{url:"community/eval/main.html",revision:"9401bb492010565fe7886894ee63dd43"},{url:"community/eval/sandbox.html",revision:"1395d2df967f52e1a34bcd0c515d1eb9"},{url:"community/eval/worker.html",revision:"b8bad7c1b00adc3018d6e1837871dd1e"},{url:"community/index.html",revision:"75f0f6eead5cb355849a0642bd0249c6"},{url:"community/pics/api.html",revision:"d32cf1520562393630c47d890d876db0"},{url:"community/pics/commands.html",revision:"5ba5e45c11a65a6da82597422917fefb"},{url:"community/pics/community.html",revision:"8878f947977146b6d219c1edd59a9d5a"},{url:"community/pics/configuration.html",revision:"90237813e977f1fd2f4626103f409abd"},{url:"community/pics/intro.html",revision:"489d1a6d045f6c47c84a8781844ea1c0"},{url:"community/pics/middleware.html",revision:"d1fa820280277e3310740c614c5b9bea"},{url:"community/pics/source.html",revision:"c30f92ef8034713a66d51b225338e4b4"},{url:"community/pics/started.html",revision:"8f4eb448d350be3fc506e1b535c06229"},{url:"console/after-install.png",revision:"089b3c63c578c23589bfbb66a5eb2bcf"},{url:"console/bot.png",revision:"ef9aaf95cb6b83b3ef33ab67b47203dc"},{url:"console/dependencies.png",revision:"a996814a20d51f3af4a2a868b36a9838"},{url:"console/logger.png",revision:"7cd969db0034baebe4bd788063efe968"},{url:"console/market-search.png",revision:"bcae61957b33254336473e16ccc97ee7"},{url:"console/market.png",revision:"cabd24d808cd534471077b178c0225d0"},{url:"console/sandbox.png",revision:"c3feb122672250d1fd43a7d79a8aea2a"},{url:"console/settings-enable.png",revision:"58bab80cb180a20b0f36448479546af4"},{url:"console/settings.png",revision:"2b9def9f845d038dc23b375af1e466b4"},{url:"console/status.png",revision:"aea8e2f0872c1dda93cfafccca140ed7"},{url:"guide/adapter/binding.html",revision:"857a4c5d031c1c9ecbb4436784e666db"},{url:"guide/adapter/bot.html",revision:"a86bc22fd2862054f1e94c567879a462"},{url:"guide/adapter/index.html",revision:"1e1d0535559c0e1cbda7eb4f2146132d"},{url:"guide/adapter/writing.html",revision:"190aadd946687b45f58d706f48a491ab"},{url:"guide/aspect/events.html",revision:"99cd523c337833d090c2658bd11797c9"},{url:"guide/aspect/mixin.html",revision:"ef5f8db751c1b44a5974de81b6530667"},{url:"guide/aspect/selector.html",revision:"748bf72ae5760649c759397bd6aa1dab"},{url:"guide/aspect/service.html",revision:"703d499cdbf776fc9d7b1971a95828d8"},{url:"guide/command/execution.html",revision:"7f92259c56989d10bbf360158be8345c"},{url:"guide/command/help.html",revision:"3bfa0016db6b3d55eef5534ab543b437"},{url:"guide/command/index.html",revision:"aa68a78afd8bb34122b6f0415e32a728"},{url:"guide/command/more.html",revision:"75b5aa64b5f0feaa9f6b40c61e8acf97"},{url:"guide/console/data.html",revision:"7339693648a8e90b3866feb50990553f"},{url:"guide/console/extension.html",revision:"a9d16f11e05378ae045b2c83373db4ec"},{url:"guide/console/index.html",revision:"bc7633a79330f5c2d0ed4111d8dd9a0f"},{url:"guide/database/builtin.html",revision:"eb2ab40bc0db88b586525cc67d823370"},{url:"guide/database/index.html",revision:"b2235f0f9175598f556f0f9d1949bcc3"},{url:"guide/database/model.html",revision:"e2daff97aaebebd6d32a67729961f499"},{url:"guide/database/observer.html",revision:"5180da70ac1c78e94354d6726b7e9eb5"},{url:"guide/database/writing.html",revision:"7d2080e8b5a907e950fdbc3f31303e31"},{url:"guide/i18n/crowdin.html",revision:"7425a5535a3cbe0ac3d21cf29e9f26e0"},{url:"guide/i18n/index.html",revision:"eb72bdd4faafcacfd318d658413782ea"},{url:"guide/i18n/presets.html",revision:"b32cc6ed043efd8c8b8669b42c0fd717"},{url:"guide/i18n/translation.html",revision:"772d00f0210f3d5b78b440dd22110ed8"},{url:"guide/in-depth/message.html",revision:"c3fa0fc38bae8ea9ade4f9583586ccd8"},{url:"guide/in-depth/module.html",revision:"3e826fdeddc5caa29c94ad6e6aa46407"},{url:"guide/index.html",revision:"69e8e9c2380cad7b8c378f5baf189806"},{url:"guide/message/middleware.html",revision:"b968fc28365eaed9c3a7daf1509129cc"},{url:"guide/message/segment.html",revision:"542905cc2fc5185aa1c093f546cb453a"},{url:"guide/message/session.html",revision:"df171e3021ab52500dbe475549d31e23"},{url:"guide/plugin/index.html",revision:"99b96c18af77b29627f0682a7c175e72"},{url:"guide/plugin/lifecycle.html",revision:"4d729af12607e39de5870c89e338632b"},{url:"guide/plugin/publish.html",revision:"4cba22f27f71a7043a74d87fb7befcff"},{url:"guide/plugin/schema.html",revision:"e8796d0de0aed7a199a7afcbce97b33e"},{url:"guide/testing/sandbox.html",revision:"37ab5e825577049dabe62e084644bcea"},{url:"guide/testing/unit-tests.html",revision:"6a66ff024d14440d754545be5d37e53a"},{url:"image-search/68670776_p0_master1200.jpg",revision:"ea5151c3c463884d7bab7f0af3810347"},{url:"image-search/73212619_p0_master1200.jpg",revision:"d9435a3e4ce3391677c9d4ee8dd8c05b"},{url:"index.html",revision:"f4e0152e09568c4dbb8f52ad95182906"},{url:"koishi.png",revision:"9b6734ad89cbacff80690bad5e7a9876"},{url:"manual/cli/development.html",revision:"057e9d23d758e298f5bfaa9d208ebfb0"},{url:"manual/cli/index.html",revision:"e6b9b00f176a4e62d44825b954e0e60b"},{url:"manual/console/adapter.html",revision:"31af156d78eb4b358ae5f2483babf78f"},{url:"manual/console/chat.html",revision:"987def8d17148764636aafc055d148bf"},{url:"manual/console/dataview.html",revision:"8b1fb3de6af9108c51db65f96b10e74d"},{url:"manual/console/index.html",revision:"756d8e13b9a32cdd76db1cfbc05ecb26"},{url:"manual/console/market.html",revision:"80ddfdeb5a832f929cbab08fd94281d9"},{url:"manual/faq.html",revision:"efc8a7b1da6b60b0bdea3e50bb74ebf8"},{url:"manual/faq/auth.png",revision:"4bac3dd234fcdc7a8f47d923bc272a8c"},{url:"manual/faq/installation-failed.png",revision:"07186f4930b38c5c4ed9629591988b23"},{url:"manual/faq/requires-database.png",revision:"56878b25bc33c5bab8520afe962cfca1"},{url:"manual/introduction.html",revision:"a85fbef004abb52b0c69e90aff5c680d"},{url:"manual/starter/boilerplate.html",revision:"7e8c020efc208278b53ed42e945b20c2"},{url:"manual/starter/container.html",revision:"3f6169e3f7c569fce942bde51e5fce44"},{url:"manual/starter/desktop.html",revision:"65c2c401de4a963428421cb25852734d"},{url:"manual/starter/direct.html",revision:"a548429856e2a28da64a4cf476c9d3d0"},{url:"manual/starter/index.html",revision:"5b7b1be2ecdc23ea565f7e236e2d3440"},{url:"manual/starter/mobile.html",revision:"4686202d6b22bd12a076d70821c78094"},{url:"manual/starter/nodejs/home.jpg",revision:"179b8eb6a22f90b05397be41a0ee7a68"},{url:"manual/starter/server.html",revision:"072afb641a40bbd8bd3badb9f1f3db20"},{url:"market.html",revision:"ecea404d525d7569d9fcd84f0702d6cf"},{url:"nlp-example.png",revision:"259c6f37539d9c45b3171e09d2b1bb22"},{url:"playground.html",revision:"9d14fa542ac7ff7099a605294c143850"},{url:"plugins/accessibility/admin.html",revision:"85d3fcdc9a14dc86cfeb3d352f2b4f9d"},{url:"plugins/accessibility/bind.html",revision:"61a0acabaa0c22cc564f01bbabd009d9"},{url:"plugins/accessibility/callme.html",revision:"3e87151b4fd671040b15fa03b50e346b"},{url:"plugins/accessibility/commands.html",revision:"e3249b53cc22b1fab604f3293858b9dc"},{url:"plugins/accessibility/locales.html",revision:"aa1f039caa5768c2ad2d791fb349e2ea"},{url:"plugins/accessibility/rate-limit.html",revision:"5f2223180e5204de3a27b2b0a7c38d32"},{url:"plugins/accessibility/schedule.html",revision:"86dbd0b8184335771e6802312dd19802"},{url:"plugins/accessibility/sudo.html",revision:"0454385530357924db0ef768bc1da428"},{url:"plugins/accessibility/verifier.html",revision:"ae7a41bf4c7474090ad0b9f8716560a4"},{url:"plugins/adapter/discord.html",revision:"0982ff0d50249f1f1be20e1bc8f23d3d"},{url:"plugins/adapter/kook.html",revision:"67244671d5a8887fde2f524bbfe35616"},{url:"plugins/adapter/onebot.html",revision:"586c77e688c759e5f9e7f825e9468702"},{url:"plugins/adapter/qqguild.html",revision:"3c2e06fc9dbd167067449a17af8841b0"},{url:"plugins/adapter/telegram.html",revision:"f1a572d67098d0f91df1b6af1fb92405"},{url:"plugins/adventure/events.html",revision:"9376c35fe2a2c221cf8f35dfdf907e57"},{url:"plugins/adventure/index.html",revision:"b53ac6f1d4048a4630db1ea454e73f02"},{url:"plugins/assets/git.html",revision:"e04acf52334a4fbf4ac8de43b992f5c3"},{url:"plugins/assets/local.html",revision:"f0fce69ced1b9f28a036e1d4a4719242"},{url:"plugins/assets/remote.html",revision:"e69e7fb359d1d5a7f925f94707926eb8"},{url:"plugins/assets/s3.html",revision:"f4868c08aaff96b0f509bdf1c2eca40f"},{url:"plugins/common/broadcast.html",revision:"03df4710b517decd0942b3f84bb164ea"},{url:"plugins/common/echo.html",revision:"6b346c71a34cead1ffcd178a1d999b75"},{url:"plugins/common/feedback.html",revision:"518ab58366b447a49021b4c2e5518042"},{url:"plugins/common/forward.html",revision:"0d713db44d296976ef6c79ef62ba468c"},{url:"plugins/common/recall.html",revision:"77b136aeef8b0796c73f2a135f37841d"},{url:"plugins/common/repeater.html",revision:"b240ec0e50d7974ba424867e6b9fb27d"},{url:"plugins/common/respondent.html",revision:"e5960928012854e3a408d8594ee97ab7"},{url:"plugins/console/auth.html",revision:"24567898ff27d22fec69df24c459214a"},{url:"plugins/console/chat.html",revision:"a5622ed9e27f74b7e37bbae46009e4d9"},{url:"plugins/console/dataview.html",revision:"a91ac597f61bee22dc2abd74f2090784"},{url:"plugins/console/index.html",revision:"e875f777d05ae61c8385d8be7d75e5b7"},{url:"plugins/console/insight.html",revision:"f818c735c30708dd9ce611686acbad1c"},{url:"plugins/console/logger.html",revision:"5c914a6a47c60b4ed72984eda9cf4abe"},{url:"plugins/console/market.html",revision:"7fec7986f972305dd63e48fa240cb5fb"},{url:"plugins/console/sandbox.html",revision:"eff42c1b7e044091c550629a60c3c88d"},{url:"plugins/console/status.html",revision:"a6e826aad5bd68b69a473fd911bff176"},{url:"plugins/database/level.html",revision:"bb30af841c7b4415ea60ffbeb15f896c"},{url:"plugins/database/memory.html",revision:"46b0fef144405d3c5a4deb3d02d93496"},{url:"plugins/database/mongo.html",revision:"435d453c59a3865e770cce0735022c74"},{url:"plugins/database/mysql.html",revision:"7af06469a3b1d850b4c4c1d6597c5856"},{url:"plugins/database/sqlite.html",revision:"09372915a5626d8ecba5545c43896832"},{url:"plugins/index.html",revision:"3eea99d116cec1496b4b798309b598a4"},{url:"plugins/other/adventure.html",revision:"3779b721fe90284ea160a697fae494f3"},{url:"plugins/other/mock.html",revision:"966a8066152c07169444eebb9a7dfe95"},{url:"plugins/other/puppeteer.html",revision:"2f2d273c90391634a471ba621ec95feb"}],{})}));
