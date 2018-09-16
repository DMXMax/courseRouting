const courses = [
    { id: 1, title: 'Angular - The Complete Guide' },
    { id: 2, title: 'Vue - The Complete Guide' },
    { id: 3, title: 'PWA - The Complete Guide' }
];


function getTitleforId(id){

    let title = "Not Found"; 


    for( let course in courses)
    {
        if(courses[course].id === id)
        {
            title = courses[course].title;
            break;
        }
    }

    return title;
}

export default courses;
export {getTitleforId}
