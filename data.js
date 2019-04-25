var xhr_origin = 'https://api.6h5.cn/sun'
if(window.location.href.indexOf('hsdjj.')==-1){
	xhr_origin = 'http://localhost:9581'
}
function $ID(a) {
	return document.getElementById(a)
}
// console.log(xinxuanListNum)

function $AJAX(type){
	var list = []
	var _xhr = new XMLHttpRequest();
	_xhr.open('get',xhr_origin+'/jiajiao/v1/list/'+type+'?size=100');
	_xhr.send();
	_xhr.onreadystatechange = function () {
		if (_xhr.readyState==4 &&_xhr.status==200) {
			_res = JSON.parse(_xhr.responseText)
			console.log(_res)
			if(_res.results && _res.results.length>0){
				_listRender(_res.results,type)
			}
		}
	}
}

function goDetailPage(type,id){
	console.log('type:'+type,'id:'+id)
	window.location.href = './detail/?type='+type+'&id='+id
}

function _listRender(list,type){
	console.log('type:'+type)
	var listDOM = '<div>';
	for (var i = 0; i < list.length; i++) {
		var el = list[i];
		var dom = ''
		if(type=='parent'){
			dom='<div class="list" data-id="'+el.id+'" onclick="goDetailPage(\''+type+'\','+el.id+')">'+
					'<p style="background-color:#019687;color:#fff;height:40px;line-height:40px;">'+
						'<span>NO.'+el.order_number+'</span>'+
						'<span style="float:right;">报酬/小时：'+el.teach_money+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;font-size:12px;">发布时间：'+el.submit_at+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">学生：</span>'+
						'<span>'+el.child_grade+'，'+el.child_sex+'</span>'+
						'<span style="float:right;">'+
							'<span>家长：'+el.parent_name+'</span>'+
							'<span style="font-size:12px;opacity:.5;">（'+el.parent_tel+'）</span>'+
						'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">辅导科目：</span>'+
						'<span>'+el.teach_course+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">地址：</span>'+
						'<span>'+el.teach_address+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">时间：</span>'+
						'<span>'+el.teach_time+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">硬性要求：</span>'+
						'<span>'+el.teacher_require1+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">软性要求：</span>'+
						'<span>'+el.teacher_require2+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">孩子情况：</span>'+
						'<span>'+el.child_detail+'</span>'+
					'</p>'+
				'</div>';
		}
		if(type=='job'){
			dom='<div class="list" data-id="'+el.id+'" onclick="goDetailPage(\''+type+'\','+el.id+')">'+
					'<p style="background-color:#019687;color:#fff;height:40px;line-height:40px;">'+
						'<span>NO.'+el.order_number+'</span>'+
						'<span style="float:right;">工资/月：'+el.job_money+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;font-size:12px;">发布时间：'+el.submit_at+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">标题：</span>'+
						'<span>'+el.job_title+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">内容：</span>'+
						'<span>'+el.job_content+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">时间：</span>'+
						'<span>'+el.job_time+'</span>'+
						'<span style="opacity:.5;margin-left:10px;">地点：</span>'+
						'<span>'+el.job_address+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">公司：</span>'+
						'<span>'+el.company_name+'</span>'+
						'<span style="opacity:.5;margin-left:10px;">官网：</span>'+
						'<span>'+el.company_site+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">联系人：</span>'+
						'<span>'+el.company_contact_name+'</span>'+
						'<span style="opacity:.5;margin-left:10px;">电话：</span>'+
						'<span>'+el.company_contact_tel+'</span>'+
						'<span style="opacity:.5;margin-left:10px;">微信/QQ：</span>'+
						'<span>'+el.company_contact_wxqq+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">备注：</span>'+
						'<span>'+el.company_contact_remark+'</span>'+
					'</p>'+
				'</div>'
		}
		if(type=='teacher'){
			dom='<div class="list" data-id="'+el.id+'" onclick="goDetailPage(\''+type+'\','+el.id+')">'+
					'<p style="background-color:#019687;color:#fff;height:40px;line-height:40px;">'+
						'<span>NO.'+el.order_number+'</span>'+
						'<span style="float:right;">'+
							'<span>'+el.teacher_name+'</span> '+
							'<span>'+el.teacher_sex+'</span> '+
							'<span>'+el.teacher_edu+'</span> '+
							'<span>'+el.teacher_class+'</span> '+
						'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;font-size:12px;">发布时间：'+el.submit_at+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">所在学校专业：</span>'+
						'<span>'+el.teacher_school+'</span> '+
						'<span>'+el.teacher_major+'</span> '+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">可教授科目：</span>'+
						'<span>'+el.teach_course+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">可教授时间：</span>'+
						'<span>'+el.teach_time+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">可教授区域：</span>'+
						'<span>'+el.teach_area+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">个人简介：</span>'+
						'<span>'+el.teacher_unidesc+'</span>'+
					'</p>'+
					'<p>'+
						'<span style="opacity:.5;">教龄：</span>'+
						'<span>'+el.teach_year+'</span>'+
					'</p>'+
				'</div>'		
		}
		listDOM += dom
	}
	$ID('jiajiaoList').innerHTML = listDOM;
}

$AJAX('parent')
var uli = $ID('ul_1').children
var clickStyle = 'background-color:#009688;color:#fff;'
uli[0].style.cssText = clickStyle

var _CL = ['家长','教员','企业']
var _CLDOM = '<p style="padding-top: 15px;">选择您的身份：</p>'
for (var i = 0; i < _CL.length; i++) {
	var checked = i == 0 ? 'checked' : ''
	_CLDOM += 
		'<p style="padding-top: 15px;" onclick="selectIt(this)">'+
			'<input type="radio" name="identity" value="'+(i+1)+'" '+checked+'>'+
			'<span>'+_CL[i]+' </span>'+
		'</p>'
}

var checkinDOM ='<div style="padding:50px 15px;text-align:center;font-size:18px;background-color:#fff;">'+
					'<div>'+
						_CLDOM+
					'</div>'+
					'<p style="margin-top:30px;">'+
						'<button style="background-color:#019687;font-size:15px;color:#fff;border:none;padding:10px 30px;" onclick="goCheckIn()">去登记</button>'+
					'</p>'+
				'</div>'

function selectIt(obj){
	obj.childNodes[0].checked = true
}

window.onload = function(){
	for(var i=0;i<uli.length;i++){
		uli[i].index = i
		uli[i].onclick = function(){
			for(var j=0;j<uli.length;j++){
				uli[j].style.cssText=''
			}
			this.style.cssText = clickStyle
			// console.log(this.index)
			if(this.type=='checkin'){
				$ID('jiajiaoList').innerHTML = checkinDOM;
			}else{				
				$AJAX(this.type)
			}
		}
	}
}

function getRadioChecked(name){
  var value="";
  var radio=document.getElementsByName(name);
  for(var i=0;i<radio.length;i++){
	if(radio[i].checked==true){
	  value=radio[i].value;
	  break;
	}
  }
  return value;
}

function goCheckIn(){
	var val = getRadioChecked('identity')
	console.log(val)
	if(val>0){
		window.location.href = 'newSubmit.html?type='+val
	}
}