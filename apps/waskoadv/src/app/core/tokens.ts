import { InjectionToken } from '@angular/core';
import { AlbumView } from './model/Search';

export const API_URL_TOKEN = new InjectionToken<string>('API_URL');
export const INITIAL_RESULTS_TOKEN = new InjectionToken<AlbumView[]>('INITIAL_RESULTS');
