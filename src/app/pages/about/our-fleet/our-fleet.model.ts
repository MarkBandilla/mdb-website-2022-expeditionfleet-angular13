export class FleetModel {
    constructor(
        public name: string, 
        public imagePath: string, 
        public url: string, 
        public description: string, 
        public specifications?: object,
        public featured?: string,
        public cabins?: string,
        public safety?: string,
        public diving?: string,
        public imagesPath?: string[]
    ) {}
}