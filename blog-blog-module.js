(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "1JWN":
/*!*******************************************!*\
  !*** ./src/app/blog/github-markdown.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* include CSS for prism toolbar */\ndiv.code-toolbar {\n\tposition: relative;\n}\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\ndiv.code-toolbar > .toolbar > .toolbar-item {\n\tdisplay: inline-block;\n}\ndiv.code-toolbar > .toolbar > .toolbar-item > a {\n\tcursor: pointer;\n}\ndiv.code-toolbar > .toolbar > .toolbar-item > button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\ndiv.code-toolbar > .toolbar > .toolbar-item > a,\ndiv.code-toolbar > .toolbar > .toolbar-item > button,\ndiv.code-toolbar > .toolbar > .toolbar-item > span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\ndiv.code-toolbar > .toolbar > .toolbar-item > a:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > a:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n/* check node_modules/prismjs/themes/ for the available themes */\n.markdown-body {\n  -ms-text-size-adjust: 100% !important;\n  -webkit-text-size-adjust: 100% !important;\n  margin: auto !important;\n  color: #24292f !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\" !important;\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  word-wrap: break-word !important;\n}\n.markdown-body .octicon {\n  display: inline-block !important;\n  fill: currentColor !important;\n  vertical-align: text-bottom !important;\n}\n.markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before {\n  width: 16px !important;\n  height: 16px !important;\n  content: \" \" !important;\n  display: inline-block !important;\n  background-color: currentColor !important;\n  -webkit-mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\") !important;\n  mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\") !important;\n}\n.markdown-body details,\n.markdown-body figcaption,\n.markdown-body figure {\n  display: block !important;\n}\n.markdown-body summary {\n  display: list-item !important;\n}\n.markdown-body [hidden] {\n  display: none !important;\n}\n.markdown-body a {\n  background-color: transparent !important;\n  color: #0969da !important;\n  text-decoration: none !important;\n}\n.markdown-body a * {\n  color: #0969da !important;\n}\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline-width: 0 !important;\n}\n.markdown-body abbr[title] {\n  border-bottom: none !important;\n  -webkit-text-decoration: underline dotted !important;\n          text-decoration: underline dotted !important;\n}\n.markdown-body b,\n.markdown-body strong {\n  font-weight: 600 !important;\n}\n.markdown-body dfn {\n  font-style: italic !important;\n}\n.markdown-body h1 {\n  margin: 0.67em 0 !important;\n  font-weight: 600 !important;\n  padding-bottom: 0.3em !important;\n  font-size: 2em !important;\n  border-bottom: 1px solid #d8dee4 !important;\n}\n.markdown-body mark {\n  background-color: #fff8c5 !important;\n  color: #24292f !important;\n}\n.markdown-body small {\n  font-size: 90% !important;\n}\n.markdown-body sub,\n.markdown-body sup {\n  font-size: 75% !important;\n  line-height: 0 !important;\n  position: relative !important;\n  vertical-align: baseline !important;\n}\n.markdown-body sub {\n  bottom: -0.25em !important;\n}\n.markdown-body sup {\n  top: -0.5em !important;\n}\n.markdown-body img {\n  border-style: none !important;\n  max-width: 100% !important;\n  box-sizing: content-box !important;\n  background-color: #ffffff !important;\n}\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre,\n.markdown-body samp {\n  font-family: monospace, monospace !important;\n  font-size: 1em !important;\n}\n.markdown-body figure {\n  margin: 1em 40px !important;\n}\n.markdown-body hr {\n  box-sizing: content-box !important;\n  overflow: hidden !important;\n  background: transparent !important;\n  border-bottom: 1px solid #d8dee4 !important;\n  height: 0.25em !important;\n  padding: 0 !important;\n  margin: 24px 0 !important;\n  background-color: #d0d7de !important;\n  border: 0 !important;\n}\n.markdown-body input {\n  font: inherit !important;\n  margin: 0 !important;\n  overflow: visible !important;\n  font-family: inherit !important;\n  font-size: inherit !important;\n  line-height: inherit !important;\n}\n.markdown-body [type=button],\n.markdown-body [type=reset],\n.markdown-body [type=submit] {\n  -webkit-appearance: button !important;\n}\n.markdown-body [type=button]::-moz-focus-inner,\n.markdown-body [type=reset]::-moz-focus-inner,\n.markdown-body [type=submit]::-moz-focus-inner {\n  border-style: none !important;\n  padding: 0 !important;\n}\n.markdown-body [type=button]:-moz-focusring,\n.markdown-body [type=reset]:-moz-focusring,\n.markdown-body [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText !important;\n}\n.markdown-body [type=checkbox],\n.markdown-body [type=radio] {\n  box-sizing: border-box !important;\n  padding: 0 !important;\n}\n.markdown-body [type=number]::-webkit-inner-spin-button,\n.markdown-body [type=number]::-webkit-outer-spin-button {\n  height: auto !important;\n}\n.markdown-body [type=search] {\n  -webkit-appearance: textfield !important;\n  outline-offset: -2px !important;\n}\n.markdown-body [type=search]::-webkit-search-cancel-button,\n.markdown-body [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none !important;\n}\n.markdown-body ::-webkit-input-placeholder {\n  color: inherit !important;\n  opacity: 0.54 !important;\n}\n.markdown-body ::-webkit-file-upload-button {\n  -webkit-appearance: button !important;\n  font: inherit !important;\n}\n.markdown-body a:hover {\n  text-decoration: underline !important;\n}\n.markdown-body hr::before {\n  display: table !important;\n  content: \"\" !important;\n}\n.markdown-body hr::after {\n  display: table !important;\n  clear: both !important;\n  content: \"\" !important;\n}\n.markdown-body table {\n  border-spacing: 0 !important;\n  border-collapse: collapse !important;\n  display: block !important;\n  width: -webkit-max-content !important;\n  width: max-content !important;\n  max-width: 100% !important;\n  overflow: auto !important;\n}\n.markdown-body td,\n.markdown-body th {\n  padding: 0 !important;\n}\n.markdown-body details summary {\n  cursor: pointer !important;\n}\n.markdown-body details:not([open]) > *:not(summary) {\n  display: none !important;\n}\n.markdown-body kbd {\n  display: inline-block !important;\n  padding: 3px 5px !important;\n  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;\n  line-height: 10px !important;\n  color: #24292f !important;\n  vertical-align: middle !important;\n  background-color: #f6f8fa !important;\n  border: solid 1px rgba(175, 184, 193, 0.2) !important;\n  border-bottom-color: rgba(175, 184, 193, 0.2) !important;\n  border-radius: 6px !important;\n  box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2) !important;\n}\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 24px !important;\n  margin-bottom: 16px !important;\n  font-weight: 600 !important;\n  line-height: 1.25 !important;\n}\n.markdown-body h2 {\n  font-weight: 600 !important;\n  padding-bottom: 0.3em !important;\n  font-size: 1.5em !important;\n  border-bottom: 1px solid #d8dee4 !important;\n}\n.markdown-body h3 {\n  font-weight: 600 !important;\n  font-size: 1.25em !important;\n}\n.markdown-body h4 {\n  font-weight: 600 !important;\n  font-size: 1em !important;\n}\n.markdown-body h5 {\n  font-weight: 600 !important;\n  font-size: 0.875em !important;\n}\n.markdown-body h6 {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n  color: #57606a !important;\n}\n.markdown-body p {\n  margin-top: 0 !important;\n  margin-bottom: 10px !important;\n}\n.markdown-body blockquote {\n  margin: 0 !important;\n  padding: 1em 1em !important;\n  color: #57606a !important;\n  border-left: 0.25em solid #f29e03 !important;\n  border-bottom: 1px solid #f29e03 !important;\n  border-top: 1px solid #f29e03 !important;\n  border-right: 1px solid #f29e03 !important;\n  border-radius: 2px !important;\n  background-color: #ffffff !important;\n}\n.markdown-body blockquote {\n  margin: 0 !important;\n  padding: 1em 1em !important;\n  color: #57606a !important;\n  border-left: 0.25em solid #f29e03 !important;\n  border-bottom: 1px solid #f29e03 !important;\n  border-top: 1px solid #f29e03 !important;\n  border-right: 1px solid #f29e03 !important;\n  border-radius: 2px !important;\n  background-color: #ffffff !important;\n}\n.markdown-body ul,\n.markdown-body ol {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-left: 2em !important;\n}\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman !important;\n}\n.markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol {\n  list-style-type: lower-alpha !important;\n}\n.markdown-body dd {\n  margin-left: 0 !important;\n}\n.markdown-body tt,\n.markdown-body code {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;\n  font-size: 12px !important;\n}\n.markdown-body code {\n  padding-top: 25px !important;\n  padding-bottom: 25px !important;\n}\n.markdown-body pre {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;\n  font-size: 12px !important;\n  word-wrap: normal !important;\n}\n.markdown-body .octicon {\n  display: inline-block !important;\n  overflow: visible !important;\n  vertical-align: text-bottom !important;\n  fill: currentColor !important;\n}\n.markdown-body ::placeholder {\n  color: #6e7781 !important;\n  opacity: 1 !important;\n}\n.markdown-body input::-webkit-outer-spin-button,\n.markdown-body input::-webkit-inner-spin-button {\n  margin: 0 !important;\n  -webkit-appearance: none !important;\n  appearance: none !important;\n}\n.markdown-body .pl-c {\n  color: #6e7781 !important;\n}\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #0550ae !important;\n}\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #8250df !important;\n}\n.markdown-body .pl-smi,\n.markdown-body .pl-s .pl-s1 {\n  color: #24292f !important;\n}\n.markdown-body .pl-ent {\n  color: #116329 !important;\n}\n.markdown-body .pl-k {\n  color: #cf222e !important;\n}\n.markdown-body .pl-s,\n.markdown-body .pl-pds,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sre,\n.markdown-body .pl-sr .pl-sra {\n  color: #0a3069 !important;\n}\n.markdown-body .pl-v,\n.markdown-body .pl-smw {\n  color: #953800 !important;\n}\n.markdown-body .pl-bu {\n  color: #82071e !important;\n}\n.markdown-body .pl-ii {\n  color: #f6f8fa !important;\n  background-color: #82071e !important;\n}\n.markdown-body .pl-c2 {\n  color: #f6f8fa !important;\n  background-color: #cf222e !important;\n}\n.markdown-body .pl-sr .pl-cce {\n  font-weight: bold !important;\n  color: #116329 !important;\n}\n.markdown-body .pl-ml {\n  color: #3b2300 !important;\n}\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  font-weight: bold !important;\n  color: #0550ae !important;\n}\n.markdown-body .pl-mi {\n  font-style: italic !important;\n  color: #24292f !important;\n}\n.markdown-body .pl-mb {\n  font-weight: bold !important;\n  color: #24292f !important;\n}\n.markdown-body .pl-md {\n  color: #82071e !important;\n  background-color: #ffebe9 !important;\n}\n.markdown-body .pl-mi1 {\n  color: #116329 !important;\n  background-color: #dafbe1 !important;\n}\n.markdown-body .pl-mc {\n  color: #953800 !important;\n  background-color: #ffd8b5 !important;\n}\n.markdown-body .pl-mi2 {\n  color: #eaeef2 !important;\n  background-color: #0550ae !important;\n}\n.markdown-body .pl-mdr {\n  font-weight: bold !important;\n  color: #8250df !important;\n}\n.markdown-body .pl-ba {\n  color: #57606a !important;\n}\n.markdown-body .pl-sg {\n  color: #8c959f !important;\n}\n.markdown-body .pl-corl {\n  text-decoration: underline !important;\n  color: #0a3069 !important;\n}\n.markdown-body [data-catalyst] {\n  display: block !important;\n}\n.markdown-body g-emoji {\n  font-family: \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" !important;\n  font-size: 1em !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  line-height: 1 !important;\n  vertical-align: -0.075em !important;\n}\n.markdown-body g-emoji img {\n  width: 1em !important;\n  height: 1em !important;\n}\n.markdown-body::before {\n  display: table !important;\n  content: \"\" !important;\n}\n.markdown-body::after {\n  display: table !important;\n  clear: both !important;\n  content: \"\" !important;\n}\n.markdown-body > *:first-child {\n  margin-top: 0 !important;\n}\n.markdown-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n.markdown-body a:not([href]) {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n.markdown-body .absent {\n  color: #cf222e !important;\n}\n.markdown-body .anchor {\n  float: left !important;\n  padding-right: 4px !important;\n  margin-left: -20px !important;\n  line-height: 1 !important;\n}\n.markdown-body .anchor:focus {\n  outline: none !important;\n}\n.markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre,\n.markdown-body details {\n  margin-top: 0 !important;\n  margin-bottom: 16px !important;\n}\n.markdown-body blockquote {\n  font-size: 14px !important;\n}\n.markdown-body blockquote > :first-child {\n  margin-top: 0 !important;\n}\n.markdown-body blockquote > :last-child {\n  margin-bottom: 0 !important;\n}\n.markdown-body sup > a::before {\n  content: \"[\" !important;\n}\n.markdown-body sup > a::after {\n  content: \"]\" !important;\n}\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #24292f !important;\n  vertical-align: middle !important;\n  visibility: hidden !important;\n}\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none !important;\n}\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible !important;\n}\n.markdown-body h1 tt,\n.markdown-body h1 code,\n.markdown-body h2 tt,\n.markdown-body h2 code,\n.markdown-body h3 tt,\n.markdown-body h3 code,\n.markdown-body h4 tt,\n.markdown-body h4 code,\n.markdown-body h5 tt,\n.markdown-body h5 code,\n.markdown-body h6 tt,\n.markdown-body h6 code {\n  padding: 0 0.2em !important;\n  font-size: inherit !important;\n}\n.markdown-body ul.no-list,\n.markdown-body ol.no-list {\n  padding: 0 !important;\n  list-style-type: none !important;\n}\n.markdown-body ol[type=\"1\"] {\n  list-style-type: decimal !important;\n}\n.markdown-body ol[type=a] {\n  list-style-type: lower-alpha !important;\n}\n.markdown-body ol[type=i] {\n  list-style-type: lower-roman !important;\n}\n.markdown-body div > ol:not([type]) {\n  list-style-type: decimal !important;\n}\n.markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.markdown-body li > p {\n  margin-top: 16px !important;\n}\n.markdown-body li + li {\n  margin-top: 0.25em !important;\n}\n.markdown-body dl {\n  padding: 0 !important;\n}\n.markdown-body dl dt {\n  padding: 0 !important;\n  margin-top: 16px !important;\n  font-size: 1em !important;\n  font-style: italic !important;\n  font-weight: 600 !important;\n}\n.markdown-body dl dd {\n  padding: 0 16px !important;\n  margin-bottom: 16px !important;\n}\n.markdown-body table th {\n  font-weight: 600 !important;\n}\n.markdown-body table th,\n.markdown-body table td {\n  padding: 6px 13px !important;\n  border: 1px solid #d0d7de !important;\n}\n.markdown-body table tr {\n  background-color: #ffffff !important;\n  border-top: 1px solid #d8dee4 !important;\n}\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f6f8fa !important;\n}\n.markdown-body table img {\n  background-color: transparent !important;\n}\n.markdown-body img[align=right] {\n  padding-left: 20px !important;\n}\n.markdown-body img[align=left] {\n  padding-right: 20px !important;\n}\n.markdown-body .emoji {\n  max-width: none !important;\n  vertical-align: text-top !important;\n  background-color: transparent !important;\n}\n.markdown-body span.frame {\n  display: block !important;\n  overflow: hidden !important;\n}\n.markdown-body span.frame > span {\n  display: block !important;\n  float: left !important;\n  width: auto !important;\n  padding: 7px !important;\n  margin: 13px 0 0 !important;\n  overflow: hidden !important;\n  border: 1px solid #d0d7de !important;\n}\n.markdown-body span.frame span img {\n  display: block !important;\n  float: left !important;\n}\n.markdown-body span.frame span span {\n  display: block !important;\n  padding: 5px 0 0 !important;\n  clear: both !important;\n  color: #24292f !important;\n}\n.markdown-body span.align-center {\n  display: block !important;\n  overflow: hidden !important;\n  clear: both !important;\n}\n.markdown-body span.align-center > span {\n  display: block !important;\n  margin: 13px auto 0 !important;\n  overflow: hidden !important;\n  text-align: center !important;\n}\n.markdown-body span.align-center span img {\n  margin: 0 auto !important;\n  text-align: center !important;\n}\n.markdown-body span.align-right {\n  display: block !important;\n  overflow: hidden !important;\n  clear: both !important;\n}\n.markdown-body span.align-right > span {\n  display: block !important;\n  margin: 13px 0 0 !important;\n  overflow: hidden !important;\n  text-align: right !important;\n}\n.markdown-body span.align-right span img {\n  margin: 0 !important;\n  text-align: right !important;\n}\n.markdown-body span.float-left {\n  display: block !important;\n  float: left !important;\n  margin-right: 13px !important;\n  overflow: hidden !important;\n}\n.markdown-body span.float-left span {\n  margin: 13px 0 0 !important;\n}\n.markdown-body span.float-right {\n  display: block !important;\n  float: right !important;\n  margin-left: 13px !important;\n  overflow: hidden !important;\n}\n.markdown-body span.float-right > span {\n  display: block !important;\n  margin: 13px auto 0 !important;\n  overflow: hidden !important;\n  text-align: right !important;\n}\n.markdown-body code,\n.markdown-body tt {\n  padding: 0.2em 0.4em !important;\n  margin: 0 !important;\n  font-size: 85% !important;\n  background-color: rgba(175, 184, 193, 0.36) !important;\n  border-radius: 2px !important;\n}\n.markdown-body code br,\n.markdown-body tt br {\n  display: none !important;\n}\n.markdown-body del code {\n  text-decoration: inherit !important;\n}\n.markdown-body pre code {\n  font-size: 100% !important;\n}\n.markdown-body pre > code {\n  padding: 0 !important;\n  margin: 0 !important;\n  word-break: normal !important;\n  white-space: pre !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n.markdown-body .highlight {\n  margin-bottom: 16px !important;\n}\n.markdown-body .highlight pre {\n  margin-bottom: 0 !important;\n  word-break: normal !important;\n}\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px !important;\n  overflow: auto !important;\n  font-size: 85% !important;\n  line-height: 1.45 !important;\n  background-color: #f6f8fa !important;\n  border-radius: 2px !important;\n}\n.markdown-body pre code,\n.markdown-body pre tt {\n  display: inline !important;\n  max-width: auto !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: visible !important;\n  line-height: inherit !important;\n  word-wrap: normal !important;\n  background-color: transparent !important;\n  border: 0 !important;\n}\n.markdown-body .csv-data td,\n.markdown-body .csv-data th {\n  padding: 5px !important;\n  overflow: hidden !important;\n  font-size: 12px !important;\n  line-height: 1 !important;\n  text-align: left !important;\n  white-space: nowrap !important;\n}\n.markdown-body .csv-data .blob-num {\n  padding: 10px 8px 9px !important;\n  text-align: right !important;\n  background: #ffffff !important;\n  border: 0 !important;\n}\n.markdown-body .csv-data tr {\n  border-top: 0 !important;\n}\n.markdown-body .csv-data th {\n  font-weight: 600 !important;\n  background: #f6f8fa !important;\n  border-top: 0 !important;\n}\n.markdown-body .footnotes {\n  font-size: 12px !important;\n  color: #57606a !important;\n  border-top: 1px solid #d0d7de !important;\n}\n.markdown-body .footnotes ol {\n  padding-left: 16px !important;\n}\n.markdown-body .footnotes li {\n  position: relative !important;\n}\n.markdown-body .footnotes li:target::before {\n  position: absolute !important;\n  top: -8px !important;\n  right: -8px !important;\n  bottom: -8px !important;\n  left: -24px !important;\n  pointer-events: none !important;\n  content: \"\" !important;\n  border: 2px solid #0969da !important;\n  border-radius: 2px !important;\n}\n.markdown-body .footnotes li:target {\n  color: #24292f !important;\n}\n.markdown-body .footnotes .data-footnote-backref g-emoji {\n  font-family: monospace !important;\n}\n.markdown-body .task-list-item {\n  list-style-type: none !important;\n}\n.markdown-body .task-list-item label {\n  font-weight: 400 !important;\n}\n.markdown-body .task-list-item.enabled label {\n  cursor: pointer !important;\n}\n.markdown-body .task-list-item + .task-list-item {\n  margin-top: 3px !important;\n}\n.markdown-body .task-list-item .handle {\n  display: none !important;\n}\n.markdown-body .task-list-item-checkbox {\n  margin: 0 0.2em 0.25em -1.6em !important;\n  vertical-align: middle !important;\n}\n.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {\n  margin: 0 -1.6em 0.25em 0.2em !important;\n}\n.markdown-body ::-webkit-calendar-picker-indicator {\n  filter: invert(50%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dpdGh1Yi1tYXJrZG93bi5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFBO0FDQUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUVBOzREQUM0RDtBQUM1RDtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YseUJBQXlCLEVBQUUsZUFBZTtDQUMxQyxzQkFBc0I7Q0FDdEIscUJBQXFCO0FBQ3RCO0FBRUE7OztDQUdDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMscUNBQXFDO0NBQ3JDLG1CQUFtQjtBQUNwQjtBQUVBOzs7Ozs7Q0FNQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCO0FEN0RBLGdFQUFBO0FBRUE7RUFDSSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUVBLDBJQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBQURKO0FBSUE7Ozs7OztFQU1JLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7RUFDQSxpaUJBQUE7RUFDQSx5aEJBQUE7QUFESjtBQUlBOzs7RUFHSSx5QkFBQTtBQURKO0FBSUE7RUFDSSw2QkFBQTtBQURKO0FBSUE7RUFDSSx3QkFBQTtBQURKO0FBSUE7RUFDSSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7QUFBSjtBQUdBOztFQUVJLDJCQUFBO0FBQUo7QUFHQTtFQUNJLDhCQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQUFKO0FBR0E7O0VBRUksMkJBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBR0E7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTs7RUFFSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUFKO0FBR0E7RUFDSSwwQkFBQTtBQUFKO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBR0E7Ozs7RUFJSSw0Q0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0FBQUo7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUFBSjtBQUdBOzs7RUFHSSxxQ0FBQTtBQUFKO0FBR0E7OztFQUdJLDZCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdBOzs7RUFHSSx5Q0FBQTtBQUFKO0FBR0E7O0VBRUksaUNBQUE7RUFDQSxxQkFBQTtBQUFKO0FBR0E7O0VBRUksdUJBQUE7QUFBSjtBQUdBO0VBQ0ksd0NBQUE7RUFDQSwrQkFBQTtBQUFKO0FBR0E7O0VBRUksbUNBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUFKO0FBR0E7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0FBQUo7QUFHQTtFQUNJLHFDQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTs7RUFFSSxxQkFBQTtBQUFKO0FBR0E7RUFDSSwwQkFBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtBQUFKO0FBR0E7RUFDSSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0dBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esd0RBQUE7RUFDQSw2QkFBQTtFQUNBLDhEQUFBO0FBQUo7QUFHQTs7Ozs7O0VBTUksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDSCwyQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUVHLG9DQUFBO0FBREo7QUFFQztFQUNHLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0gsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFFRyxvQ0FBQTtBQUFKO0FBR0E7O0VBRUksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHQTs7RUFFSSx1Q0FBQTtBQUFKO0FBR0E7Ozs7RUFJSSx1Q0FBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7O0VBRUksMEdBQUE7RUFDQSwwQkFBQTtBQUFKO0FBR0E7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwR0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdBO0VBQ0ksZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBR0E7O0VBRUksb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTs7RUFFSSx5QkFBQTtBQUFKO0FBR0E7O0VBRUkseUJBQUE7QUFBSjtBQUdBOztFQUVJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTs7Ozs7OztFQU9JLHlCQUFBO0FBQUo7QUFHQTs7RUFFSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7OztFQUdJLDRCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxxQ0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGdGQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7QUFBSjtBQUdBO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQ0ksd0JBQUE7QUFBSjtBQUdBOzs7Ozs7OztFQVFJLHdCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdBO0VBQ0ksMEJBQUE7QUFBSjtBQUdBO0VBQ0ksd0JBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7QUFBSjtBQUdBO0VBQ0ksdUJBQUE7QUFBSjtBQUdBO0VBQ0ksdUJBQUE7QUFBSjtBQUdBOzs7Ozs7RUFNSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBOzs7Ozs7RUFNSSxnQ0FBQTtBQUFKO0FBR0E7Ozs7OztFQU1JLDhCQUFBO0FBQUo7QUFHQTs7Ozs7Ozs7Ozs7O0VBWUksMkJBQUE7RUFDQSw2QkFBQTtBQUFKO0FBR0E7O0VBRUkscUJBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBR0E7RUFDSSxtQ0FBQTtBQUFKO0FBR0E7RUFDSSx1Q0FBQTtBQUFKO0FBR0E7RUFDSSx1Q0FBQTtBQUFKO0FBR0E7RUFDSSxtQ0FBQTtBQUFKO0FBR0E7Ozs7RUFJSSx3QkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0FBQUo7QUFHQTtFQUNJLDZCQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtBQUFKO0FBR0E7O0VBRUksNEJBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBR0E7RUFDSSxvQ0FBQTtFQUNBLHdDQUFBO0FBQUo7QUFHQTtFQUNJLG9DQUFBO0FBQUo7QUFHQTtFQUNJLHdDQUFBO0FBQUo7QUFHQTtFQUNJLDZCQUFBO0FBQUo7QUFHQTtFQUNJLDhCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdBOztFQUVJLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNEQUFBO0VBQ0gsNkJBQUE7QUFBRDtBQUdBOztFQUVJLHdCQUFBO0FBQUo7QUFHQTtFQUNJLG1DQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0E7RUFDSSw4QkFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FBQUo7QUFHQTs7RUFFSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBOztFQUVJLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0E7O0VBRUksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQUFKO0FBR0E7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGlDQUFBO0FBQUo7QUFHQTtFQUNJLGdDQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLDBCQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0FBQUo7QUFHQTtFQUNJLHdDQUFBO0VBQ0EsaUNBQUE7QUFBSjtBQUdBO0VBQ0ksd0NBQUE7QUFBSjtBQUdBO0VBQ0ksOEJBQUE7QUFBSiIsImZpbGUiOiJnaXRodWItbWFya2Rvd24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGluY2x1ZGUgQ1NTIGZvciBwcmlzbSB0b29sYmFyICovXG5AaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzXCI7XG4vKiBjaGVjayBub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvIGZvciB0aGUgYXZhaWxhYmxlIHRoZW1lcyAqL1xuXG4ubWFya2Rvd24tYm9keSB7XG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiICAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLm9jdGljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBoMTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxuLm1hcmtkb3duLWJvZHkgaDI6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcbi5tYXJrZG93bi1ib2R5IGgzOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXG4ubWFya2Rvd24tYm9keSBoNDpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxuLm1hcmtkb3duLWJvZHkgaDU6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcbi5tYXJrZG93bi1ib2R5IGg2OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUge1xuICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogXCIgXCIgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIGFyaWEtaGlkZGVuPSd0cnVlJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J003Ljc3NSAzLjI3NWEuNzUuNzUgMCAwMDEuMDYgMS4wNmwxLjI1LTEuMjVhMiAyIDAgMTEyLjgzIDIuODNsLTIuNSAyLjVhMiAyIDAgMDEtMi44MyAwIC43NS43NSAwIDAwLTEuMDYgMS4wNiAzLjUgMy41IDAgMDA0Ljk1IDBsMi41LTIuNWEzLjUgMy41IDAgMDAtNC45NS00Ljk1bC0xLjI1IDEuMjV6bS00LjY5IDkuNjRhMiAyIDAgMDEwLTIuODNsMi41LTIuNWEyIDIgMCAwMTIuODMgMCAuNzUuNzUgMCAwMDEuMDYtMS4wNiAzLjUgMy41IDAgMDAtNC45NSAwbC0yLjUgMi41YTMuNSAzLjUgMCAwMDQuOTUgNC45NWwxLjI1LTEuMjVhLjc1Ljc1IDAgMDAtMS4wNi0xLjA2bC0xLjI1IDEuMjVhMiAyIDAgMDEtMi44MyAweic+PC9wYXRoPjwvc3ZnPlwiKSAhaW1wb3J0YW50O1xuICAgIG1hc2staW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIGFyaWEtaGlkZGVuPSd0cnVlJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J003Ljc3NSAzLjI3NWEuNzUuNzUgMCAwMDEuMDYgMS4wNmwxLjI1LTEuMjVhMiAyIDAgMTEyLjgzIDIuODNsLTIuNSAyLjVhMiAyIDAgMDEtMi44MyAwIC43NS43NSAwIDAwLTEuMDYgMS4wNiAzLjUgMy41IDAgMDA0Ljk1IDBsMi41LTIuNWEzLjUgMy41IDAgMDAtNC45NS00Ljk1bC0xLjI1IDEuMjV6bS00LjY5IDkuNjRhMiAyIDAgMDEwLTIuODNsMi41LTIuNWEyIDIgMCAwMTIuODMgMCAuNzUuNzUgMCAwMDEuMDYtMS4wNiAzLjUgMy41IDAgMDAtNC45NSAwbC0yLjUgMi41YTMuNSAzLjUgMCAwMDQuOTUgNC45NWwxLjI1LTEuMjVhLjc1Ljc1IDAgMDAtMS4wNi0xLjA2bC0xLjI1IDEuMjVhMiAyIDAgMDEtMi44MyAweic+PC9wYXRoPjwvc3ZnPlwiKSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzLFxuLm1hcmtkb3duLWJvZHkgZmlnY2FwdGlvbixcbi5tYXJrZG93bi1ib2R5IGZpZ3VyZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDk2OWRhICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFya2Rvd24tYm9keSBhICoge1xuICAgIGNvbG9yOiAjMDk2OWRhICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGE6YWN0aXZlLFxuLm1hcmtkb3duLWJvZHkgYTpob3ZlciB7XG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBiLFxuLm1hcmtkb3duLWJvZHkgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRmbiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxIHtcbiAgICBtYXJnaW46IDAuNjdlbSAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEoMjEwLCAxOCUsIDg3JSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhjNSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMjQyOTJmICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHNtYWxsIHtcbiAgICBmb250LXNpemU6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBzdWIsXG4ubWFya2Rvd24tYm9keSBzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3ViIHtcbiAgICBib3R0b206IC0wLjI1ZW0gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3VwIHtcbiAgICB0b3A6IC0wLjVlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBjb2RlLFxuLm1hcmtkb3duLWJvZHkga2JkLFxuLm1hcmtkb3duLWJvZHkgcHJlLFxuLm1hcmtkb3duLWJvZHkgc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgZmlndXJlIHtcbiAgICBtYXJnaW46IDFlbSA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGhyIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2xhKDIxMCwgMTglLCA4NyUsIDEpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwLjI1ZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyNHB4IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkN2RlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcbiAgICBmb250OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwiYnV0dG9uXCJdLFxuLm1hcmtkb3duLWJvZHkgW3R5cGU9XCJyZXNldFwiXSxcbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwiY2hlY2tib3hcIl0sXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbi5tYXJrZG93bi1ib2R5IFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4ubWFya2Rvd24tYm9keSBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjU0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uICFpbXBvcnRhbnQ7XG4gICAgZm9udDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBocjo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaHI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0ZCxcbi5tYXJrZG93bi1ib2R5IHRoIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRldGFpbHMgc3VtbWFyeSB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRldGFpbHM6bm90KFtvcGVuXSkgPiAqOm5vdChzdW1tYXJ5KSB7XG4gICAgZGlzcGxheTogbm9uZSAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkga2JkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udDogMTFweCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNzUsIDE4NCwgMTkzLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxNzUsIDE4NCwgMTkzLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgxNzUsIDE4NCwgMTkzLCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxLFxuLm1hcmtkb3duLWJvZHkgaDIsXG4ubWFya2Rvd24tYm9keSBoMyxcbi5tYXJrZG93bi1ib2R5IGg0LFxuLm1hcmtkb3duLWJvZHkgaDUsXG4ubWFya2Rvd24tYm9keSBoNiB7XG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEoMjEwLCAxOCUsIDg3JSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGg1IHtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjg3NWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGg2IHtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjg1ZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU3NjA2YSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBwIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1NzYwNmEgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyOWUwMyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1NzYwNmEgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmMjllMDMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyOWUwMyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgdWwsXG4ubWFya2Rvd24tYm9keSBvbCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcbi5tYXJrZG93bi1ib2R5IHVsIG9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHVsIHVsIG9sLFxuLm1hcmtkb3duLWJvZHkgdWwgb2wgb2wsXG4ubWFya2Rvd24tYm9keSBvbCB1bCBvbCxcbi5tYXJrZG93bi1ib2R5IG9sIG9sIG9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWFscGhhICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0dCxcbi5tYXJrZG93bi1ib2R5IGNvZGUge1xuICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGNvZGUge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgcHJlIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLm9jdGljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzZlNzc4MSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4ubWFya2Rvd24tYm9keSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtYyB7XG4gICAgY29sb3I6ICM2ZTc3ODEgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWMxLFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXYge1xuICAgIGNvbG9yOiAjMDU1MGFlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1lLFxuLm1hcmtkb3duLWJvZHkgLnBsLWVuIHtcbiAgICBjb2xvcjogIzgyNTBkZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtc21pLFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXMxIHtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtZW50IHtcbiAgICBjb2xvcjogIzExNjMyOSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtayB7XG4gICAgY29sb3I6ICNjZjIyMmUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLXMsXG4ubWFya2Rvd24tYm9keSAucGwtcGRzLFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXBzZSAucGwtczEsXG4ubWFya2Rvd24tYm9keSAucGwtc3IsXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLWNjZSxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JlLFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyIC5wbC1zcmEge1xuICAgIGNvbG9yOiAjMGEzMDY5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC12LFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtdyB7XG4gICAgY29sb3I6ICM5NTM4MDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWJ1IHtcbiAgICBjb2xvcjogIzgyMDcxZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtaWkge1xuICAgIGNvbG9yOiAjZjZmOGZhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDcxZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtYzIge1xuICAgIGNvbG9yOiAjZjZmOGZhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmMjIyZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLWNjZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzExNjMyOSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWwge1xuICAgIGNvbG9yOiAjM2IyMzAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1taCxcbi5tYXJrZG93bi1ib2R5IC5wbC1taCAucGwtZW4sXG4ubWFya2Rvd24tYm9keSAucGwtbXMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwNTUwYWUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1pIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyNDI5MmYgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1kIHtcbiAgICBjb2xvcjogIzgyMDcxZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZTkgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1pMSB7XG4gICAgY29sb3I6ICMxMTYzMjkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmYmUxICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1tYyB7XG4gICAgY29sb3I6ICM5NTM4MDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGI1ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1taTIge1xuICAgIGNvbG9yOiAjZWFlZWYyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NTBhZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWRyIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjODI1MGRmICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1iYSB7XG4gICAgY29sb3I6ICM1NzYwNmEgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLXNnIHtcbiAgICBjb2xvcjogIzhjOTU5ZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtY29ybCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzBhMzA2OSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBbZGF0YS1jYXRhbHlzdF0ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGctZW1vamkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsICAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiAtMC4wNzVlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBnLWVtb2ppIGltZyB7XG4gICAgd2lkdGg6IDFlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5OjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gICAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcbiAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5ID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMCAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgPiAqOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDAgICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGE6bm90KFtocmVmXSkge1xuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5hYnNlbnQge1xuICAgIGNvbG9yOiAjY2YyMjJlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5hbmNob3Ige1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmFuY2hvcjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBwLFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSxcbi5tYXJrZG93bi1ib2R5IHVsLFxuLm1hcmtkb3duLWJvZHkgb2wsXG4ubWFya2Rvd24tYm9keSBkbCxcbi5tYXJrZG93bi1ib2R5IHRhYmxlLFxuLm1hcmtkb3duLWJvZHkgcHJlLFxuLm1hcmtkb3duLWJvZHkgZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUgPiA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSA+IDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHN1cCA+IGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJbXCIgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3VwID4gYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXVwiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoMiAub2N0aWNvbi1saW5rLFxuLm1hcmtkb3duLWJvZHkgaDMgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGg0IC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoNSAub2N0aWNvbi1saW5rLFxuLm1hcmtkb3duLWJvZHkgaDYgLm9jdGljb24tbGluayB7XG4gICAgY29sb3I6ICMyNDI5MmYgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IsXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yLFxuLm1hcmtkb3duLWJvZHkgaDM6aG92ZXIgLmFuY2hvcixcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IsXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yLFxuLm1hcmtkb3duLWJvZHkgaDY6aG92ZXIgLmFuY2hvciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGgzOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGg2OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBoMSB0dCxcbi5tYXJrZG93bi1ib2R5IGgxIGNvZGUsXG4ubWFya2Rvd24tYm9keSBoMiB0dCxcbi5tYXJrZG93bi1ib2R5IGgyIGNvZGUsXG4ubWFya2Rvd24tYm9keSBoMyB0dCxcbi5tYXJrZG93bi1ib2R5IGgzIGNvZGUsXG4ubWFya2Rvd24tYm9keSBoNCB0dCxcbi5tYXJrZG93bi1ib2R5IGg0IGNvZGUsXG4ubWFya2Rvd24tYm9keSBoNSB0dCxcbi5tYXJrZG93bi1ib2R5IGg1IGNvZGUsXG4ubWFya2Rvd24tYm9keSBoNiB0dCxcbi5tYXJrZG93bi1ib2R5IGg2IGNvZGUge1xuICAgIHBhZGRpbmc6IDAgMC4yZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgdWwubm8tbGlzdCxcbi5tYXJrZG93bi1ib2R5IG9sLm5vLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgb2xbdHlwZT1cIjFcIl0ge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBvbFt0eXBlPVwiYVwiXSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1hbHBoYSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBvbFt0eXBlPVwiaVwiXSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBkaXYgPiBvbDpub3QoW3R5cGVdKSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHVsIHVsLFxuLm1hcmtkb3duLWJvZHkgdWwgb2wsXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcbi5tYXJrZG93bi1ib2R5IG9sIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBsaSA+IHAge1xuICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgbGkgKyBsaSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRsIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRsIGR0IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBkbCBkZCB7XG4gICAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0aCxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiA2cHggMTNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ3ZGUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgdGFibGUgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsYSgyMTAsIDE4JSwgODclLCAxKSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHRhYmxlIGltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW1nW2FsaWduPVwicmlnaHRcIl0ge1xuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBpbWdbYWxpZ249XCJsZWZ0XCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5lbW9qaSB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5mcmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHNwYW4uZnJhbWUgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEzcHggMCAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ3ZGUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5mcmFtZSBzcGFuIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBzcGFuLmZyYW1lIHNwYW4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBzcGFuLmFsaWduLWNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5hbGlnbi1jZW50ZXIgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTNweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHNwYW4uYWxpZ24tY2VudGVyIHNwYW4gaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBzcGFuLmFsaWduLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBjbGVhcjogYm90aCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBzcGFuLmFsaWduLXJpZ2h0ID4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEzcHggMCAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHNwYW4uYWxpZ24tcmlnaHQgc3BhbiBpbWcge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHNwYW4uZmxvYXQtbGVmdCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTNweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5mbG9hdC1sZWZ0IHNwYW4ge1xuICAgIG1hcmdpbjogMTNweCAwIDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5mbG9hdC1yaWdodCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTNweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Bhbi5mbG9hdC1yaWdodCA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxM3B4IGF1dG8gMCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBjb2RlLFxuLm1hcmtkb3duLWJvZHkgdHQge1xuICAgIHBhZGRpbmc6IDAuMmVtIDAuNGVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4NSUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMTg0LCAxOTMsIDAuMzYpICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBjb2RlIGJyLFxuLm1hcmtkb3duLWJvZHkgdHQgYnIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgZGVsIGNvZGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSBwcmUgY29kZSB7XG4gICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IHByZSA+IGNvZGUge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuaGlnaGxpZ2h0IHByZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuaGlnaGxpZ2h0IHByZSxcbi5tYXJrZG93bi1ib2R5IHByZSB7XG4gICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4NSUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40NSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmEgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgcHJlIGNvZGUsXG4ubWFya2Rvd24tYm9keSBwcmUgdHQge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuY3N2LWRhdGEgdGQsXG4ubWFya2Rvd24tYm9keSAuY3N2LWRhdGEgdGgge1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5jc3YtZGF0YSAuYmxvYi1udW0ge1xuICAgIHBhZGRpbmc6IDEwcHggOHB4IDlweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuY3N2LWRhdGEgdHIge1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmNzdi1kYXRhIHRoIHtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjhmYSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmZvb3Rub3RlcyB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1NzYwNmEgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDdkZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuZm9vdG5vdGVzIG9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmZvb3Rub3RlcyBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5mb290bm90ZXMgbGk6dGFyZ2V0OjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLThweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAtOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAtOHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogLTI0cHggIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDk2OWRhICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5mb290bm90ZXMgbGk6dGFyZ2V0IHtcbiAgICBjb2xvcjogIzI0MjkyZiAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuZm9vdG5vdGVzIC5kYXRhLWZvb3Rub3RlLWJhY2tyZWYgZy1lbW9qaSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0ge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtLmVuYWJsZWQgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0gKyAudGFzay1saXN0LWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0gLmhhbmRsZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0tY2hlY2tib3gge1xuICAgIG1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuY29udGFpbnMtdGFzay1saXN0OmRpcihydGwpIC50YXNrLWxpc3QtaXRlbS1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAwIC0xLjZlbSAwLjI1ZW0gMC4yZW0gIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgIWltcG9ydGFudDtcbn1cbiIsImRpdi5jb2RlLXRvb2xiYXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAuM2VtO1xuXHRyaWdodDogLjJlbTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuXHRvcGFjaXR5OiAwO1xufVxuXG5kaXYuY29kZS10b29sYmFyOmhvdmVyID4gLnRvb2xiYXIge1xuXHRvcGFjaXR5OiAxO1xufVxuXG4vKiBTZXBhcmF0ZSBsaW5lIGIvYyBydWxlcyBhcmUgdGhyb3duIG91dCBpZiBzZWxlY3RvciBpcyBpbnZhbGlkLlxuICAgSUUxMSBhbmQgb2xkIEVkZ2UgdmVyc2lvbnMgZG9uJ3Qgc3VwcG9ydCA6Zm9jdXMtd2l0aGluLiAqL1xuZGl2LmNvZGUtdG9vbGJhcjpmb2N1cy13aXRoaW4gPiAudG9vbGJhciB7XG5cdG9wYWNpdHk6IDE7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uIHtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Ym9yZGVyOiAwO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0Zm9udDogaW5oZXJpdDtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdHBhZGRpbmc6IDA7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24sXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3BhbiB7XG5cdGNvbG9yOiAjYmJiO1xuXHRmb250LXNpemU6IC44ZW07XG5cdHBhZGRpbmc6IDAgLjVlbTtcblx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcblx0YmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuXHRib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSgwLDAsMCwwLjIpO1xuXHRib3JkZXItcmFkaXVzOiAuNWVtO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpob3ZlcixcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmZvY3VzLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpob3ZlcixcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246Zm9jdXMsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpob3ZlcixcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuOmZvY3VzIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "45FF":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	var callbacks = [];
	var map = {};
	var noop = function () {};

	Prism.plugins.toolbar = {};

	/**
	 * @typedef ButtonOptions
	 * @property {string} text The text displayed.
	 * @property {string} [url] The URL of the link which will be created.
	 * @property {Function} [onClick] The event listener for the `click` event of the created button.
	 * @property {string} [className] The class attribute to include with element.
	 */

	/**
	 * Register a button callback with the toolbar.
	 *
	 * @param {string} key
	 * @param {ButtonOptions|Function} opts
	 */
	var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
		var callback;

		if (typeof opts === 'function') {
			callback = opts;
		} else {
			callback = function (env) {
				var element;

				if (typeof opts.onClick === 'function') {
					element = document.createElement('button');
					element.type = 'button';
					element.addEventListener('click', function () {
						opts.onClick.call(this, env);
					});
				} else if (typeof opts.url === 'string') {
					element = document.createElement('a');
					element.href = opts.url;
				} else {
					element = document.createElement('span');
				}

				if (opts.className) {
					element.classList.add(opts.className);
				}

				element.textContent = opts.text;

				return element;
			};
		}

		if (key in map) {
			console.warn('There is a button with the key "' + key + '" registered already.');
			return;
		}

		callbacks.push(map[key] = callback);
	};

	/**
	 * Returns the callback order of the given element.
	 *
	 * @param {HTMLElement} element
	 * @returns {string[] | undefined}
	 */
	function getOrder(element) {
		while (element) {
			var order = element.getAttribute('data-toolbar-order');
			if (order != null) {
				order = order.trim();
				if (order.length) {
					return order.split(/\s*,\s*/g);
				} else {
					return [];
				}
			}
			element = element.parentElement;
		}
	}

	/**
	 * Post-highlight Prism hook callback.
	 *
	 * @param env
	 */
	var hook = Prism.plugins.toolbar.hook = function (env) {
		// Check if inline or actual code block (credit to line-numbers plugin)
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Autoloader rehighlights, so only do this once.
		if (pre.parentNode.classList.contains('code-toolbar')) {
			return;
		}

		// Create wrapper for <pre> to prevent scrolling toolbar with content
		var wrapper = document.createElement('div');
		wrapper.classList.add('code-toolbar');
		pre.parentNode.insertBefore(wrapper, pre);
		wrapper.appendChild(pre);

		// Setup the toolbar
		var toolbar = document.createElement('div');
		toolbar.classList.add('toolbar');

		// order callbacks
		var elementCallbacks = callbacks;
		var order = getOrder(env.element);
		if (order) {
			elementCallbacks = order.map(function (key) {
				return map[key] || noop;
			});
		}

		elementCallbacks.forEach(function (callback) {
			var element = callback(env);

			if (!element) {
				return;
			}

			var item = document.createElement('div');
			item.classList.add('toolbar-item');

			item.appendChild(element);
			toolbar.appendChild(item);
		});

		// Add our toolbar to the currently created wrapper of <pre> tag
		wrapper.appendChild(toolbar);
	};

	registerButton('label', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		if (!pre.hasAttribute('data-label')) {
			return;
		}

		var element; var template;
		var text = pre.getAttribute('data-label');
		try {
			// Any normal text will blow up this selector.
			template = document.querySelector('template#' + text);
		} catch (e) { /* noop */ }

		if (template) {
			element = template.content;
		} else {
			if (pre.hasAttribute('data-url')) {
				element = document.createElement('a');
				element.href = pre.getAttribute('data-url');
			} else {
				element = document.createElement('span');
			}

			element.textContent = text;
		}

		return element;
	});

	/**
	 * Register the toolbar with Prism.
	 */
	Prism.hooks.add('complete', hook);
}());


