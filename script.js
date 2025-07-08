function filterCategory(category) {
    const ads=
    document.querySelectorAll('.ad-box');
    ads.forEach(ad => {
        if (category === 'all' ||
            ad.classList.contains(category)) {
                ad.computedStyleMap.display = 'block';
            }
    });
}