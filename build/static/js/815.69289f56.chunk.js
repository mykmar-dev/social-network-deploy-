"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[815],{5815:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var o=n(8683),r=n(5671),s=n(3144),i=n(136),a=n(5716),l=n(2791),u=n(885),c="ProfileInfo_descriptionBlock__ySn33",d="ProfileInfo_userPhoto__UPZgb",h=n(9234),f=n(2495),p=n(5987),m=n(184),x=["pathname"],j=function(t){var e=t.pathname,n=(0,p.Z)(t,x),o=(0,l.useState)(!1),r=(0,u.Z)(o,2),s=r[0],i=r[1],a=(0,l.useState)(n.status),c=(0,u.Z)(a,2),d=c[0],h=c[1];(0,l.useEffect)((function(){h(n.status)}),[n.status]);return(0,m.jsx)(m.Fragment,{children:"/profile"==e?(0,m.jsxs)("div",{children:[!s&&(0,m.jsx)("div",{children:(0,m.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[(0,m.jsx)("b",{children:"Status: "}),n.status||"-------"]})}),s&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(t){h(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),n.updateStatus(d)},value:d})})]}):(0,m.jsx)("div",{children:d})})},P=n(9086),v=n(704),b=n(9024),k=(0,v.Z)({form:"profileData"})((function(t){var e=t.handleSubmit,n=t.contacts,o=t.setEditMode,r=t.error;return(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{onClick:function(){o(!1)},children:"Close"}),(0,m.jsxs)("form",{onSubmit:e,children:[r&&(0,m.jsxs)("div",{className:h.Z.formSummaryError,children:[" ",r," "]}),(0,m.jsx)("button",{children:"Save"}),(0,P.Gr)("nickname","nickname",[],P.II),(0,P.Gr)("fullName","fullName",[],P.II),(0,P.Gr)("aboutMe","aboutMe",[],P.II),(0,P.Gr)("lookingForAJob","lookingForAJob",[],P.II),(0,P.Gr)("lookingForAJobDescription","lookingForAJobDescription",[],P.II),Object.keys(n).map((function(t){return(0,P.Gr)(t,"contacts."+t,[],P.II)})),(0,P.Gr)("country","location.country",[],P.II),(0,P.Gr)("city","location.city",[],P.II)]})]})})),g=function(t){var e=t.profile,n=e.fullName,o=e.aboutMe,r=e.lookingForAJob,s=e.lookingForAJobDescription,i=e.contacts,a=e.location,l=a.country,u=a.city;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"nickname:"})," ",t.nickname]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"fullName:"})," ",n]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"aboutMe:"})," ",o]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"lookingForAJob:"})," ",r]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"lookingForAJobDescription:"})," ",s]}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"contacts:"})," ",Object.keys(i).map((function(t){return(0,m.jsxs)("div",{children:[(0,m.jsxs)("b",{children:[t,":"]})," ",i[t]]})}))]}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"country:"})," ",l]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"city:"})," ",u]})]})},y=function(t){var e=t.status,n=t.updateStatus,o=t.profile,r=t.setProfilePhoto,s=t.location.pathname,i=t.setProfileData,a=(0,l.useState)(!1),h=(0,u.Z)(a,2),p=h[0],x=h[1];if(!o)return(0,m.jsx)(f.Z,{});return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("img",{src:o.photo,className:d,onError:b.q}),(0,m.jsx)(j,{status:e,updateStatus:n,pathname:s}),"/profile"==s&&(0,m.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}}),"/profile"==s&&!p&&(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:function(){x(!0)},children:"Edit"})}),p?(0,m.jsx)(k,{setEditMode:x,onSubmit:function(t){i(t).then((function(){x(!1)}))},contacts:o.contacts}):(0,m.jsx)(g,{profile:o,nickname:t.nickname})]})})},S=n(2982),_="MyPosts_postsBlock__kgoDZ",I="MyPosts_posts__NZp0Q",Z="Post_item__1zgu2",A=function(t){return(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("img",{src:t.photo,onError:b.q}),t.message,(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"like"})," ",t.likesCount]}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:function(){return t.onDeletePost(t._id)},children:"Delete"})})]})},D=n(6139),C=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(t){return t.submitSucceeded&&t.reset(),(0,m.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(D.Z,{name:"newPostText",component:P.gx,placeholder:"Post message"})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add post"})})]})})),N=l.memo((function(t){var e=function(e){t.deletePostThunk(e)},n=(0,S.Z)(t.posts).reverse().map((function(n){return(0,m.jsx)(A,{_id:n._id,message:n.message,likesCount:n.likesCount,photo:t.photo,onDeletePost:e})}));return(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)("h3",{children:"Posts"}),"/profile"===t.location.pathname&&(0,m.jsx)(C,{onSubmit:function(e){t.addPostThunk(e.newPostText)}}),(0,m.jsx)("div",{className:I,children:n})]})})),w=n(364),F=n(7781),T=n(9271),E=n(6070),J=(0,F.qC)(T.EN,(0,w.$j)((function(t){var e=null;return t.profilePage.profile&&(e=t.profilePage.profile.photo),{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText,photo:e}}),{addPostThunk:E.Q_,deletePostThunk:E.X3}))(N),M=function(t){return(0,m.jsxs)("div",{children:[(0,m.jsx)(y,{setProfileData:t.setProfileData,location:t.location,setProfilePhoto:t.setProfilePhoto,login:t.login,profile:t.profile,status:t.status,updateStatus:t.updateStatus,nickname:t.nickname}),(0,m.jsx)(J,{})]})},G=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,s.Z)(n,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileAndPosts(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.location===t.location&&t.isAuth===this.props.isAuth||this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(M,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,setProfilePhoto:this.props.setProfilePhoto,location:this.props.location,setProfileData:this.props.setProfileData,nickname:this.props.nickname}))}}]),n}(l.Component),U=(0,F.qC)((0,w.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth,nickname:t.auth.nickname}}),{getUserProfileAndPosts:E.RO,getStatus:E.lR,updateStatus:E.Nf,setProfilePhoto:E.jY,setProfileData:E._J}),T.EN)(G)},9024:function(t,e,n){n.d(e,{q:function(){return r}});var o=n(4353),r=function(t){var e=t.currentTarget;e.onerror=null,e.src=o}},4353:function(t,e,n){t.exports=n.p+"static/media/user.96e310a6add3a711174d.png"},885:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(181);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,s=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(s.push(o.value),!e||s.length!==e);i=!0);}catch(l){a=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw r}}return s}}(t,e)||(0,o.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=815.69289f56.chunk.js.map