abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    takePhoto(): void {
        console.log(`Taking photo with ${this.cameraMode} mode and ${this.filter} filter.`);
    }
}

class Instagram extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shortDuration: number,
        public shorts: string
    ) {
      super(cameraMode, filter); // ✅ Initialize parent properties
      console.log(this.cameraMode);
    }

    createStory(): void {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);
    }
}
class Youtube extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shortDuration: number,
        public shorts: string
    ) {
        super(cameraMode, filter); // ✅ Initialize parent properties
        console.log(this.cameraMode);
    }

    createStory(): void {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);
    }
}

