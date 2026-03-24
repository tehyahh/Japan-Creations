// --- MOVIE DATABASE ---
const movieData = [
    {
        title: "Mary and the Witch's Flower",
        director: "Hiromasa Yonebayashi",
        studio: "Studio Ponoc",
        tags: ["Magic", "Adventure", "Fantasy", "Family"],
        motto: "A magical adventure for just one night.",
        desc: "Mary is a young girl spending a boring summer in the country. One day, she follows a cat into the woods and finds a rare, magical flower. This flower gives her witch powers for just one night! She flies a broomstick to a secret magic school, but soon finds out the teachers are hiding a dark secret about dangerous magic experiments. This was the very first movie made by Studio Ponoc!",
        trailer: "trailer1.mp4" // Added Trailer Link
    },
    {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        studio: "Studio Ghibli",
        tags: ["Action", "Fantasy", "Mythology", "Award Winning"],
        motto: "Live to protect the forest.",
        desc: "A young prince named Ashitaka gets cursed by a demon and has to travel far from home to find a cure. On his journey, he gets caught in a huge war. On one side are humans who want to cut down the forest to build their town. On the other side are the giant animal gods of the forest, led by San—a tough girl raised by wolves who wants to protect nature.",
        trailer: "trailer2.mp4"
    },
    {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        studio: "Studio Ghibli",
        tags: ["Romance", "Magic", "Adventure", "Fantasy"],
        motto: "A heart is a heavy burden.",
        desc: "Sophie is a quiet girl who works in a hat shop. An evil, jealous witch curses Sophie, turning her into an old woman! Too embarrassed to tell anyone, Sophie runs away and finds a job cleaning a giant, walking, magical castle. The castle belongs to a handsome wizard named Howl. Together with a fire demon, they try to break her curse while a big war starts around them.",
        trailer: "trailer3.mp4"
    },
    {
        title: "Ponyo",
        director: "Hayao Miyazaki",
        studio: "Studio Ghibli",
        tags: ["Family", "Magic", "Ocean", "Wholesome"],
        motto: "Welcome to a world of magic and waves.",
        desc: "Ponyo is a magical goldfish who sneaks away from her underwater home and meets a five-year-old human boy named Sosuke. They become best friends, and Ponyo uses her magic to turn into a human girl. But her strong magic accidentally causes a huge storm. Now, the two kids have to fix the world before the ocean floods everything.",
        trailer: "trailer4.mp4"
    },
    {
        title: "That Time I Got Reincarnated as a Slime",
        director: "Yasuhito Kikuchi",
        studio: "8bit",
        tags: ["Isekai", "Fantasy", "Action", "Comedy"],
        motto: "Building a peaceful world, one slime bounce at a time.",
        desc: "A normal guy from Tokyo dies in an accident and wakes up in a fantasy world. But instead of being a cool hero, he's just a weak little slime! Luckily, he has a special power to eat anything and copy its abilities. He takes the name Rimuru Tempest and starts making friends with dragons, goblins, and wolves to build a peaceful town for all monsters.",
        trailer: "trailer5.mp4"
    },
    {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        studio: "Studio Ghibli",
        tags: ["Family", "Slice of Life", "Spirits", "Classic"],
        motto: "Magic is all around us if we just look.",
        desc: "Two young sisters, Satsuki and Mei, move to an old house in the countryside to be closer to their sick mother's hospital. While exploring outside, they find out the forest is full of friendly, invisible spirits. They meet a giant, fluffy creature they name Totoro. Totoro takes them on magical adventures and helps them stay happy while they worry about their mom.",
        trailer: "trailer6.mp4"
    },
    {
        title: "Violet Evergarden",
        director: "Taichi Ishidate",
        studio: "Kyoto Animation",
        tags: ["Drama", "Emotional", "Romance", "Masterpiece"],
        motto: "Writing letters to learn what 'I love you' means.",
        desc: "Violet is a young girl who was raised only to be a soldier in a terrible war. Now that the war is over, she has metal arms and doesn't know what to do with her life. Her boss's last words to her were 'I love you,' but she doesn't know what that means. To find out, she gets a job writing letters for other people, learning about human feelings along the way.",
        trailer: "trailer7.mp4"
    },
    {
        title: "Your Name",
        director: "Makoto Shinkai",
        studio: "CoMix Wave Films",
        tags: ["Romance", "Sci-Fi", "Drama", "Global Hit"],
        motto: "I'm always searching for something, a person, or a place.",
        desc: "Mitsuha is a girl in a quiet country town, and Taki is a boy living in busy Tokyo. One day, they start magically swapping bodies when they go to sleep! They have to leave each other notes to figure out what's going on. They slowly fall in love, but when they try to finally meet in real life, they discover a shocking secret about time and a falling comet.",
        trailer: "trailer8.mp4"
    },
    {
        title: "Colorful Stage",
        director: "SEGA",
        studio: "Craft Egg",
        tags: ["Music", "Drama", "Idols", "Coming of Age"],
        motto: "Find your true feelings through the power of music.",
        desc: "A group of teenagers in Tokyo are dealing with normal high school problems, stress, and trying to follow their dreams. They find a mysterious song on their phones that transports them to a magical, virtual world called 'Sekai.' There, they meet famous virtual singers like Hatsune Miku, who help them face their real-life problems through the power of music and friendship.",
        trailer: "trailer9.mp4"
    },
    {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        studio: "Studio Ghibli",
        tags: ["Magic", "Slice of Life", "Growing Up", "Classic"],
        motto: "Finding your own inspiration in a big new city.",
        desc: "Kiki is a 13-year-old witch. In her family, witches have to leave home for a year to learn how to live on their own. She flies to a beautiful new city by the sea with her talking black cat, Jiji. Since her only magic power is flying, she starts a delivery business. But growing up is hard, and Kiki has to learn how to believe in herself when things get tough.",
        trailer: "trailer10.mp4"
    }
];

