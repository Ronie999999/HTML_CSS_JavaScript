// window.onload=function () {

var year, month, date, hour, min, second, audio;
    // alert(audio);
var is_set = false;
setInterval(function () {
    if (is_set === true) {
        wait();
    }
},1000);

setInterval("document.getElementById('datetime').innerHTML=new Date().toLocaleString();", 1000);

function wait() {
        var DATE = new Date();
        var sys_year = DATE.getFullYear();
        var sys_month = (DATE.getMonth() + 1);
        var sys_date = DATE.getDate();
        var sys_hour = DATE.getHours();
        var sys_min = DATE.getMinutes();
        var sys_second = DATE.getSeconds();
        if (sys_second === Number(second) && sys_min === Number(min) && sys_hour === Number(hour) &&
        sys_year === Number(year) && sys_date === Number(date) && sys_month === Number(month)) {
            audio=document.getElementById('myaudio');
            audio.play();
        }
}
function set() {
    document.getElementById("_container").style.display = 'block';
}
function cancel() {
    document.getElementById("_container").style.display = 'none';
}
function shut_down() {
    is_set=false;
    audio.pause();
    audio.load();
}
function Done() {
    try {
        var value_all = document.getElementById("_input").value;
        var valueOfInput = value_all.split(' ');
        var temp = valueOfInput[0].split("/");
        year = temp[0];
        month = temp[1];
        date = temp[2];
        // alert(year+month+date);
        temp = valueOfInput[1].split(":");
        hour = temp[0];
        min = temp[1];
        second = temp[2];
        // alert(year+month+date+hour+min+second);
    }
    catch (e) {
        alert("输入格式错误");
        location.reload();
    }
    check_time(year,month,date,hour,min,second);
    is_set = true;
    document.getElementById('date').innerHTML=year+"/"+month+"/"+date+"  "+hour+":"+min+":"+second;
    document.getElementById("_container").style.display = 'none';
}


function check_time(i_year, i_month, i_date, i_hour, i_min, i_second) {
    i_min = Number(i_min);i_second= Number(i_second);i_hour = Number(i_hour);
    var date = new Date(i_year, i_month - 1, i_date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if ( year.toString() !== i_year || month.toString() !== i_month || day.toString() !== i_date){
        alert("非法时间");
        location.reload();
    }
    if ((i_min>59 ||i_min<0) || (i_hour>23 || i_hour<0) || (i_second > 59 || i_second<0) || (i_month>12||i_month<1)) {
        alert("非法时间");
        location.reload();
    }
}
// };

