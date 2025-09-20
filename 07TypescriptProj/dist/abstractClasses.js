"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    takePhoto() {
        console.log(`Taking photo with ${this.cameraMode} mode and ${this.filter} filter.`);
    }
}
class Instagram extends TakePhotos {
    constructor(cameraMode, filter, burst, shortDuration, shorts) {
        super(cameraMode, filter); // ✅ Initialize parent properties
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shortDuration = shortDuration;
        this.shorts = shorts;
        console.log(this.cameraMode);
    }
    createStory() {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);
    }
}
class Youtube extends TakePhotos {
    constructor(cameraMode, filter, burst, shortDuration, shorts) {
        super(cameraMode, filter); // ✅ Initialize parent properties
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shortDuration = shortDuration;
        this.shorts = shorts;
        console.log(this.cameraMode);
    }
    createStory() {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);
    }
}
//# sourceMappingURL=abstractClasses.js.map