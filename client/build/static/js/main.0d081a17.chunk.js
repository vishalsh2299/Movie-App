(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{484:function(e,t,a){e.exports=a(963)},714:function(e,t,a){},958:function(e,t,a){},959:function(e,t,a){},963:function(e,t,a){"use strict";a.r(t);a(295),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(485),a(486),a(487),a(488),a(489),a(490),a(491),a(492),a(493),a(324),a(494),a(495),a(177),a(496),a(497),a(498),a(499),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(509),a(510),a(512),a(513),a(515),a(516),a(333),a(179),a(517),a(518),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(528),a(529),a(530),a(531),a(532),a(338),a(533),a(534),a(535),a(536),a(537),a(538),a(539),a(540),a(541),a(543),a(544),a(546),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(556),a(557),a(558),a(559),a(560),a(561),a(562),a(563),a(564),a(245),a(566),a(567),a(568),a(569),a(570),a(572),a(573),a(574),a(575),a(576),a(577),a(578),a(579),a(580),a(581),a(582),a(350),a(583),a(584),a(247),a(585),a(586),a(587),a(588),a(187),a(589),a(590),a(591),a(592),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(610),a(611),a(612),a(613),a(614),a(616),a(617),a(618),a(619),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(644),a(645),a(646),a(647),a(648),a(252),a(649),a(650),a(651),a(652),a(653),a(654),a(655),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(658),a(659),a(660),a(661),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(670),a(671),a(672),a(673),a(675),a(676),a(677),a(678),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(376),a(378),a(379),a(380),a(381),a(382),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(686),a(687),a(688),a(690),a(395),a(396),a(397),a(691),a(692),a(693),a(694),a(695),a(696),a(697),a(698),a(399),a(699),a(700),a(701),a(703),a(401),a(704),a(402);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=(a(714),a(100)),c=a(22),s=a.n(c),m="63f97296fe930d8ce6bd4842be7416e0",u="https://api.themoviedb.org/3/",d="http://image.tmdb.org/t/p/";function p(){return{type:"auth_user",payload:s.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var f=a(34),v=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function i(i){var l=Object(f.c)((function(e){return e.user})),o=Object(f.b)();return Object(n.useEffect)((function(){o(p()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&i.history.push("/"):t&&i.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},i,{user:l}))}return i},E=a(292),h=a(15),g=a(969),b=g.a.Title;var y=function(e){return r.a.createElement("div",{style:{background:"linear-gradient(to bottom , rgba(0,0,0,0)\n        39%, rgba(0,0,0,0) 41% ,\n        rgba(0,0,0,0.65) 100%),\n        url('".concat(e.image,"'), #1c1c1c"),height:"500px",backgroundSize:"100%, cover",backgroundPosition:"center, center",width:"100%",position:"relative"}},r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",maxWidth:"500px",bottom:"2rem",marginLeft:"2rem"}},r.a.createElement(b,{style:{color:"white"},level:2}," ",e.title),r.a.createElement("p",{style:{color:"white",fontSize:"1rem"}},e.text))))},w=a(964);var I=function(e){return e.actor?r.a.createElement("div",null,r.a.createElement(w.a,{lg:6,md:8,xs:24},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("img",{style:{width:"100%",height:"320px"},alt:e.alt,src:e.image})))):r.a.createElement(w.a,{lg:6,md:8,xs:24},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("a",{href:"/movie/".concat(e.movieId)},r.a.createElement("img",{style:{width:"100%",height:"320px"},alt:e.alt,src:e.image}))))},j=a(965),O=g.a.Title;var k=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(0),o=Object(h.a)(l,2),c=o[0],s=o[1];Object(n.useEffect)((function(){var e="".concat(u,"movie/popular?api_key=").concat(m,"&language=en-US&page=1");p(e)}),[]);var p=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){i([].concat(Object(E.a)(a),Object(E.a)(e.results))),s(e.page)}))};return r.a.createElement("div",{style:{width:"100%",margin:"0"}},a[0]&&r.a.createElement(y,{image:"".concat(d,"w1280").concat(a[0].backdrop_path&&a[0].backdrop_path),title:a[0].original_title,text:a[0].overview}),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement(O,{level:2}," Movies by latest"),r.a.createElement("hr",null),r.a.createElement(j.a,{gutter:[16,16]},a&&a.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(I,{image:e.poster_path&&"".concat(d,"w500").concat(e.poster_path),alt:e.character,movieId:e.id}))}))),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{onClick:function(){var e="".concat(u,"movie/popular?api_key=").concat(m,"&language=en-US&page=").concat(c+1);p(e)}},"Load More"))))},x=a(223),S=a(65),C=a(970),_=a(974),F=a(21),N=a(972),L=a(293),T=g.a.Title;var D=Object(o.f)((function(e){var t=Object(f.b)(),a=!!localStorage.getItem("rememberMe"),i=Object(n.useState)(""),l=Object(h.a)(i,2),o=l[0],c=l[1],m=Object(n.useState)(a),u=Object(h.a)(m,2),d=u[0],p=u[1],v=function(){p(!d)},E=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(x.a,{initialValues:{email:E,password:""},validationSchema:S.object().shape({email:S.string().email("Email is invalid").required("Email is required"),password:S.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:s.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===d?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):c("Check out your Account or Password again")})).catch((function(e){c("Check out your Account or Password again"),setTimeout((function(){c("")}),3e3)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,i=e.isSubmitting,l=e.handleChange,c=e.handleBlur,s=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement(T,{level:2},"Log In"),r.a.createElement("form",{onSubmit:s,style:{width:"350px"}},r.a.createElement(C.a.Item,{required:!0},r.a.createElement(_.a,{id:"email",prefix:r.a.createElement(F.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:l,onBlur:c,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(C.a.Item,{required:!0},r.a.createElement(_.a,{id:"password",prefix:r.a.createElement(F.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:c,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),o&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},o)),r.a.createElement(C.a.Item,null,r.a.createElement(N.a,{id:"rememberMe",onChange:v,checked:d},"Remember me"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),r.a.createElement("div",null,r.a.createElement(L.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:i,onSubmit:s},"Log in")),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))})),P=a(168),q=a.n(P),M={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},A={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var B=function(e){var t=Object(f.b)();return r.a.createElement(x.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:S.object().shape({name:S.string().required("Name is required"),lastName:S.string().required("Last Name is required"),email:S.string().email("Email is invalid").required("Email is required"),password:S.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:S.string().oneOf([S.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(q()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:s.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,i=e.isSubmitting,l=e.handleChange,o=e.handleBlur,c=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(C.a,Object.assign({style:{minWidth:"375px"}},M,{onSubmit:c}),r.a.createElement(C.a.Item,{required:!0,label:"Name"},r.a.createElement(_.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:l,onBlur:o,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(C.a.Item,{required:!0,label:"Last Name"},r.a.createElement(_.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:l,onBlur:o,className:n.lastName&&a.lastName?"text-input error":"text-input"}),n.lastName&&a.lastName&&r.a.createElement("div",{className:"input-feedback"},n.lastName)),r.a.createElement(C.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(_.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:l,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(C.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(_.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(C.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(_.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:l,onBlur:o,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(C.a.Item,A,r.a.createElement(L.a,{onClick:c,type:"primary",disabled:i},"Submit"))))}))},R=a(971);var z=function(e){return r.a.createElement(R.a,{mode:e.mode},r.a.createElement(R.a.Item,{key:"favorite"},r.a.createElement("a",{href:"/favorite"},"Favorite")))};var U=Object(o.f)((function(e){var t=Object(f.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?r.a.createElement(R.a,{mode:e.mode},r.a.createElement(R.a.Item,{key:"mail"},r.a.createElement("a",{href:"/login"},"SignIn")),r.a.createElement(R.a.Item,{key:"app"},r.a.createElement("a",{href:"/register"},"SignUp"))):r.a.createElement(R.a,{mode:e.mode},r.a.createElement(R.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){s.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),V=a(973),W=(a(958),a(976));var X=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],i=t[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},r.a.createElement("div",{className:"menu__logo",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center"}},r.a.createElement(W.a,{style:{fontSize:"30px",marginRight:"5px"}}),r.a.createElement("a",{href:"/",style:{padding:"19px 5px"}},"Movies")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_left"},r.a.createElement(z,{mode:"horizontal"})),r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(U,{mode:"horizontal"})),r.a.createElement(L.a,{className:"menu__mobile-button",type:"primary",onClick:function(){i(!0)}},r.a.createElement(F.a,{type:"align-right"})),r.a.createElement(V.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){i(!1)},visible:a},r.a.createElement(z,{mode:"inline"}),r.a.createElement(U,{mode:"inline"}))))};var J=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},r.a.createElement("p",null," ","Watch Movies ",r.a.createElement(F.a,{type:"smile"})))},G=a(975),H=a(977),$=a(978);var K=function(e){var t=Object(f.c)((function(e){return e.user})),a=Object(n.useState)(0),i=Object(h.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(!1),m=Object(h.a)(c,2),u=m[0],d=m[1],p={userFrom:e.userFrom,movieId:e.movieId,movieTitle:e.movieInfo.original_title,movieImage:e.movieInfo.backdrop_path,movieRunTime:e.movieInfo.runtime};return Object(n.useEffect)((function(){s.a.post("/api/favorite/favoriteNumber",p).then((function(e){e.data.success?o(e.data.favoriteNumber):alert("Failed to get Favorites Info")}),[]),s.a.post("/api/favorite/favorited",p).then((function(e){e.data.success?d(e.data.favorited):alert("Failed to get Favorites Info")}))}),[]),r.a.createElement("div",null,r.a.createElement(L.a,{onClick:function(){if(t.userData&&!t.userData.isAuth)return alert("Please Log in first");u||l>0?s.a.post("/api/favorite/removeFromFavorite",p).then((function(e){e.data.success?(o(0),d(!u)):alert("Failed to remove from Favorites")})):0===l&&s.a.post("/api/favorite/addToFavorite",p).then((function(e){e.data.success?(o(l+1),d(!u)):alert("Failed to add to Favorites")}))},class:"mdc-icon-button","aria-label":"Add to favorites","aria-pressed":"false"},0!==l?r.a.createElement(H.a,{style:{color:"gold",fontSize:"20px"}}):r.a.createElement($.a,{style:{color:"red",fontSize:"15px"}})),r.a.createElement("i",{class:"icon-heart"}))},Q=a(966),Y=a(967),Z=a(118);var ee=function(e){var t=Object(f.c)((function(e){return e.user})),a=Object(n.useState)(0),i=Object(h.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(0),m=Object(h.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)(null),v=Object(h.a)(p,2),E=v[0],g=v[1],b=Object(n.useState)(null),y=Object(h.a)(b,2),w=y[0],I=y[1],j={};return j=e.video?{videoId:e.videoId,userId:e.userId}:{commentId:e.commentId,userId:e.userId},Object(n.useEffect)((function(){s.a.post("/api/like/getLikes",j).then((function(t){t.data.success?(o(t.data.likes.length),t.data.likes.map((function(t){t.userId===e.userId&&g("liked")}))):alert("Failed to get likes")})),s.a.post("/api/like/getDislikes",j).then((function(t){t.data.success?(d(t.data.dislikes.length),t.data.dislikes.map((function(t){t.userId===e.userId&&I("disliked")}))):alert("Failed to get dislikes")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:"comment-basic-like"},r.a.createElement(Z.a,{title:"Like"},r.a.createElement(F.a,{type:"like",theme:"liked"===E?"filled":"outlined",onClick:function(){if(t.userData&&!t.userData.isAuth)return alert("Please Log in first");null===E?s.a.post("/api/like/upLike",j).then((function(e){e.data.success?(o(l+1),g("liked"),null!==w&&(I(null),d(u-1))):alert("Failed to increase the like")})):s.a.post("/api/like/unLike",j).then((function(e){e.data.success?(o(l-1),g(null)):alert("Failed to decrease the like")}))}})),r.a.createElement("span",{style:{paddingLeft:"8px",cursor:"auto"}},l)),"\xa0\xa0\xa0\xa0",r.a.createElement("span",{key:"comment-basic-dislike"},r.a.createElement(Z.a,{title:"Dislike"},r.a.createElement(F.a,{type:"dislike",theme:"disliked"===w?"filled":"outlined",onClick:function(){if(t.userData&&!t.userData.isAuth)return alert("Please Log in first");null!==w?s.a.post("/api/like/unDisLike",j).then((function(e){e.data.success?(d(u-1),I(null)):alert("Failed to decrease dislike")})):s.a.post("/api/like/upDisLike",j).then((function(e){e.data.success?(d(u+1),I("disliked"),null!==E&&(g(null),o(l-1))):alert("Failed to increase dislike")}))}})),r.a.createElement("span",{style:{paddingLeft:"8px",cursor:"auto"}},u)))},te=_.a.TextArea;var ae=function(e){var t=Object(f.c)((function(e){return e.user})),a=Object(n.useState)(""),i=Object(h.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(!1),m=Object(h.a)(c,2),u=m[0],d=m[1],p=function(a){a.preventDefault();var n={writer:t.userData._id,movieId:e.movieId,responseTo:e.comment._id,content:l};s.a.post("/api/comment/saveComment",n).then((function(t){t.data.success?(o(""),d(!u),e.refreshFunction(t.data.result)):alert("Failed to save Comment")}))},v=[r.a.createElement(ee,{comment:!0,commentId:e.comment._id,userId:localStorage.getItem("userId")}),r.a.createElement("span",{onClick:function(){d(!u)},key:"comment-basic-reply-to"},"Reply to"," ")];return r.a.createElement("div",null,r.a.createElement(Q.a,{actions:v,author:e.comment.writer.name,avatar:r.a.createElement(Y.a,{src:e.comment.writer.image,alt:"image"}),content:r.a.createElement("p",null,e.comment.content)}),u&&r.a.createElement("form",{style:{display:"flex"},onSubmit:p},r.a.createElement(te,{style:{width:"100%",borderRadius:"5px"},onChange:function(e){o(e.currentTarget.value)},value:l,placeholder:"write some comments"}),r.a.createElement("br",null),r.a.createElement(L.a,{style:{width:"20%",height:"52px"},onClick:p},"Submit")))};var ne=function e(t){var a,i=Object(n.useState)(0),l=Object(h.a)(i,2),o=l[0],c=l[1],s=Object(n.useState)(!1),m=Object(h.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=0;t.CommentLists.map((function(a){a.responseTo===t.parentCommentId&&e++})),c(e)}),[t.CommentLists,t.parentCommentId]),r.a.createElement("div",null,o>0&&r.a.createElement("p",{style:{fontSize:"14px",margin:0,color:"gray",cursor:"pointer"},onClick:function(){d(!u)}},"\xa0 View ",o," more comment(s)"),u&&(a=t.parentCommentId,t.CommentLists.map((function(n,i){return r.a.createElement(r.a.Fragment,null,n.responseTo===a&&r.a.createElement("div",{style:{width:"80%",marginLeft:"40px"}},r.a.createElement(ae,{comment:n,movieId:t.movieId,refreshFunction:t.refreshFunction}),r.a.createElement(e,{CommentLists:t.CommentLists,parentCommentId:n._id,movieId:t.movieId,refreshFunction:t.refreshFunction})))}))))},re=_.a.TextArea,ie=g.a.Title;var le=function(e){var t=Object(f.c)((function(e){return e.user})),a=Object(n.useState)(""),i=Object(h.a)(a,2),l=i[0],o=i[1],c=function(a){if(a.preventDefault(),t.userData&&!t.userData.isAuth)return alert("Please Log in first");var n={content:l,writer:t.userData._id,movieId:e.movieId};console.log(n),s.a.post("/api/comment/saveComment",n).then((function(t){t.data.success?(o(""),e.refreshFunction(t.data.result)):alert("Failed to save Comment")}))};return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(ie,{level:3}," Share your opinions about ",e.movieTitle," "),r.a.createElement("hr",null),console.log(e.CommentLists),e.CommentLists&&e.CommentLists.map((function(t,a){return!t.responseTo&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{comment:t,movieId:e.movieId,refreshFunction:e.refreshFunction}),r.a.createElement(ne,{CommentLists:e.CommentLists,movieId:e.movieId,parentCommentId:t._id,refreshFunction:e.refreshFunction}))})),e.CommentLists&&0===e.CommentLists.length&&r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"}},"Be the first one who shares your thought about this movie"),r.a.createElement("form",{style:{display:"flex"},onSubmit:c},r.a.createElement(re,{style:{width:"100%",borderRadius:"5px"},onChange:function(e){o(e.currentTarget.value)},value:l,placeholder:"write some comments"}),r.a.createElement("br",null),r.a.createElement(L.a,{style:{width:"20%",height:"52px"},onClick:c},"Submit")))};var oe=function(e){var t=e.match.params.movieId,a=Object(n.useState)([]),i=Object(h.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)([]),p=Object(h.a)(c,2),f=p[0],v=p[1],E=Object(n.useState)(!1),g=Object(h.a)(E,2),b=g[0],w=g[1],O=Object(n.useState)([]),k=Object(h.a)(O,2),x=k[0],S=k[1],C=Object(n.useState)(!0),_=Object(h.a)(C,2),F=_[0],N=_[1],T=Object(n.useState)(!0),D=Object(h.a)(T,2),P=D[0],q=D[1];Object(n.useEffect)((function(){var e="".concat(u,"movie/").concat(t,"?api_key=").concat(m,"&language=en-US");M(e),s.a.post("/api/comment/getComments",{movieId:t}).then((function(e){e.data.success?S(e.data.comments):alert("Failed to get comments Info")})).catch((function(e){return console.log(e)}))}),[]);var M=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){o(e),N(!1),fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(m)).then((function(e){return e.json()})).then((function(e){v(e.cast)})),q(!1)}))};return r.a.createElement("div",null,F?r.a.createElement("div",null,"Loading..."):l&&r.a.createElement(y,{image:"".concat(d,"w1280").concat(l.backdrop_path&&l.backdrop_path),title:l.original_title,text:l.overview}),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(K,{userFrom:localStorage.getItem("userId"),movieId:t,movieInfo:l})),F?r.a.createElement("div",null,"Loading..."):r.a.createElement(G.a,{title:"Movie Info",bordered:!0},r.a.createElement(G.a.Item,{label:"Title"},l.original_title),r.a.createElement(G.a.Item,{label:"release_date"},l.release_date),r.a.createElement(G.a.Item,{label:"revenue"},l.revenue),r.a.createElement(G.a.Item,{label:"runtime"},l.runtime),r.a.createElement(G.a.Item,{label:"vote_average",span:2},l.vote_average),r.a.createElement(G.a.Item,{label:"vote_count"},l.vote_count),r.a.createElement(G.a.Item,{label:"status"},l.status),r.a.createElement(G.a.Item,{label:"popularity"},l.popularity))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(L.a,{onClick:function(){w(!b)}}," Toggle Actor View")),r.a.createElement("br",null),b&&r.a.createElement(j.a,{gutter:[16,16]},P?r.a.createElement("div",null,"loading..."):f&&f.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.profile_path&&r.a.createElement(I,{actor:!0,image:"".concat(d,"w500").concat(e.profile_path),alt:e.character}))}))),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(ee,{video:!0,videoId:t,userId:localStorage.getItem("userId")})),r.a.createElement(le,{movieTitle:l.original_title,CommentLists:x,movieId:t,refreshFunction:function(e){S(x.concat(e))}}))},ce=(a(959),a(968));var se=function(){var e=Object(f.c)((function(e){return e.user})),t={userFrom:localStorage.getItem("userId")},a=Object(n.useState)([]),i=Object(h.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(!0),m=Object(h.a)(c,2),u=m[0],p=m[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){s.a.post("/api/favorite/getFavoritedMovie",t).then((function(e){e.data.success?(o(e.data.favorites),p(!1)):alert("Failed to get favorited videos")}))},E=l.map((function(e,t){var a=r.a.createElement("div",null,e.movieImage?r.a.createElement("img",{src:"".concat(d,"w500").concat(e.movieImage)}):"no image");return r.a.createElement("tr",{key:t},r.a.createElement(ce.a,{content:a,title:"".concat(e.movieTitle)},r.a.createElement("td",null,e.movieTitle)),r.a.createElement("td",null,e.movieRunTime," mins"),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return function(e,t){var a={movieId:e,userFrom:t};s.a.post("/api/favorite/removeFromFavorite",a).then((function(e){e.data.success?v():alert("Failed to Remove From Favorite")}))}(e.movieId,e.userFrom)}}," ","Remove"," ")))}));return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement("h3",null,"Favorite Movies By Me"),r.a.createElement("hr",null),e.userData&&!e.userData.isAuth?r.a.createElement("div",{style:{width:"100%",fontSize:"2rem",height:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,"Please Log in first..."),r.a.createElement("a",{href:"/login"},"Go to Login page")):!u&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Movie Title"),r.a.createElement("th",null,"Movie Runtime"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,E)))};var me=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(X,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:v(k,null)}),r.a.createElement(o.a,{exact:!0,path:"/login",component:v(D,!1)}),r.a.createElement(o.a,{exact:!0,path:"/register",component:v(B,!1)}),r.a.createElement(o.a,{exact:!0,path:"/movie/:movieId",component:v(oe,null)}),r.a.createElement(o.a,{exact:!0,path:"/favorite",component:v(se,null)}))),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(164),de=a(117),pe=a(103),fe=Object(de.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(pe.a)(Object(pe.a)({},e),{},{register:t.payload});case"login_user":return Object(pe.a)(Object(pe.a)({},e),{},{loginSucces:t.payload});case"auth_user":return Object(pe.a)(Object(pe.a)({},e),{},{userData:t.payload});case"logout_user":return Object(pe.a)({},e);default:return e}}}),ve=a(478),Ee=a.n(ve),he=a(479),ge=Object(de.a)(Ee.a,he.a)(de.d);l.a.render(r.a.createElement(f.a,{store:ge(fe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(ue.a,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[484,1,2]]]);
//# sourceMappingURL=main.0d081a17.chunk.js.map