/***/ }),

/***/ "85O/":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:true|false)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;


/***/ }),

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "LgBW");




const routes = [
    {
        path: ':slug',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
        canActivate: []
    }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogRoutingModule);



/***/ }),

/***/ "AaGi":
/*!************************************************!*\
  !*** ./src/app/shared/social-tags-services.ts ***!
  \************************************************/
/*! exports provided: SocialTagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTagsService", function() { return SocialTagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let SocialTagsService = class SocialTagsService {
    constructor(titleService, router, activatedRoute, scully, meta) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.scully = scully;
        this.meta = meta;
        this.tagDescription = "Personal blog, where I write what I like, and show to people my ability, skill, and my stories.";
        this.tagImage = "https://user-images.githubusercontent.com/26276890/132381111-231045e3-cc7d-44d9-b886-ee28a8a18da8.png";
        this.urlPrefix = "";
        this.siteName = "Hieu NguyenVu - Portfolio";
    }
    // readonly userTwitter: string = "@s0l0c0ding";
    setTitleAndTags() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((route) => route.outlet === "primary"))
            .subscribe(() => {
            this.scully.getCurrent().subscribe((link) => {
                // this.meta.updateTag({ name: "twitter:url", content: this.urlPrefix + this.router.url });
                this.meta.updateTag({ name: "og:url", content: this.urlPrefix + this.router.url });
                this.meta.updateTag({ name: "og:site_name", property: "og:site_name", content: this.siteName });
                // this.meta.updateTag({ name: "twitter:creator", content: this.userTwitter });
                // this.meta.updateTag({ name: "twitter:site", content: this.userTwitter });
                if (link === null || link === void 0 ? void 0 : link.title) {
                    this.titleService.setTitle(link.title);
                    this.meta.updateTag({ name: "description", content: link.description });
                    this.meta.updateTag({ name: "image", content: link.header_image });
                    this.meta.updateTag({ name: "og:title", property: "og:title", content: link.title });
                    this.meta.updateTag({ name: "og:description", property: "og:description", content: link.description });
                    this.meta.updateTag({ name: "og:type", property: "og:type", content: "article" });
                    this.meta.updateTag({ name: "article:section", property: "article:section", content: link.keywords[0] });
                    this.meta.updateTag({ name: "og:image", content: link.header_image });
                    // this.meta.updateTag({ name: "twitter:title", content: link.title.substring(0, 69) });
                    // this.meta.updateTag({ name: "twitter:description", content: (link.description as string).substring(0, 123) });
                    // this.meta.updateTag({ name: "twitter:image", content: this.urlPrefix + "/" + link.photo });
                }
                else {
                    this.titleService.setTitle(this.data.title);
                    const description = this.data.desc ? this.data.desc : this.tagDescription;
                    this.meta.updateTag({ name: "description", content: description });
                    this.meta.updateTag({ name: "image", content: this.tagImage });
                    this.meta.updateTag({ name: "og:title", content: this.data.title });
                    this.meta.updateTag({ name: "og:description", content: description });
                    this.meta.updateTag({ name: "og:type", content: "website" });
                    this.meta.updateTag({ name: "og:image", content: this.tagImage });
                    // this.meta.updateTag({ name: "twitter:title", content: this.data.title });
                    // this.meta.updateTag({ name: "twitter:description", content: description.substring(0, 123) });
                    // this.meta.updateTag({ name: "twitter:image", content: this.urlPrefix + "/" + this.tagImage });
                }
            });
        });
    }
    get data() {
        return this.activatedRoute.snapshot.firstChild.data;
    }
};
SocialTagsService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }
];
SocialTagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SocialTagsService);



/***/ }),

