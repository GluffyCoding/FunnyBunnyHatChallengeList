// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

/**
 * Extracts the alphanumeric Medal clip ID.
 * Handles patterns like: /clips/ID, /clip/ID, or /games/game-name/clips/ID
 */
export function getMedalIdFromUrl(url) {
    return url.match(
        /(?:clips|clip)\/([a-zA-Z0-9]+)/
    )?.[1] ?? '';
}

/**
 * Automatically detects the platform from the URL and returns the correct embed source
 */
export function embed(video) {
    if (!video) return '';

    if (video.includes('medal.tv')) {
        const id = getMedalIdFromUrl(video);
        // Medal embed players require the singular 'clip' routing format
        return id ? `https://medal.tv{id}` : '';
    }

    if (video.includes('youtube.com') || video.includes('youtu.be')) {
        const id = getYoutubeIdFromUrl(video);
        return id ? `https://youtube.com{id}` : '';
    }

    return '';
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
