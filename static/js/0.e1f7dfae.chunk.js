(this["webpackJsonpairbnb-page"]=this["webpackJsonpairbnb-page"]||[]).push([[0],{216:function(e,t,i){},217:function(e,t,i){},221:function(e,t,i){"use strict";i.r(t);var a=i(29),n=i(7),r=i(1),o=i(0),c=i(151),s=i(189),d=i(222),l=i(191),u=i(223),j=i(32),g=i(215),p=i(127),b=i(185),h=i(218),f=i.n(h),O=i(4),x=i(89),m=(i(216),i(217),Object(c.a)({root:{backgroundColor:"transparent",boxShadow:"none"},cardActionArea:{"&:hover $focusHighlight":{opacity:0}},focusHighlight:{},cardContent:{padding:"10px 0px 10px 0px"},imageOrientation:function(e){return{paddingTop:e.paddingTop}},cardMedia:{borderWidth:"1px",borderColor:"#a5a5a5",borderRadius:"8px",borderStyle:"solid"},starIcon:{fontSize:"1.2rem",verticalAlign:"middle",marginRight:"2px"},reviewRating:{fontWeight:400,fontSize:"0.9333rem"},FavoriteTwoToneIcon:{position:"absolute",top:"10px",right:"10px",color:"#ffffff",fontSize:"1.8rem"},title:{flexGrow:1},features:{paddingLeft:0,"& span":{padding:"0 5px 0 5px"},"&>li":{display:"inline-block"}},desc:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},radius0:{borderRadius:0}})),v={type:"carousel",bound:!0,rewind:!0,perView:4,perSwipe:"|",throttle:500,animationTimingFunc:"ease-in-out",animationDuration:500,gap:20,dragDistance:!1,swipeThreshold:!1};function w(e){var t=e.index,i=e.perView,a=e.length/i,n=0===i?"...":"".concat(Math.ceil((t+1)/i),"/").concat(Math.ceil(a));return Object(r.jsx)("span",{style:{alignSelf:"center",letterSpacing:"3px"},children:n})}function _(){return Object(r.jsx)("span",{"aria-hidden":"true",children:"\xb7"})}function N(e){var t=e.image,i=e.desc,a=void 0===i?"":i,n=e.features,o=void 0===n?[]:n,c=e.noOfReviews,g=void 0===c?null:c,h=e.roundedBorders,x=void 0===h||h,v=e.showFavourite,w=void 0===v||v,N="portrait"===e.imageOrientation?{paddingTop:"133%"}:{paddingTop:"66.6667%"},S=m(N);return Object(r.jsx)(s.a,{className:S.root,children:Object(r.jsxs)(d.a,{classes:{root:S.cardActionArea,focusHighlight:S.focusHighlight},children:[w&&Object(r.jsx)(f.a,{classes:{root:S.FavoriteTwoToneIcon}}),Object(r.jsx)(u.a,{className:Object(O.a)("".concat(S.cardMedia," ").concat(S.imageOrientation),!x&&"".concat(S.radius0)),image:t,title:"Image title"}),Object(r.jsxs)(l.a,{classes:{root:S.cardContent},children:[g>0&&Object(r.jsxs)(j.a,{gutterBottom:!0,children:[Object(r.jsx)(p.a,{component:b.a,color:"secondary",className:S.starIcon}),Object(r.jsxs)("span",{className:S.reviewRating,children:[g," review"]})]}),o&&Object(r.jsxs)(j.a,{variant:"body1",component:"div",children:[Object(r.jsx)("ol",{className:S.features,children:o.map((function(e,t){return Object(r.jsxs)("li",{children:[t>0&&Object(r.jsx)(_,{}),e]},t)}))}),a&&Object(r.jsx)("span",{className:S.desc,children:a})]})]})]})})}t.default=function(e){var t=e.title,i=e.cards,c=e.imageOrientation,s=void 0===c?"landscape":c,d=e.floatingNav,l=void 0!==d&&d,u=e.roundedBorders,p=e.showFavourite,b=e.showNav,h=void 0===b||b,f=e.showCounter,m=void 0===f||f,_=e.configOverrides,S=Object(o.useState)(0),y=Object(a.a)(S,2),T=y[0],V=y[1],k=Object(o.useState)(0),F=Object(a.a)(k,2),R=F[0],A=F[1],B=i.length,C=Object(o.useRef)(),I=function(e,t){return Object(n.a)(Object(n.a)({},e),t)}(v,_);return Object(o.useEffect)((function(){var e=new g.a(C.current,I);return e.on("run",(function(){V(e.index)})),e.on("resize",(function(){e.previousPerView&&e.perView===e.settings.perView||(e.previousPerView=e.settings.perView,A(e.settings.perView))})),e.on("mount.after",(function(){V(e.index),A(e.settings.perView)})),e.on("swipe.start",(function(){return!1})),e.mount(),function(){e.destroy()}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"glide",ref:C,children:[Object(r.jsxs)("div",{className:Object(O.a)("glide__arrows",l&&"glide__floating_nav"),"data-glide-el":"controls",children:[t&&Object(r.jsx)(j.a,{component:"h3",variant:"h3",gutterBottom:!0,style:{flexGrow:1},children:t}),m&&Object(r.jsx)(w,{index:T,perView:R,length:B}),Object(r.jsx)("button",{"data-glide-dir":"|<",className:Object(O.a)("glide__arrow","glide__arrow--left",!h&&"glide__hide"),children:Object(r.jsx)(x.a,{direction:"previous"})}),Object(r.jsx)("button",{"data-glide-dir":"|>",className:Object(O.a)("glide__arrow","glide__arrow--right",!h&&"glide__hide"),children:Object(r.jsx)(x.a,{direction:"next"})})]}),Object(r.jsx)("div",{className:"glide__track","data-glide-el":"track",children:Object(r.jsx)("ul",{className:Object(O.a)("glide__slides",1===R&&"glide__m0"),children:i.map((function(e,t){return Object(r.jsx)("li",{className:"glide__slide",children:Object(r.jsx)(N,Object(n.a)({imageOrientation:s,roundedBorders:u,showFavourite:p},e))},t)}))})})]})})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJjYXJkQWN0aW9uQXJlYSIsIm9wYWNpdHkiLCJmb2N1c0hpZ2hsaWdodCIsImNhcmRDb250ZW50IiwicGFkZGluZyIsImltYWdlT3JpZW50YXRpb24iLCJzdHlsZXMiLCJwYWRkaW5nVG9wIiwiY2FyZE1lZGlhIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlclN0eWxlIiwic3Rhckljb24iLCJmb250U2l6ZSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5SaWdodCIsInJldmlld1JhdGluZyIsImZvbnRXZWlnaHQiLCJGYXZvcml0ZVR3b1RvbmVJY29uIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwidGl0bGUiLCJmbGV4R3JvdyIsImZlYXR1cmVzIiwicGFkZGluZ0xlZnQiLCJkaXNwbGF5IiwiZGVzYyIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsInJhZGl1czAiLCJzbGlkZXJDb25maWd1cmF0aW9uIiwidHlwZSIsImJvdW5kIiwicmV3aW5kIiwicGVyVmlldyIsInBlclN3aXBlIiwidGhyb3R0bGUiLCJhbmltYXRpb25UaW1pbmdGdW5jIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJnYXAiLCJkcmFnRGlzdGFuY2UiLCJzd2lwZVRocmVzaG9sZCIsIkNvdW50ZXIiLCJwcm9wcyIsImluZGV4Iiwic2V0cyIsImxlbmd0aCIsImNvbnRlbnQiLCJNYXRoIiwiY2VpbCIsInN0eWxlIiwiYWxpZ25TZWxmIiwibGV0dGVyU3BhY2luZyIsIkJ1bGxldFBvaW50IiwiYXJpYS1oaWRkZW4iLCJJbWdNZWRpYUNhcmQiLCJpbWFnZSIsIm5vT2ZSZXZpZXdzIiwicm91bmRlZEJvcmRlcnMiLCJzaG93RmF2b3VyaXRlIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNsc3giLCJndXR0ZXJCb3R0b20iLCJjb21wb25lbnQiLCJTdGFyIiwidmFyaWFudCIsIm1hcCIsImZlYXR1cmUiLCJDYXJvdXNlbCIsImNhcmRzIiwiZmxvYXRpbmdOYXYiLCJzaG93TmF2Iiwic2hvd0NvdW50ZXIiLCJjb25maWdPdmVycmlkZXMiLCJ1c2VTdGF0ZSIsInNldEluZGV4Iiwic2V0UGVyVmlldyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsIm92ZXJyaWRlcyIsIm1lcmdlQ29uZmlnIiwidXNlRWZmZWN0IiwiZ2xpZGUiLCJHbGlkZSIsImN1cnJlbnQiLCJvbiIsInByZXZpb3VzUGVyVmlldyIsInNldHRpbmdzIiwibW91bnQiLCJkZXN0cm95IiwiZGF0YS1nbGlkZS1lbCIsImRhdGEtZ2xpZGUtZGlyIiwiZGlyZWN0aW9uIiwiY2FyZCJdLCJtYXBwaW5ncyI6InVUQWtCTUEsRyxjQUFZQyxZQUFXLENBQzNCQyxLQUFNLENBQ0pDLGdCQUFpQixjQUNqQkMsVUFBVyxRQUViQyxlQUFnQixDQUNkLDBCQUEyQixDQUN6QkMsUUFBUyxJQUdiQyxlQUFnQixHQUNoQkMsWUFBYSxDQUNYQyxRQUFTLHFCQUVYQyxpQkFBa0IsU0FBQ0MsR0FBRCxNQUFhLENBQzdCQyxXQUFZRCxFQUFPQyxhQUVyQkMsVUFBVyxDQUNUQyxZQUFhLE1BQ2JDLFlBQWEsVUFDYkMsYUFBYyxNQUNkQyxZQUFhLFNBRWZDLFNBQVUsQ0FDUkMsU0FBVSxTQUNWQyxjQUFlLFNBQ2ZDLFlBQWEsT0FFZkMsYUFBYyxDQUFFQyxXQUFZLElBQUtKLFNBQVUsYUFDM0NLLG9CQUFxQixDQUNuQkMsU0FBVSxXQUNWQyxJQUFLLE9BQ0xDLE1BQU8sT0FDUEMsTUFBTyxVQUNQVCxTQUFVLFVBRVpVLE1BQU8sQ0FDTEMsU0FBVSxHQUVaQyxTQUFVLENBQ1JDLFlBQWEsRUFDYixTQUFVLENBQ1J2QixRQUFTLGVBRVgsT0FBUSxDQUNOd0IsUUFBUyxpQkFHYkMsS0FBTSxDQUNKRCxRQUFTLFFB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QVUsY0FHM0IscUJBQUtqQyxVQUFVLGVBQWUrQixnQkFBYyxRQUE1QyxTQUNFLG9CQUFJL0IsVUFBV0MsWUFBSyxnQkFBNkIsSUFBWjVCLEdBQWlCLGFBQXRELFNBQ0dvQyxFQUFNSCxLQUFJLFNBQUM0QixFQUFNbkQsR0FBUCxPQUNULG9CQUFJaUIsVUFBVSxlQUFkLFNBQ0UsY0FBQ04sRUFBRCxhQUNFdEQsaUJBQWtCQSxFQUNsQnlELGVBQWdCQSxFQUNoQkMsY0FBZUEsR0FDWG9DLEtBTDBCbkQiLCJmaWxlIjoic3RhdGljL2pzLzAuZTFmN2RmYWUuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuaW1wb3J0IHsgU3ZnSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFN0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IEZhdm9yaXRlVHdvVG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlVHdvVG9uZSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBBcnJvd0J1dHRvbiBmcm9tICdjb21wb25lbnRzL2VsZW1lbnRzL0Fycm93QnV0dG9uJztcblxuLy8gaW1wb3J0IGNvbXBvbmVudCBTQ1NTIGZpbGVzXG5pbXBvcnQgJ2Fzc2V0cy9zY3NzL2Nhcm91c2VsL2dsaWRlLmNvcmUuc2Nzcyc7XG5pbXBvcnQgJ2Fzc2V0cy9zY3NzL2Nhcm91c2VsL2dsaWRlLnRoZW1lLnNjc3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgfSxcbiAgY2FyZEFjdGlvbkFyZWE6IHtcbiAgICAnJjpob3ZlciAkZm9jdXNIaWdobGlnaHQnOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gIH0sXG4gIGZvY3VzSGlnaGxpZ2h0OiB7fSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAnMTBweCAwcHggMTBweCAwcHgnLFxuICB9LFxuICBpbWFnZU9yaWVudGF0aW9uOiAoc3R5bGVzKSA9PiAoe1xuICAgIHBhZGRpbmdUb3A6IHN0eWxlcy5wYWRkaW5nVG9wLFxuICB9KSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIGJvcmRlckNvbG9yOiAnI2E1YTVhNScsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgfSxcbiAgc3Rhckljb246IHtcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxuICB9LFxuICByZXZpZXdSYXRpbmc6IHsgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogJzAuOTMzM3JlbScgfSxcbiAgRmF2b3JpdGVUd29Ub25lSWNvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLFxuICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBmb250U2l6ZTogJzEuOHJlbScsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGZlYXR1cmVzOiB7XG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgJyYgc3Bhbic6IHtcbiAgICAgIHBhZGRpbmc6ICcwIDVweCAwIDVweCcsXG4gICAgfSxcbiAgICAnJj5saSc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH0sXG4gIHJhZGl1czA6IHtcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gIH0sXG59KTtcblxuY29uc3Qgc2xpZGVyQ29uZmlndXJhdGlvbiA9IHtcbiAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgYm91bmQ6IHRydWUsXG4gIHJld2luZDogdHJ1ZSxcbiAgcGVyVmlldzogNCxcbiAgcGVyU3dpcGU6ICd8JyxcbiAgdGhyb3R0bGU6IDUwMCxcbiAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2Vhc2UtaW4tb3V0JyxcbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgZ2FwOiAyMCxcbiAgZHJhZ0Rpc3RhbmNlOiBmYWxzZSxcbiAgc3dpcGVUaHJlc2hvbGQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gQ291bnRlcihwcm9wcykge1xuICBjb25zdCB7IGluZGV4LCBwZXJWaWV3LCBsZW5ndGggfSA9IHByb3BzO1xuICBjb25zdCBzZXRzID0gbGVuZ3RoIC8gcGVyVmlldztcbiAgY29uc3QgY29udGVudCA9XG4gICAgcGVyVmlldyA9PT0gMFxuICAgICAgPyAnLi4uJ1xuICAgICAgOiBgJHtNYXRoLmNlaWwoKGluZGV4ICsgMSkgLyBwZXJWaWV3KX0vJHtNYXRoLmNlaWwoc2V0cyl9YDtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBzdHlsZT17eyBhbGlnblNlbGY6ICdjZW50ZXInLCBsZXR0ZXJTcGFjaW5nOiAnM3B4JyB9fT57Y29udGVudH08L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlc0Zyb21Qcm9wcyh7IGltYWdlT3JpZW50YXRpb24gfSkge1xuICByZXR1cm4gaW1hZ2VPcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0J1xuICAgID8geyBwYWRkaW5nVG9wOiAnMTMzJScgfVxuICAgIDogeyBwYWRkaW5nVG9wOiAnNjYuNjY2NyUnIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZywgb3ZlcnJpZGVzKSB7XG4gIHJldHVybiB7IC4uLmNvbmZpZywgLi4ub3ZlcnJpZGVzIH07XG59XG5cbmZ1bmN0aW9uIEJ1bGxldFBvaW50KCkge1xuICByZXR1cm4gPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+O1xufVxuXG5mdW5jdGlvbiBJbWdNZWRpYUNhcmQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGltYWdlLFxuICAgIGRlc2MgPSAnJyxcbiAgICBmZWF0dXJlcyA9IFtdLFxuICAgIG5vT2ZSZXZpZXdzID0gbnVsbCxcbiAgICByb3VuZGVkQm9yZGVycyA9IHRydWUsXG4gICAgc2hvd0Zhdm91cml0ZSA9IHRydWUsXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzRnJvbVByb3BzKHByb3BzKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRBY3Rpb25BcmVhXG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLmNhcmRBY3Rpb25BcmVhLFxuICAgICAgICAgIGZvY3VzSGlnaGxpZ2h0OiBjbGFzc2VzLmZvY3VzSGlnaGxpZ2h0LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2hvd0Zhdm91cml0ZSAmJiAoXG4gICAgICAgICAgPEZhdm9yaXRlVHdvVG9uZUljb25cbiAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5GYXZvcml0ZVR3b1RvbmVJY29uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgIGAke2NsYXNzZXMuY2FyZE1lZGlhfSAke2NsYXNzZXMuaW1hZ2VPcmllbnRhdGlvbn1gLFxuICAgICAgICAgICAgIXJvdW5kZWRCb3JkZXJzICYmIGAke2NsYXNzZXMucmFkaXVzMH1gXG4gICAgICAgICAgKX1cbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgdGl0bGU9XCJJbWFnZSB0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuY2FyZENvbnRlbnQgfX0+XG4gICAgICAgICAge25vT2ZSZXZpZXdzID4gMCAmJiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtTdGFyfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3Rhckljb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXZpZXdSYXRpbmd9Pntub09mUmV2aWV3c30gcmV2aWV3PC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ZmVhdHVyZXMgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMuZmVhdHVyZXN9PlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ID4gMCAmJiA8QnVsbGV0UG9pbnQgLz59XG4gICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICB7ZGVzYyAmJiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+e2Rlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBjYXJkcyxcbiAgICBpbWFnZU9yaWVudGF0aW9uID0gJ2xhbmRzY2FwZScsXG4gICAgZmxvYXRpbmdOYXYgPSBmYWxzZSxcbiAgICByb3VuZGVkQm9yZGVycyxcbiAgICBzaG93RmF2b3VyaXRlLFxuICAgIHNob3dOYXYgPSB0cnVlLFxuICAgIHNob3dDb3VudGVyID0gdHJ1ZSxcbiAgICBjb25maWdPdmVycmlkZXMsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BlclZpZXcsIHNldFBlclZpZXddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGxlbmd0aCA9IGNhcmRzLmxlbmd0aDtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbmZpZyA9IG1lcmdlQ29uZmlnKHNsaWRlckNvbmZpZ3VyYXRpb24sIGNvbmZpZ092ZXJyaWRlcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUocmVmLmN1cnJlbnQsIGNvbmZpZyk7XG5cbiAgICBnbGlkZS5vbigncnVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SW5kZXgoZ2xpZGUuaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgZ2xpZGUub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZ2xpZGUucHJldmlvdXNQZXJWaWV3IHx8IGdsaWRlLnBlclZpZXcgIT09IGdsaWRlLnNldHRpbmdzLnBlclZpZXcpIHtcbiAgICAgICAgZ2xpZGUucHJldmlvdXNQZXJWaWV3ID0gZ2xpZGUuc2V0dGluZ3MucGVyVmlldztcbiAgICAgICAgc2V0UGVyVmlldyhnbGlkZS5zZXR0aW5ncy5wZXJWaWV3KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdsaWRlLm9uKCdtb3VudC5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldEluZGV4KGdsaWRlLmluZGV4KTtcbiAgICAgIHNldFBlclZpZXcoZ2xpZGUuc2V0dGluZ3MucGVyVmlldyk7XG4gICAgfSk7XG5cbiAgICBnbGlkZS5vbignc3dpcGUuc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBnbGlkZS5tb3VudCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGdsaWRlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vVE9ETzogRml4IG1pc3NpbmcgZGVwZW5kYW5jeVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xpZGVcIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAnZ2xpZGVfX2Fycm93cycsXG4gICAgICAgICAgICBmbG9hdGluZ05hdiAmJiAnZ2xpZGVfX2Zsb2F0aW5nX25hdidcbiAgICAgICAgICApfVxuICAgICAgICAgIGRhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3dDb3VudGVyICYmIChcbiAgICAgICAgICAgIDxDb3VudGVyIGluZGV4PXtpbmRleH0gcGVyVmlldz17cGVyVmlld30gbGVuZ3RoPXtsZW5ndGh9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWdsaWRlLWRpcj1cInw8XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgJ2dsaWRlX19hcnJvdycsXG4gICAgICAgICAgICAgICdnbGlkZV9fYXJyb3ctLWxlZnQnLFxuICAgICAgICAgICAgICAhc2hvd05hdiAmJiAnZ2xpZGVfX2hpZGUnXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0J1dHRvbiBkaXJlY3Rpb249XCJwcmV2aW91c1wiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGF0YS1nbGlkZS1kaXI9XCJ8PlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICdnbGlkZV9fYXJyb3cnLFxuICAgICAgICAgICAgICAnZ2xpZGVfX2Fycm93LS1yaWdodCcsXG4gICAgICAgICAgICAgICFzaG93TmF2ICYmICdnbGlkZV9faGlkZSdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93QnV0dG9uIGRpcmVjdGlvbj1cIm5leHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGlkZV9fdHJhY2tcIiBkYXRhLWdsaWRlLWVsPVwidHJhY2tcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbHN4KCdnbGlkZV9fc2xpZGVzJywgcGVyVmlldyA9PT0gMSAmJiAnZ2xpZGVfX20wJyl9PlxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImdsaWRlX19zbGlkZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxJbWdNZWRpYUNhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlT3JpZW50YXRpb249e2ltYWdlT3JpZW50YXRpb259XG4gICAgICAgICAgICAgICAgICByb3VuZGVkQm9yZGVycz17cm91bmRlZEJvcmRlcnN9XG4gICAgICAgICAgICAgICAgICBzaG93RmF2b3VyaXRlPXtzaG93RmF2b3VyaXRlfVxuICAgICAgICAgICAgICAgICAgey4uLmNhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=