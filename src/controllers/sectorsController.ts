import { Sector, sectorsData } from "../models/sectorsModel";

export class SectorsController {
  /**
   * Get all registered business sectors
   */
  static getAllSectors(): Sector[] {
    return sectorsData;
  }

  /**
   * Find a specific sector by its ID
   */
  static getSectorById(id: string): Sector | undefined {
    return sectorsData.find((sector) => sector.id === id);
  }

  /**
   * Get adjacent sectors for dynamic internal navigating
   */
  static getRelatedSectors(currentId: string): Sector[] {
    return sectorsData.filter((sector) => sector.id !== currentId);
  }
}
