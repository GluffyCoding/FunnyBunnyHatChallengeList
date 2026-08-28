// https://stackoverflow.com
export function getYoutubeIdFromUrl(url) {
    return url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

/**
 * Extracts everything up to the clip ID, preserving the game category path.
 * Example input: https://medal.tv...
 * Example output: games/geometry-dash/clip/np8I1bBEgV8Y1xJZo
 */
export function getMedalPathFromUrl(url) {
    // 1. Matches everything from 'games/' up to the end of the ID
    // 2. Automatically converts plural 'clips' to singular 'clip' required for player
    const match = url.match(/(games\/[\w-]+)\/clips\/([a-zA-Z0-9]+)/);
    if (match) {
        return `${match[1]}/clip/${match[2]}`;
    }
    
    // Fallback if the link didn't include a game category path
    const fallbackId = url.match(/(?:clips|clip)\/([a-zA-Z0-9]+)/);
    return fallbackId ? `clip/${fallbackId[1]}` : '';
}

/**
 * Automatically detects the platform and outputs a secure player source
 */
export function embed(video) {
    if (!video) return '';

    if (video.includes('medal.tv')) {
        const path = getMedalPathFromUrl(video);
        return path ? `https://medal.tv{path}` : '';
    }

    if (video.includes('youtube.com') || video.includes('youtu.be')) {
        const id = getYoutubeIdFromUrl(video);
        return id ? `https://youtube.com{id}` : '';
    }

    return '';
}
