import { useMemo } from 'react';
import { useCases, UseCase, getUseCasesBySegment, getUseCaseById, getAllSegments } from '@/data/useCases';

/**
 * Hook to get all use cases
 * @returns Array of all use cases
 */
export function useAllUseCases(): UseCase[] {
  return useMemo(() => useCases, []);
}

/**
 * Hook to get use cases by segment
 * @param segment - The business segment
 * @returns Array of use cases for that segment
 */
export function useUseCasesBySegment(segment: UseCase['segment'] | undefined): UseCase[] {
  return useMemo(() => {
    if (!segment) return [];
    return getUseCasesBySegment(segment);
  }, [segment]);
}

/**
 * Hook to get a single use case by ID
 * @param id - The use case ID
 * @returns The use case object or undefined if not found
 */
export function useUseCaseById(id: string | undefined): UseCase | undefined {
  return useMemo(() => {
    if (!id) return undefined;
    return getUseCaseById(id);
  }, [id]);
}

/**
 * Hook to get all available segments
 * @returns Array of all available segments
 */
export function useAllSegments(): Array<UseCase['segment']> {
  return useMemo(() => getAllSegments(), []);
}
