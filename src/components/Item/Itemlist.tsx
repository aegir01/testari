// Component
import { Item } from './Item';
//import { ImagePopup } from './ImagePopup';

// Types
import { CartItemType } from '../../types/CartItemType';

// Style
import s from './Itemlist.module.scss';

type IProps = {
    title?: string;
    items?: CartItemType[];
}

export const Itemlist = ({title, items}: IProps) => {
    
    // const openNextItem = (id: number) => {            
    //     if( items === undefined)
    //         return;

    //     const curItm = items?.find(e => e.id === id);
    //     const index = items?.indexOf(curItm as CartItemType);

    //     return items[index+1];
    // }

    //console.log('items', items);
    return (
        <div className={s.itemlist}>
            {title && <h1>{title}</h1>}

            <div className={s.itemlist__wrap}>
                {items?.map((item, i) => (
                    <Item key={item.id} item={item}  />
                ))}
            </div>

            
        </div>
    );
};