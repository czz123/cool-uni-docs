import{_ as t,a as s,o as a,a4 as i}from"./chunks/framework.DNizj_qy.js";const g=JSON.parse('{"title":"Search 搜索栏","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/components/view/search.md","filePath":"src/guide/components/view/search.md","lastUpdated":1721038261000}'),h={name:"src/guide/components/view/search.md"},e=i(`<h1 id="search-搜索栏" tabindex="-1">Search 搜索栏 <a class="header-anchor" href="#search-搜索栏" aria-label="Permalink to &quot;Search 搜索栏&quot;">​</a></h1><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值</td><td>string</td><td></td><td></td></tr><tr><td>search-icon</td><td>前缀图标</td><td>string</td><td></td><td>cl-icon-search</td></tr><tr><td>show-search-button</td><td>是否显示搜索按钮</td><td>boolean</td><td></td><td>true</td></tr><tr><td>search-button-text</td><td>搜索按钮文本</td><td>stirng</td><td></td><td>搜索</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>search</td><td>搜索按钮点击或者按下完成健</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名称</th><th>说明</th></tr></thead><tbody><tr><td>prepend</td><td>在元素的开始插入内容</td></tr><tr><td>append</td><td>在元素的结尾插入内容</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;搜索图片、文章、链接&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="不显示按钮" tabindex="-1">不显示按钮 <a class="header-anchor" href="#不显示按钮" aria-label="Permalink to &quot;不显示按钮&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;搜索图片、文章、链接&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :show-search-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="追加内容" tabindex="-1">追加内容 <a class="header-anchor" href="#追加内容" aria-label="Permalink to &quot;追加内容&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;搜索图片、文章、链接&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-avatar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;60&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,14),l=[e];function n(d,r,p,k,o,E){return a(),s("div",null,l)}const y=t(h,[["render",n]]);export{g as __pageData,y as default};
