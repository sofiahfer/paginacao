const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
    "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/02/nyan-cat.gif",
    "https://i.gifer.com/XOsX.gif",
    "https://i.gifer.com/7IsB.gif",
    "https://i.pinimg.com/originals/9e/9f/dd/9e9fdd1ebe593f3adf24b829a0f5a989.gif",
    "https://i.pinimg.com/originals/80/5d/92/805d9290bf80860153c6804cc0ed2d3a.gif",
    "https://media1.tenor.com/m/5BYK-WS0__gAAAAC/cool-fun.gif",
    "https://media3.giphy.com/media/dnnrRtnXkm8U21j7Xo/100.gif",
    "https://media3.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif?cid=6c09b952z6dkgsr6x1jt4nq9gvysycwsmgh7hs3qyexd3syg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://www.inexistentman.net/wp-content/uploads/2013/08/banana.gif",
    "https://j.gifs.com/yEZdPg.gif",
    
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);