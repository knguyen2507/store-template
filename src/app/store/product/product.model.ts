import { BaseModel } from '../../shared/models/base.model';

export class ProductModel extends BaseModel {
  id: string | null;
  name: string | null;
  price: number | null;
  thumbnailLink: string | null;
  category: string | null;
  brand: string | null;
  description: string | null;
  images: string[];

  constructor(item: Partial<ProductModel>) {
    super();
    Object.assign(this, item);
  }
}
