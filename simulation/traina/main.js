function navNext1()

{

document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";

 document.getElementById("title1").innerHTML="Energy Harvesting Stage";

document.getElementById("train1").style.visibility="visible";
document.getElementById("train1").style.animation="mymove 8s 1";
setTimeout(function()
{document.getElementById("battryfill").style.animation="battryfill 6.5s forwards";
},1000);


setInterval(function() {
$('#g4').attr('src', 'images/platered.png');

$('#y_wr4').attr('src', 'images/wr4.png');

}, 1000);

setInterval(function() {
$('#g4').attr('src', 'images/plategreen.png');
$('#y_wr4').attr('src', 'images/w4.png');
}, 1500);

setTimeout(function()
{ 
document.getElementById("g4").style.visibility="hidden";
document.getElementById("g4_vis").style.visibility="visible";

document.getElementById("y_wr4").style.visibility="hidden";
document.getElementById("y_wr4_vis").style.visibility="visible";

},4000);

/////////////////////////////////////////////////////////////////////////////

setInterval(function() {

$('#g3').attr('src', 'images/platered.png');

$('#y_wr3').attr('src', 'images/wr3.png');
}, 1500);


setInterval(function() {
$('#g3').attr('src', 'images/plategreen.png');
$('#y_wr3').attr('src', 'images/w3.png');
}, 1750);

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
}, 1900);

setInterval(function() {

$('#g2').attr('src', 'images/plategreen.png');
$('#y_wr2').attr('src', 'images/w2.png');
}, 1500);

setTimeout(function()
{ 
document.getElementById("g2").style.visibility="hidden";
document.getElementById("g2_vis").style.visibility="visible";

document.getElementById("y_wr2").style.visibility="hidden";
document.getElementById("y_wr2_vis").style.visibility="visible";

},4500);
//}

////////////////////////////////////////////////////////////////////

setInterval(function() {
 $('#g1').attr('src', 'images/platered.png');

$('#y_wr1').attr('src', 'images/wr1.png');

}, 2200);


setInterval(function() {

$('#g1').attr('src', 'images/plategreen.png');
$('#y_wr1').attr('src', 'images/w1.png');
}, 1900);


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

document.getElementById("train1").style.animation="mymove1 9s 1";

setTimeout(function()
{document.getElementById("battryfill").style.animation="battryfill1 6.5s forwards";
},1000);


setInterval(function() {
$('#g4_vis').attr('src', 'images/platered.png');

$('#y_wr4_vis').attr('src', 'images/wr4.png');

}, 1000);

setInterval(function() {
$('#g4_vis').attr('src', 'images/plategreen.png');
$('#y_wr4_vis').attr('src', 'images/w4.png');
}, 1500);


setTimeout(function()
{ 
document.getElementById("g4_vis").style.visibility="hidden";
document.getElementById("g4_vis2").style.visibility="visible";

document.getElementById("y_wr4_vis").style.visibility="hidden";
document.getElementById("y_wr4_vis2").style.visibility="visible";

},4000);

/////////////////////////////////////////////////////////////////////////////


setInterval(function() {

$('#g3_vis').attr('src', 'images/platered.png');

$('#y_wr3_vis').attr('src', 'images/wr3.png');
}, 1500);


setInterval(function() {
$('#g3_vis').attr('src', 'images/plategreen.png');
$('#y_wr3_vis').attr('src', 'images/w3.png');
}, 1750);

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
}, 1900);

setInterval(function() {

$('#g2_vis').attr('src', 'images/plategreen.png');
$('#y_wr2_vis').attr('src', 'images/w2.png');
}, 1500);

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
}, 2200);


setInterval(function() {
$('#g1_vis').attr('src', 'images/plategreen.png');
$('#y_wr1_vis').attr('src', 'images/w1.png');
}, 1900);

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

},7000);
}

function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";

        document.getElementById("title1").innerHTML="Structural Health Monitoring Stage";

        

}

function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

        

}


function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";


        

}



