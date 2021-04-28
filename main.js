var name_of_students_array=[];
function submit(){
for(var j=1; j<=4; j++){
    var name_of_students=document.getElementById("name_of_the_student_"+j).value;
    name_of_students_array.push(name_of_students);
}
var array_length=name_of_students_array.length;
var dispay_array=[];
for(var i=0; i<array_length; i++){
dispay_array.push("<h4>name-"+name_of_students_array[i]+"</h4>");
console.log(dispay_array);
}
document.getElementById("display_name_with_commas").innerHTML=dispay_array;
var remove_commas=dispay_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_students_array.sort();
    var array_length=name_of_students_array.length;
var dispay_array=[];
for(var i=0; i<array_length; i++){
dispay_array.push("<h4>name-"+name_of_students_array[i]+"</h4>");
console.log(dispay_array);
}
var remove_commas=dispay_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}