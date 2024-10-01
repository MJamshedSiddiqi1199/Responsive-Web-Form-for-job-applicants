document
  .getElementById("jobApplicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const resumeInput = document.getElementById("resume");
    const resume = resumeInput.files[0];
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const validExtensions = ["pdf", "docx", "doc"];
    const resumeExtension = resume.name.split(".").pop().toLowerCase();
    if (!validExtensions.includes(resumeExtension)) {
      alert("Invalid resume format. Only PDF, DOC, or DOCX allowed.");
      return;
    }

    const formData = new FormData(
      document.getElementById("jobApplicationForm")
    );
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("Form Data:", formObject);

    let table = document.getElementById("dataTable");

    if (!table) {
      table = `<table id="dataTable" border="1" cellpadding="10" cellspacing="0" style="width:100%">
                    <tr><th>Field</th><th>Value</th></tr>`;
      document.getElementById("Appdata").innerHTML = table;
    }

    let newRow = "";
    for (const [key, value] of Object.entries(formObject)) {
      newRow += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }

    newRow += `<tr><td colspan="2" style="border-top: 6px solid black;"></td></tr>`;

    document.getElementById("dataTable").innerHTML += newRow;

    document.getElementById("jobApplicationForm").reset();
  });
