import OrderAction from './OrderAction';
import { OrderActions } from './OrderActions';
import { OrderContent } from './OrderContent';
import { OrderFooter } from './OrderFooter';
import { OrderInput } from './OrderInput';
import { OrderLink } from './OrderLink';
import { OrderRoot } from './OrderRoot';

export const Order = {
    Root: OrderRoot,
    Content: OrderContent,
    Input: OrderInput,
    Actions: OrderActions,
    Action: OrderAction,
    Link: OrderLink,
    Footer: OrderFooter,
};
