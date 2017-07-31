import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ApiKeyService {

  public apiKeyChanged: EventEmitter<string> = new EventEmitter();
  private apiKeyStorageKey = 'TMDB_API_KEY';

  get apiKey(): string {
    const apiKey = localStorage.getItem(this.apiKeyStorageKey);
    return apiKey ? apiKey : undefined;
  }

  set apiKey(key: string) {
    localStorage.setItem(this.apiKeyStorageKey, key);
    this.apiKeyChanged.emit(key);
  }

  constructor() { }

}
