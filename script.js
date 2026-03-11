function setMode(mode) {
    document.body.className = 'mode-' + mode;
    document.querySelectorAll('.btn-toggle').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function renderPosts(data) {
    const container = document.getElementById('posts-container');
    const { title, posts } = data.thread;

    document.querySelector('.thread-title').textContent = title;

    posts.forEach(post => {
        let namePart;
        if (post.name) {
            const tripIndex = post.name.indexOf('◆');
            const displayName = tripIndex >= 0
                ? post.name.slice(0, tripIndex) + `<span class="tripcode">◆${post.name.slice(tripIndex + 1)}</span>`
                : post.name;
            namePart = `<span class="hasumi">${displayName}</span>`;
        } else {
            const nameText = post.hasumi ? 'あなたのうしろに名無しさんが・・・' : 'あなたのうしろに名無しさんが･･･';
            namePart = post.hasumi ? `<span class="hasumi">${nameText}</span>` : nameText;
        }
        const sagePart = post.sage ? 'sage ' : '';
        const headerText = `${post.id} ：${namePart}：${sagePart}${post.date}`;

        const jaText = post.ja.replace(/>>(\d+)/g, '<a class="anchor">>>$1</a>');
        const deText = post.de.replace(/>>(\d+)/g, '<a class="anchor">>>$1</a>');

        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
            <div class="post-header">${headerText}</div>
            <div class="post-content">
                <span class="lang-ja">${jaText}</span>
                <div class="translation-block">DE: ${deText}</div>
            </div>`;
        container.appendChild(div);
    });
}

fetch('posts.json')
    .then(res => res.json())
    .then(renderPosts);
