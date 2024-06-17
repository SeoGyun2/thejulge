import { create } from 'zustand';

interface Props {
  name: string;
  phone: string;
  address: string;
  worktime: string;
  bio: string;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
  setWorktime: (worktime: string) => void;
  setBio: (bio: string) => void;
}

export const useProfileData = create<Props>(set => ({
  name: '',
  phone: '',
  address: '',
  worktime: '',
  bio: '',
  setName: (name: string) => set({ name }),
  setPhone: (phone: string) => set({ phone }),
  setAddress: (address: string) => set({ address }),
  setWorktime: (worktime: string) => set({ worktime }),
  setBio: (bio: string) => set({ bio }),
}));
