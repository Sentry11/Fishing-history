import example from '../image/example.jpg'
import personalPhotoTabs from '../image/iam/mainphoto.jpg'
import singlephoto from '../image/iam/singlePhoto.jpg'
import imgrod from '../image/iam/imgrod.jpg'
import imgvehicle1 from '../image/iam/imgvehicle1.jpg'
import wwChkalovka from '../image/iam/wwChkalovka.jpg'
import wwKirovograd from '../image/iam/wwKirovograd.jpg'
import wwZaselom6 from '../image/iam/wwZaselom6.jpg'
import myfeeder from '../image/iam/myfeeder.jpg'
import myhook from '../image/iam/myhook.jpg'
import wwZa8 from '../image/iam/wwZa8.jpg'
import ww8scaly from '../image/iam/ww8scaly.jpg'
import wwZa6 from '../image/iam/wwZa6.jpg'
import wwZa8trio from '../image/iam/wwZa8trio.jpg'

//////////////////////////////////////////////
        //Ilyxa//
import ilyxafront from './../image/ilyxa/ilyxafront.jpg'

////////////////////////////////////////
           //Vados//
 import vadosfront from './../image/vados/vadosfront.jpg'    
 import vadossingle from './../image/vados/vadossingle.jpg'    

///////////////////////////////////////////////////////////
                //    Skills    //

import strong from '../image/skills-png/strong.png'
import highquality from '../image/skills-png/high-quality.png'
import speedometer from '../image/skills-png/speedometer.png'
import idea from '../image/skills-png/idea.png'
import networking from '../image/skills-png/networking.png'
import head from '../image/skills-png/head.png'
import hands from '../image/skills-png/hands.png'
import mobility from '../image/skills-png/mobility.png'
import hand from '../image/skills-png/hand.png'
import wait from '../image/skills-png/wait.png'
import canfishing from '../image/skills-png/canfishing.png'
import fishingrod from '../image/skills-png/fishing-rod.png'
import speak from '../image/skills-png/speak.png'
import aproach from '../image/skills-png/aproach.png'
import running from '../image/skills-png/running.png'


const skills = [
    {name: 'Сила',
     img : strong},
    {name: 'Ловкость',
    img : speedometer},
    {name: 'Быстра подсечка',
    img : running},
    {name: 'Комунникабельность',
    img : networking},
    {name: 'Смышленость',
    img : idea},
    {name: 'Голова',
    img : head},
    {name: 'Вождение',
    img : hands},
    {name: 'Мобильность',
    img : mobility},
    {name: 'Прями рукы',
    img : hand},
    {name: 'Терпимость',
    img : wait},
    {name: 'Вмить подсекты',
    img : running},
    {name: 'Достать рыбу',
    img : fishingrod},
    {name: 'Договорыться',
    img : speak},
    {name: 'Неорденарный подход',
    img : aproach},

]




//////////////////////////////////////////////////////////////////////
                   //     Teamplate   //
// {
//     id: 1,
//     name: '',
//     personalPhotoTabs: '',
//     about: '',
 //    about1: '',
 //    about2: '',
//     singlePhoto: '',
//     singleNum: '',
//     singleName: '', // для рыбацкой клички 
//     imgRod: '',
//     imgHook:'',
//     imgFeeder:'',
//     imgVehicle1:'',
//     imgVehicle2:'',
//     imgVehicle3:'',
//     wherewas: [
//          {
//            img : '',
//            desc: ''
//                 },   
//          ],
//     skills:[
//       {name: 'Сила',
//        img : strong},
//     ]
// },



