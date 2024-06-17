// src/types/ad.ts

export interface Ad {
    id: number;
    title: string;
    date: string;
    location: string;
    price: string;
    discount?: string;
    imageUrl: string;
    status?: 'active' | 'completed';
  }
  