interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
    /**
     * Captures a photo using the current camera mode, filter, and burst settings.
     */
    takePhoto(): void;
}

class Instagram implements TakePhoto , Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shortDuration: number,
        public shorts: string
    ) { }

    takePhoto(): void {
        console.log(`Taking photo with ${this.cameraMode} mode, ${this.filter} filter, and ${this.burst} burst.`);
    }
    createStory(): void {
        console.log(`Recording video in ${this.cameraMode} mode with ${this.filter} filter for ${this.shortDuration} seconds.`);
    }
}
interface Story {
    shortDuration: number;
    shorts: string;
    createStory(): void;
}
//Instagram class implements TakePhoto interface and Story interface and adds its own properties and methods.

class Youtube implements TakePhoto , Story {
    constructor(
        public cameraMode: string,  
        public filter: string,
        public burst: number,
        public shortDuration: number,
        public shorts: string,
    ) { }

    takePhoto(): void {
        console.log(`Taking photo with ${this.cameraMode} mode, ${this.filter} filter, and ${this.burst} burst.`);
    }

    recordVideo(): void {
        console.log(`Recording video in ${this.cameraMode} mode with ${this.filter} filter for ${this.shortDuration} seconds.`);

    }
    createStory(): void {
        console.log(`Creating a story of duration ${this.shortDuration} seconds with ${this.shorts}.`);

    }
}

//Youtube class implements TakePhoto interface and Story interface and adds its own properties and methods.

export { } // To make this file a module and avoid global scope issues.

