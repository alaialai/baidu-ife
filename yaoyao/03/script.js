(function() {
	var student=document.getElementById("student"),
	non_student=document.getElementById("non_student"),
	for_student=document.getElementById("for_student"),
	for_non_student=document.getElementById("for_non_student"),
	province=document.getElementById("province"),
	school=document.getElementById("school");
	init();



	function showSchool() {
		var schoolName = [
			["北京邮电大学","北京大学","清华大学","北京航空航天大学","北京交通大学","北京理工大学","北京科技大学"],
			["南开大学","天津大学","天津科技大学","天津工业大学","中国民航大学","天津理工大学","天津农学院"],
			["复旦大学","同济大学","上海交通大学","华东理工大学","上海理工大学","上海海事大学","东华大学"],
			],
		proSchool=schoolName[province.selectedIndex-1];
		school.length=1;
		for (var i = 0; i < proSchool.length; i++) {
			school[i+1]=new Option(proSchool[i],proSchool[i]);
		}
	}

	function studentForm() {
		for_student.style.display="block";
		for_non_student.style.display="none";
	}

	function non_studentForm() {
		for_student.style.display="none";
		for_non_student.style.display="block";
	}

	function init() {
		student.onclick=studentForm;
		non_student.onclick=non_studentForm;
		province.onchange=showSchool;
	}

})();