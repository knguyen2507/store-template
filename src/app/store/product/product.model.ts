import { BaseModel } from '../../shared/models/base.model';

export class ProductModel extends BaseModel {
  id: string | null;
  productCode: string | null;
  name: string | null;
  price: number | null;
  thumbnailLink: string | null;
  category: string | null;
  brand: string | null;
  description: string | null;

  constructor(item: Partial<ProductModel>) {
    super();
    Object.assign(this, item);
  }
}

export class ProductDetailModel extends BaseModel {
  id: string | null;
  productCode: string | null;
  name: string | null;
  price: number | null;
  qty: number | null;
  thumbnailLink: ImageModel | null;
  category: string | null;
  brand: string | null;
  description: string | null;
  images: ImageModel[];

  constructor(item: Partial<ProductModel>) {
    super();
    Object.assign(this, item);
  }
}

export class ImageModel {
  id: string;
  name: string;
  url: string;
  isMain: boolean;
}

export class ProductModelFindByAdmin {
  id: string | null;
  productCode: string | null;
  name: string | null;
  price: number | null;
  thumbnailLink: string | null;
  category: string | null;
  brand: string | null;
}
