function generateResume(){
let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let college =
document.getElementById("college").value;

let skills =
document.getElementById("skills").value;

let project =
document.getElementById("project").value;

document.getElementById("previewName").innerText = name;

document.getElementById("previewEmail").innerText = email;

document.getElementById("previewPhone").innerText = phone;

document.getElementById("previewCollege").innerText = college;

document.getElementById("previewSkills").innerText = skills;

document.getElementById("previewProject").innerText = project;
}

function downloadPDF(){

let resume =
document.getElementById("resume");

html2pdf().from(resume)
.save("My_Resume.pdf");
}