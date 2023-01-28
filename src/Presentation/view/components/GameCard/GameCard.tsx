import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

interface Props {
    image: string
    isFlipped: boolean
    isShowed: boolean
    openCard: () => void
}

function usePreviousValue<T>(value: T): T {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });

    return ref.current as T;
}

const GameCard = (props: Props): JSX.Element => {
    const [isShowedDelayed, setIsShowedDelayed] = useState(false);
    const isShowedPrevious = usePreviousValue(props.isShowed);

    // Fix an animation bug of closing cards
    useEffect(() => {
        if (props.isShowed && !isShowedPrevious) {
            setIsShowedDelayed(true);
        }
        else {
            setTimeout(() => {
                if (props.isShowed === props.isShowed && !props.isShowed && isShowedPrevious) {
                    setIsShowedDelayed(false);
                }
            }, 300);
        }
    }, [props.isShowed]);

    return (
        <div className="card-parent">
            <div
                className={cn(['card-wrapper', { 'card-wrapper--flipped' : props.isFlipped }])}
                onClick={props.openCard}
            // tabindex="0"
            >
                <div className="card card__back"></div>

                { isShowedDelayed && (
                    <img
                        src={props.image}
                        alt=""
                        className="card card__front"
                    />
                )}
            </div>
        </div>
    );
};

export default GameCard;
