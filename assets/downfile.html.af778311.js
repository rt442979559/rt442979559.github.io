import{_ as c,o as i,c as r,a as s,b as e,d as n,e as p,r as t}from"./app.605cb1e1.js";const l={},d=s("h1",{id:"\u5730\u56FE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5730\u56FE","aria-hidden":"true"},"#"),n(" \u5730\u56FE")],-1),u=n("\u672C\u6765\u4F7F\u7528 "),_={href:"https://github.com/sparksuite/simplemde-markdown-editor",target:"_blank",rel:"noopener noreferrer"},h=n("simplemde-markdown-editor"),k=n(" \u4F5C\u4E3A markdown \u7F16\u8F91\u5668\uFF0C\u4F46\u8FD9\u4E2A\u5E93\u5F88\u4E45\u4E0D\u66F4\u65B0\u548C\u7EF4\u62A4\u4E86\uFF0C\u800C\u4E14\u8FD8\u6709 xss \u98CE\u9669\u3002\u6240\u4EE5\u5728 "),m=n(" \u7248\u672C\u4E4B\u540E\u4F7F\u7528 "),f={href:"https://github.com/nhnent/tui.editor",target:"_blank",rel:"noopener noreferrer"},v=n("tui.editor"),b=n("\u4F5C\u4E3A\u65B0\u7684\u7F16\u8F91\u5668\uFF0C\u63A5\u4E0B\u6765\u6240\u6709\u7684\u6587\u6863\u90FD\u662F\u57FA\u4E8E tui.editor \u5B83\u7684\u3002"),g={href:"https://github.com/nhnent/tui.editor",target:"_blank",rel:"noopener noreferrer"},x=n("\u66F4\u591A\u5185\u5BB9"),w=n("\u3002"),B=p(`<h2 id="\u83B7\u53D6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6587\u4EF6" aria-hidden="true">#</a> \u83B7\u53D6\u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">getBlob</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function N(V,j){const a=t("ExternalLinkIcon"),o=t("Badge");return i(),r("div",null,[d,s("p",null,[u,s("a",_,[h,e(a)]),k,e(o,{text:"v3.9.3+"}),m,s("a",f,[v,e(a)]),b,s("a",g,[x,e(a)]),w]),B])}var y=c(l,[["render",N],["__file","downfile.html.vue"]]);export{y as default};