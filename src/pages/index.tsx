import React from 'react';
import styles from '@/styles/notice.module.css';
import Card from '@/components/card/card';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';

const notices1 = [
  {
    cardImage: '/store.png',
    cardTitle: '도토리식당',
    cardDate: '2023-06-14 14:00-17:00 (3시간)',
    cardLocation: '서울시 강남구',
    cardPrice: '10,000',
    discountText: '기존 시급보다 10%',
  },
  {
    cardImage: '/shrimp.png',
    cardTitle: '물방개맛집식당',
    cardDate: '2023-02-31 15:00-18:00 (5시간)',
    cardLocation: '서울시 강남구',
    cardPrice: '15,000',
    discountText: '기존 시급보다 50%',
  },
  {
    cardImage: '/milk.png',
    cardTitle: '맛집북카페',
    cardDate: '2023-02-12 15:00-18:00 (3시간)',
    cardLocation: '경기도 강서구',
    cardPrice: '12,000',
    discountText: '기존 시급보다 20%',
  },
];

const notices2 = [
  {
    cardImage: '/suri.png',
    cardTitle: '수리 에스프레소 맛집',
    cardDate: '2023-01-03 15:00-18:00 (3시간)',
    cardLocation: '서울시 송파구',
    cardPrice: '10,000',
    discountText: '기존 시급보다 30%',
  },
  {
    cardImage: '/coffee2.png',
    cardTitle: '수리 에스프레소 샵',
    cardDate: '2023-01-02 15:00-18:00 (3시간)',
    cardLocation: '서울시 송파구',
    cardPrice: '10,000',
    discountText: '기존 시급보다 30%',
  },

  {
    cardImage: '/star.png',
    cardTitle: '별빛카페',
    cardDate: '2023-01-04 15:00-18:00 (3시간)',
    cardLocation: '서울시 마포구',
    cardPrice: '9,900',
  },
  {
    cardImage: '/coffee.png',
    cardTitle: '커피바다',
    cardDate: '2023-01-03 15:00-18:00 (3시간)',
    cardLocation: '서울시 송파구',
    cardPrice: '11,000',
    discountText: '기존 시급보다 100%',
  },
  {
    cardImage: '/garden.png',
    cardTitle: '정원식당',
    cardDate: '2023-01-02 15:00-18:00 (3시간)',
    cardLocation: '서울시 송파구',
    cardPrice: '10,000',
  },
  {
    cardImage: '/our.png',
    cardTitle: '우리동네카페',
    cardDate: '2023-01-04 15:00-18:00 (3시간)',
    cardLocation: '서울시 마포구',
    cardPrice: '9,500',
    discountText: '기존 시급보다 10%',
  },
];

function NoticePage() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.topFrame}>
          <h1 className={styles.topTitle}>맞춤 공고</h1>
          <div className={styles.cardContainer}>
            {notices1.slice(0, 3).map((notice, index) => (
              <Card
                key={index}
                cardImage={notice.cardImage}
                cardTitle={notice.cardTitle}
                cardDate={notice.cardDate}
                cardLocation={notice.cardLocation}
                cardPrice={notice.cardPrice}
                discountText={notice.discountText}
              />
            ))}
          </div>
        </div>

        <div className={styles.bottomFrame}>
          <h1 className={styles.bottomTitle}>전체 공고</h1>
          <div className={styles.filtersContainer}>
            <button className={styles.filterButton}>마감임박순</button>
            <button className={styles.dfilterButton}>상세 필터</button>
          </div>
          <div className={styles.cardContainer}>
            {notices2.slice(0, 3).map((notice, index) => (
              <Card
                key={index}
                cardImage={notice.cardImage}
                cardTitle={notice.cardTitle}
                cardDate={notice.cardDate}
                cardLocation={notice.cardLocation}
                cardPrice={notice.cardPrice}
                discountText={notice.discountText}
              />
            ))}
          </div>
          <div className={styles.cardContainer}>
            {notices2.slice(3, 6).map((notice, index) => (
              <Card
                key={index}
                cardImage={notice.cardImage}
                cardTitle={notice.cardTitle}
                cardDate={notice.cardDate}
                cardLocation={notice.cardLocation}
                cardPrice={notice.cardPrice}
                discountText={notice.discountText}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NoticePage;
