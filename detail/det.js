var xhr_origin = 'https://api.6h5.cn/sun'
if(window.location.href.indexOf('hsdjj.')==-1){
	xhr_origin = 'http://localhost:9581'
}
function $ID(a) {
	return document.getElementById(a)
}

function GetRequest() { 
	var url = window.location.search; //获取url中"?"符后的字串 
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
var params = GetRequest();
console.log('params:',params)


function $AJAX(params){
	var list = []
	var _xhr = new XMLHttpRequest();
	_xhr.open('get',xhr_origin+'/jiajiao/v1/detail/'+params.type+'/'+params.id);
	_xhr.send();
	_xhr.onreadystatechange = function () {
		if (_xhr.readyState==4 &&_xhr.status==200) {
			_res = JSON.parse(_xhr.responseText)
			console.log(_res)
			if(_res.detail && _res.detail.id>0){
				_listRender(_res.detail,params.type)
			}
		}
	}
}


function _listRender(detail,type){
	console.log('type:'+type)
	var listDOM = '<div>';

	var el = detail;
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

	$ID('jiajiaoDetail').innerHTML = listDOM;
}


$AJAX(params)

