"use strict";(self.webpackChunkearthnut_doc_of_docusaurus=self.webpackChunkearthnut_doc_of_docusaurus||[]).push([[4593],{4274:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=s(8514),l=s(4848),a=s(8453);const r={slug:"jest \u7684\u4f7f\u7528",title:"jest \u7684\u4f7f\u7528",tags:["\u6d4b\u8bd5"],description:"\u4f7f\u7528 jest \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5"},i=void 0,c={authorsImageUrls:[]},d=[{value:"\u5728 node \u4e2d\u4f7f\u7528 jest",id:"\u5728-node-\u4e2d\u4f7f\u7528-jest",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521d\u59cb\u5316 jest \u914d\u7f6e",id:"\u521d\u59cb\u5316-jest-\u914d\u7f6e",level:3},{value:"babel",id:"babel",level:3},{value:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6",id:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6",level:3},{value:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u5728-node-\u4e2d\u4f7f\u7528-jest",children:"\u5728 node \u4e2d\u4f7f\u7528 jest"}),"\n",(0,l.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest ts-jest @types/jest\nnpm install --save-dev jest-environment-jsdom jest-junit\n"})}),"\n","\n",(0,l.jsx)(n.h3,{id:"\u521d\u59cb\u5316-jest-\u914d\u7f6e",children:"\u521d\u59cb\u5316 jest \u914d\u7f6e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx ts-jest config:init\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"/** @type {import('ts-jest').JestConfigWithTSConfig} **/\nexport default {\n  testEnvironment: \"node\",\n -  transform: {\n -   \"^.+.tsx?$\": [\"ts-jest\", {}],\n - },\n // \u4e3a\u4e86\u5339\u914d\u6211\u4eec\u7684\u6d4b\u8bd5\u6587\u4ef6\n + testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"babel",children:"babel"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981 ",(0,l.jsx)(n.code,{children:"babel"})," \u652f\u6301\uff0c\u53ef\u4ee5\u5b89\u88c5 ",(0,l.jsx)(n.code,{children:"babel-jest"})," \u548c ",(0,l.jsx)(n.code,{children:"@babel/core"})," \u548c ",(0,l.jsx)(n.code,{children:"@babel/preset-env"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6",children:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"touch test/test_name_.ts\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",children:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,l.jsx)(n.p,{children:"\u8ddf\u636e\u5b9e\u9645\u9700\u6c42\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,l.jsx)(n.h3,{id:"\u8fd0\u884c\u6d4b\u8bd5",children:"\u8fd0\u884c\u6d4b\u8bd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx jest\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5c06 jest \u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u5230 package.json \u4e2d\uff0c\u8fd9\u6837\u5728\u8fd0\u884c\u6d4b\u8bd5\u65f6\uff0c\u5c31\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u8f93\u5165 npx jest \u4e86"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const l={},a=t.createContext(l);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}},8514:e=>{e.exports=JSON.parse('{"permalink":"/en/\u65e5\u5fd7/jest \u7684\u4f7f\u7528","source":"@site/blog/2025-3-2-jest \u7684\u4f7f\u7528.mdx","title":"jest \u7684\u4f7f\u7528","description":"\u4f7f\u7528 jest \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5","date":"2025-03-02T00:00:00.000Z","tags":[{"inline":false,"label":"\u6d4b\u8bd5","permalink":"/en/\u65e5\u5fd7/tags/test/","description":"\u5b66\u4e60\u6d4b\u8bd5"}],"readingTime":0.95,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"jest \u7684\u4f7f\u7528","title":"jest \u7684\u4f7f\u7528","tags":["\u6d4b\u8bd5"],"description":"\u4f7f\u7528 jest \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5"},"unlisted":false,"prevItem":{"title":"nginx \u65e5\u5fd7\u66f4\u65b0\u65b0\u65e5\u671f","permalink":"/en/\u65e5\u5fd7/nginx \u65e5\u5fd7\u66f4\u65b0\u65b0\u65e5\u671f"},"nextItem":{"title":"mdx \u76f8\u5173","permalink":"/en/\u65e5\u5fd7/mdx \u4f7f\u7528"}}')}}]);