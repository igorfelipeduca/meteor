export interface OrbitResponseInterface {
  links: {
    next: string;
    prev: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: any[];
}
