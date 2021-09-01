

// function navNext1()

// {

// document.getElementById("canvas1").style.visibility="hidden";

// document.getElementById("canvas3").style.visibility="visible";

// }

function navNext1()

{

document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";

document.getElementById("train1").style.visibility="visible";
document.getElementById("train1").style.animation="mymove 12s 1";
setTimeout(function()
{document.getElementById("battryfill").style.animation="battryfill 4.3s forwards";
},1200);


setInterval(function() {
$('#g4').attr('src', 'images/platered.png');

$('#y_wr4').attr('src', 'images/wr4.png');

}, 1300);

setInterval(function() {
$('#g4').attr('src', 'images/plategreen.png');
$('#y_wr4').attr('src', 'images/w4.png');
}, 2000);

setTimeout(function()
{ 
document.getElementById("g4").style.visibility="hidden";
document.getElementById("g4_vis").style.visibility="visible";

document.getElementById("y_wr4").style.visibility="hidden";
document.getElementById("y_wr4_vis").style.visibility="visible";

},2100);

/////////////////////////////////////////////////////////////////////////////

setInterval(function() {

$('#g3').attr('src', 'images/platered.png');

$('#y_wr3').attr('src', 'images/wr3.png');
}, 2000);


setInterval(function() {
$('#g3').attr('src', 'images/plategreen.png');
$('#y_wr3').attr('src', 'images/w3.png');
}, 2850);

setTimeout(function()
{ 
document.getElementById("g3").style.visibility="hidden";
document.getElementById("g3_vis").style.visibility="visible";

document.getElementById("y_wr3").style.visibility="hidden";
document.getElementById("y_wr3_vis").style.visibility="visible";
},4000);

/////////////////////////////////////////////////////////////////////////////
setInterval(function() {
$('#g2').attr('src', 'images/platered.png');

$('#y_wr2').attr('src', 'images/wr2.png');
}, 2600);

setInterval(function() {

$('#g2').attr('src', 'images/plategreen.png');
$('#y_wr2').attr('src', 'images/w2.png');
}, 3400);

setTimeout(function()
{ 
document.getElementById("g2").style.visibility="hidden";
document.getElementById("g2_vis").style.visibility="visible";

document.getElementById("y_wr2").style.visibility="hidden";
document.getElementById("y_wr2_vis").style.visibility="visible";

},4500);
// }

////////////////////////////////////////////////////////////////////

setInterval(function() {
 $('#g1').attr('src', 'images/platered.png');

$('#y_wr1').attr('src', 'images/wr1.png');

}, 3300);


setInterval(function() {

$('#g1').attr('src', 'images/plategreen.png');
$('#y_wr1').attr('src', 'images/w1.png');
}, 4000);


setTimeout(function()
{ 
document.getElementById("g1").style.visibility="hidden";
document.getElementById("g1_vis").style.visibility="visible";

document.getElementById("y_wr1").style.visibility="hidden";
document.getElementById("y_wr1_vis").style.visibility="visible";

},5500);
/////////////////////////////////////////////////////////////////////////////
setTimeout(function()
{ 

document.getElementById("train1").style.animation="mymove1 12s 1";

setTimeout(function()
{document.getElementById("battryfill").style.animation="battryfill1 4.3s forwards";
},1200);


setInterval(function() {
$('#g4_vis').attr('src', 'images/platered.png');

$('#y_wr4_vis').attr('src', 'images/wr4.png');

}, 1200);

setInterval(function() {
$('#g4_vis').attr('src', 'images/plategreen.png');
$('#y_wr4_vis').attr('src', 'images/w4.png');
}, 2000);


setTimeout(function()
{ 
document.getElementById("g4_vis").style.visibility="hidden";
document.getElementById("g4_vis2").style.visibility="visible";

document.getElementById("y_wr4_vis").style.visibility="hidden";
document.getElementById("y_wr4_vis2").style.visibility="visible";

},2100);

/////////////////////////////////////////////////////////////////////////////


setInterval(function() {

$('#g3_vis').attr('src', 'images/platered.png');

$('#y_wr3_vis').attr('src', 'images/wr3.png');
}, 2000);


setInterval(function() {
$('#g3_vis').attr('src', 'images/plategreen.png');
$('#y_wr3_vis').attr('src', 'images/w3.png');
}, 2850);

setTimeout(function()
{ 
document.getElementById("g3_vis").style.visibility="hidden";
document.getElementById("g3_vis2").style.visibility="visible";

document.getElementById("y_wr3_vis").style.visibility="hidden";
document.getElementById("y_wr3_vis2").style.visibility="visible";
},4000);

///////////////////////////////////////////////////////////////////

setInterval(function() {
$('#g2_vis').attr('src', 'images/platered.png');

$('#y_wr2_vis').attr('src', 'images/wr2.png');
}, 2600);

setInterval(function() {

$('#g2_vis').attr('src', 'images/plategreen.png');
$('#y_wr2_vis').attr('src', 'images/w2.png');
}, 3400);

setTimeout(function()
{ 
document.getElementById("g2_vis").style.visibility="hidden";
document.getElementById("g2_vis2").style.visibility="visible";

document.getElementById("y_wr2_vis").style.visibility="hidden";
document.getElementById("y_wr2_vis2").style.visibility="visible";
},4500);

///////////////////////////////////////////////////////////////////////////

setInterval(function() {
$('#g1_vis').attr('src', 'images/platered.png');

$('#y_wr1_vis').attr('src', 'images/wr1.png');
}, 3300);


setInterval(function() {
$('#g1_vis').attr('src', 'images/plategreen.png');
$('#y_wr1_vis').attr('src', 'images/w1.png');
}, 4000);

setTimeout(function()
{ 
document.getElementById("g1_vis").style.visibility="hidden";
document.getElementById("g1_vis2").style.visibility="visible";

document.getElementById("y_wr1_vis").style.visibility="hidden";
document.getElementById("y_wr1_vis2").style.visibility="visible";

document.getElementById("arrow2").style.visibility="visible";
document.getElementById("nextButton2").style.visibility="visible";

},5500);

/////////////////////////////////////////////////////////////////////////////

},5200);
}

