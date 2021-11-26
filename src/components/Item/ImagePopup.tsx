import { CartItemType } from '../../types/CartItemType';

import s from './ImagePopup.module.scss';

type IProp = {
    item: CartItemType;
    handleClosePopup: () => void;
}

export const ImagePopup = ({item, handleClosePopup}: IProp) => {
    return (
        <>
            <div className={s.imagePopup}>
                <button type="button" onClick={() => handleClosePopup()}>Loka gaur</button>
                <div className={s.imagePopup__wrap}>
                    <div className={s.imagePopup__image}>            
                        <img src={item.image} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {/* <button type="button" onClick={() => handleNext(item.id)}>Næsti gaur</button> */}
                </div>
            </div>
        </>
    );
};