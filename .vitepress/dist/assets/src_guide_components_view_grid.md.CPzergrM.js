import{_ as i,a as t,o as s,a4 as a}from"./chunks/framework.DNizj_qy.js";const g=JSON.parse('{"title":"Grid 宫格布局","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/components/view/grid.md","filePath":"src/guide/components/view/grid.md","lastUpdated":1721038261000}'),e={name:"src/guide/components/view/grid.md"},h=a(`<h1 id="grid-宫格布局" tabindex="-1">Grid 宫格布局 <a class="header-anchor" href="#grid-宫格布局" aria-label="Permalink to &quot;Grid 宫格布局&quot;">​</a></h1><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>column</td><td>一行几列</td><td>number</td><td></td><td>2</td></tr><tr><td>border</td><td>是否带边框</td><td>boolean</td><td></td><td>false</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-grid</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(item, index) in 15&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {{ item }} &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,5),n=[h];function d(l,r,p,k,o,E){return s(),t("div",null,n)}const u=i(e,[["render",d]]);export{g as __pageData,u as default};