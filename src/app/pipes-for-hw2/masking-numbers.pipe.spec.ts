import { MaskingNumbersPipe } from './masking-numbers.pipe';

describe('MaskingNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskingNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
