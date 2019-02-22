(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{OlGY:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("lwNt"),r=u("Ip0R"),a=u("ZYCi"),s=u("TtRz"),b=u("bBgt"),c=u("pugT"),p=function(){function n(n,l,u,t){this.ts=n,this.router=l,this.route=u,this.as=t,this.aboutText="",this.aboutDataSub=new c.a,this.isLoadingSub=new c.a,this.isLoading=!1}return n.prototype.ngOnInit=function(){this.setPageTitle(),this.getAboutText(),this.loadAboutData()},n.prototype.ngOnDestroy=function(){this.aboutDataSub.unsubscribe(),this.isLoadingSub.unsubscribe()},n.prototype.getAboutText=function(){this.aboutText="A market index is a weighted average of several stocks or other investment vehicles from a section of the stock market, and it is calculated from the price of the selected stocks. Market indexes are intended to represent an entire stock market and track the market's changes over time. Index values help investors track changes in market values over long periods of time. For example, the widely used Standard and Poor's 500 Index is computed by combining 500 large-cap U.S. stocks into one index value. Investors can track changes in the index's value over time and use it as a benchmark for their own portfolio returns."},n.prototype.onAddNewIndex=function(){this.router.navigate(["/about/new"])},n.prototype.loadAboutData=function(){var n=this;this.as.getAllAboutData(),this.aboutDataSub.unsubscribe(),this.aboutDataSub=this.as.allAboutDataSubj.subscribe(function(l){n.aboutItems=l})},n.prototype.getIsLoading=function(){var n=this;this.isLoadingSub.unsubscribe(),this.isLoadingSub=this.as.isAboutLoading.subscribe(function(l){n.isLoading=l})},n.prototype.setPageTitle=function(){var n=this;this.route.data.subscribe(function(l){n.ts.setPageTitle(l.title)})},n}(),g=t.ob({encapsulation:0,styles:[[".about-item[_ngcontent-%COMP%]{cursor:pointer}"],i.a],data:{}});function d(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,7,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.zb(n,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(1,278528,null,0,r.i,[t.t,t.u,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Cb(2,{"list-group-item":0,"list-group-item-action":1,"list-group-item-info":2,"about-item":3,disabled:4,"font-roboto":5}),t.pb(3,671744,[[2,4]],0,a.q,[a.o,a.a,r.h],{preserveFragment:[0,"preserveFragment"],routerLink:[1,"routerLink"]},null),t.pb(4,1720320,null,2,a.p,[a.o,t.k,t.E,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,1,{links:1}),t.Fb(603979776,2,{linksWithHrefs:1}),(n()(),t.Hb(7,null,[" "," "]))],function(n,l){var u=n(l,2,0,!0,!0,!0,!0,l.component.isLoading,!0);n(l,1,0,u),n(l,3,0,!1,l.context.$implicit.id),n(l,4,0,"active")},function(n,l){n(l,0,0,t.zb(l,3).target,t.zb(l,3).href),n(l,7,0,l.context.$implicit.title)})}function f(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,5,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,2,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,d)),t.pb(3,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(4,0,null,null,1,"button",[["class","btn btn-success margin-top-button"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.onAddNewIndex()&&t),t},null,null)),(n()(),t.Hb(-1,null,["Add New Index"]))],function(n,l){n(l,3,0,l.component.aboutItems)},function(n,l){n(l,4,0,l.component.isLoading)})}function m(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Loading... "]))],null,null)}function h(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","center-text"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"span",[["class","font-indie indie-font-25"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["What are Market Indices?"])),(n()(),t.qb(3,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,1,"p",[["class","font-roboto font-thin"]],null,null,null,null,null)),(n()(),t.Hb(6,null,[" "," "])),(n()(),t.qb(7,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,f)),t.pb(9,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.hb(0,[["loadingAboutItems",2]],null,0,null,m)),(n()(),t.qb(11,0,null,null,2,"div",[["class","col-md-8"]],null,null,null,null,null)),(n()(),t.qb(12,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.pb(13,212992,null,0,a.s,[a.b,t.P,t.j,[8,null],t.h],null,null)],function(n,l){n(l,9,0,l.component.aboutItems,t.zb(l,10)),n(l,13,0)},function(n,l){n(l,6,0,l.component.aboutText)})}function v(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"app-about",[],null,null,null,h,g)),t.pb(1,245760,null,0,p,[s.a,a.o,a.a,b.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t.mb("app-about",p,v,{},{},[]),C=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),z=t.ob({encapsulation:0,styles:[[""]],data:{}});function x(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Popular Market Indices"])),(n()(),t.qb(4,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" A market index is a weighted average of several stocks or other investment vehicles from a section of the stock market, and it is calculated from the price of the selected stocks. Market indexes are intended to represent an entire stock market and track the market's changes over time. Index values help investors track changes in market values over long periods of time. For example, the widely used Standard and Poor's 500 Index is computed by combining 500 large-cap U.S. stocks into one index value. Investors can track changes in the index's value over time and use it as a benchmark for their own portfolio returns. "])),(n()(),t.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Select a Market Index on the left to learn more about it. "])),(n()(),t.qb(8,0,null,null,3,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.zb(n,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(9,671744,null,0,a.q,[a.o,a.a,r.h],{routerLink:[0,"routerLink"]},null),t.Ab(10,1),(n()(),t.Hb(-1,null,["Go back Home"]))],function(n,l){var u=n(l,10,0,"/home");n(l,9,0,u)},function(n,l){n(l,8,0,t.zb(l,9).target,t.zb(l,9).href)})}function I(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"about-landing",[],null,null,null,x,z)),t.pb(1,114688,null,0,C,[],null,null)],function(n,l){n(l,1,0)},null)}var k=t.mb("about-landing",C,I,{},{},[]),q=u("axJ0"),w=u("gIcY"),P=function(){function n(){this.inputType="input",this.textAreaType="textarea"}return n.prototype.ngOnInit=function(){},n}(),F=t.ob({encapsulation:0,styles:[q.a],data:{}});function S(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,1)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,1).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,1)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,1)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(1,16384,null,0,w.c,[t.E,t.k,[2,w.a]],null,null),t.Eb(1024,null,w.m,function(n){return[n]},[w.c]),t.pb(3,671744,null,0,w.h,[[3,w.b],[8,null],[8,null],[6,w.m],[2,w.y]],{name:[0,"name"]},null),t.Eb(2048,null,w.n,null,[w.h]),t.pb(5,16384,null,0,w.o,[[4,w.n]],null,null)],function(n,l){n(l,3,0,l.component.controlName)},function(n,l){var u=l.component;n(l,0,0,u.formConfig[u.controlName].defaultValue,t.zb(l,5).ngClassUntouched,t.zb(l,5).ngClassTouched,t.zb(l,5).ngClassPristine,t.zb(l,5).ngClassDirty,t.zb(l,5).ngClassValid,t.zb(l,5).ngClassInvalid,t.zb(l,5).ngClassPending)})}function A(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,5,"textarea",[["class","form-control"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,1)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,1).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,1)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,1)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(1,16384,null,0,w.c,[t.E,t.k,[2,w.a]],null,null),t.Eb(1024,null,w.m,function(n){return[n]},[w.c]),t.pb(3,671744,null,0,w.h,[[3,w.b],[8,null],[8,null],[6,w.m],[2,w.y]],{name:[0,"name"]},null),t.Eb(2048,null,w.n,null,[w.h]),t.pb(5,16384,null,0,w.o,[[4,w.n]],null,null)],function(n,l){n(l,3,0,l.component.controlName)},function(n,l){n(l,0,0,t.zb(l,5).ngClassUntouched,t.zb(l,5).ngClassTouched,t.zb(l,5).ngClassPristine,t.zb(l,5).ngClassDirty,t.zb(l,5).ngClassValid,t.zb(l,5).ngClassInvalid,t.zb(l,5).ngClassPending)})}function T(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"small",[["class","form-text text-muted"]],null,null,null,null,null)),(n()(),t.Hb(1,null,[" "," "]))],null,function(n,l){var u=l.component;n(l,1,0,u.formConfig[u.controlName].helptext)})}function O(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Only alpha-numeric IDs are allowed. "]))],null,null)}function E(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" This ID already exist, please choose another one. "]))],null,null)}function M(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" ID is required. "]))],null,null)}function j(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,7,"span",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Error: "])),(n()(),t.hb(16777216,null,null,1,null,O)),t.pb(3,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,E)),t.pb(5,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,M)),t.pb(7,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,3,0,u.formGroup.get(u.controlName).errors.idIsNotAlphaNum),n(l,5,0,u.formGroup.get(u.controlName).errors.idAlreadyExist),n(l,7,0,u.formGroup.get(u.controlName).errors.required)},null)}function J(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,18,"div",[["class","form-row align-items-center"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,1).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,1).onReset()&&e),e},null,null)),t.pb(1,540672,null,0,w.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,w.b,null,[w.j]),t.pb(3,16384,null,0,w.p,[[4,w.b]],null,null),(n()(),t.qb(4,0,null,null,14,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,8,"div",[["class","input-group"]],null,null,null,null,null)),t.pb(6,16384,null,0,r.o,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t.qb(7,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),t.Hb(9,null,[" "," ",": "])),(n()(),t.hb(16777216,null,null,1,null,S)),t.pb(11,278528,null,0,r.p,[t.P,t.M,r.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t.hb(16777216,null,null,1,null,A)),t.pb(13,278528,null,0,r.p,[t.P,t.M,r.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t.hb(16777216,null,null,1,null,T)),t.pb(15,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(16,0,null,null,2,"small",[["class","form-text red-text"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,j)),t.pb(18,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,1,0,u.formGroup),n(l,6,0,u.formConfig[u.controlName].type),n(l,11,0,u.inputType),n(l,13,0,u.textAreaType),n(l,15,0,u.formConfig[u.controlName].helptext),n(l,18,0,u.formGroup.get(u.controlName).touched&&!u.formGroup.get(u.controlName).valid&&u.formGroup.get(u.controlName).errors)},function(n,l){var u=l.component;n(l,0,0,t.zb(l,3).ngClassUntouched,t.zb(l,3).ngClassTouched,t.zb(l,3).ngClassPristine,t.zb(l,3).ngClassDirty,t.zb(l,3).ngClassValid,t.zb(l,3).ngClassInvalid,t.zb(l,3).ngClassPending),n(l,9,0,u.formConfig[u.controlName].required?"*":"",u.formConfig[u.controlName].label)})}var D=function(){function n(){this.inputType="input",this.textAreaType="textarea"}return n.prototype.ngOnInit=function(){},n.prototype.getObjectKeys=function(n){return Object.keys(n)},n}(),N=t.ob({encapsulation:0,styles:[q.a],data:{}});function H(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,1)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,1).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,1)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,1)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(1,16384,null,0,w.c,[t.E,t.k,[2,w.a]],null,null),t.Eb(1024,null,w.m,function(n){return[n]},[w.c]),t.pb(3,671744,null,0,w.h,[[3,w.b],[8,null],[8,null],[6,w.m],[2,w.y]],{name:[0,"name"]},null),t.Eb(2048,null,w.n,null,[w.h]),t.pb(5,16384,null,0,w.o,[[4,w.n]],null,null)],function(n,l){n(l,3,0,l.parent.context.$implicit)},function(n,l){n(l,0,0,l.parent.parent.context.$implicit[l.parent.context.$implicit].defaultValue,t.zb(l,5).ngClassUntouched,t.zb(l,5).ngClassTouched,t.zb(l,5).ngClassPristine,t.zb(l,5).ngClassDirty,t.zb(l,5).ngClassValid,t.zb(l,5).ngClassInvalid,t.zb(l,5).ngClassPending)})}function $(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,5,"textarea",[["class","form-control"],["rows","3"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,1)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,1).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,1)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,1)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(1,16384,null,0,w.c,[t.E,t.k,[2,w.a]],null,null),t.Eb(1024,null,w.m,function(n){return[n]},[w.c]),t.pb(3,671744,null,0,w.h,[[3,w.b],[8,null],[8,null],[6,w.m],[2,w.y]],{name:[0,"name"]},null),t.Eb(2048,null,w.n,null,[w.h]),t.pb(5,16384,null,0,w.o,[[4,w.n]],null,null)],function(n,l){n(l,3,0,l.parent.context.$implicit)},function(n,l){n(l,0,0,l.parent.parent.context.$implicit[l.parent.context.$implicit].defaultValue,t.zb(l,5).ngClassUntouched,t.zb(l,5).ngClassTouched,t.zb(l,5).ngClassPristine,t.zb(l,5).ngClassDirty,t.zb(l,5).ngClassValid,t.zb(l,5).ngClassInvalid,t.zb(l,5).ngClassPending)})}function L(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,8,"div",[["class","input-group mb-3"]],null,null,null,null,null)),t.pb(1,16384,null,0,r.o,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t.qb(2,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),t.Hb(4,null,["",":"])),(n()(),t.hb(16777216,null,null,1,null,H)),t.pb(6,278528,null,0,r.p,[t.P,t.M,r.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t.hb(16777216,null,null,1,null,$)),t.pb(8,278528,null,0,r.p,[t.P,t.M,r.o],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){var u=l.component;n(l,1,0,l.parent.context.$implicit[l.context.$implicit].type),n(l,6,0,u.inputType),n(l,8,0,u.textAreaType)},function(n,l){n(l,4,0,l.parent.context.$implicit[l.context.$implicit].label)})}function _(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,7,"div",[["class","input-group"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(1,212992,null,0,w.k,[[3,w.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Eb(2048,null,w.b,null,[w.k]),t.pb(3,16384,null,0,w.p,[[4,w.b]],null,null),(n()(),t.qb(4,0,null,null,1,"div",[["class","text-muted mb-3"]],null,null,null,null,null)),(n()(),t.Hb(5,null,[" "," #"," "])),(n()(),t.hb(16777216,null,null,1,null,L)),t.pb(7,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var u=l.component;n(l,1,0,l.context.index),n(l,7,0,u.getObjectKeys(l.context.$implicit))},function(n,l){var u=l.component;n(l,0,0,t.zb(l,3).ngClassUntouched,t.zb(l,3).ngClassTouched,t.zb(l,3).ngClassPristine,t.zb(l,3).ngClassDirty,t.zb(l,3).ngClassValid,t.zb(l,3).ngClassInvalid,t.zb(l,3).ngClassPending),n(l,5,0,u.formConfig[u.controlName].label,l.context.index+1)})}function G(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,8,"div",[["class","input-group mb-3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,1).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,1).onReset()&&e),e},null,null)),t.pb(1,540672,null,0,w.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,w.b,null,[w.j]),t.pb(3,16384,null,0,w.p,[[4,w.b]],null,null),(n()(),t.qb(4,0,null,null,2,"div",[["class","fact-label"]],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),t.Hb(6,null,["",":"])),(n()(),t.hb(16777216,null,null,1,null,_)),t.pb(8,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var u=l.component;n(l,1,0,u.formGroup),n(l,8,0,u.formConfig[u.controlName].value)},function(n,l){var u=l.component;n(l,0,0,t.zb(l,3).ngClassUntouched,t.zb(l,3).ngClassTouched,t.zb(l,3).ngClassPristine,t.zb(l,3).ngClassDirty,t.zb(l,3).ngClassValid,t.zb(l,3).ngClassInvalid,t.zb(l,3).ngClassPending),n(l,6,0,u.formConfig[u.controlName].label)})}u("ZKU/");var U=function(){function n(n,l,u,t){this.as=n,this.route=l,this.fb=u,this.ts=t,this.currentEntryName="FTSE 100",this.currentEntryId="ftse100",this.currentEntryDescription="The Financial Times Stock Exchange 100 Index.",this.newEntryImg="assets/images/marketindex.jpg",this.entrySubmitted=!1,this.formStatus=""}return n.prototype.ngOnInit=function(){var n=this;this.route.data.subscribe(function(l){n.newFormObj=l.newFormLayout.body.items,n.createFormGroupForNew()}),this.newFormFg.statusChanges.subscribe(function(l){n.formStatus=l})},n.prototype.onSubmit=function(){var n;if(n=this.newFormFg.value.dataArray.length,this.entrySubmitted=!0,n>0){this.ts.info("Adding "+n+" entries.","Info.");for(var l=0,u=this.newFormFg.value.dataArray;l<u.length;l++)this.as.addNewEntry(u[l])}},n.prototype.canDeactivate=function(){return!!this.entrySubmitted||confirm("Do you want to discard the changes?")},n.prototype.createFormGroupForNew=function(){for(var n=new w.d([]),l=0;l<this.newFormObj.length;l++){var u=this.as.createNewMarketIndexMetaFG(this.newFormObj[l]);n.push(u)}this.newFormFg=this.fb.group({dataArray:n})},n.prototype.getObjectKeys=function(n){return Object.keys(n)},n.prototype.isObjectArray=function(n,l){return l[n].value instanceof Array},n}(),V=u("SZbH"),K=t.ob({encapsulation:0,styles:[[".fact-label[_ngcontent-%COMP%]{margin:0 auto}.ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid #42a948}input.ng-invalid[_ngcontent-%COMP%]:not(form).ng-touched{border-left:5px solid #a94442}input.ng-valid.ng-touched.ng-dirty[_ngcontent-%COMP%]{border-left:5px solid #42a948}"]],data:{}});function R(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"div",[["class","text-muted mb-3"]],null,null,null,null,null)),(n()(),t.Hb(1,null,[" Adding entry #"," "]))],null,function(n,l){n(l,1,0,l.parent.context.index+1)})}function Y(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,4,"form-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,1).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,1).onReset()&&e),e},J,F)),t.pb(1,540672,null,0,w.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,w.b,null,[w.j]),t.pb(3,16384,null,0,w.p,[[4,w.b]],null,null),t.pb(4,114688,null,0,P,[],{formConfig:[0,"formConfig"],formGroup:[1,"formGroup"],controlName:[2,"controlName"]},null)],function(n,l){var u=l.component;n(l,1,0,u.newFormFg.get("dataArray").at(l.parent.parent.context.index)),n(l,4,0,l.parent.parent.context.$implicit,u.newFormFg.get("dataArray").at(l.parent.parent.context.index),l.parent.context.$implicit)},function(n,l){n(l,0,0,t.zb(l,3).ngClassUntouched,t.zb(l,3).ngClassTouched,t.zb(l,3).ngClassPristine,t.zb(l,3).ngClassDirty,t.zb(l,3).ngClassValid,t.zb(l,3).ngClassInvalid,t.zb(l,3).ngClassPending)})}function Z(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,4,"form-inputs",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,1).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,1).onReset()&&e),e},G,N)),t.pb(1,540672,null,0,w.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,w.b,null,[w.j]),t.pb(3,16384,null,0,w.p,[[4,w.b]],null,null),t.pb(4,114688,null,0,D,[],{formConfig:[0,"formConfig"],formGroup:[1,"formGroup"],controlName:[2,"controlName"]},null)],function(n,l){var u=l.component;n(l,1,0,u.newFormFg.get("dataArray").at(l.parent.parent.context.index).get(l.parent.context.$implicit)),n(l,4,0,l.parent.parent.context.$implicit,u.newFormFg.get("dataArray").at(l.parent.parent.context.index).get(l.parent.context.$implicit),l.parent.context.$implicit)},function(n,l){n(l,0,0,t.zb(l,3).ngClassUntouched,t.zb(l,3).ngClassTouched,t.zb(l,3).ngClassPristine,t.zb(l,3).ngClassDirty,t.zb(l,3).ngClassValid,t.zb(l,3).ngClassInvalid,t.zb(l,3).ngClassPending)})}function B(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["class","ml-3"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,Y)),t.pb(2,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,Z)),t.pb(4,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,!u.isObjectArray(l.context.$implicit,l.parent.context.$implicit)),n(l,4,0,u.isObjectArray(l.context.$implicit,l.parent.context.$implicit))},null)}function W(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,R)),t.pb(2,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,null,1,null,B)),t.pb(4,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.newFormObj.length>1),n(l,4,0,u.getObjectKeys(l.context.$implicit))},null)}function Q(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[["class","text-muted"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Fill in required fields *"]))],null,null)}function X(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,17,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Add a New Market Index Entry"])),(n()(),t.qb(4,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0,o=n.component;return"submit"===l&&(e=!1!==t.zb(n,6).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,6).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.onSubmit()&&e),e},null,null)),t.pb(5,16384,null,0,w.w,[],null,null),t.pb(6,540672,null,0,w.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,w.b,null,[w.j]),t.pb(8,16384,null,0,w.p,[[4,w.b]],null,null),(n()(),t.qb(9,0,null,null,5,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(10,212992,null,0,w.e,[[3,w.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Eb(2048,null,w.b,null,[w.e]),t.pb(12,16384,null,0,w.p,[[4,w.b]],null,null),(n()(),t.hb(16777216,null,null,1,null,W)),t.pb(14,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(15,0,null,null,1,"button",[["class","btn btn-primary fixed-width"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Submit"])),(n()(),t.hb(16777216,null,null,1,null,Q)),t.pb(18,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,6,0,u.newFormFg),n(l,10,0,"dataArray"),n(l,14,0,u.newFormObj),n(l,18,0,!u.newFormFg.valid)},function(n,l){var u=l.component;n(l,4,0,t.zb(l,8).ngClassUntouched,t.zb(l,8).ngClassTouched,t.zb(l,8).ngClassPristine,t.zb(l,8).ngClassDirty,t.zb(l,8).ngClassValid,t.zb(l,8).ngClassInvalid,t.zb(l,8).ngClassPending),n(l,9,0,t.zb(l,12).ngClassUntouched,t.zb(l,12).ngClassTouched,t.zb(l,12).ngClassPristine,t.zb(l,12).ngClassDirty,t.zb(l,12).ngClassValid,t.zb(l,12).ngClassInvalid,t.zb(l,12).ngClassPending),n(l,15,0,!u.newFormFg.valid||"VALID"!==u.formStatus)})}function nn(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"about-new",[],null,null,null,X,K)),t.pb(1,114688,null,0,U,[b.a,a.a,w.f,V.j],null,null)],function(n,l){n(l,1,0)},null)}var ln=t.mb("about-new",U,nn,{},{},[]),un=u("bcaS"),tn=u("Frqi"),en=function(){function n(n,l,u,t,e){var o=this;this.router=n,this.route=l,this.as=u,this.ts=t,this.titleSer=e,this.aboutItem$=new c.a,this.loadingText="Loading...",this.previousParamId="",this.route.params.subscribe(function(n){o.resetCurrentAboutItem(n.id),o.itemId=n.id,o.getAboutDetail(n.id)})}return n.prototype.ngOnInit=function(){var n=this;this.setPageTitle(),this.aboutItem$=this.as.singleAboutDataSubj.subscribe(function(l){n.aboutItem=l,n.aboutItem||(n.ts.error("This Market Index does not exist. Taking you back."),n.router.navigate(["../"],{relativeTo:n.route}))})},n.prototype.resetCurrentAboutItem=function(n){this.itemId!==n&&(this.aboutItem=null)},n.prototype.getAboutDetail=function(n){this.as.getSingleAboutData2(n)},n.prototype.goBackToAbout=function(){this.router.navigate(["../"],{relativeTo:this.route})},n.prototype.setPageTitle=function(){var n=this;this.route.data.subscribe(function(l){n.titleSer.setPageTitle(l.title)})},n.prototype.ngOnDestroy=function(){this.aboutItem$.unsubscribe()},n}(),on=t.ob({encapsulation:0,styles:[[".fact-author[_ngcontent-%COMP%]{font-weight:100;font-style:italic}.fact-item[_ngcontent-%COMP%]{margin-bottom:3px}"]],data:{}});function rn(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,3,"li",[["class","card-text font-roboto font-thin mb-3"]],null,null,null,null,null)),(n()(),t.Hb(1,null,[""," "])),(n()(),t.qb(2,0,null,null,1,"div",[["class","fact-author"]],null,null,null,null,null)),(n()(),t.Hb(3,null,["source: ",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.text),n(l,3,0,l.context.$implicit.author)})}function an(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,18,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,1,"h5",[["class","card-title font-roboto"]],null,null,null,null,null)),(n()(),t.Hb(3,null,["",""])),(n()(),t.qb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,1,"p",[["class","card-text font-roboto font-thin"]],null,null,null,null,null)),(n()(),t.Hb(6,null,[" "," "])),(n()(),t.qb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,1,"h6",[["class","card-title font-roboto"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Fun Facts:"])),(n()(),t.qb(10,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,rn)),t.pb(12,278528,null,0,r.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(13,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.qb(14,0,null,null,3,"a",[["class","btn btn-primary fixed-width"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.zb(n,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(15,671744,null,0,a.q,[a.o,a.a,r.h],{routerLink:[0,"routerLink"]},null),t.Ab(16,1),(n()(),t.Hb(-1,null,["Back to About"])),(n()(),t.qb(18,0,null,null,1,"button",[["class","btn btn-info fixed-width"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Edit"]))],function(n,l){n(l,12,0,l.component.aboutItem.facts);var u=n(l,16,0,"../");n(l,15,0,u)},function(n,l){var u=l.component;n(l,3,0,u.aboutItem.title),n(l,6,0,u.aboutItem.description),n(l,14,0,t.zb(l,15).target,t.zb(l,15).href)})}function sn(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"app-loading",[],null,null,null,un.c,un.b)),t.pb(1,638976,null,0,tn.a,[],null,null)],function(n,l){n(l,1,0)},null)}function bn(n){return t.Jb(0,[(n()(),t.hb(16777216,null,null,1,null,an)),t.pb(1,16384,null,0,r.k,[t.P,t.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.hb(0,[["loading",2]],null,0,null,sn))],function(n,l){n(l,1,0,l.component.aboutItem,t.zb(l,2))},null)}function cn(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"about-detail",[],null,null,null,bn,on)),t.pb(1,245760,null,0,en,[a.o,a.a,b.a,V.j,s.a],null,null)],function(n,l){n(l,1,0)},null)}var pn=t.mb("about-detail",en,cn,{},{},[]),gn=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),dn=t.ob({encapsulation:0,styles:[[""]],data:{}});function fn(n){return t.Jb(0,[(n()(),t.Hb(-1,null,["Edit"]))],null,null)}function mn(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"about-edit",[],null,null,null,fn,dn)),t.pb(1,114688,null,0,gn,[],null,null)],function(n,l){n(l,1,0)},null)}var hn=t.mb("about-edit",gn,mn,{},{},[]),vn=u("ZYjt"),yn=function(){function n(){}return n.prototype.canDeactivate=function(n,l,u,t){return n.canDeactivate()},n}(),Cn=u("AwSQ"),zn=function(){function n(n,l){this.as=n,this.ds=l}return n.prototype.resolve=function(n,l){return this.ds.getMarketIndexForm$()},n}(),xn=u("UPf0"),In=u("pn4w"),kn={title:"About"},qn={title:"About"},wn={title:"Add New About"},Pn={title:"About Details"},Fn=function(){return function(){}}();u.d(l,"AboutModuleNgFactory",function(){return Sn});var Sn=t.nb(e,[],function(n){return t.xb([t.yb(512,t.j,t.cb,[[8,[o.a,y,k,ln,pn,hn]],[3,t.j],t.y]),t.yb(4608,r.m,r.l,[t.v,[2,r.x]]),t.yb(4608,w.x,w.x,[]),t.yb(4608,w.f,w.f,[]),t.yb(4608,s.a,s.a,[vn.i]),t.yb(4608,yn,yn,[]),t.yb(4608,zn,zn,[b.a,Cn.a]),t.yb(1073742336,r.c,r.c,[]),t.yb(1073742336,w.v,w.v,[]),t.yb(1073742336,w.l,w.l,[]),t.yb(1073742336,a.r,a.r,[[2,a.x],[2,a.o]]),t.yb(1073742336,xn.a,xn.a,[]),t.yb(1073742336,w.s,w.s,[]),t.yb(1073742336,In.a,In.a,[]),t.yb(1073742336,Fn,Fn,[]),t.yb(1073742336,e,e,[]),t.yb(1024,a.m,function(){return[[{path:"",component:p,data:kn,children:[{path:"",component:C,data:qn},{path:"new",component:U,canDeactivate:[yn],data:wn,resolve:{newFormLayout:zn}},{path:":id",component:en,data:Pn},{path:":id/edit",component:gn}]}]]},[])])})}}]);