var dataset = [
	["06-12-2020", "9.30 am - 5 pm", "Industrial Training Evaluation", "CS782", "Practical"],
	["06-12-2020", "9.30 am - 5 pm", "Project - I", "CS783", "Practical"],
	["06-12-2020", "9.30 am - 5 pm", "Group Discussion", "HU781", "Practical"],
	["08-12-2020", "9.30 am - 12.30 pm", "Artificial Intelligence Laboratory", "CS791", "Practical"],
	["08-12-2020", "2 pm - 5 pm", "Compiler Design Laboratory", "CS793", "Practical"],
	["09-12-2020", "9.30 am - 12.30 pm", "Skill Development for Professionals – VII", "GS781", "Practical"],
	["12-12-2020", "9.30 am - 12.30 pm", "Image Processing Laboratory", "CS794D", "Practical"],
	["12-12-2020", "2 pm - 5 pm", "Internet Technology Laboratory", "CS795D", "Practical"],
	
	["14-12-2020", "4 pm - 7 pm", "Artificial Intelligence", "CS701", "Theory"],
	["15-12-2020", "4 pm - 7 pm", "Cryptography & Network Security", "CS702", "Theory"],
	["16-12-2020", "4 pm - 7 pm", "Compiler Design", "CS703", "Theory"],
	["21-12-2020", "4 pm - 7 pm", "Image Processing", "CS704D", "Theory"],
	["22-12-2020", "4 pm - 7 pm", "Internet Technology", "CS705D", "Theory"],
	["23-12-2020", "4 pm - 7 pm", "Essential Studies for Professionals - VII", "GS701", "Theory"],
	["24-12-2020", "4 pm - 7 pm", "Mobile Computing", "CS706A", "Theory"]
]

$('#myTable').DataTable({
	data: dataset,
	columns: [
		{ title: "Date" },
		{ title: "Time" },
		{ title: "Paper" },
		{ title: "Paper Code" },
		{ title: "Paper Type" }
	],
	responsive: {
		details: {
			display: $.fn.dataTable.Responsive.display.childRowImmediate
		}
	},
	columnDefs: [{
		className: "dt-center",
		targets: "_all"
	}],
	searching: true,
	ordering: false,
	paging: false,
	info: false,
	dom: 'lrtip',
});

$('#searchBox').on('keyup', function () {
	$('#myTable').DataTable().search(this.value).draw();
});

$('#practical').on('click', function () {
	$('#myTable').DataTable().columns(4).search("Practical", true, false, true).draw();
});

$('#theory').on('click', function () {
	$('#myTable').DataTable().columns(4).search("Theory", true, false, true).draw();
});

document.getElementById("theory").click();