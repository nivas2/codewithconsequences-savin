const names=['NIHAL','NIVAS','PRANEETH','SAIKUMAR'];
const des=['I am a hard-working and driven individual who isnit afraid to face a challenge. I am passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesnot believe in misleading other people and tries to be fair in everything I do',
'Aspiring to work in a role where could use my skills and capabilities to prove myself. To be a part of a challenging team that strives for the organizations better growth and enhances my personal growth through continually upgrading myknowledge.',
'I would consider myself to be a very up-to-date as well as an innovative person. I’ve been looking forward to this opportunity for some time now, and I’m thrilled that you’ve shortlisted me for the interview.',
'My creativity has made me an effective team leader because I can anticipate problems and innovate solutions. My ability to work alongside other assertive individuals allows me to find balance by offering innovative, on-the-spot ideas that can help my colleagues better achieve their goals.'];
const design=['ML Engineer','Full Stack Developer','Data Scientist','Data Engineer'];
index=0;
const x = document.getElementById("button-6");
x.addEventListener('click',myfunction);

function myfunction(){
    if (index<=3){


        document.getElementById('name').innerHTML=names[index];
        document.getElementById('desc').innerHTML=des[index];
        document.getElementById('title').innerHTML=design[index];
        index=index+1;

     }
     else{
         index=0
         document.getElementById('name').innerHTML=names[index];
         document.getElementById('desc').innerHTML=des[index];
         document.getElementById('title').innerHTML=design[index];

     }



}
const y = document.getElementById("button-7");
y.addEventListener('click',myfunction1);
function myfunction1(){
    if (index>=0 ){


        document.getElementById('name').innerHTML=names[index];
        document.getElementById('desc').innerHTML=des[index];
        document.getElementById('title').innerHTML=design[index];
        index=index-1;

     }
     else{
         index=3
         document.getElementById('name').innerHTML=names[index];
         document.getElementById('desc').innerHTML=des[index];
         document.getElementById('title').innerHTML=design[index];

     }

}
document.getElementById('name').innerHTML=names[0];
document.getElementById('desc').innerHTML=des[0];
document.getElementById('title').innerHTML=design[0];
