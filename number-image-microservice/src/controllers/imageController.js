const fs = require('fs');
const path = require('path');

class ImageController {
    constructor(defaultImagePath) {
        this.defaultImagePath = defaultImagePath;
        this.imageList = this._loadImageList();
    }

    _loadImageList() {
        try {
            const files = fs.readdirSync(this.defaultImagePath);
            return files.filter(file => {
                const fullPath = path.join(this.defaultImagePath, file);
                return fs.statSync(fullPath).isFile();
            });
        } catch (err) {
            console.error('Error reading image directory:', err);
            return [];
        }
    }

    getImagePath(number) {
        const idx = parseInt(number, 10) - 1;
        if (this.imageList[idx]) {
            return path.join(this.defaultImagePath, this.imageList[idx]);
        }
        return null;
    }

    getRandomImagePath() {
        if (this.imageList.length === 0) return null;
        const file = this.imageList[Math.floor(Math.random() * this.imageList.length)];
        return path.join(this.defaultImagePath, file);
    }

    getRandomImagePathInRange(start, end) {
        const s = Math.max(1, parseInt(start, 10));
        const e = parseInt(end, 10);
        if (
            isNaN(s) || isNaN(e) ||
            s > e ||
            s < 1 ||
            e > this.imageList.length
        ) {
            return null;
        }
        const idx = Math.floor(Math.random() * (e - s + 1)) + (s - 1);
        if (this.imageList[idx]) {
            return path.join(this.defaultImagePath, this.imageList[idx]);
        }
        return null;
    }

    listImageUrls() {
        return this.imageList.map(file => path.join(this.defaultImagePath, file));
    }
}

module.exports = ImageController;