/***/ "F7z0":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#blog-post .inner-bounds {\n  padding: 0px;\n}\n#blog-post .header-image {\n  height: auto;\n  width: 100%;\n  display: block;\n  margin-bottom: 3rem;\n  overflow: hidden;\n}\n#blog-post .header-image img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\nimg[src$=centerme] {\n  display: block;\n  margin: 0 auto;\n}\n.bounds .inner-bounds {\n  width: 100%;\n}\n.bounds .inner-bounds .content {\n  margin-bottom: 40px;\n}\n.bounds .header {\n  font-weight: 500 !important;\n  max-width: 1000px;\n  width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.bounds .main-content {\n  max-width: 1000px;\n  width: 1000px;\n  margin-top: 0px;\n  margin-bottom: 50px;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.bounds .main-content > div {\n  justify-content: center;\n  width: 100%;\n}\n.bounds h3.author {\n  font-size: 25px;\n  font-weight: 600;\n}\n.bounds h3.author .sur-name {\n  font-weight: lighter;\n}\n@media screen and (max-width: 1279px) {\n  .bounds {\n    flex-direction: column;\n  }\n\n  .header {\n    max-width: 80% !important;\n  }\n\n  .main-content {\n    max-width: 80% !important;\n  }\n  .main-content .author {\n    text-align: center;\n  }\n  .main-content .yellow-line {\n    width: 100% !important;\n  }\n}\n@media screen and (max-width: 539px) {\n  .header {\n    max-width: 95% !important;\n  }\n\n  .header-sub-wrapper {\n    display: flex;\n    flex: 1 1 100%;\n    flex-direction: column;\n    font-size: 3rem;\n  }\n\n  .main-content {\n    max-width: 95% !important;\n  }\n  .main-content .post-date,\n.main-content .post-thank {\n    text-align: center !important;\n  }\n\n  #mainTab ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFBO0FBRko7QUFJRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBTUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUhGO0FBT0U7RUFDRSxXQUFBO0FBSko7QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFNRTtFQUVFLDJCQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUFQSjtBQVNJO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBUE47QUFXRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVRKO0FBVUk7RUFDRSxvQkFBQTtBQVJOO0FBYUE7RUFDRTtJQUNFLHNCQUFBO0VBVkY7O0VBWUE7SUFDRSx5QkFBQTtFQVRGOztFQVdBO0lBQ0UseUJBQUE7RUFSRjtFQVNFO0lBQ0Usa0JBQUE7RUFQSjtFQVNFO0lBQ0Usc0JBQUE7RUFQSjtBQUNGO0FBVUE7RUFDRTtJQUNFLHlCQUFBO0VBUkY7O0VBVUE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQVBGOztFQVNBO0lBQ0UseUJBQUE7RUFORjtFQU9FOztJQUVFLDZCQUFBO0VBTEo7O0VBVUU7SUFDSSxlQUFBO0VBUE47QUFDRiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcblxuI2Jsb2ctcG9zdHtcbiAgLmlubmVyLWJvdW5kc3tcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZXtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5pbWdbc3JjJD1cImNlbnRlcm1lXCJdIHtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ib3VuZHMge1xuICAuaW5uZXItYm91bmRze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5jb250ZW50e1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblxuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgID4gZGl2IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgaDMuYXV0aG9yIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAuc3VyLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuYm91bmRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5oZWFkZXIge1xuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICAuYXV0aG9yIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnllbGxvdy1saW5lIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xuICAuaGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5oZWFkZXItc3ViLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAucG9zdC1kYXRlLFxuICAgIC5wb3N0LXRoYW5rIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICNtYWluVGFiIHtcbiAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgfVxufVxufSJdfQ== */");

