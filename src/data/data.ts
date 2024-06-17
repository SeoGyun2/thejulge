import { Ad } from '../types/ad';

export const recommendedAds: Ad[] = [
  {
    id: 1,
    title: "도토리식당",
    date: "2023-01-02 15:00-18:00 (3시간)",
    location: "서울시 강남구",
    price: "10,000원",
    discount: "기존 시급보다 10%",
    imageUrl: "/images/dotoris.jpg",
    status: "active",
  },
  {
    id: 2,
    title: "물밭게맛집식당",
    date: "2023-02-31 15:00-18:00 (3시간)",
    location: "서울시 강남구",
    price: "15,000원",
    discount: "기존 시급보다 50%",
    imageUrl: "/images/mulbap.jpg",
    status: "active",
  },
  {
    id: 3,
    title: "맛집복카페",
    date: "2023-02-12 15:00-18:00 (3시간)",
    location: "서울시 강남구",
    price: "12,000원",
    discount: "기존 시급보다 20%",
    imageUrl: "/images/matjib.jpg",
    status: "active",
  },
];

export const allAds: Ad[] = [
  {
    id: 4,
    title: "수리 에스프레소 맛집",
    date: "2023-01-03 15:00-18:00 (3시간)",
    location: "서울시 송파구",
    price: "10,000원",
    discount: "기존 시급보다 30%",
    imageUrl: "/images/suri1.jpg",
    status: "active",
  },
  {
    id: 5,
    title: "수리 에스프레소 샵",
    date: "2023-02-03 15:00-18:00 (3시간)",
    location: "서울시 송파구",
    price: "10,000원",
    discount: "기존 시급보다 30%",
    imageUrl: "/images/suri2.jpg",
    status: "completed",
  },
  {
    id: 6,
    title: "별빛카페",
    date: "2023-01-04 15:00-18:00 (3시간)",
    location: "서울시 마포구",
    price: "9,900원",
    imageUrl: "/images/starbucks.jpg",
    status: "active",
  },
  
];
