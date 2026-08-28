export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

// UPDATED: Now checks for Medal links before defaulting to YouTube
export function embed(video) {
    if (!video) return '';

    // If it's a Medal.tv link, format it for Medal's embed player
    // UPDATED MEDAL CODE
    if (video.includes('medal.tv')) {
        const parts = video.split('/');
        let clipId = parts[parts.length - 1] || parts[parts.length - 2];
        clipId = clipId.split('?')[0]; // Make sure this ends with [0] to get the clean ID
        
        // CRITICAL: Must use backticks (``) here, NOT single quotes ('') or double quotes ("")
        return `https://medal.tv{clipId}`;
}

    }

    // Default back to the standard YouTube embed path
    return `https://www.youtube.com/embed/${getYoutubeIdFromUrl(video)}`;
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
