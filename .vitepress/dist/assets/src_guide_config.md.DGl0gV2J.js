import{_ as s,a,o as i,a4 as n}from"./chunks/framework.DNizj_qy.js";const _=JSON.parse('{"title":"config","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/config.md","filePath":"src/guide/config.md","lastUpdated":1721038261000}'),e={name:"src/guide/config.md"},t=n(`<h1 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h1><p>基础信息、微信、代理的配置。</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>| config/</span></span>
<span class="line"><span>--| index.ts // 入口</span></span>
<span class="line"><span>--| proxy.ts // 代理请求配置</span></span>
<span class="line"><span>--| dev.ts // 开发环境配置</span></span>
<span class="line"><span>--| prod.ts // 生产环境配置</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { config } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/@/config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config.app.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 应用名称</span></span></code></pre></div>`,6),p=[t];function l(o,c,h,d,r,g){return i(),a("div",null,p)}const u=s(e,[["render",l]]);export{_ as __pageData,u as default};