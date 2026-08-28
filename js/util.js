// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

export function embed(video) {
    if (video.includes("medal.tv")) {
        // Safe regex to extract the absolute clip ID out of any standard Medal link
        const match = video.match(/(?:clips|clip)\/(?:[^\/]+\/)?([^\/\?\#]+)/);
        const medalId = match ? match[1] : '';

        if (!medalId) return '';

        // FIX: The explicit structure required to stop the browser from throwing a 'moved permanently' error
        return `https://medal.tv{medalId}`;
    } else {
        return `https://youtube.com{getYoutubeIdFromUrl(video)}`;
    }
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
