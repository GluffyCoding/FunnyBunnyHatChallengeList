// 1. YouTube extractor (Keep your original)
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

// NEW: 2. Medal extractor (Mirrors your YouTube extractor)
export function getMedalIdFromUrl(url) {
    // Looks for /clips/ID or /clip/ID and grabs the ID before any '?' query
    return url.match(/(?:clips\/|clip\/)([a-zA-Z0-9]+)/)?.[1] ?? '';
}

// 3. The main Embed router
export function embed(video) {
    if (!video) return '';

    // If it's a Medal link, extract the clean ID and return the embed string
    if (video.includes('medal.tv')) {
        return `https://medal.tv{getMedalIdFromUrl(video)}`;
    }

    // Otherwise, default back to the YouTube embed path
    return `https://youtube.com{getYoutubeIdFromUrl(video)}`;
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