function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas1a").style.visibility="visible";

        document.getElementById("battryfill_canvas1a").style.animation="battryfill_canvas1a 8s forwards";
        $( "#crack_span1_canvas1a" ).delay(100).fadeOut(7900);
        setTimeout(function()
        { 
          document.getElementById("red1_wire").style.visibility="hidden";
          document.getElementById("green1").style.visibility="visible";

$('#red1,#red2, #red3, #red4, #red5, #red_btm1, #red_btm2, #red_btm3, #red_btm4, #red_btm5').attr('src', 'images/sesors.png');

          document.getElementById("restrt_link").style.visibility="visible";
          document.getElementById("a2").style.visibility="visible";
        },7000);

}

function navNext8()
{
   document.getElementById("canvas8").style.visibility="hidden";

   document.getElementById("canvas9").style.visibility="visible";

}


function navNext9()
{
   document.getElementById("canvas9").style.visibility="hidden";

   document.getElementById("canvas10").style.visibility="visible";

}

function navNext10()

{

        document.getElementById("canvas10").style.visibility="hidden";

        document.getElementById("canvas2a").style.visibility="visible";

        document.getElementById("battryfill_canvas2a").style.animation="battryfill_canvas1a 8s forwards";
        $( "#crack_span2_canvas2a" ).delay(100).fadeOut(7900);
        setTimeout(function()
        { 
          document.getElementById("red2_wire").style.visibility="hidden";
          document.getElementById("green2").style.visibility="visible";

$('#red6,#red7, #red8, #red9, #red10, #red_btm6, #red_btm7, #red_btm8, #red_btm9, #red_btm10').attr('src', 'images/sesors.png');

          document.getElementById("restrt_link2").style.visibility="visible";
          document.getElementById("a2_span2").style.visibility="visible";
        },7000);

}

function navNext12()
{
   document.getElementById("canvas12").style.visibility="hidden";

   document.getElementById("canvas13").style.visibility="visible";

}


function navNext13()
{
   document.getElementById("canvas13").style.visibility="hidden";

   document.getElementById("canvas14").style.visibility="visible";

}

function navNext14()

{

        document.getElementById("canvas14").style.visibility="hidden";

        document.getElementById("canvas3a").style.visibility="visible";

        document.getElementById("battryfill_canvas3a").style.animation=" battryfill_canvas1a 8s forwards";
        $( "#crack_span3_canvas3a" ).delay(100).fadeOut(7900);
        setTimeout(function()
        { 
          document.getElementById("red3_wire").style.visibility="hidden";
          document.getElementById("green3").style.visibility="visible";

$('#red11,#red12, #red13, #red14, #red_btm11, #red_btm12, #red_btm13, #red_btm14').attr('src', 'images/sesors.png');

          document.getElementById("restrt_link3").style.visibility="visible";
          document.getElementById("a3_span3").style.visibility="visible";
        },7000);

}


function navNext16()
{
   document.getElementById("canvas16").style.visibility="hidden";

   document.getElementById("canvas17").style.visibility="visible";

}

function navNext17()
{
   document.getElementById("canvas17").style.visibility="hidden";

   document.getElementById("canvas18").style.visibility="visible";

}

function navNext18()

{

        document.getElementById("canvas18").style.visibility="hidden";

        document.getElementById("canvas4a").style.visibility="visible";

        document.getElementById("battryfill_canvas4a").style.animation="battryfill_canvas1a 8s forwards";
        $( "#crack_span4_canvas4a" ).delay(100).fadeOut(7900);
        setTimeout(function()
        { 
          document.getElementById("red4_wire").style.visibility="hidden";
          document.getElementById("green4").style.visibility="visible";

$('#red15,#red16, #red17, #red18, #red_btm15, #red_btm16, #red_btm17, #red_btm18').attr('src', 'images/sesors.png');

          document.getElementById("restrt_link4").style.visibility="visible";
          document.getElementById("a4_span4").style.visibility="visible";
        },7000);

}