function navNext2()

{
        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";       
}





//////////////////////////////////////////////////////////////////

function span1()

{
     document.getElementById("crack_spn1").style.visibility="visible";
     document.getElementById("green1").style.visibility="visible";

     document.getElementById("tb_spn1").style.visibility="hidden";
     document.getElementById("tb_spn2").style.visibility="hidden";
     document.getElementById("tb_spn3").style.visibility="hidden";
     document.getElementById("tb_spn4").style.visibility="hidden";

     document.getElementById("shm_span1").style.visibility="visible";

}

function span2()

{
     document.getElementById("crack_spn2").style.visibility="visible";
     document.getElementById("green2").style.visibility="visible";

     document.getElementById("tb_spn1").style.visibility="hidden";
     document.getElementById("tb_spn2").style.visibility="hidden";
     document.getElementById("tb_spn3").style.visibility="hidden";
     document.getElementById("tb_spn4").style.visibility="hidden";

     document.getElementById("shm_span2").style.visibility="visible";
}

function span3()

{
     document.getElementById("crack_spn3").style.visibility="visible";
     document.getElementById("green3").style.visibility="visible";

     document.getElementById("tb_spn1").style.visibility="hidden";
     document.getElementById("tb_spn2").style.visibility="hidden";
     document.getElementById("tb_spn3").style.visibility="hidden";
     document.getElementById("tb_spn4").style.visibility="hidden";

     document.getElementById("shm_span3").style.visibility="visible";
}

function span4()

{
     document.getElementById("crack_spn4").style.visibility="visible";
     document.getElementById("green4").style.visibility="visible";

     document.getElementById("tb_spn1").style.visibility="hidden";
     document.getElementById("tb_spn2").style.visibility="hidden";
     document.getElementById("tb_spn3").style.visibility="hidden";
     document.getElementById("tb_spn4").style.visibility="hidden";

     document.getElementById("shm_span4").style.visibility="visible";
}



