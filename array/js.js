const  baldai = ['lempa', 'lentynos', 'sofa', 'stalas'];

// baldai.shift();
// baldai.unshift('kede');
// baldai.pop();
// baldai.push('fotelis');


// baldai [0] = 'kede-2';
// baldai[baldai.length-1] = 'fotelis-2';


baldai.splice(1,2)

for (let i = 0; i < baldai.length; i++) {
    console.log(baldai[i]);
}