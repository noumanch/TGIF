var localData = this.data;

function createTable() {
    let membersData = this.data.results[0].members;
            let mainDiv = document.getElementById("senate-data");
    for (i = 0; i < membersData.length; i++) {
        let tr = document.createElement('tr');
        mainDiv.append(tr)
        let name = document.createElement('td');
        tr.append(name);
        name.innerHTML = membersData[i].first_name + " " + membersData[i].last_name;
        let party = document.createElement('td');
        tr.append(party);
        party.innerHTML= membersData[i].party;
        let state = document.createElement('td');
        tr.append(state);
        state.innerHTML= membersData[i].state;
        let year = document.createElement('td');
        tr.append(year);
        year.innerHTML= membersData[i].seniority;
        let percent= document.createElement('td');
        tr.append(percent);
        percent.innerHTML=membersData[i].votes_with_party_pct + "%";
        


    }


}
createTable();