/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.component.html */ "iJX/");
/* harmony import */ var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss */ "F7z0");
/* harmony import */ var _github_markdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github-markdown.scss */ "1JWN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_social_tags_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/social-tags-services */ "AaGi");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highlight.service */ "t/lj");











let BlogComponent = class BlogComponent {
    constructor(router, route, scully, highlightService, socialTagService) {
        this.router = router;
        this.route = route;
        this.scully = scully;
        this.highlightService = highlightService;
        this.socialTagService = socialTagService;
        // links$: Observable<ScullyRoute[]> = this.scully.available$;
        this.scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(true);
        this.current = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        this.title = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.title1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.title2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.startDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.endDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.location$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.headerImage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])("");
        this.displayControl = false;
        this.activeTabIndex = 2;
        socialTagService.setTitleAndTags();
    }
    ngAfterViewInit() { }
    // @HostListener('window:scroll', ['$event']) // for window scroll events
    // @debounce()
    // onScroll(event) {
    //   if (window.pageYOffset > window.innerHeight * 3) {
    //     this.displayControl = true;
    //   } else {
    //     this.displayControl = false;
    //   }
    // }
    /* ... */
    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
    ngOnInit() {
        // debug current pages
        this.current = this.scully.getCurrent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
        this.endDate$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            if (res)
                return res.date_end;
            let date = new Date();
            return date.toISOString().split("T")[0];
        }));
        let sharedTitle$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            if (res)
                return res.title;
            return "This is a secret";
        }));
        this.headerImage$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            if (res)
                return res.header_image;
            return "https://i.imgur.com/9SYJ5pX.png";
        }));
        this.location$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            if (res)
                return res.location;
            return "Hanoi, Vietnam";
        }));
        this.title = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((title) => title.replace("<br>", " ")));
        this.title1 = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((title) => title.split("<br>")[0]));
        this.title2 = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((title) => title.split("<br>").slice(1).join()));
    }
    tabChanged(tabChangeEvent) {
        let index = tabChangeEvent.index;
        this.router.navigateByUrl(`/?index=${index}`);
    }
    onTabGroupClicked() {
        this.router.navigateByUrl(`/?index=${this.activeTabIndex}`);
    }
    scrollToTop() {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    scrollToBottom() {
        window.scrollTo({ left: 0, top: document.body.clientHeight, behavior: "smooth" });
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyRoutesService"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_10__["HighlightService"] },
    { type: _shared_social_tags_services__WEBPACK_IMPORTED_MODULE_9__["SocialTagsService"] }
];
BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-blog",
        template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        preserveWhitespaces: true,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _github_markdown_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], BlogComponent);