const fishermen = [
{
    id: 0,
    name: 'Главный',
    personalPhotoTabs: personalPhotoTabs,
    about: 'Продвинутый рыбак',
    about1: 'С рыбалкой познакомился довольно поздно',
    about2: 'Первая рыбалка была на ближнюю удочку. При первой подсечке количество доставаемой рыбы равнялось х2 как впрочем и втечении всей последующей рыбалки',
    singlePhoto: singlephoto,
    singleNum: 21,
    singleName: 'Владислав  "Сыльна подсечка"  Таряник', // 
    imgRod: imgrod,
    imgHook: myhook,
    imgFeeder:myfeeder,
    imgVehicle1:imgvehicle1,
    imgVehicle2:'1',
    imgVehicle3:'1',
    wherewas: [
        {img: wwChkalovka,
        desc: 'Чкаловка - зима'},

        {img: wwKirovograd,
        desc: 'Кировоград - канава'},

        {img: wwZa8,
        desc: '8-й За мостом'},

        {img: wwZaselom6,
        desc: '6-й  '},

         {img: ww8scaly,
        desc: '8-й скалы  '},

        {img: wwZa8trio,
        desc: 'за 8-м заричок'},

        {img: wwZa6,
        desc: 'за 6-м'},
       
        
    ],
    skills:[
        {name: 'Сила',
        img : strong},
        {name: 'Ловкость',
        img : running},
       {name: 'Быстра подсечка',
       img : speedometer},
       {name: 'Комунникабельность',
       img : networking},
       {name: 'Смышленость',
       img : idea},
       {name: 'Голова',
       img : head},
       {name: 'Вождение',
       img : hands},
       {name: 'Мобильность',
       img : mobility},
       {name: 'Прями рукы',
       img : hand},
       {name: 'Терпимость',
       img : wait},
       {name: 'Вмить подсекты',
       img : canfishing},
       {name: 'Достать рыбу',
       img : fishingrod},
       {name: 'Договорыться',
       img : speak},
       {name: 'Неорденарный подход',
       img : aproach},
      ]
},
{
    id: 1,
    name: 'Волговска ресора',
    personalPhotoTabs: ilyxafront,
    about: 'Знающий рыбак',
    about1: 'С рыбалкой познакомился довольно поздно',
    about2: 'Первая рыбалка была на ближнюю удочку. При первой подсечке количество доставаемой рыбы равнялось х2 как впрочем и втечении всей последующей рыбалки',
    singlePhoto: example,
    singleNum: 24,
    singleName: 'Илья "Убийца карася" Чуплый',
    imgRod: '7',
    imgHook:'8',
    imgFeeder:'9',
    imgVehicle1:'1',
    imgVehicle2:'1',
    imgVehicle3:'1',
    wherewas: [
        {img: example,
        desc: 'Descrition 0'},
        {img: example,
        desc: 'Descrition 01'},
        {img: example,
        desc: 'Descrition 02'},
    ],
    skills:[
    {name: 'Комунникабельность',
    img : networking},
    {name: 'Смышленость',
    img : idea},
    {name: 'Вмить подсекты',
    img : canfishing},
    {name: 'Достать рыбу',
    img : fishingrod},
    {name: 'Договорыться',
    img : speak},
    {name: 'Неорденарный подход',
    img : aproach},
      ]
},
{
    id: 2,
    name: 'Боров',
    personalPhotoTabs: vadosfront,
    about: 'Професионал',
    singlePhoto: vadossingle,
    singleNum: 23,
    singleName: '123132',
    imgRod: '7',
    imgHook:'8',
    imgFeeder:'9',
    imgVehicle1:'1',
    imgVehicle2:'1',
    imgVehicle3:'1',
    wherewas: [
        {img: example,
        desc: 'Descrition 0'},
        {img: example,
        desc: 'Descrition 01'},
        {img: example,
        desc: 'Descrition 02'},
    ],
    skills:[
        {name: 'Сила',
        img : strong},
       {name: 'Ловкость',
       img : highquality},
       {name: 'Быстра подсечка',
       img : speedometer},
       {name: 'Комунникабельность',
       img : networking},
       {name: 'Смышленость',
       img : idea},
       {name: 'Голова',
       img : head},
       {name: 'Вождение',
       img : hands},
       {name: 'Мобильность',
       img : mobility},
     
       {name: 'Терпимость',
       img : wait},
      ]
},

]




export {fishermen}