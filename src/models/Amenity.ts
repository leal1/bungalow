export class Amenity {
  constructor(initializer: any) {
    this.displayName = initializer.display_name;
    this.type = initializer.type;
  }
  displayName: string;
  type: string;
}