function span1()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";
}

function span2()

{

        
        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";
}

function span3()

{

       
        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas12").style.visibility="visible";
}

function span4()

{

       

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas16").style.visibility="visible";
}

//////////////////////////////////////////////////////////
function sbbtn_span1()

{

 var span1_f1= document.getElementById("f1").value;

 var span1_f2= document.getElementById("f2").value;

 console.log(span1_f1);
 console.log(span1_f2);

 if(span1_f1>50 && span1_f1<220 && span1_f2>50 && span1_f2<220 )
 {
// document.getElementById("graph_span1").style.visibility="visible";
document.getElementById("dwnld_span1").style.visibility="visible";
document.getElementById("lcr_span1").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 50 to 220 kHz")
 }
}


function dwnld_span1()
{

window.location.href = "images/undamaged_data.xlsx";
document.getElementById("arrow4").style.visibility="visible";
document.getElementById("nextButton4").style.visibility="visible";

}

function reset_span1()
{

 document.getElementById("f1").value=""; 
 document.getElementById("f2").value="";  

}

function inducedamage_span1()
{
document.getElementById("crack_span1").style.visibility="visible"; 
document.getElementById("arrow5").style.visibility="visible";
document.getElementById("nextButton5").style.visibility="visible";  
}
////////////////////////////////////////////////////////////////////////

function sbbtn_span1_damaged()

{

 var span1_f1_damaged= document.getElementById("f1_damaged").value;

 var span1_f2_damaged= document.getElementById("f2_damaged").value;

 console.log(span1_f1_damaged);
 console.log(span1_f2_damaged);

if(span1_f1_damaged>50 && span1_f1_damaged<220 && span1_f2_damaged>50 && span1_f2_damaged<220 )
 {
// document.getElementById("graph_damage_span1").style.visibility="visible";
document.getElementById("lcr_span1_damaged").style.visibility="visible";
document.getElementById("dwnld_span1_damaged").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 50 to 220 kHz")
 }
}

function dwnld_span1_damaged()
{

window.location.href = "images/damaged_span1.xlsx";
document.getElementById("arrow6").style.visibility="visible";
document.getElementById("nextButton6").style.visibility="visible";

}



function reset_span1_damaged()
{

 document.getElementById("f1_damaged").value=""; 
 document.getElementById("f2_damaged").value="";  

}

function restrt_btn()
{
    location.reload();
}


// function changespan()
// {
// document.getElementById("canvas6").style.visibility="hidden";
// document.getElementById("canvas3").style.visibility="visible";
// document.getElementById("changespan_link").style.visibility="hidden";
// document.getElementById("restrt_link").style.visibility="hidden";
// document.getElementById("a1").style.visibility="hidden";
// document.getElementById("a2").style.visibility="hidden";
// document.getElementById("lcr_span1_damaged").style.visibility="hidden";
// document.getElementById("dwnld_span1").style.visibility="hidden";
// document.getElementById("nextButton5").style.visibility="hidden";
// document.getElementById("arrow5").style.visibility="hidden";

// document.getElementById("lcr_span1").style.visibility="hidden";
// document.getElementById("dwnld_span1_damaged").style.visibility="hidden";
// document.getElementById("arrow4").style.visibility="hidden";
// document.getElementById("nextButton4").style.visibility="hidden";
// }


/////////////////////////////span2/////////////////////////////
function sbbtn_span2()

