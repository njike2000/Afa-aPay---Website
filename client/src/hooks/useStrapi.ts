import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  getBlogArticles,
  getTestimonials,
  getUseCases,
  getUseCasesBySegment,
} from '@/services/strapiService';

// Hook for fetching blog articles
export const useBlogArticles = () => {
  const { i18n } = useTranslation();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getBlogArticles(i18n.language);
        setArticles(data);
        setError(null);
      } catch (err) {
        setError('Failed to load blog articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [i18n.language]);

  return { articles, loading, error };
};

// Hook for fetching testimonials
export const useTestimonials = () => {
  const { i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials(i18n.language);
        setTestimonials(data);
        setError(null);
      } catch (err) {
        setError('Failed to load testimonials');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [i18n.language]);

  return { testimonials, loading, error };
};

// Hook for fetching use cases
export const useUseCases = (segment?: string) => {
  const { i18n } = useTranslation();
  const [useCases, setUseCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUseCases = async () => {
      try {
        setLoading(true);
        if (segment) {
          const data = await getUseCasesBySegment(segment, i18n.language);
          setUseCases(data);
        } else {
          const data = await getUseCases(i18n.language);
          setUseCases(data);
        }
        setError(null);
      } catch (err) {
        setError('Failed to load use cases');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUseCases();
  }, [i18n.language, segment]);

  return { useCases, loading, error };
};

export default {
  useBlogArticles,
  useTestimonials,
  useUseCases,
};
