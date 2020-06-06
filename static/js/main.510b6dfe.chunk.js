(this["webpackJsonpexam-scheduler-fe-fullcalendar"]=this["webpackJsonpexam-scheduler-fe-fullcalendar"]||[]).push([[0],{127:function(e,t,a){e.exports=a(151)},132:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),s=a(38),c=(a(132),a(34)),i=a(12),m=a(10),u=a(14),p=a(15),d=a(16),h=(a(80),a(25)),f=a.n(h),E=a(44),v=a(69),x=a(70),b=a(71);var g=function(e){return e.exams.map((function(t){var a=e.levelColors.find((function(e){return e.level==t.level}));return r.a.createElement("div",{className:"higlightRow"},r.a.createElement("div",{className:"examListItem",key:t.examId,onClick:function(n){return e.handleExamPopover(n.currentTarget,t,a.color)},style:{cursor:"pointer"}},r.a.createElement("div",{className:"examListDate"},f()(t.examStart).format("MMM D")),r.a.createElement("div",{className:"levelColorDot",style:{backgroundColor:a?a.color:"grey"}}),"\xa0",r.a.createElement("div",{className:"examListTime"},f()(t.examStart).format("h:mm A")," - ",f()(t.examEnd).format("h:mm A")),r.a.createElement("p",{className:"examListDescription"},r.a.createElement("span",null," ",t.sectionNickname," ",t.examName),"\xa0",r.a.createElement("span",null," (",t.level,") "),"\xa0",r.a.createElement("span",null," ",t.assignedInstructor," "),"\xa0",r.a.createElement("span",null," [",t.examBuilding,"-",t.examRoom,"] "),"\xa0",r.a.createElement("span",null," ",t.unit,":",t.subject,":",t.course,":",t.section," "),"\xa0",r.a.createElement("span",null," ",t.examSoftware," "),"\xa0")))}))},C=a(35),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).calendarRef=r.a.createRef(),a.handleViewObjectOnDatesRender=function(e){console.log("currentStart of calendar = ".concat(e.view.currentStart))},a.formatFullCalendarEvents=a.formatFullCalendarEvents.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"formatFullCalendarEvents",value:function(e){var t=this;return e.map((function(e){var a=t.props.levelColors.find((function(t){return t.level==e.level}));return{title:"".concat(e.sectionNickname," ").concat(e.examName," - ").concat(e.assignedInstructor),start:e.examStart,end:e.examEnd,backgroundColor:a?a.color:"grey",borderColor:a?a.color:"grey",extendedProps:{examObj:e}}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{defaultView:"timeGridWeek",height:664,header:{left:"timeGridDay timeGridWeek, dayGridMonth",center:"title",right:"prev, next, today"},plugins:[E.d,v.a,x.a],weekends:!0,ref:this.calendarRef,events:this.formatFullCalendarEvents(this.props.exams),datesRender:this.handleViewObjectOnDatesRender,eventClick:function(t){console.log(t.jsEvent),e.props.handleExamPopover(null,t.event.extendedProps.examObj,t.event.backgroundColor)}})}}]),t}(r.a.Component),S=a(7),j=a(57),y=a(83),k=a.n(y),F=a(180),w=a(82),I=a.n(w),P=a(185),T=a(153),R=a(108),N=a(184),L=a(208),A=a(207),D={"Fall 1999":"9909","Spring 2020":"2001","Summer 2020":"2007"},G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).anchorRef=r.a.createRef(null),a.handleClick=function(){console.info("You clicked ".concat(D[a.state.selectedIndex]))},a.handleMenuItemClick=function(e,t){a.props.updateAppsSemester(D[t]),console.log(D[t]),a.setState({selectedSemester:t,open:!1})},a.handleToggle=function(){a.setState({open:!a.state.open})},a.handleClose=function(e){a.anchorRef.current&&a.anchorRef.current.contains(e.target)||a.setState({open:!1})},a.state={open:!1,selectedSemester:"Fall 1999"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"semesterSelecter",style:{color:"white",backgroundColor:"black"},ref:this.anchorRef},this.state.selectedSemester,r.a.createElement("div",null),r.a.createElement(F.a,{size:"small",color:"inherit",onClick:this.handleToggle},r.a.createElement(I.a,{fontSize:"small"})),r.a.createElement(N.a,{open:this.state.open,anchorEl:this.anchorRef.current,role:void 0,transition:!0},(function(t){var a=t.TransitionProps,n=t.placement;return r.a.createElement(T.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(R.a,null,r.a.createElement(P.a,{onClickAway:e.handleClose},r.a.createElement(A.a,{id:"split-button-menu"},Object.keys(D).map((function(t,a){return r.a.createElement(L.a,{key:t,selected:a===e.selectedIndex,onClick:function(a){return e.handleMenuItemClick(a,t)}},t)}))))))})))}}]),t}(r.a.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).colors=["#a4dbb1","#b3c7e6","#a6dcde","#bbafe3","#e0abe0","#fcffbd","#ffe2b0","#ffd8cc","#b8b8b8","#fc86fc"],a.selectedFilters=function(){console.log("selectedFilters functions!");for(var e=[],t=Object.keys(a.props.filterObject),n=function(n){var l=a.colors[n],o=t[n];"level"===o?a.props.filterObject[o].forEach((function(t){var n=a.props.levelColors.find((function(e){return e.level===t}));e.push(r.a.createElement("div",{className:"filterSelectedItem",style:{backgroundColor:n.color}},t,r.a.createElement("div",null),r.a.createElement(F.a,{size:"small",color:"inherit",onClick:function(){return a.props.cancelFilter("level",t)}},r.a.createElement(k.a,{fontSize:"small"}))))})):a.props.filterObject[o].forEach((function(t){e.push(r.a.createElement("div",{className:"filterSelectedItem",style:{backgroundColor:l}},t,r.a.createElement("div",null),r.a.createElement(F.a,{size:"small",color:"inherit",onClick:function(){return a.props.cancelFilter(o,t)}},r.a.createElement(k.a,{fontSize:"small"}))))}))},l=0;l<t.length;l++)n(l);return console.log(e),e},a.state={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("FilterSeletionItem props.filterObject..."),console.log(this.props.filterObject),console.log(this.props.levelColors),r.a.createElement("div",{className:"filterSelectionsContainer"},r.a.createElement(G,{updateAppsSemester:this.props.updateAppsSemester}),this.selectedFilters())}}]),t}(r.a.Component),M=a(154),B=a(187),z=a(188),J=a(186),U=a(203);function H(e){var t=function(t){return function(a){e.update(e.filterGroup,t,a.target.checked)}};return r.a.createElement(B.a,{component:"fieldset"},r.a.createElement(M.a,{component:"legend"},e.filterLabel),r.a.createElement(z.a,null,Object.keys(e.checkboxes).map((function(a){return r.a.createElement(J.a,{control:r.a.createElement(U.a,{checked:e.checkboxes[a],onChange:t(a),value:a}),label:a})}))))}var V=a(99),X=a.n(V),_=a(192),q=a(204),Y=a(191),K=a(190),Z=a(189),$="https://exam-scheduler.glitch.me/api",Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0})},a.handleCancel=function(){a.setState({open:!1,filters:a.state.previousFilterState.filters})},a.updateFilter=function(e,t,n){console.log("From examFilter updateFilter function ".concat(e,", ").concat(t,", ").concat(n)),a.setState(Object(j.a)({},a.state,{filters:Object(j.a)({},a.state.filters,Object(S.a)({},e,Object(j.a)({},a.state.filters[e],Object(S.a)({},t,n))))}))},a.resetFilter=function(){a.setState({filters:a.createFiltersState(a.state.filterJson)})},a.getSemestersFilters=function(e){var t=new XMLHttpRequest;t.open("GET","".concat($,"/filters?semester=").concat(e),!0),t.send(),t.onload=function(){var e=JSON.parse(t.responseText);console.log(e),a.setState({filters:a.createFiltersState(e),filterObject:{},previousFilterState:{filters:a.createFiltersState(e)},filterJson:e})}},a.createFiltersState=function(e){var t={};for(var a in e){var n={},r=!0,l=!1,o=void 0;try{for(var s,c=e[a][Symbol.iterator]();!(r=(s=c.next()).done);r=!0){n[s.value]=!1}}catch(i){l=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}t[a]=n}return console.log(t),t},a.applyFilter=function(){for(var e={},t=0,n=Object.keys(a.state.filters);t<n.length;t++){var r=n[t],l=[];for(var o in a.state.filters[r])a.state.filters[r][o]&&l.push(o);e[r]=l}a.props.filter(e),a.setState({open:!1,previousFilterState:{filters:a.state.filters},filterObject:e})},a.cancelFilter=function(e,t){for(var n={},r=0,l=Object.keys(a.state.filters);r<l.length;r++){var o=l[r],s=[];for(var c in a.state.filters[o])a.state.filters[o][c]&&s.push(c);n[o]=s}n[e]=n[e].filter((function(e){return e!==t})),a.props.filter(n),a.updateFilter(e,t,!1),a.setState({open:!1,previousFilterState:{filters:a.state.filters},filterObject:n})},a.state={open:!1,filters:{},previousFilterState:{},filterObject:{},filterJson:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getSemestersFilters(this.props.semester)}},{key:"componentDidUpdate",value:function(e){e.semester!==this.props.semester&&this.getSemestersFilters(this.props.semester)}},{key:"render",value:function(){var e=this;return console.log("ExamFilter state:"),console.log(this.state),r.a.createElement("div",{id:"filterContainer"},r.a.createElement(W,{filterObject:this.state.filterObject,levelColors:this.props.levelColors,updateAppsSemester:this.props.updateAppsSemester,cancelFilter:function(t,a){e.cancelFilter(t,a)}}),r.a.createElement(F.a,{id:"filterButton"},r.a.createElement(X.a,{style:{fontSize:30},onClick:this.handleClickOpen})),r.a.createElement(q.a,{open:this.state.open,onClose:this.handleCancel,fullWidth:!1,maxWidth:"xl","aria-labelledby":"form-dialog-title"},r.a.createElement(Z.a,{id:"form-dialog-title"},"Filters"),r.a.createElement(K.a,null,r.a.createElement(H,{update:function(t,a,n){return e.updateFilter(t,a,n)},checkboxes:this.state.filters.level,filterGroup:"level",filterLabel:"Level"}),r.a.createElement(H,{update:function(t,a,n){return e.updateFilter(t,a,n)},checkboxes:this.state.filters.assignedInstructor,filterGroup:"assignedInstructor",filterLabel:"Instructor"}),r.a.createElement(H,{update:function(t,a,n){return e.updateFilter(t,a,n)},checkboxes:this.state.filters.courseTitle,filterGroup:"courseTitle",filterLabel:"Course"}),r.a.createElement(H,{update:function(t,a,n){return e.updateFilter(t,a,n)},checkboxes:this.state.filters.examSoftware,filterGroup:"examSoftware",filterLabel:"Software"})),r.a.createElement(Y.a,null,r.a.createElement(_.a,{onClick:this.handleCancel,color:"primary"},"Cancel"),r.a.createElement(_.a,{onClick:this.resetFilter,color:"primary"},"Reset"),r.a.createElement(_.a,{onClick:function(){return e.applyFilter()},color:"primary"},"Apply"))))}}]),t}(r.a.Component),ee=a(20),te=a.n(ee),ae=a(202),ne=a(197),re=a(205),le=a(196),oe=a(18),se=a(200),ce=a(100),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={selected:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({selected:e})}},{key:"mapCoursesMenuItems",value:function(e){return e.map((function(e){return r.a.createElement(L.a,{key:e._id,value:e._id},e.unit,":",e.subject,":",e.course,":",e.section," ",e.courseTitle," ",r.a.createElement("br",null),"\xa0 \xa0 Instr: ",e.assignedInstructor)}))}},{key:"render",value:function(){return r.a.createElement(ae.a,{native:!1,name:"courseId",id:"courseId",value:this.props.courseId,onChange:this.props.onChange,fullWidth:!0},this.mapCoursesMenuItems(this.props.courses))}}]),t}(r.a.Component),me="https://exam-scheduler-production.glitch.me/api",ue=[{value:"ES",label:"Examsoft"},{value:"CNV",label:"Canvas"},{value:"PT",label:"Canvas with ProctorTrack"},{value:"ATI",label:"ATI"}],pe=[{value:"Grittwald Grittington",label:"Grittwald Grittington"},{value:"Tom Porvaznik",label:"Tom Porvaznik"},{value:"Jason Love",label:"Jason Love"}],de=function(e){function t(e){var a,n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClose=function(){return n.props.history.push("/")},n.handleInputChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.handleCheckboxChange=function(e){n.setState(Object(S.a)({},e.target.name,!n.state[e.target.name]))},n.handleCheckApproved=function(){n.setState({approved:!n.state.approved})},n.handleExamStartChange=function(e){n.setState({examStart:e})},n.handleExamEndChange=function(e){n.setState({examEnd:e})},n.submitForm=function(e){e.preventDefault(),function(){var e,t,a,n=arguments;return te.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1?n[1]:void 0,r.next=4,te.a.awrap(fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"manual",referrerPolicy:"no-referrer",body:JSON.stringify(t)}));case 4:return a=r.sent,r.next=7,te.a.awrap(a.text());case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}))}("".concat(me,"/exams"),{courseId:n.state.courseId,examSemester:n.props.semester,examName:n.state.examName,approved:n.state.approved,examStart:n.state.examStart.toISOString(),examEnd:n.state.examEnd.toISOString(),examBuilding:n.state.examBuilding,examRoom:n.state.examRoom,examSoftware:n.state.examSoftware,supportPerson:n.state.supportPerson,emailFaculty:n.state.emailFaculty,facultyConfirmed:n.state.facultyConfirmed}).then((function(e){n.props.addExamToGlobalState(JSON.parse(e)),console.log(e)})).catch((function(e){return console.error(e)})),n.handleClose()},n.state=(a={courses:[],courseId:"",approved:!1,examName:""},Object(S.a)(a,"approved",!1),Object(S.a)(a,"examStart",new Date),Object(S.a)(a,"examEnd",new Date),Object(S.a)(a,"examBuilding",""),Object(S.a)(a,"examRoom",""),Object(S.a)(a,"examSoftware",""),Object(S.a)(a,"supportPerson",""),Object(S.a)(a,"emailFaculty",!1),Object(S.a)(a,"facultyConfirmed",!1),a),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(R.a,{id:"examDetailsFormPaper"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement(le.a,{container:!0,alignItems:"flex-start",spacing:2},r.a.createElement(le.a,{item:!0,xs:12,md:9},r.a.createElement(ne.a,{htmlFor:"courseId"},"Course"),r.a.createElement(ie,{courses:this.props.courses,onChange:this.handleInputChange,courseId:this.state.courseId})),r.a.createElement(le.a,{item:!0,xs:12,md:3},r.a.createElement(re.a,{name:"examSemester",id:"examSemester",label:"Semester",value:this.props.semester,onChange:this.handleInputChange,InputProps:{readOnly:!0}})),r.a.createElement(le.a,{item:!0,xs:12,md:9},r.a.createElement(re.a,{name:"examName",id:"examName",label:"Exam Name",value:this.state.examName,onChange:this.handleInputChange,variant:"filled",fullWidth:!0})),r.a.createElement(le.a,{item:!0,xs:12,md:3},r.a.createElement(J.a,{value:this.state.approved,control:r.a.createElement(U.a,{name:"approved",id:"approved",checked:this.state.approved,onChange:this.handleCheckboxChange}),label:"Approved"})),r.a.createElement(oe.a,{utils:ce.a},r.a.createElement(le.a,{item:!0,xs:12,md:5},r.a.createElement(se.a,{margin:"normal",name:"examStart",id:"examStart",label:"Start Time",value:this.state.examStart,onChange:this.handleExamStartChange,KeyboardButtonProps:{"aria-label":"change time"}})),r.a.createElement(le.a,{item:!0,xs:12,md:5},r.a.createElement(se.a,{margin:"normal",name:"examEnd",id:"examEnd",label:"End Time",value:this.state.examEnd,onChange:this.handleExamEndChange,KeyboardButtonProps:{"aria-label":"change time"}}))),r.a.createElement(le.a,{item:!0,xs:12,md:5},r.a.createElement(re.a,{name:"examBuilding",id:"examBuilding",label:"Building",value:this.state.examBuilding,onChange:this.handleInputChange,variant:"filled",fullWidth:!0})),r.a.createElement(le.a,{item:!0,xs:12,md:5},r.a.createElement(re.a,{name:"examRoom",id:"examRoom",label:"Room",value:this.state.examRoom,onChange:this.handleInputChange,variant:"filled",fullWidth:!0})),r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(B.a,{style:{minWidth:200}},r.a.createElement(ne.a,{id:"examSoftwareLabel"},"Software"),r.a.createElement(ae.a,{name:"examSoftware",id:"examSoftware",labelId:"examSoftwareLabel",value:this.state.examSoftware,onChange:this.handleInputChange},ue.map((function(e){return r.a.createElement(L.a,{key:e.value,value:e.value},e.label)}))))),r.a.createElement(le.a,{item:!0,xs:12,md:4},r.a.createElement(B.a,{style:{minWidth:200}},r.a.createElement(ne.a,{id:"supportPersonLabel"},"Support Person"),r.a.createElement(ae.a,{name:"supportPerson",id:"supportPerson",labelId:"supportPersonLabel",value:this.state.supportPerson,onChange:this.handleInputChange,native:!1},pe.map((function(e){return r.a.createElement(L.a,{key:e.value,value:e.value},e.label)}))))),r.a.createElement(le.a,{item:!0,xs:6,md:4},r.a.createElement(J.a,{value:this.state.emailFaculty,control:r.a.createElement(U.a,{name:"emailFaculty",id:"emailFaculty",checked:this.state.emailFaculty,onChange:this.handleCheckboxChange}),label:"Email Faculty"})),r.a.createElement(le.a,{item:!0,xs:6,md:4},r.a.createElement(J.a,{value:this.state.facultyConfirmed,control:r.a.createElement(U.a,{name:"facultyConfirmed",id:"facultyConfirmed",checked:this.state.facultyConfirmed,onChange:this.handleCheckboxChange}),label:"Faculty Confirmed"}))),r.a.createElement(_.a,{component:s.b,to:"/",color:"primary"},"Cancel"),r.a.createElement(_.a,{type:"submit",color:"primary"},"Add/Update")))}}]),t}(r.a.Component);function he(e){return r.a.createElement("div",null,r.a.createElement(q.a,{open:e.open,onClose:e.handleClose,fullWidth:!1,maxWidth:"lg","aria-labelledby":"exam-details-form"},r.a.createElement(Z.a,{id:"exam-details-form-title"},"Add Exam"),r.a.createElement(K.a,null,r.a.createElement(de,{semester:e.semester,handleClose:e.handleClose,courses:e.courses,addExamToGlobalState:e.addExamToGlobalState}))))}var fe=a(195),Ee=a(198),ve=a(199),xe=a(109),be=a(102),ge=a.n(be),Ce=a(103),Oe=a.n(Ce),Se=a(104),je=a.n(Se);var ye=function(e){var t=e.popoverExamObj?e.popoverExamObj.sectionNickname:"sectionNickname",a=e.popoverExamObj?e.popoverExamObj.examName:"examName",n=e.popoverExamObj?e.popoverExamObj.building:"building",l=e.popoverExamObj?e.popoverExamObj.room:"room",o=e.popoverExamObj?e.popoverExamObj.assignedInstructor:"assignedInstructor",s=e.popoverExamObj?e.popoverExamObj.level:"level",c=e.popoverExamLevelColor?e.popoverExamLevelColor:"#000",i=e.popoverExamObj?f()(e.popoverExamObj.examStart).format("MMM D"):f()().format("MMM D"),m=e.popoverExamObj?f()(e.popoverExamObj.examStart).format("h:mm a"):f()().format("h:mm a"),u=e.popoverExamObj?f()(e.popoverExamObj.examEnd).format("h:mm a"):f()().format("h:mm a");return r.a.createElement(fe.a,{id:"examPopover",open:e.examPopoverOpen,anchorEl:e.anchorEl,onClose:e.handleExamPopoverClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(Ee.a,{style:{maxWidth:500}},r.a.createElement(ve.a,null,r.a.createElement(le.a,{container:!0,spacing:2,alignContent:"flex-start"},r.a.createElement(le.a,{item:!0,container:!0,xs:12,justify:"flex-end"},r.a.createElement(F.a,null,r.a.createElement(ge.a,null)),r.a.createElement(F.a,null,r.a.createElement(Oe.a,null)),r.a.createElement(F.a,null,r.a.createElement(je.a,null))),r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"h6"},t,"  ",a)),r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"subtitle1"},i," ",m," - ",u)),r.a.createElement(le.a,{item:!0,xs:6,md:4},r.a.createElement(xe.a,{variant:"overline"},"Building"),r.a.createElement(xe.a,{variant:"body1"},n)),r.a.createElement(le.a,{item:!0,xs:6,md:4},r.a.createElement(xe.a,{variant:"overline"},"Room"),r.a.createElement(xe.a,{variant:"body1"},l)),r.a.createElement(le.a,{item:!0,xs:0,md:4},r.a.createElement(xe.a,{variant:"body1"})),r.a.createElement(le.a,{item:!0,xs:12,md:4,container:!0},r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"overline"},"Instructor")),r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"body1"},o))),r.a.createElement(le.a,{item:!0,xs:12,md:4,container:!0},r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"overline"},"Level")),r.a.createElement(le.a,{item:!0,xs:12,container:!0},r.a.createElement(le.a,{item:!0,xs:2},r.a.createElement("div",{className:"levelColorDot",style:{backgroundColor:c||"grey",margin:".25rem 0"}})),r.a.createElement(le.a,{item:!0,xs:10},r.a.createElement(xe.a,{variant:"body1"},s)))),r.a.createElement(le.a,{item:!0,xs:4},r.a.createElement(xe.a,{variant:"body1"}))))))},ke=a(106),Fe=a.n(ke),we=a(105),Ie=a.n(we),Pe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).calendarComponentRef=r.a.createRef(),a.handleExamPopoverOpen=function(e,t,n){console.log(e),a.setState({examPopoverOpen:!0,anchorEl:e,popoverExamObj:t,popoverExamLevelColor:n})},a.handleExamPopoverClose=function(){return a.setState({examPopoverOpen:!1,anchorEl:null})},a.state={examPopoverOpen:!1,anchorEl:null,popoverExamObj:null,popoverExamLevelColor:null},a.props={examDetailsFormOpen:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return console.log("This is what filters looks like in props"),console.log(this.props.filters),r.a.createElement("div",{className:"App"},r.a.createElement("section",{id:"tools"},r.a.createElement(Q,{levelColors:this.props.levelColors,filters:this.props.filters,semester:this.props.semester,filter:function(t){return e.props.examFilter(t)},updateAppsSemester:function(t){return e.props.updateAppsSemester(t)}}),r.a.createElement(F.a,{id:"conflictsButton"},r.a.createElement(Ie.a,{style:{fontSize:30},onClick:this.handleClickOpen})),r.a.createElement(F.a,{id:"addExamButton",component:s.b,to:"/examEdit"},r.a.createElement(Fe.a,{style:{fontSize:30}})),r.a.createElement(he,{open:this.props.examDetailsFormOpen,handleClose:this.handleExamDetailsFormClose,semester:this.props.semester,courses:this.props.courses,addExamToGlobalState:this.props.addExamToGlobalState})),r.a.createElement("main",null,r.a.createElement("section",{id:"calendarSection"},r.a.createElement("div",{id:"calendar"},r.a.createElement(O,{exams:this.props.currentExams,ref:this.calendarComponentRef,levelColors:this.props.levelColors,handleExamPopover:this.handleExamPopoverOpen}))),r.a.createElement("section",{id:"examListSection"},r.a.createElement("h2",null,"Exam List"),r.a.createElement("div",{id:"examList"},r.a.createElement(g,{exams:this.props.currentExams,levelColors:this.props.levelColors,handleExamPopover:this.handleExamPopoverOpen}))),r.a.createElement(ye,{examPopoverOpen:this.state.examPopoverOpen,anchorEl:this.state.anchorEl,popoverExamObj:this.state.popoverExamObj,popoverExamLevelColor:this.state.popoverExamLevelColor,handleExamPopoverClose:this.handleExamPopoverClose})))}}]),t}(r.a.Component),Te=a(48),Re=a(22),Ne=a(3),Le=a(107),Ae=function(){return window.history.replaceState({},document.title,window.location.pathname)},De=r.a.createContext(),Ge=function(){return Object(n.useContext)(De)};var We=function(e){var t=e.children;return Ge().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,t)},Me=function(){var e=Ge(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:a.picture,alt:"Profile"}),r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.email),r.a.createElement("code",null,JSON.stringify(a,null,2)))},Be=function(e){var t=e.component,a=e.path,n=(Object(Ne.a)(e,["component","path"]),Ge()),l=(n.loading,n.isAuthenticated),o=n.loginWithRedirect;return r.a.createElement(Te.a,{path:a,render:function(e){return!0===l?r.a.createElement(t,e):te.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.awrap(o({appState:{targetUrl:window.location.pathname}}));case 2:case"end":return e.stop()}}))}})},ze="https://exam-scheduler.glitch.me/api",Je=[{level:"1st Year",color:"#E40066"},{level:"2nd Year",color:"#345995"},{level:"Frsh",color:"#795548"},{level:"Soph",color:"#4285F4"},{level:"Jrs",color:"#0B8043"},{level:"Srs",color:"#8F7000"},{level:"L1",color:"#8E24AA"},{level:"L2",color:"#D81B60"},{level:"L3",color:"#EF6C00"},{level:"L4",color:"#D50000"}],Ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getSemestersExams=function(e){var t=new XMLHttpRequest;t.open("GET","".concat(ze,"/exams?semester=").concat(e),!0),t.send(),t.onload=function(){var e=JSON.parse(t.responseText);console.log(e),a.setState({semesterExams:e,currentExams:e}),console.log(a.state.semesterExams)}},a.getSemestersCourses=function(e){var t=new XMLHttpRequest;t.open("GET","".concat(ze,"/courses?semester=").concat(e),!0),t.send(),t.onload=function(){var e=JSON.parse(t.responseText);console.log(e),a.setState({courses:e})}},a.updateAppsSemester=function(e){a.getSemestersExams(e),a.getSemestersCourses(e),a.setState({semester:e})},a.examFilter=function(e){var t=a.state.semesterExams,n=Object.keys(e);t=t.filter((function(t){return n.every((function(a){return!e[a].length||e[a].includes(t[a])}))})),a.setState({currentExams:t,filterObjectCopy:e})},a.addExamToGlobalState=function(e){var t=[].concat(Object(c.a)(a.state.semesterExams),[e]);t.sort((function(e,t){return new Date(e.examStart).getTime()-new Date(t.examStart).getTime()})),a.setState({semesterExams:t}),a.examFilter(a.state.filterObjectCopy)},a.handleExamDetailsFormOpen=function(){a.setState({examDetailsFormOpen:!0})},a.handleExamDetailsFormClose=function(){a.setState({examDetailsFormOpen:!1})},a.state={semester:"9909",semesterExams:[],currentExams:[],levelColors:Je,filterObjectCopy:{},courses:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(s.b,{to:"/"},"Exam Scheduler"))),r.a.createElement(Te.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(We,null,r.a.createElement(Pe,Object.assign({},t,{semester:e.state.semester,semesterExams:e.state.semesterExams,currentExams:e.state.currentExams,levelColors:e.state.levelColors,courses:e.state.courses,examFilter:function(t){return e.examFilter(t)},updateAppsSemester:function(t){return e.updateAppsSemester(t)}})))}}),r.a.createElement(Te.a,{path:"/examEdit",render:function(t){return r.a.createElement(de,Object.assign({},t,{semester:e.state.semester,handleClose:e.handleClose,courses:e.state.courses,addExamToGlobalState:e.addExamToGlobalState}))}}),r.a.createElement(Be,{path:"/profile",component:Me}))}},{key:"componentDidMount",value:function(){this.updateAppsSemester(this.state.semester)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=a(86),Ve=a(26),Xe=Object(Ve.a)();a(2),a(147),a(148),a(149),a(150);o.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?Ae:a,o=Object(Ne.a)(e,["children","onRedirectCallback"]),s=Object(n.useState)(),c=Object(Re.a)(s,2),i=c[0],m=c[1],u=Object(n.useState)(),p=Object(Re.a)(u,2),d=p[0],h=p[1],f=Object(n.useState)(),E=Object(Re.a)(f,2),v=E[0],x=E[1],b=Object(n.useState)(!0),g=Object(Re.a)(b,2),C=g[0],O=g[1],S=Object(n.useState)(!1),y=Object(Re.a)(S,2),k=y[0],F=y[1];Object(n.useEffect)((function(){!function(){var e,t,a,n,r;te.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,te.a.awrap(Object(Le.a)(o));case 2:if(e=s.sent,x(e),!window.location.search.includes("code=")||!window.location.search.includes("state=")){s.next=10;break}return s.next=7,te.a.awrap(e.handleRedirectCallback());case 7:t=s.sent,a=t.appState,l(a);case 10:return s.next=12,te.a.awrap(e.isAuthenticated());case 12:if(n=s.sent,m(n),!n){s.next=19;break}return s.next=17,te.a.awrap(e.getUser());case 17:r=s.sent,h(r);case 19:O(!1);case 20:case"end":return s.stop()}}))}()}),[]);return r.a.createElement(De.Provider,{value:{isAuthenticated:i,user:d,loading:C,popupOpen:k,loginWithPopup:function(){var e,t,a=arguments;return te.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{},F(!0),n.prev=2,n.next=5,te.a.awrap(v.loginWithPopup(e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0);case 10:return n.prev=10,F(!1),n.finish(10);case 13:return n.next=15,te.a.awrap(v.getUser());case 15:t=n.sent,h(t),m(!0);case 18:case"end":return n.stop()}}),null,null,[[2,7,10,13]])},handleRedirectCallback:function(){var e;return te.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,te.a.awrap(v.handleRedirectCallback());case 3:return t.next=5,te.a.awrap(v.getUser());case 5:e=t.sent,O(!1),m(!0),h(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return v.getIdTokenClaims.apply(v,arguments)},loginWithRedirect:function(){return v.loginWithRedirect.apply(v,arguments)},getTokenSilently:function(){return v.getTokenSilently.apply(v,arguments)},getTokenWithPopup:function(){return v.getTokenWithPopup.apply(v,arguments)},logout:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return v.logout(Object(j.a)({},t,{returnTo:"https://tomporvaz.github.io/Exam-Scheduler-FE/"}))}}},t)}),{domain:He.domain,client_id:He.clientId,redirect_uri:window.location.href,returnTo:"https://tomporvaz.github.io/Exam-Scheduler-FE/",onRedirectCallback:function(e){Xe.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(s.a,{history:Xe,basename:"Exam-Scheduler-FE"},r.a.createElement(Ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){},86:function(e){e.exports=JSON.parse('{"domain":"porkpotato.auth0.com","clientId":"iHFOthNhEWc06zZ755Imr8z2eb83sX2J"}')}},[[127,1,2]]]);
//# sourceMappingURL=main.510b6dfe.chunk.js.map