{

 var span2_f1= document.getElementById("f1_span2").value;

 var span2_f2= document.getElementById("f2_span2").value;

 console.log(span2_f1);
 console.log(span2_f2);

 if(span2_f1>1 && span2_f1<250 && span2_f2>1 && span2_f2<250 )
 {
// document.getElementById("graph_span2").style.visibility="visible";
document.getElementById("dwnld_span2").style.visibility="visible";
document.getElementById("lcr_span2").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function reset_span2()
{

 document.getElementById("f1_span2").value=""; 
 document.getElementById("f2_span2").value="";  

}

function dwnld_span2()
{

window.location.href = "images/undamaged_data.xlsx";
document.getElementById("arrow8").style.visibility="visible";
document.getElementById("nextButton8").style.visibility="visible";

}



function inducedamage_span2()
{
document.getElementById("crack_span2").style.visibility="visible";
document.getElementById("arrow9").style.visibility="visible";
document.getElementById("nextButton9").style.visibility="visible";  
}

////////////////////////////////////////////////////////////////////////

function sbbtn_span2_damaged()

{

 var span2_f1_damaged= document.getElementById("f1_span2_damaged").value;

 var span2_f2_damaged= document.getElementById("f2_span2_damaged").value;

 console.log(span2_f1_damaged);
 console.log(span2_f2_damaged);

if(span2_f1_damaged>1 && span2_f1_damaged<250 && span2_f2_damaged>1 && span2_f2_damaged<250 )
 {
// document.getElementById("graph_damage_span2").style.visibility="visible";
document.getElementById("lcr_span2_damaged").style.visibility="visible";
document.getElementById("dwnld_span2_damaged").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function dwnld_span2_damaged()
{

window.location.href = "images/damaged_span2.xlsx";
document.getElementById("arrow10").style.visibility="visible";
document.getElementById("nextButton10").style.visibility="visible";

}



function reset_span2_damaged()
{

 document.getElementById("f1_span2_damaged").value=""; 
 document.getElementById("f2_span2_damaged").value="";  
}

// function changespan2()
// {
// document.getElementById("canvas10").style.visibility="hidden";
// document.getElementById("canvas3").style.visibility="visible";

// document.getElementById("changespan_link2").style.visibility="hidden";
// document.getElementById("restrt_link2").style.visibility="hidden";
// document.getElementById("a1_span2").style.visibility="hidden";
// document.getElementById("a2_span2").style.visibility="hidden";
// document.getElementById("lcr_span2_damaged").style.visibility="hidden";
// document.getElementById("dwnld_span2_damaged").style.visibility="hidden";
// document.getElementById("nextButton9").style.visibility="hidden";
// document.getElementById("arrow9").style.visibility="hidden";

// document.getElementById("lcr_span2").style.visibility="hidden";
// document.getElementById("dwnld_span2").style.visibility="hidden";
// document.getElementById("nextButton8").style.visibility="hidden";
// document.getElementById("arrow8").style.visibility="hidden";

// }
/////////////////////////////span3/////////////////////////////
function sbbtn_span3()

{

 var span3_f1= document.getElementById("f1_span3").value;

 var span3_f2= document.getElementById("f2_span3").value;

 console.log(span3_f1);
 console.log(span3_f2);

 if(span3_f1>1 && span3_f1<250 && span3_f2>1 && span3_f2<250 )
 {
// document.getElementById("graph_span3").style.visibility="visible";
document.getElementById("dwnld_span3").style.visibility="visible";
document.getElementById("lcr_span3").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function reset_span3()
{

 document.getElementById("f1_span3").value=""; 
 document.getElementById("f2_span3").value="";  

}

function dwnld_span3()
{

window.location.href = "images/undamaged_data.xlsx";
document.getElementById("arrow12").style.visibility="visible";
document.getElementById("nextButton12").style.visibility="visible";

}



function inducedamage_span3()
{
document.getElementById("crack_span3").style.visibility="visible";
document.getElementById("arrow13").style.visibility="visible";
document.getElementById("nextButton13").style.visibility="visible";  
}

////////////////////////////////////////////////////////////////////////

function sbbtn_span3_damaged()

{

 var span3_f1_damaged= document.getElementById("f1_span3_damaged").value;

 var span3_f2_damaged= document.getElementById("f2_span3_damaged").value;

 console.log(span3_f1_damaged);
 console.log(span3_f2_damaged);

if(span3_f1_damaged>1 && span3_f1_damaged<250 && span3_f2_damaged>1 && span3_f2_damaged<250 )
 {
// document.getElementById("graph_damage_span3").style.visibility="visible";
document.getElementById("lcr_span3_damaged").style.visibility="visible";
document.getElementById("dwnld_span3_damaged").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function dwnld_span3_damaged()
{
window.location.href = "images/damaged_span3.xlsx";
document.getElementById("arrow14").style.visibility="visible";
document.getElementById("nextButton14").style.visibility="visible";
}



function reset_span3_damaged()
{

 document.getElementById("f1_span3_damaged").value=""; 
 document.getElementById("f2_span3_damaged").value="";  
}

// function changespan3()
// {
// document.getElementById("canvas14").style.visibility="hidden";
// document.getElementById("canvas3").style.visibility="visible";
// document.getElementById("canvas15").style.visibility="visible";


// document.getElementById("changespan_link2").style.visibility="hidden";
// document.getElementById("restrt_link2").style.visibility="hidden";
// document.getElementById("a1_span2").style.visibility="hidden";
// document.getElementById("a2_span2").style.visibility="hidden";
// document.getElementById("lcr_span2_damaged").style.visibility="hidden";
// document.getElementById("dwnld_span2_damaged").style.visibility="hidden";
// document.getElementById("nextButton9").style.visibility="hidden";
// document.getElementById("arrow9").style.visibility="hidden";

// document.getElementById("lcr_span2").style.visibility="hidden";
// document.getElementById("dwnld_span2").style.visibility="hidden";
// document.getElementById("nextButton8").style.visibility="hidden";
// document.getElementById("arrow8").style.visibility="hidden";

// }
/////////////////////////////span4/////////////////////////////
function sbbtn_span4()

{

 var span4_f1= document.getElementById("f1_span4").value;

 var span4_f2= document.getElementById("f2_span4").value;

 console.log(span4_f1);
 console.log(span4_f2);

 if(span4_f1>1 && span4_f1<250 && span4_f2>1 && span4_f2<250 )
 {
// document.getElementById("graph_span4").style.visibility="visible";
document.getElementById("dwnld_span4").style.visibility="visible";
document.getElementById("lcr_span4").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function reset_span4()
{

 document.getElementById("f1_span4").value=""; 
 document.getElementById("f2_span4").value="";  

}

function dwnld_span4()
{

window.location.href = "images/undamaged_data.xlsx";
document.getElementById("arrow16").style.visibility="visible";
document.getElementById("nextButton16").style.visibility="visible";

}



function inducedamage_span4()
{
document.getElementById("crack_span4").style.visibility="visible";
document.getElementById("arrow17").style.visibility="visible";
document.getElementById("nextButton17").style.visibility="visible";  
}

////////////////////////////////////////
function sbbtn_span4_damaged()

{

 var span4_f1_damaged= document.getElementById("f1_span4_damaged").value;

 var span4_f2_damaged= document.getElementById("f2_span4_damaged").value;

 console.log(span4_f1_damaged);
 console.log(span4_f2_damaged);

if(span4_f1_damaged>1 && span4_f1_damaged<250 && span4_f2_damaged>1 && span4_f2_damaged<250 )
 {
// document.getElementById("graph_damage_span4").style.visibility="visible";
document.getElementById("lcr_span4_damaged").style.visibility="visible";
document.getElementById("dwnld_span4_damaged").style.visibility="visible";
 }
 else
 {

    alert("Kindly enter frequency range between 1 to 250 kHz")
 }
}

function dwnld_span4_damaged()
{
window.location.href = "images/damaged_span4.xlsx";
document.getElementById("arrow18").style.visibility="visible";
document.getElementById("nextButton18").style.visibility="visible";
}



function reset_span4_damaged()
{

 document.getElementById("f1_span4_damaged").value=""; 
 document.getElementById("f2_span4_damaged").value="";  
}

// function changespan4()
// {
// document.getElementById("canvas18").style.visibility="hidden";
// document.getElementById("canvas19").style.visibility="visible";
// }
