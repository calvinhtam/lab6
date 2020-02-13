'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	// Gets the project url
	var url = "/project/" + idNumber;
	console.log("User clicked on project " + idNumber);
	console.log("Project URL: " + url);

	$.get(url, callBackFn);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function callBackFn(result) {
	console.log(result);
	var curr_id = result.id;
	console.log(curr_id);

	var projectHTML =
		'<p>' + result['title'] + '</p>' +
		'<p>' + result['date'] + '</p>' +
		'<p><img src="' + result['image'] + '" class="detailsImage">' +
		result['summary'] + '</p>';

	$('#project' + curr_id).find('.details').html(projectHTML);
}