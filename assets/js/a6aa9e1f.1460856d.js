"use strict";(self.webpackChunkearthnut_doc_of_docusaurus=self.webpackChunkearthnut_doc_of_docusaurus||[]).push([[7643],{2771:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(5359),r=a(6540),s=a(4848);const l={...n.A,Favicon:function(e){let{text:t}=e;return(0,r.useEffect)((()=>{const e=document.querySelector('link[rel="icon"]');if(!e)return;const a=e.href;return console.log("===================================="),console.log(t),console.log("===================================="),e.href=t,console.log(e),()=>{e.href=a}}),[]),(0,s.jsx)(s.Fragment,{})},TranslateEle:function(e){let{children:t}=e;return(0,s.jsx)(s.Fragment,{children:t})}}},4005:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(3750),r=a(8189),s=a(4848);function l(e){let{items:t,component:a=r.A}=e;return(0,s.jsx)(s.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,s.jsx)(n.in,{content:t,children:(0,s.jsx)(a,{children:(0,s.jsx)(t,{})})},t.metadata.permalink)}))})}},5631:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(6540);var n=a(4164),r=a(797),s=a(1082),l=a(204),o=a(569),i=a(7448),c=a(7220),d=a(4005),m=a(7143),u=a(3750),g=a(4848);function h(e){const t=(0,u.kJ)(e);return(0,g.jsx)(m.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:n,blogTitle:l,permalink:o}=t,i="/"===o?a:l;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.be,{title:i,description:n}),(0,g.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:n}=e;return(0,g.jsxs)(o.A,{sidebar:n,children:[(0,g.jsx)(d.A,{items:a}),(0,g.jsx)(i.A,{metadata:t})]})}function j(e){return(0,g.jsxs)(s.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,g.jsx)(x,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(p,{...e})]})}},7448:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(539),r=a(1865),s=a(4848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,s.jsx)(r.A,{permalink:a,title:(0,s.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,s.jsx)(r.A,{permalink:l,title:(0,s.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,a)=>{a.d(t,{A:()=>C});a(6540);var n=a(4164),r=a(3750),s=a(4848);function l(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}var o=a(6289);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e7)(),{permalink:c,title:d}=a,m=l?"h1":"h2";return(0,s.jsx)(m,{className:(0,n.A)(i.title,t),children:l?d:(0,s.jsx)(o.A,{to:c,children:d})})}var d=a(539),m=a(1430),u=a(8569);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.jsx)(s.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:l,readingTime:o}=a,i=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,n.A)(g.container,"margin-vert--md",t),children:[(0,s.jsx)(x,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(h,{readingTime:o})]})]});var c}var f=a(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e7)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,s.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",o?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,s.jsx)("div",{className:(0,n.A)(!o&&(i?"col col--12":"col col--6"),o?A.imageOnlyAuthorCol:A.authorCol),children:(0,s.jsx)(f.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(j,{}),(0,s.jsx)(b,{})]})}var N=a(99),T=a(7985);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e7)();return(0,s.jsx)("div",{id:l?N.LU:void 0,className:(0,n.A)("markdown",a),children:(0,s.jsx)(T.A,{children:t})})}var y=a(204),k=a(5783),_=a(6239);function P(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...a}=e;return(0,s.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,s.jsx)(P,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&i,u=a.length>0;if(!(u||m||o))return null;if(t){const e=!!(o||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,n.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(_.A,{tags:a})})}),e&&(0,s.jsx)(k.A,{className:(0,n.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,s.jsx)(_.A,{tags:a})}),m&&(0,s.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,s.jsx)(U,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,n.A)(o,a),children:[(0,s.jsx)(v,{}),(0,s.jsx)(w,{children:t}),(0,s.jsx)(R,{})]})}}}]);