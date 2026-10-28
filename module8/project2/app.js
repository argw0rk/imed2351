let data = [
    {
        name: "Aracely",
        age:  '43'
    },
    {
        name: "Rey",
        age: '21'
    },
    {
        name: "Renee",
        age: '2'
    },
    {
        name: "john",
        age: '76'
    },
    {
        name: "Sarah",
        age: '91'
    },
    {
        name: "Melissa",
        age: '51'
    },
    
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
     return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
    });

    info.innerHTML = details.join("\n");