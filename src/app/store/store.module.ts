import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { ParameterEffects } from './parameter';
import { parameterFeatureKey, parameterReducers } from './parameter/state/parameter.reducers';
import { ProductEffects } from './product';
import { productFeatureKey, productReducers } from './product/state/product.reducers';

interface State {}

const reducer: ActionReducerMap<State> = {};

const metaReducers: MetaReducer<State>[] = [];

const stores = [
  StoreModule.forFeature(productFeatureKey, productReducers),
  StoreModule.forFeature(parameterFeatureKey, parameterReducers),
];

const effects = [EffectsModule.forFeature([ProductEffects]), EffectsModule.forFeature([ParameterEffects])];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducer, { metaReducers }),
    ...stores,
    ...effects,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CommonModule,
  ],
})
export class AppStoreModule {}
