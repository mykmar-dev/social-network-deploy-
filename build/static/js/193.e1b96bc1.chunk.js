"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[193],{6193:function(e,s,n){n.r(s),n.d(s,{default:function(){return D}});var i=n(2791),a=n(2807),t={dialogs:"Dialogs_dialogs__kmZXQ",dialogsItems:"Dialogs_dialogsItems__eb3Dg",active:"Dialogs_active__-keVV",messages:"Dialogs_messages__NP7LJ",message:"Dialogs_message__u8u9A"},r=n(1523),o=n(184),d=function(e){var s="/dialogs/"+e.id;return(0,o.jsx)("div",{className:t.dialog+" "+t.active,children:(0,o.jsx)(r.OL,{to:s,children:e.name})})},u=function(e){return(0,o.jsx)("div",{className:t.dialog,children:e.message})},l=n(9271),c=n(6139),g=n(704),m=n(9086),f=n(5304),h=(0,f.DT)(50),_=(0,g.Z)({form:"dialog-add-message-form"})((function(e){return e.submitSucceeded&&e.reset(),(0,o.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.Z,{component:m.gx,validate:[f.C1,h],placeholder:"Enter your message",name:"newMessageBody"})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Send"})})]})})),j=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,o.jsx)(d,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return(0,o.jsx)(u,{message:e.message},e.id)}));return e.isAuth?(0,o.jsxs)("div",{className:t.dialogs,children:[(0,o.jsx)("div",{className:t.dialogsItems,children:n}),(0,o.jsx)("div",{className:t.messages,children:(0,o.jsx)("div",{children:i})}),(0,o.jsx)(_,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):(0,o.jsx)(l.l_,{to:"/login"})},x=n(364),v=n(8683),p=n(5671),b=n(3144),Z=n(136),k=n(5716),y=function(e){return{isAuth:e.auth.isAuth}},D=(0,n(7781).qC)((0,x.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,a.X)(s))}}})),(function(e){var s=function(s){(0,Z.Z)(i,s);var n=(0,k.Z)(i);function i(){return(0,p.Z)(this,i),n.apply(this,arguments)}return(0,b.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,o.jsx)(e,(0,v.Z)({},this.props)):(0,o.jsx)(l.l_,{to:"/login"})}}]),i}(i.Component);return(0,x.$j)(y)(s)}))(j)}}]);
//# sourceMappingURL=193.e1b96bc1.chunk.js.map