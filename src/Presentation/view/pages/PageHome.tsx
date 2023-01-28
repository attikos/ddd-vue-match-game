import AppHeader from 'src/Presentation/view/components/AppHeader/AppHeader';
import React, { useState } from 'react';
import AppModal from 'src/Presentation/view/components/AppModal/AppModal';
import { mapUsecase } from '@/Presentation/usecaseMap';
// import { checkIsShowedCard as _checkIsShowedCard } from 'src/Domain/Card';
// import { CardPresenter } from 'src/Presentation/presenter/CardPresenter';
// import { ShowedCardsPresenter } from 'src/Presentation/presenter/ShowedCardsPresenter';
// import { mapUsecase } from 'src/Presentation/usecaseMap';
// import AppHeader from 'src/Presentation/view/components/AppHeader.vue';
import GameCard from 'src/Presentation/view/components/GameCard/GameCard';
import { getImageUrl } from 'src/Presentation/view/utils/get-image-url';


// const checkIsShowedCard = (index: number): boolean => {
// return _checkIsShowedCard(showedCards.value, index);
// }

const PageHome = (): JSX.Element => {
    const startGameUsecase = mapUsecase('StartGameUsecase');
    const openCardUsecase = mapUsecase('OpenCardUsecase');
    const [isShowModal, setIsShowModal] = useState(false);

    // const cardPresenter = CardPresenter();
    // const showedCards = ShowedCardsPresenter();
    // const currentCards = cardPresenter.currentCards;
    // const cardImages = computed(() => currentCards.value.map(img => getImageUrl(img)));


    function showWonNotification() {
        setIsShowModal(true);
    }

    function openCardHandler(index: number) {
        openCardUsecase(index, showWonNotification);
    }

    function closeModalHandler() {
        setIsShowModal(false);
        startGameUsecase();
    }

    return (
        <div className="page-home">
            <AppHeader></AppHeader>

            {/* <transition name="fade" mode="out-in"> */}
            {/* <div className="game-content" v-show="cardImages.length"> */}
            { cardImages.map((image, index) => {
                return (
                    <GameCard
                        openCard={() => openCardHandler(index)}
                        isFlipped={checkIsShowedCard(index)}
                        isShowed={checkIsShowedCard(index)}
                        image={image}
                        key={index + image}
                    ></GameCard>
                );
            })}

            {/* </div>
            {/* </transition> */}

            <AppModal title="You won!" isShow={isShowModal} onClose={closeModalHandler}></AppModal>

            <div className="footer">
                <a href="https://github.com/attikos/ddd-vue-match-game" className="footer__link" target="_blank" rel="noreferrer">

                    <img src="../assets/github-mark.png" alt="Github" className="footer__github" />
                    <span className="footer__link-text">GitHub @attikos</span>
                </a>
            </div>
        </div>
    );
};

export default PageHome;

{/* <style lang="scss">
.page-home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.game-content {
    display: flex;
    max-width: 650px;
    min-height: 388px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 24px auto;

    @media screen and (max-width: 576px) {
        max-width: 100%;
    }
}

.footer {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 20px;

    &__link {
        display: flex;
    }

    &__github {
        height: 18px;
        width: 18px;
        margin-right: 6px;
        display: inline-block;
    }
}
</style> */}
