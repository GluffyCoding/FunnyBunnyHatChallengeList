// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

export function embed(video) {
    if (!video) return '';

    // 1. Perfectly handle your Medal template link
    if (video.includes('medal.tv')) {
        // Extracts everything after /clips/
        const clipMatch = video.match(/clips\/([a-zA-Z0-9]+)/);
        const clipId = clipMatch ? clipMatch[1] : '';
        
        // Returns the perfect embed player source link
        return `https://medal.tv{clipId}`;
    }

    // 2. Default fallback for YouTube links
    return `https://youtube.com{getYoutubeIdFromUrl(video)}`;
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    return `https://youtube.com{id}/mqdefault.jpg`;
}

// https://stackoverflow.com
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