/***/ }),

/***/ "QWvX":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),

/***/ "RX2a":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-yaml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	// https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
	// https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
	var anchorOrAlias = /[*&][^\s[\]{},]+/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
	var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
	var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|'
		+ anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)';
	// https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
	// This is a simplified version that doesn't support "#" and multiline keys
	// All these long scarry character classes are simplified versions of YAML's characters
	var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source
		.replace(/<PLAIN>/g, function () { return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source; });
	var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

	/**
	 *
	 * @param {string} value
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function createValuePattern(value, flags) {
		flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag
		var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
			.replace(/<<prop>>/g, function () { return properties; }).replace(/<<value>>/g, function () { return value; });
		return RegExp(pattern, flags);
	}

	Prism.languages.yaml = {
		'scalar': {
			pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source
				.replace(/<<prop>>/g, function () { return properties; })),
			lookbehind: true,
			alias: 'string'
		},
		'comment': /#.*/,
		'key': {
			pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
				.replace(/<<prop>>/g, function () { return properties; })
				.replace(/<<key>>/g, function () { return '(?:' + plainKey + '|' + string + ')'; })),
			lookbehind: true,
			greedy: true,
			alias: 'atrule'
		},
		'directive': {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: true,
			alias: 'important'
		},
		'datetime': {
			pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
			lookbehind: true,
			alias: 'number'
		},
		'boolean': {
			pattern: createValuePattern(/true|false/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'null': {
			pattern: createValuePattern(/null|~/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'string': {
			pattern: createValuePattern(string),
			lookbehind: true,
			greedy: true
		},
		'number': {
			pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
			lookbehind: true
		},
		'tag': tag,
		'important': anchorOrAlias,
		'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
	};

	Prism.languages.yml = Prism.languages.yaml;

}(Prism));


/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.component */ "LgBW");







