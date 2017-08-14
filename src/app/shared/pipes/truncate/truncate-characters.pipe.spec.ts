import { TruncateCharactersPipe } from './truncate-characters.pipe';

describe('TruncateCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateCharactersPipe();
    expect(pipe).toBeTruthy();
  });
});
