export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badge?: string;
  description: string;
  features: string[];
  estimatedPriceRange: string;
  iconName: string;
  imageUrl: string;
  popular?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  roofType: string;
  duration: string;
  warranty: string;
  notes: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  serviceType: string;
  comment: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Insurance' | 'Warranty';
}

export interface EstimateFormData {
  serviceType: string;
  roofMaterial: string;
  propertyType: string;
  estimatedSqFt: number;
  stories: string;
  address: string;
  zipCode: string;
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'text' | 'email';
  urgency: 'emergency' | 'this_week' | 'planning';
  notes?: string;
  uploadedPhotoName?: string;
}

export interface CompanyConfig {
  name: string;
  phone: string;
  phoneRaw: string;
  emergencyPhone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  googleRating: number;
  googleReviewCount: number;
  yearsInBusiness: number;
  roofsCompleted: number;
  licenseNumber: string;
}
