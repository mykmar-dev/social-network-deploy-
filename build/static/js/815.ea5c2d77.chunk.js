"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[815],{5815:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var o=n(8683),r=n(5671),s=n(3144),i=n(136),a=n(5716),l=n(2791),u=n(885),c="ProfileInfo_descriptionBlock__DvEKm",f="ProfileInfo_userPhoto__3g4nf",d=n(9234),h=n(2495),p=n(5987),m=n(184),x=["pathname"],j=function(t){var e=t.pathname,n=(0,p.Z)(t,x),o=(0,l.useState)(!1),r=(0,u.Z)(o,2),s=r[0],i=r[1],a=(0,l.useState)(n.status),c=(0,u.Z)(a,2),f=c[0],d=c[1];(0,l.useEffect)((function(){d(n.status)}),[n.status]);return(0,m.jsx)(m.Fragment,{children:"/profile"==e?(0,m.jsxs)("div",{children:[!s&&(0,m.jsx)("div",{children:(0,m.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[(0,m.jsx)("b",{children:"Status: "}),n.status||"-------"]})}),s&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),n.updateStatus(f)},value:f})})]}):(0,m.jsx)("div",{children:f})})},v=n(9086),b=n(704),P=n(5304),g=n(9024),k=n(6009),y=(0,b.Z)({form:"profileData"})((function(t){var e=t.handleSubmit,n=t.contacts,o=t.setEditMode,r=t.error;return(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{onClick:function(){o(!1)},children:"Close"}),(0,m.jsxs)("form",{onSubmit:e,children:[r&&(0,m.jsxs)("div",{className:d.Z.formSummaryError,children:[" ",r," "]}),(0,m.jsx)("button",{children:"Save"}),(0,v.Gr)("nickname","nickname",[P.C1],v.II),(0,v.Gr)("fullName","fullName",[P.C1],v.II),(0,v.Gr)("aboutMe","aboutMe",[P.C1],v.II),(0,v.Gr)("lookingForAJob","lookingForAJob",[P.C1,P.Ms],v.II),(0,v.Gr)("lookingForAJobDescription","lookingForAJobDescription",[P.C1],v.II),Object.keys(n).map((function(t){return(0,v.Gr)(t,"contacts."+t,[],v.II)}))]})]})})),S=function(t){var e=t.profile,n=e.fullName,o=e.aboutMe,r=e.lookingForAJob,s=e.lookingForAJobDescription,i=e.contacts;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"nickname:"})," ",t.nickname]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"fullName:"})," ",n]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"aboutMe:"})," ",o]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"lookingForAJob:"})," ",r]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"lookingForAJobDescription:"})," ",s]}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"contacts:"})," ",Object.keys(i).map((function(t){return(0,m.jsxs)("div",{children:[(0,m.jsxs)("b",{children:[t,":"]})," ",i[t]]})}))]})]})},_=function(t){var e=t.status,n=t.updateStatus,o=t.profile,r=t.setProfilePhoto,s=t.location.pathname,i=t.setProfileData,a=(0,l.useState)(!1),d=(0,u.Z)(a,2),p=d[0],x=d[1];if(!o)return(0,m.jsx)(h.Z,{});return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("img",{src:"".concat(k.Z,"/").concat(o.photo),className:f,onError:g.q}),(0,m.jsx)(j,{status:e,updateStatus:n,pathname:s}),"/profile"==s&&(0,m.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}}),"/profile"==s&&!p&&(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:function(){x(!0)},children:"Edit"})}),p?(0,m.jsx)(y,{setEditMode:x,onSubmit:function(t){i(t).then((function(){x(!1)}))},contacts:o.contacts}):(0,m.jsx)(S,{profile:o,nickname:t.nickname})]})})},C=n(6070),I=n(2982),Z="MyPosts_postsBlock__N+vxb",D="MyPosts_posts__iDY5t",A="Post_item__GnUgi",N=function(t){return(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)("img",{src:"".concat(k.Z,"/").concat(t.photo),onError:g.q}),t.message,(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"like"})," ",t.likesCount]})]})},w=n(6139),F=(0,P.DT)(10),E=(0,b.Z)({form:"ProfileAddNewPostForm"})((function(t){return t.submitSucceeded&&t.reset(),(0,m.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(w.Z,{name:"newPostText",component:v.gx,placeholder:"Post message",validate:[P.C1,F]})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add post"})})]})})),M=l.memo((function(t){var e=(0,I.Z)(t.posts).reverse().map((function(e){return(0,m.jsx)(N,{message:e.message,likesCount:e.likesCount,photo:t.photo})}));return(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("h3",{children:"Posts"}),"/profile"===t.location.pathname&&(0,m.jsx)(E,{onSubmit:function(e){t.addPost(e.newPostText)}}),(0,m.jsx)("div",{className:D,children:e})]})})),J=n(364),T=n(7781),G=n(9271),U=(0,T.qC)(G.EN,(0,J.$j)((function(t){var e=null;return t.profilePage.profile&&(e=t.profilePage.profile.photo),{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText,photo:e}}),(function(t){return{addPost:function(e){t((0,C.Wl)(e))}}})))(M),q=function(t){return(0,m.jsxs)("div",{children:[(0,m.jsx)(_,{setProfileData:t.setProfileData,location:t.location,setProfilePhoto:t.setProfilePhoto,login:t.login,profile:t.profile,status:t.status,updateStatus:t.updateStatus,nickname:t.nickname}),(0,m.jsx)(U,{})]})},B=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,s.Z)(n,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.location===t.location&&t.isAuth===this.props.isAuth||this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(q,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,setProfilePhoto:this.props.setProfilePhoto,location:this.props.location,setProfileData:this.props.setProfileData,nickname:this.props.nickname}))}}]),n}(l.Component),z=(0,T.qC)((0,J.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth,nickname:t.auth.nickname}}),{getUserProfile:C.et,getStatus:C.lR,updateStatus:C.Nf,setProfilePhoto:C.jY,setProfileData:C._J}),G.EN)(B)},9024:function(t,e,n){n.d(e,{q:function(){return r}});var o=n(4353),r=function(t){var e=t.currentTarget;e.onerror=null,e.src=o}},4353:function(t,e,n){t.exports=n.p+"static/media/user.96e310a6add3a711174d.png"},885:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(181);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,s=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(s.push(o.value),!e||s.length!==e);i=!0);}catch(l){a=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw r}}return s}}(t,e)||(0,o.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=815.ea5c2d77.chunk.js.map