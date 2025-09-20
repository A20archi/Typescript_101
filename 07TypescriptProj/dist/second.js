class Instagram {
    constructor(cameraMode, filter, burst, shortDuration, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shortDuration = shortDuration;
        this.shorts = shorts;
    }
    takePhoto() {
        console.log(`Taking photo with ${this.cameraMode} mode, ${this.filter} filter, and ${this.burst} burst.`);
    }
    createStory() {
        console.log(`Recording video in ${this.cameraMode} mode with ${this.filter} filter for ${this.shortDuration} seconds.`);
    }
}
//Instagram class implements TakePhoto interface and Story interface and adds its own properties and methods.
class Youtube {
    constructor(cameraMode, filter, burst, shortDuration, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shortDuration = shortDuration;
        this.shorts = shorts;
    }
    takePhoto() {
        console.log(`Taking photo with ${this.cameraMode} mode, ${this.filter} filter, and ${this.burst} burst.`);
    }
    recordVideo() {
        console.log(`Recording video in ${this.cameraMode} mode with ${this.filter} filter for ${this.shortDuration} seconds.`);
    }
    createStory() {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);
    }
}
export {};
//# sourceMappingURL=second.js.map