
import { useState } from 'react';

import { ImagePopup } from './ImagePopup';

// Types
import { CartItemType } from '../../types/CartItemType';

// Styles
import s from './Item.module.scss';

type IProps = {
   item: CartItemType;
   //handleNext: (id: number) => void;
}

export const Item = ({item}: IProps) => {
    const [openImage, setOpenImage] = useState(false);
    
    //const [selectedItem, setSelectedItem] = useState(item);

    // const openNextItem = (id: number) => {
    //     console.log('CartItemType: ', id);

    //     //return item[3];
    //     //setSelectedItem(prev => {

    //         // return prev.map(item => (
    //         //     item.id === selItem.id ? { ...item, amount: item.amount + 1} : item
    //         //   ))
    //         // return prev.map(item => (
    //         //     item.id === prev.find(item => item.id == selItem.id);
    //         // ))
    //         //return [...prev, {...selItem}];
    //     //})
    // }

    return (
        <div className={s.item}>
            <div className={s.item__image}>
                <img src={item.image} alt={item.title} onClick={() => setOpenImage(true)} />
            </div>
            {openImage && 
                <ImagePopup item={item} handleClosePopup={() => setOpenImage(false)}  />
                // <ImagePopup item={selectedItem} handleClosePopup={() => setOpenImage(false)} handleNext={handleNext} />
            }
            <div className={s.item__content}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
            </div>
        </div>
    );
};