// //////////////////////////////////////////////////////////

function crack1_hdn()

       {

     document.getElementById("shm_span1").style.visibility="hidden";
     document.getElementById("shm_span1_2").style.visibility="visible";

     document.getElementById("green1").style.visibility="hidden";
     document.getElementById("red1").style.visibility="visible";
     document.getElementById("can3_battryfill").style.animation="can3_battrylow 7s forwards";
     $( "#crack_spn1" ).delay(100).fadeOut(6900);

     setTimeout(function()

        { 

     document.getElementById("red1").style.visibility="hidden";
     document.getElementById("green1").style.visibility="visible";

     document.getElementById("restrt").style.visibility="visible";
     // document.getElementById("span_link").style.visibility="visible";
     document.getElementById("arw_restart").style.visibility="visible";

     // document.getElementById("can3_battryfill").style.animation="";
     // document.getElementById("can3_battryfill").style.top="445px";
     // document.getElementById("can3_battryfill").style.height="71px";


        },7000);

}

function crack2_hdn()

       {

     document.getElementById("shm_span2").style.visibility="hidden";
     document.getElementById("shm_span2_2").style.visibility="visible";

     document.getElementById("green2").style.visibility="hidden";
     document.getElementById("red2").style.visibility="visible";
     document.getElementById("can3_battryfill").style.animation="can3_battrylow 7s forwards";
     $( "#crack_spn2" ).delay(100).fadeOut(6900);

     setTimeout(function()
        { 

     document.getElementById("red2").style.visibility="hidden";
     document.getElementById("green2").style.visibility="visible";

     document.getElementById("restrt").style.visibility="visible";
     // document.getElementById("span_link").style.visibility="visible";
     document.getElementById("arw_restart").style.visibility="visible";

        },7000);

}

function crack3_hdn()

       {

     document.getElementById("shm_span3").style.visibility="hidden";
     document.getElementById("shm_span3_2").style.visibility="visible";

     document.getElementById("green3").style.visibility="hidden";
     document.getElementById("red3").style.visibility="visible";
     document.getElementById("can3_battryfill").style.animation="can3_battrylow 7s forwards";
     $( "#crack_spn3" ).delay(100).fadeOut(6900);

     setTimeout(function()
        { 

     document.getElementById("red3").style.visibility="hidden";
     document.getElementById("green3").style.visibility="visible";

     document.getElementById("restrt").style.visibility="visible";
     // document.getElementById("span_link").style.visibility="visible";
     document.getElementById("arw_restart").style.visibility="visible";

        },7000);

}

function crack4_hdn()

       {

     document.getElementById("shm_span4").style.visibility="hidden";
     document.getElementById("shm_span4_2").style.visibility="visible";

     document.getElementById("green4").style.visibility="hidden";
     document.getElementById("red4").style.visibility="visible";
     document.getElementById("can3_battryfill").style.animation="can3_battrylow 7s forwards";
     $( "#crack_spn4" ).delay(100).fadeOut(6900);

     setTimeout(function()
        { 

     document.getElementById("red4").style.visibility="hidden";
     document.getElementById("green4").style.visibility="visible";

     document.getElementById("restrt").style.visibility="visible";
     // document.getElementById("span_link").style.visibility="visible";
     document.getElementById("arw_restart").style.visibility="visible";

        },7000);

}


function restrt_btn()
{
    location.reload();
}

// function span_chng()
// {
//       document.getElementById("restrt").style.visibility="hidden";
//       document.getElementById("span_link").style.visibility="hidden"; 
//       document.getElementById("arw_restart").style.visibility="hidden";

//       document.getElementById("tb_spn1").style.visibility="visible";
//       document.getElementById("tb_spn2").style.visibility="visible"; 
//       document.getElementById("tb_spn3").style.visibility="visible";
//       document.getElementById("tb_spn4").style.visibility="visible";
      
// }








