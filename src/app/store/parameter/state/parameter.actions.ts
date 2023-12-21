import { createAction, props } from '@ngrx/store';
import { ParameterPagiModel } from '../parameter.model';

const LOAD_PAGI_ACTION = '[Parameter] Load Pagi';
const SAVE_PAGI_ACTION = '[Parameter] Save Pagi';
const LOAD_ITEM_LIST_DATA_ACTION = '[Parameter] Load Item List Data';
const SAVE_ITEM_LIST_DATA_ACTION = '[Parameter] Save Item List Data';

export const loadPagi = createAction(LOAD_PAGI_ACTION, props<{ item: ParameterPagiModel }>());
export const savePagi = createAction(SAVE_PAGI_ACTION, props<{ item: ParameterPagiModel }>());

export const loadItemListData = createAction(LOAD_ITEM_LIST_DATA_ACTION, props<{ item: ParameterPagiModel }>());
export const saveItemListData = createAction(SAVE_ITEM_LIST_DATA_ACTION, props<{ item: ParameterPagiModel }>());
