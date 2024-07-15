import{_ as t,a,o as s,a4 as i}from"./chunks/framework.DNizj_qy.js";const g=JSON.parse('{"title":"Rate 评分","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/components/form/rate.md","filePath":"src/guide/components/form/rate.md","lastUpdated":1721038261000}'),e={name:"src/guide/components/form/rate.md"},d=i('<h1 id="rate-评分" tabindex="-1">Rate 评分 <a class="header-anchor" href="#rate-评分" aria-label="Permalink to &quot;Rate 评分&quot;">​</a></h1><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值</td><td></td><td>number</td><td></td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td></td><td>cl-icon-favor-fill</td></tr><tr><td>color</td><td>选中颜色，支持多色</td><td>string / array</td><td></td><td>#409EFF</td></tr><tr><td>void-color</td><td>未选中颜色</td><td>string</td><td></td><td>#C6D1DE</td></tr><tr><td>size</td><td>尺寸</td><td>number / string</td><td></td><td>40</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td></td><td>5</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td></td><td>false</td></tr><tr><td>show-text</td><td>是否显示值</td><td>boolean</td><td></td><td>false</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td></td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="多色" tabindex="-1">多色 <a class="header-anchor" href="#多色" aria-label="Permalink to &quot;多色&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[&#39;#F56C6C&#39;, &#39;#E6A23C&#39;, &#39;#67C23A&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="其他图标" tabindex="-1">其他图标 <a class="header-anchor" href="#其他图标" aria-label="Permalink to &quot;其他图标&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cl-icon-emoji&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>',12),h=[d];function l(n,r,o,k,p,c){return s(),a("div",null,h)}const u=t(e,[["render",l]]);export{g as __pageData,u as default};
