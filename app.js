// Variables
var nameInput = document.getElementById("name");
var CblockInput  = document.getElementById("Cblock");
var DateInput  = document.getElementById("Date");
var PtitleInput  = document.getElementById("Ptitle");
 var whatIkInput  = document.getElementById("whatIk");
 var wiwtkInput  = document.getElementById("wiwtk");
 var wilInput  = document.getElementById("wil");
 var ppuwihlInput  = document.getElementById("ppuwihl");
 
 
//get the data 
var userInfo = JSON.parse(localStorage.getItem("userInfo"));
//console.log( userInfo);
if (userInfo) {
    nameInput.value = userInfo.name;
    CblockInput.value = userInfo.Cblock;
    DateInput.value = userInfo.Date;
    PtitleInput.value = userInfo.Ptitle;
    whatIkInput.value = userInfo.whatIk;
    wiwtkInput.value = userInfo.wiwtk;
    wilInput.value = userInfo.wil;
    ppuwihlInput.value = userInfo.ppuwihl;
}



document
.getElementById("form")
.addEventListener("submit", function (event) {
    event.preventDefault();

    
//get data from the form inputs
var name = nameInput.value.trim();
var Cblock = CblockInput.value.trim();
var Date = DateInput.value.trim();
var Ptitle = PtitleInput.value.trim();
 var whatIk = whatIkInput.value.trim();
 var wiwtk = wiwtkInput.value.trim();
 var wil = wilInput.value.trim();
 var ppuwihl = ppuwihlInput.value.trim();
 
 
//if values are invalid
if (!whatIk || !wiwtk || !wil || !ppuwihl || !name || !Cblock || !Date || !Ptitle) {
    return;
}


//save to localstorage
var userInfo = {
    name: name,
    Cblock: Cblock,
    Date: Date,
    Ptitle: Ptitle,
    whatIk: whatIk,
    wiwtk: wiwtk,
    wil: wil,
    ppuwihl:ppuwihl
};
localStorage.setItem("userInfo", JSON.stringify(userInfo));

for (let i = 0; i < localStorage.length; i++) {
    const userInfo = localStorage.userInfo[i];
    var displaydata = document.getElementById("displaydata");
    displaydata.innerHTML += `
                             <table>
                               <tbody>
                                <tr>
                                  <td>Name: </td>
                                  <td>${name}</td>
                                </tr>
                                <tr>
                                  <td>Course/Block: </td>
                                  <td>${Cblock}</td>
                                </tr>
                                <tr>
                                  <td>Date: </td>
                                  <td>${Date}</td>
                                </tr>
                                <tr>
                                  <td>Project title: </td>
                                  <td>${Ptitle}</td>
                                </tr>
                               </tbody>
                              </table>
    
                             <table>
                               <tbody>
                                <tr>
                                  <td>What I Know: </td>
                                  <td>${whatIk}</td>
                                </tr>
                                <tr>
                                  <td>What I Want to Know: </td>
                                  <td>${wiwtk}</td>
                                </tr>
                                <tr>
                                  <td>What I learned: </td>
                                  <td>${wil}</td>
                                </tr>
                                <tr>
                                  <td>Possible Projects Utilizing What I have learned: </td>
                                  <td>${ppuwihl}</td>
                                </tr>
                               </tbody>
                              </table>`
};

});