let BlogModule = class BlogModule {
};
BlogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"]],
        providers: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
    })
], BlogModule);



/***/ }),

/***/ "XIHC":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-typescript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.typescript = Prism.languages.extend('javascript', {
		'class-name': {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: true,
			greedy: true,
			inside: null // see below
		},
		'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
	});

	// The keywords TypeScript adds to JavaScript
	Prism.languages.typescript.keyword.push(
		/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
		// keywords that have to be followed by an identifier
		/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
		// This is for `import type *, {}`
		/\btype\b(?=\s*(?:[\{*]|$))/
	);

	// doesn't work with TS because TS is too complex
	delete Prism.languages.typescript['parameter'];

	// a version of typescript specifically for highlighting types
	var typeInside = Prism.languages.extend('typescript', {});
	delete typeInside['class-name'];

	Prism.languages.typescript['class-name'].inside = typeInside;

	Prism.languages.insertBefore('typescript', 'function', {
		'decorator': {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				'at': {
					pattern: /^@/,
					alias: 'operator'
				},
				'function': /^[\s\S]+/
			}
		},
		'generic-function': {
			// e.g. foo<T extends "bar" | "baz">( ...
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: true,
			inside: {
				'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				'generic': {
					pattern: /<[\s\S]+/, // everything after the first <
					alias: 'class-name',
					inside: typeInside
				}
			}
		}
	});

	Prism.languages.ts = Prism.languages.typescript;

}(Prism));


