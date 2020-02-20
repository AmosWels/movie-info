$(document).ready(()=>{
    $('#searchForm').on('submit', (e) =>{
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    })
});

function getMovies(searchText){
    http://www.omdbapi.com/?i=tt3896198&apikey=bfe56cd
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=bfe56cd=='+searchText)
        .then((Response)=>{
            console.log(Response)
        })
        .catch((err)=>{
            console.log(err)
        })
}