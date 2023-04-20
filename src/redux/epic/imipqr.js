import { mergeMap } from 'rxjs/operators';
import { from, of, catchError, map } from 'rxjs';
import axios from 'axios';
import { combineEpics } from 'redux-observable';
import { GET_GETMENU, GET_AGILEINSTANTBYINDEX, GET_AGILEDOSSIERBYSTOCK } from '../actions/imipqr';
import { ofType } from 'redux-observable';

const provaEpic = action$ => action$.pipe(
    ofType(GET_GETMENU),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/menu/getmenu?language=$language')).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
        ofType(GET_AGILEINSTANTBYINDEX),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/agileinstantbyindex?menuId=$menuId&page=$page&pageSize=$pageSize')).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
            ofType(GET_AGILEDOSSIERBYSTOCK),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/agiledossierbystock')).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message)))))
)


const Epics = combineEpics(provaEpic);
export default Epics;
