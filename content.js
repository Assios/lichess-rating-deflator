function deflate(rating) {
    let strippedRating = rating.endsWith('?') ? rating.length - 1 : rating.length;

    if (strippedRating === 3) {
        return rating.slice(0, 1) + '.' + rating.slice(1);
    } else {
        return rating.slice(0, 2) + '.' + rating.slice(2);
    }
}

document.querySelectorAll('a').forEach(aTag => {
    const match = aTag.textContent.match(/\((\d{3,4}\??)\)/);
    if (match) {
        const rating = match[1];
        aTag.textContent = aTag.textContent.replace(rating, deflate(rating));
    }
});

document.querySelectorAll('rating, rating strong, span.rating').forEach(element => {
    if (/^\s*\d{3,4}\??\s*$/.test(element.textContent)) {
        element.textContent = " " + deflate(element.textContent.trim());
    }
});

document.querySelectorAll('.user-top *').forEach(element => {
    if (/^\s*\d{3,4}\s*$/.test(element.textContent)) {
        element.textContent = " " + deflate(element.textContent.trim());
    }
});
