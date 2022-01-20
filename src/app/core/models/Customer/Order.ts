import { Customer } from './Customer';
import { Product } from './Product';

export interface Order {
  id: number;
  customer: String;
  product: String;
  price: number;
}
