import axios from 'axios';

// Strapi API configuration
const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
});

// Blog Articles API
export const getBlogArticles = async (language: string = 'en') => {
  try {
    const response = await api.get('/blog-articles', {
      params: {
        'filters[language][$eq]': language,
        'sort': '-createdAt',
        'pagination[pageSize]': 100,
      },
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    return [];
  }
};

export const getBlogArticleBySlug = async (slug: string, language: string = 'en') => {
  try {
    const response = await api.get('/blog-articles', {
      params: {
        'filters[slug][$eq]': slug,
        'filters[language][$eq]': language,
      },
    });
    return response.data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog article:', error);
    return null;
  }
};

export const getBlogArticleById = async (id: string) => {
  try {
    const response = await api.get(`/blog-articles/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching blog article:', error);
    return null;
  }
};

// Testimonials API
export const getTestimonials = async (language: string = 'en') => {
  try {
    const response = await api.get('/testimonials', {
      params: {
        'filters[language][$eq]': language,
        'sort': '-createdAt',
        'pagination[pageSize]': 100,
      },
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

export const getTestimonialById = async (id: string) => {
  try {
    const response = await api.get(`/testimonials/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return null;
  }
};

// Use Cases API
export const getUseCases = async (language: string = 'en', segment?: string) => {
  try {
    const params: any = {
      'filters[language][$eq]': language,
      'sort': '-createdAt',
      'pagination[pageSize]': 100,
    };

    if (segment) {
      params['filters[segment][$eq]'] = segment;
    }

    const response = await api.get('/use-cases', { params });
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return [];
  }
};

export const getUseCasesBySegment = async (segment: string, language: string = 'en') => {
  return getUseCases(language, segment);
};

export const getUseCaseById = async (id: string) => {
  try {
    const response = await api.get(`/use-cases/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching use case:', error);
    return null;
  }
};

// Health check
export const checkStrapiHealth = async () => {
  try {
    const response = await axios.get(`${STRAPI_URL}/admin`);
    return response.status === 200;
  } catch (error) {
    console.error('Strapi health check failed:', error);
    return false;
  }
};

export default api;
