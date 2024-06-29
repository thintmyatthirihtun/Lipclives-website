document.addEventListener('DOMContentLoaded', function() {
    const postWrapper = document.getElementById('post-wrapper');
    const blogTitle = document.getElementById('blog-title');
    const blogText = document.getElementById('blog-text');
    
    // Mock data for blog posts
    const posts = {
        1: { title: 'Post 1', text: 'Content for Post 1' },
        2: { title: 'Post 2', text: 'Content for Post 2' },
        3: { title: 'Post 3', text: 'Content for Post 3' },
        4: { title: 'Post 4', text: 'Content for Post 4' },
        5: { title: 'Post 5', text: 'Content for Post 5' },
        6: { title: 'Post 6', text: 'Content for Post 6' },
        7: { title: 'Post 7', text: 'Content for Post 7' },
        8: { title: 'Post 8', text: 'Content for Post 8' },
        9: { title: 'Post 9', text: 'Content for Post 9' },
        10: { title: 'Post 10', text: 'Content for Post 10' },
        11: { title: 'Post 11', text: 'Content for Post 11' },
    };

    // Handle post click events
    postWrapper.addEventListener('click', function(e) {
        const post = e.target.closest('.post');
        if (post) {
            const postId = post.getAttribute('data-id');
            const postData = posts[postId];
            if (postData) {
                blogTitle.textContent = postData.title;
                blogText.textContent = postData.text;
                document.getElementById('blog-content').scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Mouse events for desktop
    let isDown = false;
    let startX;
    let scrollLeft;

    postWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        postWrapper.classList.add('active');
        startX = e.pageX - postWrapper.offsetLeft;
        scrollLeft = postWrapper.scrollLeft;
    });

    postWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        postWrapper.classList.remove('active');
    });

    postWrapper.addEventListener('mouseup', () => {
        isDown = false;
        postWrapper.classList.remove('active');
    });

    postWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - postWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Control scroll speed
        postWrapper.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    postWrapper.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - postWrapper.offsetLeft;
        scrollLeft = postWrapper.scrollLeft;
    });

    postWrapper.addEventListener('touchend', () => {
        isDown = false;
    });

    postWrapper.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - postWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Control scroll speed
        postWrapper.scrollLeft = scrollLeft - walk;
    });
});
