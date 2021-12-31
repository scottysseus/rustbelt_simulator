/**
 * This module defines common functions for contracts
 */

import { ContractProgress, GameState, ProjectType, Tile, TileType } from '.'
import { tileCatalog } from '../data/tile-catalog'
import { clamp, mapIncr } from './shared'

type Comparator = (actual: number, desired: number) => boolean
export const COMP_GTE: Comparator = (x, y) => x >= y
export const COMP_EQ: Comparator = (x, y) => x === y

function countTilesByTags (tiles: readonly Tile[]): Map<string, number> {
  const result = new Map()
  for (const tile of tiles) {
    for (const tag of tileCatalog[tile.type].tags) {
      mapIncr(result, tag)
    }
  }
  return result
}

function countProjectsCompletedByType (projectsComplete: readonly ProjectType[]): Map<ProjectType, number> {
  const result = new Map<ProjectType, number>()
  for (const project of projectsComplete) {
    mapIncr(result, project)
  }
  return result
}

function countTilesByType (tiles: readonly Tile[]): Map<TileType, number> {
  const result = new Map()
  for (const tile of tiles) {
    mapIncr(result, tile.type)
  }
  return result
}

function getCountsProgress<K extends string> (desiredCounts: Record<K, number>, actualCounts: Map<K, number>, comparator: Comparator) {
  let current = 0
  let required = 0
  for (const key in desiredCounts) {
    const desired = desiredCounts[key]
    required += desired
    const actual = actualCounts.get(key)
    if (actual) {
      if (desired > 0) {
        current += clamp(actual, 0, desired)
      } else {
        current += actual
      }
    }
  }
  return {
    current,
    required
  }
}

type DesiredCounts = Record<string, number>

/**
 * Determine the progress
 * @param gameState
 * @param desiredTags
 * @param comparator
 * @returns
 */
export function progressTagCount (gameState: GameState, desiredTags: DesiredCounts, comparator: Comparator = COMP_GTE): ContractProgress {
  const actualCounts = countTilesByTags(gameState.map.tiles)
  const result = getCountsProgress(desiredTags, actualCounts, comparator)
  return result
}

/**
 * Determine if the given gameState satisfies an object of desired tag occurence counts.
 * @param gameState
 * @param desiredTags
 * @returns true if for all properties of {desiredTags}, at least the specified number of tiles has that tag
 */
export function satisfiesTagCount (gameState: GameState, desiredTags: DesiredCounts, comparator: Comparator = COMP_GTE): boolean {
  const result = progressTagCount(gameState, desiredTags, comparator)
  return comparator(result.current, result.required)
}

export function progressCompletedProjectCount (gameState: GameState, desiredProjects: DesiredCounts, comparator: Comparator = COMP_GTE): ContractProgress {
  const actualCounts = countProjectsCompletedByType(gameState.player.projects.completed)
  const result = getCountsProgress(desiredProjects, actualCounts, comparator)
  return result
}

/**
 * Determine if the given gameState satisfies contains an object of desired completed project counts
 * @param gameState
 * @param desiredProjects
 * @param comparator, optional argument to change how desired and actual are compared
 * @returns true if for all properties of {desiredProjects}, at least the specified number of tiles has that tag
 */
export function satisifiesCompletedProjectCount (gameState: GameState, desiredProjects: DesiredCounts, comparator: Comparator = COMP_GTE): boolean {
  const result = progressCompletedProjectCount(gameState, desiredProjects, comparator)
  return comparator(result.current, result.required)
}

export function progressCompletedProjectsAnyCount (gameState: GameState, desiredProjects: ProjectType[], desiredTotal: number, comparator: Comparator = COMP_GTE): ContractProgress {
  const actualCounts = countProjectsCompletedByType(gameState.player.projects.completed)
  let current = 0
  const required = desiredTotal
  for (const type of desiredProjects) {
    const actual = actualCounts.get(type)
    if (actual) {
      current = current + actual
    }
  }
  return {
    current,
    required
  }
}

export function satisfiesCompletedProjectsAnyCount (gameState: GameState, desiredProjects: ProjectType[], desiredTotal: number, comparator: Comparator = COMP_GTE) {
  const result = progressCompletedProjectsAnyCount(gameState, desiredProjects, desiredTotal, comparator)
  return comparator(result.current, result.required)
}

export function progressTileTypeCount (gameState: GameState, desiredTiles: DesiredCounts, comparator: Comparator = COMP_GTE): ContractProgress {
  const actualCounts = countTilesByType(gameState.map.tiles)
  const result = getCountsProgress(desiredTiles, actualCounts, comparator)
  return result
}

/**
 * Determine if the given gameState satisfies contains an object of desired tile types
 * @param gameState
 * @param desiredTiles
 * @param comparator
  * @returns true if for all properties of {desiredTiles}, at least the specified number of tiles has that type
 */
export function satisfiesTileTypeCount (gameState: GameState, desiredTiles: DesiredCounts, comparator: Comparator = COMP_GTE): boolean {
  const result = progressTileTypeCount(gameState, desiredTiles, comparator)
  return comparator(result.current, result.required)
}
