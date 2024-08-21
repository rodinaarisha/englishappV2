import React, { useEffect, useState } from 'react';

import data from '../data.json';

import styles from './Card.module.css';

import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);


    useEffect(() => {

        document.title = `${currentIndex}/${data.length}`;
      });

    const nextCard = () => {
  // Скрыть перевод при смене карточки
  if (currentIndex >= data.length - 1) return;
            setCurrentIndex(currentIndex + 1);
            setShowTranslation(false); // Скрыть перевод при смене карточки
        
    };

    const prevCard = () => {
        if (currentIndex === 0) return;

        setCurrentIndex(currentIndex - 1);
        setShowTranslation(false); // Скрыть перевод при смене карточки
    
     /*   if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowTranslation(false); // Скрыть перевод при смене карточки
        }*/
    };

    const { english, transcription, russian } = data[currentIndex];

    return (
        <div className={`${styles.card} `}>
            <div className={`${styles.word_card_container} ${styles.study_block}`}>
            <button className={styles.button_previous} onClick={prevCard} disabled={currentIndex === 0}>
            <img src={previous} alt="Предыдущий" />
            </button>
            <div className={styles.word_card}>
                <h3>{english}</h3>
                <p>Транскрипция: {transcription}</p>
                {showTranslation && <p>Перевод: {russian}</p>}
                <button className={styles.button}  onClick={() => setShowTranslation(!showTranslation)}>
                    {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                </button>
            </div>
            <button className={styles.button_next}  onClick={nextCard} disabled={currentIndex === data.length - 1}>
                
            <img src={next} alt="Следующий" />
            </button>
            </div>
            <h4> {currentIndex+1}/{data.length}</h4>
        </div>
    );
};

export default Card;

