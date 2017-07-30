import { Injectable } from '@angular/core';

@Injectable()
export class ApiKeyService {

  private storageKey = 'TMDB_API_KEY';

  get apiKey(): string {
    const apiKey = localStorage.getItem(this.storageKey);
    return apiKey ? apiKey : undefined;
  }

  set apiKey(key: string) {
    localStorage.setItem(this.storageKey, key);
  }

  constructor() { }

}