/***/ }),

/***/ "YBrI":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-xml-doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * If the given language is present, it will insert the given doc comment grammar token into it.
	 *
	 * @param {string} lang
	 * @param {any} docComment
	 */
	function insertDocComment(lang, docComment) {
		if (Prism.languages[lang]) {
			Prism.languages.insertBefore(lang, 'comment', {
				'doc-comment': docComment
			});
		}
	}

	var tag = Prism.languages.markup.tag;

	var slashDocComment = {
		pattern: /\/\/\/.*/,
		greedy: true,
		alias: 'comment',
		inside: {
			'tag': tag
		}
	};
	var tickDocComment = {
		pattern: /'''.*/,
		greedy: true,
		alias: 'comment',
		inside: {
			'tag': tag
		}
	};

	insertDocComment('csharp', slashDocComment);
	insertDocComment('fsharp', slashDocComment);
	insertDocComment('vbnet', tickDocComment);

}(Prism));


/***/ }),

/***/ "ZgVT":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/***/ }),

/***/ "bPOv":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/***/ }),

/***/ "c2Kr":
/*!***********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

		return;
	}

	/**
	 * When the given elements is clicked by the user, the given text will be copied to clipboard.
	 *
	 * @param {HTMLElement} element
	 * @param {CopyInfo} copyInfo
	 *
	 * @typedef CopyInfo
	 * @property {() => string} getText
	 * @property {() => void} success
	 * @property {(reason: unknown) => void} error
	 */
	function registerClipboard(element, copyInfo) {
		element.addEventListener('click', function () {
			copyTextToClipboard(copyInfo);
		});
	}

	// https://stackoverflow.com/a/30810322/7595472

	/** @param {CopyInfo} copyInfo */
	function fallbackCopyTextToClipboard(copyInfo) {
		var textArea = document.createElement('textarea');
		textArea.value = copyInfo.getText();

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand('copy');
			setTimeout(function () {
				if (successful) {
					copyInfo.success();
				} else {
					copyInfo.error();
				}
			}, 1);
		} catch (err) {
			setTimeout(function () {
				copyInfo.error(err);
			}, 1);
		}

		document.body.removeChild(textArea);
	}
	/** @param {CopyInfo} copyInfo */
	function copyTextToClipboard(copyInfo) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(copyInfo.getText()).then(copyInfo.success, function () {
				// try the fallback in case `writeText` didn't work
				fallbackCopyTextToClipboard(copyInfo);
			});
		} else {
			fallbackCopyTextToClipboard(copyInfo);
		}
	}

	/**
	 * Selects the text content of the given element.
	 *
	 * @param {Element} element
	 */
	function selectElementText(element) {
		// https://stackoverflow.com/a/20079910/7595472
		window.getSelection().selectAllChildren(element);
	}

	/**
	 * Traverses up the DOM tree to find data attributes that override the default plugin settings.
	 *
	 * @param {Element} startElement An element to start from.
	 * @returns {Settings} The plugin settings.
	 * @typedef {Record<"copy" | "copy-error" | "copy-success" | "copy-timeout", string | number>} Settings
	 */
	function getSettings(startElement) {
		/** @type {Settings} */
		var settings = {
			'copy': 'Copy',
			'copy-error': 'Press Ctrl+C to copy',
			'copy-success': 'Copied!',
			'copy-timeout': 5000
		};

		var prefix = 'data-prismjs-';
		for (var key in settings) {
			var attr = prefix + key;
			var element = startElement;
			while (element && !element.hasAttribute(attr)) {
				element = element.parentElement;
			}
			if (element) {
				settings[key] = element.getAttribute(attr);
			}
		}
		return settings;
	}

	Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
		var element = env.element;

		var settings = getSettings(element);

		var linkCopy = document.createElement('button');
		linkCopy.className = 'copy-to-clipboard-button';
		linkCopy.setAttribute('type', 'button');
		var linkSpan = document.createElement('span');
		linkCopy.appendChild(linkSpan);

		setState('copy');

		registerClipboard(linkCopy, {
			getText: function () {
				return element.textContent;
			},
			success: function () {
				setState('copy-success');

				resetText();
			},
			error: function () {
				setState('copy-error');

				setTimeout(function () {
					selectElementText(element);
				}, 1);

				resetText();
			}
		});

		return linkCopy;

		function resetText() {
			setTimeout(function () { setState('copy'); }, settings['copy-timeout']);
		}

		/** @param {"copy" | "copy-error" | "copy-success"} state */
		function setState(state) {
			linkSpan.textContent = settings[state];
			linkCopy.setAttribute('data-copy-state', state);
		}
	});
}());


/***/ }),

/***/ "iJX/":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group id=\"mainTab\" mat-align-tabs=\"center\" dynamicHeight [(selectedIndex)]=\"activeTabIndex\" (click)=\"onTabGroupClicked()\">\n    <mat-tab label=\"ABOUT ME\"></mat-tab>\n    <mat-tab label=\"PORTFOLIO\"></mat-tab>\n    <mat-tab label=\"AFTER WORK\"></mat-tab>\n</mat-tab-group>\n<div class=\"bounds\" id=\"blog-post\">\n    <div class=\"inner-bounds\">\n        <div class=\"header-image\">\n            <img [src]=\"headerImage$ | async\" loading=\"lazy\" />\n        </div>\n        <div class=\"content\">\n            <h1 class=\"header\">\n                <span class=\"header-sub-wrapper\"\n                    ><span>{{ title1 | async }}</span\n                    ><span>{{ title2 | async }}</span></span\n                >\n            </h1>\n            <div class=\"main-content markdown-body\">\n                <div>\n                    <div>\n                        <h3 class=\"author\"><span>VU HIEU</span><span class=\"sur-name\"> NGUYEN</span></h3>\n                        <div style=\"width: 50px; height: 20px; border-bottom: 3px solid #f29e03; margin-bottom: 50px\" class=\"yellow-line\"></div>\n                        <div style=\"min-height: 350px\">\n                            <scully-content></scully-content>\n                        </div>\n                        <div class=\"post-date\" style=\"text-align: right\">{{location$ | async}} - {{ endDate$ | async }}</div>\n                        <div class=\"post-thank\" style=\"text-align: right; font-style: italic\">Thank for reading!</div>\n                    </div>\n                    <div></div>\n                </div>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-contact\">\n                    <div id=\"m-icon\">\n                        <a class=\"m-icon gmail\" href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\" target=\"_blank\" style=\"cursor: pointer\"></a>\n                    </div>\n                    <div id=\"m-contact\" style=\"cursor: pointer\">\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\n                    </div>\n                </div>\n                <div id=\"footer-download-cv\">\n                    <div\n                        class=\"download\"\n                        onclick=\"window.open(\n                        'https://drive.google.com/file/d/1sNJLiX9THvwkWe3FFBDrOJPMWuLw9ykW/view?usp=sharing',\n                        '_blank'\n                      );\"\n                        style=\"cursor: pointer\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "ki2X":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-java.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'class-name': [
			className,
			{
				// variables and parameters
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('java', 'string', {
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		'namespace': {
			pattern: RegExp(
				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
					.source.replace(/<keyword>/g, function () { return keywords.source; })),
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		}
	});
}(Prism));


/***/ }),

/***/ "sxGJ":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

    this.resolveOptions(options);
    this.initSelection();
  }
  /**
   * Defines base properties passed from constructor.
   * @param {Object} options
   */


  _createClass(ClipboardAction, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = options.action;
      this.container = options.container;
      this.emitter = options.emitter;
      this.target = options.target;
      this.text = options.text;
      this.trigger = options.trigger;
      this.selectedText = '';
    }
    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

  }, {
    key: "initSelection",
    value: function initSelection() {
      if (this.text) {
        this.selectFake();
      } else if (this.target) {
        this.selectTarget();
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     */

  }, {
    key: "createFakeElement",
    value: function createFakeElement() {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.fakeElem.setAttribute('readonly', '');
      this.fakeElem.value = this.text;
      return this.fakeElem;
    }
    /**
     * Get's the value of fakeElem,
     * and makes a selection on it.
     */

  }, {
    key: "selectFake",
    value: function selectFake() {
      var _this = this;

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
    }
    /**
     * Selects the content from element passed on `target` property.
     */

  }, {
    key: "selectTarget",
    value: function selectTarget() {
      this.selectedText = select_default()(this.target);
      this.copyText();
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

          this._target = target;
        } else {
          throw new Error('Invalid "target" value, use a valid Element');
        }
      }
    }
    /**
     * Gets the `target` property.
     * @return {String|HTMLElement}
     */
    ,
    get: function get() {
      return this._target;
    }
  }]);

  return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    clipboard_classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(134);
/******/ })()
.default;
});

/***/ }),

/***/ "t/lj":
/*!*******************************************!*\
  !*** ./src/app/blog/highlight.service.ts ***!
  \*******************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "sxGJ");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "wZee");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "45FF");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "c2Kr");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-yaml */ "RX2a");
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-css */ "ZgVT");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "QWvX");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-java */ "ki2X");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_xml_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-xml-doc */ "YBrI");
/* harmony import */ var prismjs_components_prism_xml_doc__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_xml_doc__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-json */ "85O/");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-markup */ "bPOv");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "XIHC");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14__);
















let HighlightService = class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
};
HighlightService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
HighlightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], HighlightService);



/***/ }),

/***/ "wZee":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map