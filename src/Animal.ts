
class Animal {

    private animalName: string; // Property
    public constructor(name: string) {
        // Parameter property and constructor
        this.animalName = name;
      }

    public get name(): string {
        // get accessor
        return this.animalName;
      }
    public set name(value: string) {
        // set accessor
        this.animalName = value;
      }
      public walk() {
        // method
      }
  }
  