function getElementsEndWithId(id) {
	var children = document.body.getElementsByTagName('*');
	var elements = [], child;
	for (var i = 0, length = children.length; i < length; i++) {
			child = children[i];
			if (child.id.substr(3, 2 + id.length) == id || child.id.substr(4, 3 + id.length) == id)
					elements.push(child);
	}
	return elements;
}

function evaluate(elements) {
	for (var i = 0, length = elements.length; i < length; i++) {
			elements[i].checked = true;
	}
}

function main(id) {
	evaluate(getElementsEndWithId(id));
	var merit_rate = 5; //0-5
	var merit = "课程特色鲜明，知识量适当，组织严密，概念清晰，逻辑性强。"; //at least 15 characters
	var flaw = "希望增加互动环节，降低课程作业难度。";
	var suggest = "课程内容选择是否合理，层次是否分明，知识点是否实用等。";
	document.getElementById('rateit-range-2').setAttribute("aria-valuenow", 5);
	document.getElementById('backing4').value = merit_rate;
	document.getElementsByClassName('rateit-selected')[0].style = 'height: 32px; width: 160px; display: block;';
	document.getElementById('merit').value = merit;
	document.getElementById('flaw').value = flaw;
	document.getElementById('suggest').value = suggest;
	document.getElementById("sb1").click();
}

main(document.getElementsByClassName('required')[0].value)
