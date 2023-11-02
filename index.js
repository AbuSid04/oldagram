const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts-el")

function render(){
    for (let i = 0; i < posts.length; i++) {
         postsEl.innerHTML += `
                        <section class="user2-info">
                            <img class="user2-avatar-logo" src="${posts[i].avatar}" alt="avatar of ${posts[i].name}">
                            <div class="user2-name">
                                <h2>${posts[i].name}</h2>
                                <h3>${posts[i].location}</h3>
                            </div>
                        </section>

                        <section class="posted-img">
                            <img src="${posts[i].post}" alt="potrait of ${posts[i].name}">
                        </section>

                        <section class="post-interactions">
                            <div class="interaction-logo">
                                <img src="images/icon-heart.png" alt="logo of like">
                                <img src="images/icon-comment.png" alt="logo of comment">
                                <img src="images/icon-dm.png" alt="logo of share">
                            </div>
                            <h3><span class="bold-text">${posts[i].likes} likes</span></h3>
                            <h3><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</h3>
                        </section>
                    `
    }
}

render()