(this.webpackJsonpmlmodelci_mm_demo=this.webpackJsonpmlmodelci_mm_demo||[]).push([[0],{232:function(e,t,a){e.exports=a.p+"static/media/logo.73d27ac1.svg"},290:function(e,t,a){e.exports=a(555)},295:function(e,t,a){},300:function(e,t,a){},555:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=(a(295),a(121)),c=a.n(i),s=a(232),m=a.n(s),h=(a(300),a(558)),d=a(559),u=(a(301),[{latency:19.10444498062133,throughput:66.39660504285953,bs:1,util:39.2833},{latency:17.987751960754395,throughput:122.10618632689604,bs:2,util:44.5192},{latency:24.278080463409424,throughput:176.616147347364,bs:4,util:53.5278},{latency:38.25854063034057,throughput:223.27035861482935,bs:8,util:62.1071},{latency:69.5155143737793,throughput:243.6001193337727,bs:16,util:64.0385},{latency:126.2059211730957,throughput:269.28261371710175,bs:32,util:68.1739},{latency:242.6874041557312,throughput:274.9067639729919,bs:64,util:72.3913},{latency:477.7075886726379,throughput:279.1917945095303,bs:128,util:75.2727}]),p=[{platform:"TensorFlow",P4:88.55822924697829,T4:122.10618632689604},{platform:"TensorRT",P4:102.20803865591428,T4:150.26316370754694},{platform:"TorchScript",P4:56.720457717415876,T4:58.20733298176469},{platform:"ONNX",P4:85.24703181349611,T4:99.8868079190161}],g=[{gpu:"RTX2080Ti",throughput:453.16052573453123,latency:36.53959035873414},{gpu:"P4",throughput:200.33322119189702,latency:84.71701145172118},{gpu:"T4",throughput:243.6001193337727,latency:69.5155143737793},{gpu:"V100",throughput:438.4617500493123,latency:38.34927082061767}],E=[{bs:1,TensorFlow:39.2833,TensorRT:46.9149,TorchScript:5,ONNX:4},{bs:2,TensorFlow:44.5192,TensorRT:50.3333,TorchScript:13.6667,ONNX:10},{bs:4,TensorFlow:53.5278,TensorRT:47.8148,TorchScript:25,ONNX:22.3333},{bs:8,TensorFlow:62.1071,TensorRT:45.7143,TorchScript:21,ONNX:20.4286},{bs:16,TensorFlow:64.0385,TensorRT:46.1304,TorchScript:17.9231,ONNX:19},{bs:32,TensorFlow:68.1739,TensorRT:44.3846,TorchScript:22.4091,ONNX:24.3636},{bs:64,TensorFlow:72.3913,TensorRT:49.5,TorchScript:27.7179,ONNX:28.2927}],y=a(6),f=[{key:"1",portal:"https://i.loli.net/2020/06/07/okR42YIhlAGpOPr.png",demo1:"https://i.loli.net/2020/06/07/3SXTOmGaeUBFDpo.png",demo2:"https://i.loli.net/2020/06/07/3UjboC2pfWTKYOn.png"}],T=[{title:"MLModelCI Web Portal",dataIndex:"portal",key:"portal",render:function(e){return r.a.createElement("div",null,r.a.createElement(c.a,{alt:"...",src:String(e),width:"500px"}))}},{title:"Application Demo (BERT) ",dataIndex:"demo1",key:"demo2",render:function(e){return r.a.createElement("div",null,r.a.createElement(c.a,{alt:"...",src:String(e),width:"500px"}))}},{title:"Application Demo (Mask R-CNN)",dataIndex:"demo2",key:"demo2",render:function(e){return r.a.createElement("div",null,r.a.createElement(c.a,{alt:"...",src:String(e),width:"500px"}))}}];var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:m.a,width:"160",alt:"..."}),r.a.createElement("h1",{align:"center",style:{marginTop:"15px",fontSize:25}},"MLModelCI: An Automatic Cloud Platform for Efficient MLaaS"),r.a.createElement("p",{style:{marginTop:"-10px"}},"Huaizheng Zhang, Yuanming Li, Yizheng Huang, Yonggang Wen, Jianxiong Yin",r.a.createElement("sup",null,"+"),", Kyle Guan",r.a.createElement("sup",null,"*")),r.a.createElement("p",{style:{marginTop:"-8px"}},"Nanyang Technological University, Singapore; NVIDIA AI Tech Center",r.a.createElement("sup",null,"+"),"; Nokia Bell Labs",r.a.createElement("sup",null,"*")),r.a.createElement("p",{align:"center",style:{marginTop:"15px"}},r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI"},"Code")," \u2022\xa0",r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI"},"Paper")," \u2022\xa0",r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI#tutorial"},"Tutorial"),"\u2022\xa0",r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI"},"Slides")," \u2022\xa0",r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI"},"Citation")," \u2022\xa0",r.a.createElement("a",{href:"https://github.com/cap-ntu/ML-Model-CI"},"News")),r.a.createElement(h.a,{orientation:"left"},"Sample Profiling Results of ResNet50"),r.a.createElement("div",{style:{display:"flex"}}),r.a.createElement("br",null),r.a.createElement("div",{className:"showDataClass"},r.a.createElement(y.c,{width:400,height:400,data:u,margin:{top:5,right:20,left:15,bottom:50}},r.a.createElement(y.e,{verticalAlign:"top",height:36}),r.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(y.h,{dataKey:"bs"},r.a.createElement(y.d,{offset:-23,value:"Batch Size",position:"insideBottom",style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{yAxisId:"latency",orientation:"right",type:"number",domain:[0,550]},r.a.createElement(y.d,{value:"95th Percentile Latency (ms)",position:"insideRight",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{yAxisId:"throughput",orientation:"left",type:"number",domain:[0,320]},r.a.createElement(y.d,{value:"Throughput on Tesla T4 (req/sec)",position:"insideLeft",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.g,null),r.a.createElement(y.a,{dataKey:"throughput",barSize:25,fill:"#4169E1",yAxisId:"throughput"}),r.a.createElement(y.f,{strokeWidth:2,type:"monotone",dataKey:"latency",stroke:"#ff7300",yAxisId:"latency"})),r.a.createElement(y.c,{width:400,height:400,data:g,margin:{top:5,right:20,left:15,bottom:50}},r.a.createElement(y.e,{verticalAlign:"top",height:36}),r.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(y.h,{dataKey:"gpu"},r.a.createElement(y.d,{offset:-23,value:"Serving Device",position:"insideBottom",style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{yAxisId:"latency",orientation:"right",type:"number",domain:[0,100]},r.a.createElement(y.d,{value:"95th Percentile Latency (ms)",position:"insideRight",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{yAxisId:"throughput",orientation:"left",type:"number",domain:[0,600]},r.a.createElement(y.d,{value:"Throughput for Batch Size 16 (req/sec)",position:"insideLeft",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.g,null),r.a.createElement(y.a,{dataKey:"throughput",barSize:25,fill:"#20B2AA",yAxisId:"throughput"}),r.a.createElement(y.a,{dataKey:"latency",barSize:25,fill:"#EEAD0E",yAxisId:"latency"}))),r.a.createElement("div",{className:"showDataClass"},r.a.createElement(y.c,{width:400,height:400,data:p,margin:{top:5,right:15,left:15,bottom:50}},r.a.createElement(y.e,{verticalAlign:"top",height:36}),r.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(y.h,{dataKey:"platform"},r.a.createElement(y.d,{offset:-23,value:"Serving Platform",position:"insideBottom",style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{orientation:"left",type:"number",domain:[0,220]},r.a.createElement(y.d,{value:"Throughput (req/sec)",position:"insideLeft",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.g,null),r.a.createElement(y.a,{dataKey:"T4",barSize:25,fill:"#4169E1"}),r.a.createElement(y.a,{dataKey:"P4",barSize:25,fill:"#3CB371"})),r.a.createElement(y.c,{width:400,height:400,data:E,margin:{top:5,right:15,left:15,bottom:50}},r.a.createElement(y.e,{verticalAlign:"top",height:36}),r.a.createElement(y.f,{type:"monotone",dataKey:"TensorFlow",stroke:"#ff7300",strokeWidth:1.5}),r.a.createElement(y.f,{type:"monotone",dataKey:"TorchScript",stroke:"#3CB371",strokeWidth:1.5}),r.a.createElement(y.f,{type:"monotone",dataKey:"TensorRT",stroke:"#CD1076",strokeWidth:1.5}),r.a.createElement(y.f,{type:"monotone",dataKey:"ONNX",stroke:"#FFD700",strokeWidth:1.5}),r.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(y.h,{dataKey:"bs"},r.a.createElement(y.d,{offset:-23,value:"Batch Size",position:"insideBottom",style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.i,{type:"number",domain:[0,100]},r.a.createElement(y.d,{value:"Average GPU Utilization (%)",position:"insideLeft",angle:-90,style:{textAnchor:"middle",fontSize:15}})),r.a.createElement(y.g,null))),r.a.createElement(h.a,{orientation:"left"},"Related Screenshots"),r.a.createElement("p",null,"Click to see the large image"),r.a.createElement("div",{style:{width:"100%",textAlign:"center",display:"flex",justifyContent:"center"}},r.a.createElement(d.a,{style:{width:"95%"},dataSource:f,columns:T})),r.a.createElement("br",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[290,1,2]]]);
//# sourceMappingURL=main.6cae652a.chunk.js.map