import example from '../image/example.jpg'

//     Teamplate
// {
//     id: 1,
//     name: '',
//     personalPhotoTabs: '',
//     about: '',
//     about2: '42',
//     singlePhoto: '',
//     singleDesc: '',
//     singleName: '', // для рыбацкой клички 
//     imgRod: '',
//     imgHook:'',
//     imgFeeder:'',
//     imgVehicle1:'',
//     imgVehicle2:'',
//     imgVehicle3:'',
//     wherewas: {
//         img: '',
//         desc: '',
//     },
//     skills:[
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//         ''
//     ]
// }



const fishermen = [
{
    id: 0,
    name: 'Влад',
    personalPhotoTabs: '3',
    about1: '4',
    about2: '42',
    singlePhoto: example,
    singleNum: 20,
    singleName: '@@@@', // 
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
        {skill: '00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '000',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
      ]
},
{
    id: 1,
    name: 'Не той',
    personalPhotoTabs: '3',
    about: '4',
    singlePhoto: example,
    singleNum: 20,
    singleName: 'asdasd',
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
        {skill: '01',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '01',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '01',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '01',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '01',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '011',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
      ]
},
{
    id: 2,
    name: 'Той',
    personalPhotoTabs: '3',
    about: '4',
    singlePhoto: example,
    singleNum: 20,
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
        {skill: '02',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '02',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '02',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '02',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '02',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
        {skill: '022',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR9F9u4ugYdzDusKf_8QAJLrz98KJ9NCfUA&usqp=CAU'},
      ]
}

]

export {fishermen}