const cards = document.querySelectorAll('.card');
let currentIndex = 4;

function updateCarousel() {
    const totalCards = cards.length;
    const half = Math.floor(totalCards / 2);

    cards.forEach((card, index) => {
        let offset = index - currentIndex;
        if (offset > half) offset -= totalCards;
        if (offset < -half) offset += totalCards;

        const absOffset = Math.abs(offset);
        
        let translateX = (offset * 180) + (Math.sign(offset) * 60);
        let scale = 1 - (absOffset * 0.15);
        let opacity = 1 - (absOffset * 0.3);
        let zIndex = 100 - absOffset;

        card.style.transform = `translateX(${translateX}px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
        card.style.pointerEvents = absOffset > 2 ? 'none' : 'auto';

        if (offset === 0) {
            card.classList.add('is-center');
            const img = card.querySelector('img').src;
            document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${img})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
        } else {
            card.classList.remove('is-center');
        }
    });
}

function selectCard(index) {
    if (index === currentIndex) {
        openModal(index);
    } else {
        currentIndex = index;
        updateCarousel();
    }
}

// --- MODAL & VIDEO LOGIC ---
const modalOverlay = document.getElementById('modal-overlay');
const modalPoster = document.getElementById('modal-poster');
const modalTrailer = document.getElementById('modal-trailer');
const watchBtn = document.getElementById('watch-trailer-btn');

function openModal(index) {
    const data = movieData[index]; 
    const posterSrc = cards[index].querySelector('img').src;
    
    // Set poster and text
    modalPoster.src = posterSrc;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-meta').innerHTML = `<b>Director:</b> ${data.director} | <b>Studio:</b> ${data.studio}`;
    document.getElementById('modal-motto').innerText = `"${data.motto}"`;
    document.getElementById('modal-desc').innerText = data.desc;
    
    // Load the correct trailer video file
    modalTrailer.src = data.trailer;
    
    // Make sure the image is showing and video is hidden when it opens
    modalPoster.style.display = 'block';
    modalTrailer.style.display = 'none';

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = ''; 
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    modalOverlay.classList.add('active');
}

// Play Video Button Event
watchBtn.addEventListener('click', () => {
    modalPoster.style.display = 'none';    // Hide poster
    modalTrailer.style.display = 'block';  // Show video
    modalTrailer.play();                   // Start playing
});

function closeModal() {
    modalOverlay.classList.remove('active');
    modalTrailer.pause();                  // Stop video from playing in background
    modalTrailer.currentTime = 0;          // Rewind video to start
}

modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) closeModal();
});

// Search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) return;
    cards.forEach((card, i) => {
        const title = card.querySelector('img').alt.toLowerCase();
        if (title.includes(val)) {
            currentIndex = i;
            updateCarousel();
        }
    });
});

updateCarousel();
