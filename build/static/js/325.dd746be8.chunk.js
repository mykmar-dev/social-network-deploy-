"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[325],{9325:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t=r(5671),o=r(3144),i=r(136),u=r(5716),s=r(2791),a=r(364),c=r(2938),l=r(5987),f=r(885),p="Paginator_selectedPage__MN95J",g="Paginator_swapPageButton__RuF-O",d=r(184),h=function(n){for(var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,i=Math.ceil(e/r),u=Math.ceil(e/10),a=(0,s.useState)(1),c=(0,f.Z)(a,2),l=c[0],h=c[1],v=10*(l-1)+1,y=10*l,w=[],P=1;P<=i;P++)w.push(P);return(0,d.jsxs)("div",{children:[l>1&&(0,d.jsx)("button",{className:g,onClick:function(){h(l-1)},children:"Prev"}),w.filter((function(n){return n>=v&&n<=y})).map((function(n){return(0,d.jsxs)("span",{className:t===n&&p,onClick:function(e){o(n)},children:[n," "]})})),l!==u&&(0,d.jsx)("button",{className:g,onClick:function(){h(l+1)},children:"Next"})]})},v="users_userPhoto__tsIr9",y=r(1523),w=r(9024),P=r(6009),m=function(n){var e=n.user,r=n.followingInProgress,t=n.unfollow,o=n.follow,i=n.subscriptions;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(y.OL,{to:"/profile/"+e._id,children:(0,d.jsx)("img",{src:"".concat(P.Z,"/").concat(e.profile.photo),onError:w.q,className:v})})}),(0,d.jsx)("div",{children:i.some((function(n){return n===e._id}))?(0,d.jsx)("button",{disabled:r.some((function(n){return n===e._id})),onClick:function(){t(e._id)},children:"Unfollow"}):(0,d.jsx)("button",{disabled:r.some((function(n){return n===e._id})),onClick:function(){o(e._id)},children:"Follow"})})]}),(0,d.jsxs)("span",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("div",{children:e.name}),(0,d.jsx)("div",{children:e.status})]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("div",{children:e.profile.location.country}),(0,d.jsx)("div",{children:e.profile.location.city})]})]})]})},x=["currentPage","totalUsersCount","pageSize","onPageChanged","users","subscriptions"],j=function(n){var e=n.currentPage,r=n.totalUsersCount,t=n.pageSize,o=n.onPageChanged,i=n.users,u=n.subscriptions,s=(0,l.Z)(n,x);return(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{currentPage:e,onPageChanged:o,totalUsersCount:r,pageSize:t}),(0,d.jsx)("div",{children:i.map((function(n){return(0,d.jsx)(m,{user:n,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow,subscriptions:u},n.id)}))})]})},b=r(2495),C=r(7781),_="NOT_FOUND";var k=function(n,e){return n===e};function S(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?k:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),c=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:_},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return _}return{get:t,put:function(e,o){t(e)===_&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function l(){var e=c.get(arguments);if(e===_){if(e=n.apply(null,arguments),s){var r=c.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function U(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(s=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=s,l=c.memoizeOptions,f=void 0===l?r:l,p=Array.isArray(f)?f:[f],g=z(t),d=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var Z=U(S),I=Z((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),F=function(n){return n.usersPage.pageSize},A=function(n){return n.usersPage.totalUsersCount},N=function(n){return n.usersPage.currentPage},E=function(n){return n.usersPage.isFetching},O=function(n){return n.usersPage.followingInProgress},q=function(n){return n.profilePage.subscriptions},D=function(n){(0,i.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,d.jsxs)(d.Fragment,{children:[this.props.isFetching?(0,d.jsx)(b.Z,{}):null,(0,d.jsx)(j,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,subscriptions:this.props.subscriptions})]})}}]),r}(s.Component),M=(0,C.qC)((0,a.$j)((function(n){return{users:I(n),pageSize:F(n),totalUsersCount:A(n),currentPage:N(n),isFetching:E(n),followingInProgress:O(n),subscriptions:q(n)}}),{follow:c.ZN,unfollow:c.fv,setCurrentPage:c.D4,toggleFollowingProgress:c.ZH,getUsers:c.D7}))(D)},9024:function(n,e,r){r.d(e,{q:function(){return o}});var t=r(4353),o=function(n){var e=n.currentTarget;e.onerror=null,e.src=t}},4353:function(n,e,r){n.exports=r.p+"static/media/user.96e310a6add3a711174d.png"},885:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],u=!0,s=!1;try{for(r=r.call(n);!(u=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);u=!0);}catch(a){s=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return i}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=325.dd746be8.chunk.js.map