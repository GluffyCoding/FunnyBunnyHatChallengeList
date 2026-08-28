// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

/**
 * Extracts the Medal clip ID from various Medal.tv URL formats
 * Handles standard clips, share links, and embed URLs
 */
export function getMedalIdFromUrl(url) {
    // Matches the 'clip/ID' pattern or 'clips/ID' pattern typical in Medal links
    return url.match(
        /(?:medal\.tv\/.*?clip\/|clips\/|embed\/)([a-zA-Z0-9_-]+)/
    )?.[1] ?? '';
}

export function embed(video, platform = 'youtube') {
    if (platform === 'medal') {
        const id = getMedalIdFromUrl(video);
        return id ? `https://medal.tv{id}` : '';
    }
    
    // Default to YouTube
    const id = getYoutubeIdFromUrl(video);
    return id ? `https://www.youtube.com/embed/${id}` : '';
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
