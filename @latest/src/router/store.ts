import { ref } from 'vue'

export interface UserSession {
  name: string;
  company: string;
  role: 'agent' | 'client' | 'admin';
  email: string;
  password?: string;
  phone?: string;
  location?: string;
  isAuthenticated: boolean; // Controls profile visibility
}

// Initialized as a guest session (unauthenticated) by default
export const currentSession = ref<UserSession>({
  name: '',
  company: '',
  role: 'client',
  email: '',
  password: '',
  phone: 'Not Specified',
  location: 'Not Specified',
  isAuthenticated: false 
})
