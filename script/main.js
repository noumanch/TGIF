var statistics = {
  "Democrats": [],
  "Republicans": [],
  "Independents": [],
  "name": "",
  "novotemissed": "",
  "pervotemissed": ""
}

function callingAllFunction() {
  createTable();
  //  membersInEachParty()
}
callingAllFunction()

function createTable() {
  let membersData = data.results[0].members;
  for (i = 0; i < membersData.length; i++) {
    var name = membersData[i].first_name + " " + membersData[i].last_name;
    var party = membersData[i].party;
    var state = membersData[i].state;
    var percentOfVote = membersData[i].votes_with_party_pct + "%";
    var year = membersData[i].seniority;

    let mainDiv = document.getElementById("senate-data");
    let tr = document.createElement('tr');
    mainDiv.append(tr)

    switch (data.results[0].members[i].party) {
      case "D":
        statistics.Democrats.push(data.results[0].members[i])
        break;
      case "R":
        statistics.Republicans.push(data.results[0].members[i])
        break;
      case "I":
        statistics.Independents.push(data.results[0].members[i])
    }

    let nametd = document.createElement('td');
    nametd.innerHTML = name;
    tr.append(nametd);
    let partytd = document.createElement('td');
    partytd.innerHTML = party;
    tr.append(partytd);
    let statetd = document.createElement('td');
    statetd.innerHTML = state;
    tr.append(statetd);
    let yeartd = document.createElement('td');
    yeartd.innerHTML = year;
    tr.append(yeartd);
    console.log(yeartd)
    let percenttd = document.createElement('td');
    percenttd.innerHTML = percentOfVote;
    tr.append(percenttd);

    console.log(statistics)

  }
}

function createfilter() {

  var allDems = document.getElementById(congress).rows;

  var currentstate = document.getElementById("state-filter").value;
  var checkedCbx = getCheckboxes();
  for (var i = 0; i < allDems.length; i++) {
    console.log(checkedCbx)
    if ((checkedCbx.includes(allDems[i].classList[0]) || checkedCbx.length == 0) && (currentstate == (allDems[i].classList[2]) || currentstate == "")) {
      allDems[i].style.display = "table-row";
    } else {
      allDems[i].style.display = "none";
    }
  }

}

function getCheckboxes() {
  var checks = [];
  var checkboxes = document.getElementsByClassName("getinfo");
  var testarray = Array.prototype.slice.call(checkboxes)
  for (var i = 0; i < testarray.length; i++) {
    if (testarray[i].checked) {
      checks.push(testarray[i].value)
    }
  }
  return checks;
}